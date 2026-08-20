// Takes the request form on slapa.agency and turns it into a mail to the
// inbox. The site is a static bundle on Vercel with no server of its own, so
// this function is the only piece of backend it has.
//
// Deploy (public — the form posts without a session):
//   supabase functions deploy contact --no-verify-jwt
//
// Secrets:
//   supabase secrets set RESEND_API_KEY=re_...
//   supabase secrets set MAIL_FROM="SLAPA <hello@slapa.agency>"   # optional
//   supabase secrets set MAIL_TO=hello@slapa.agency               # optional

const MAIL_TO = Deno.env.get("MAIL_TO") ?? "hello@slapa.agency";
// Resend only accepts a From on a domain verified in the account; its shared
// sandbox sender is the fallback so a fresh deploy still delivers.
const MAIL_FROM = Deno.env.get("MAIL_FROM") ?? "SLAPA <onboarding@resend.dev>";
const RESEND_KEY = Deno.env.get("RESEND_API_KEY") ?? "";

const ALLOWED = [
  "https://www.slapa.agency",
  "https://slapa.agency",
];

// The form is served from the apex and the www host; anything else gets the
// canonical origin back, which browsers then refuse — that is the intent.
function cors(origin: string | null) {
  const allow = origin && ALLOWED.includes(origin) ? origin : ALLOWED[0];
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Headers": "content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Vary": "Origin",
  };
}

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

Deno.serve(async (req) => {
  const head = cors(req.headers.get("origin"));

  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: head });
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "method not allowed" }), {
      status: 405,
      headers: { ...head, "Content-Type": "application/json" },
    });
  }

  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "invalid json" }), {
      status: 400,
      headers: { ...head, "Content-Type": "application/json" },
    });
  }

  // Hidden field, off-screen in the form: a human never fills it in.
  if (clean(payload.company, 200)) {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...head, "Content-Type": "application/json" },
    });
  }

  const fields = {
    name: clean(payload.name, 200),
    site: clean(payload.site, 400),
    contact: clean(payload.contact, 200),
    task: clean(payload.task, 4000),
    lang: clean(payload.lang, 8),
    page: clean(payload.page, 400),
  };

  // The one field the form itself refuses to submit empty.
  if (!fields.contact) {
    return new Response(JSON.stringify({ error: "contact is required" }), {
      status: 422,
      headers: { ...head, "Content-Type": "application/json" },
    });
  }

  if (!RESEND_KEY) {
    console.error("RESEND_API_KEY is not set — cannot deliver the request");
    return new Response(JSON.stringify({ error: "mail is not configured" }), {
      status: 500,
      headers: { ...head, "Content-Type": "application/json" },
    });
  }

  const rows: [string, string][] = [
    ["Имя", fields.name || "—"],
    ["Сайт", fields.site || "—"],
    ["Контакт", fields.contact],
    ["Задача", fields.task || "—"],
    ["Язык", fields.lang || "—"],
    ["Страница", fields.page || "—"],
  ];

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = rows
    .map(([k, v]) => `<p><strong>${escape(k)}:</strong> ${escape(v)}</p>`)
    .join("");

  const mail: Record<string, unknown> = {
    from: MAIL_FROM,
    to: [MAIL_TO],
    subject: `SLAPA — заявка от ${fields.name || fields.contact}`,
    text,
    html,
  };
  // Reply straight to the sender when they left an address rather than a handle.
  if (/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fields.contact)) mail.reply_to = fields.contact;

  const sent = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(mail),
  });

  if (!sent.ok) {
    // The body carries Resend's own reason; it belongs in the logs, not the
    // response, so the form never leaks provider detail to a visitor.
    console.error("resend rejected the message", sent.status, await sent.text());
    return new Response(JSON.stringify({ error: "could not send" }), {
      status: 502,
      headers: { ...head, "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { ...head, "Content-Type": "application/json" },
  });
});
