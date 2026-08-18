// Pre-renders one HTML file per language/section pair.
//
// The page itself renders client-side, so the only thing that can differ
// between routes without a server is the <head> — which is exactly what
// search results and link previews read. Each generated file therefore
// carries its own title, description, canonical and hreflang set, plus a
// __SLAPA_ROUTE__ bootstrap telling the runtime which language and section
// to open on.
//
// Run: node scripts/build-routes.mjs   (Vercel runs this as the build step)

import { readFile, writeFile, mkdir, rm, cp } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(ROOT, "SLAPA.dc.html");
const OUT = path.join(ROOT, "dist");

const html = await readFile(SRC, "utf8");

// --- one source of truth ------------------------------------------------
// DICT, the route table and META are lifted straight out of the page, so
// the pre-rendered <head> cannot drift from the copy the page displays.
const START = "/* ROUTE-META-START";
const END = "/* ROUTE-META-END */";
const from = html.indexOf(START);
const to = html.indexOf(END);
if (from < 0 || to < 0) throw new Error("ROUTE-META markers missing from SLAPA.dc.html");

const { DICT, CODES, SECTIONS, DOCS, ORIGIN, pathFor, META } = new Function(
  html.slice(from, to) + "\nreturn { DICT, CODES, SECTIONS, DOCS, ORIGIN, pathFor, META };"
)();

// The legal documents carry their own titles, and the page only fetches them
// lazily — importing the module here is what lets /legal/privacy ship a real
// <title> instead of the generic section one.
const legal = (await import(pathToFileURL(path.join(ROOT, "legal.js")).href)).default;

const LOCALE = { ru: "ru_RU", uk: "uk_UA", hu: "hu_HU", en: "en_US" };
const OG_IMAGE = ORIGIN + "/assets/og-cover.png";
const DEFAULT_LANG = "ru";

const esc = str => String(str)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;")
  .replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Relative paths break the moment a page lives at /en/contact/, so every
// asset reference becomes absolute. A <base> tag would be shorter but it
// also rewrites the "#legal" anchors that drive the document tabs.
const absolutize = str => str
  .replace(/src="\.\/(support|image-slot)\.js"/g, 'src="/$1.js"')
  .replace(/import\("\.\/legal\.js"\)/g, 'import("/legal.js")')
  .replace(/src="assets\//g, 'src="/assets/');

const VIEWPORT = '<meta name="viewport" content="width=device-width, initial-scale=1">\n';
const RUNTIME = '<script src="./support.js"></script>';
const cut = html.indexOf(VIEWPORT);
const runtimeAt = html.indexOf(RUNTIME);
if (cut < 0 || runtimeAt < 0) throw new Error("could not locate the <head> boundaries");

const HEAD_OPEN = html.slice(0, cut + VIEWPORT.length);
const BODY = absolutize(html.slice(runtimeAt));

const routes = [];
for (const lang of CODES) {
  for (const section of [null, ...SECTIONS]) routes.push({ lang, section, doc: null });
  for (const doc of DOCS) routes.push({ lang, section: "legal", doc });
}

function headFor(lang, section, doc) {
  const { title, description } = META(lang, section, doc, legal);
  const url = ORIGIN + pathFor(lang, section, doc);
  const alternates = CODES
    .map(c => `<link rel="alternate" hreflang="${c}" href="${ORIGIN + pathFor(c, section, doc)}" />`)
    .concat(`<link rel="alternate" hreflang="x-default" href="${ORIGIN + pathFor(DEFAULT_LANG, section, doc)}" />`)
    .join("\n");

  return `<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}" />
<link rel="canonical" href="${url}" />
${alternates}
<link rel="icon" type="image/png" href="/assets/favicon.png" />
<link rel="apple-touch-icon" href="/assets/favicon.png" />
<meta name="theme-color" content="#0A0A0A" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="SLAPA" />
<meta property="og:locale" content="${LOCALE[lang]}" />
<meta property="og:url" content="${url}" />
<meta property="og:title" content="${esc(title)}" />
<meta property="og:description" content="${esc(description)}" />
<meta property="og:image" content="${OG_IMAGE}" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="SLAPA — ${esc(DICT[lang].h1)}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${esc(title)}" />
<meta name="twitter:description" content="${esc(description)}" />
<meta name="twitter:image" content="${OG_IMAGE}" />
<script>window.__SLAPA_ROUTE__=${JSON.stringify({ lang, section, doc })}</script>`;
}

function sitemap() {
  const urls = routes.map(({ lang, section, doc }) => {
    const alts = CODES
      .map(c => `    <xhtml:link rel="alternate" hreflang="${c}" href="${ORIGIN + pathFor(c, section, doc)}" />`)
      .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${ORIGIN + pathFor(DEFAULT_LANG, section, doc)}" />`)
      .join("\n");
    return `  <url>
    <loc>${ORIGIN + pathFor(lang, section, doc)}</loc>
${alts}
    <changefreq>monthly</changefreq>
    <priority>${doc ? "0.6" : section ? "0.8" : "1.0"}</priority>
  </url>`;
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
}

await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });

for (const { lang, section, doc } of routes) {
  const page = HEAD_OPEN.replace('<html lang="ru">', `<html lang="${lang}">`)
    + headFor(lang, section, doc) + "\n" + BODY;
  const dir = path.join(OUT, pathFor(lang, section, doc));
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, "index.html"), page, "utf8");
}

// Static payload. .image-slots.state.json is not an editor artifact — it
// holds the slot images themselves as data URIs, so the deploy needs it.
// .thumbnail is an editor preview and stays behind.
const STATIC = [
  "assets", "uploads", "support.js", "legal.js",
  "robots.txt", ".image-slots.state.json"
];
for (const asset of STATIC) {
  const src = path.join(ROOT, asset);
  if (existsSync(src)) await cp(src, path.join(OUT, asset), { recursive: true });
}

// image-slot.js fetches its state file relative to the page, which resolves
// to /en/contact/.image-slots.state.json once routes are nested. Pin it to
// the root instead of shipping a copy into all 24 directories.
const slots = await readFile(path.join(ROOT, "image-slot.js"), "utf8");
const PINNED = "const STATE_FILE = '/.image-slots.state.json';";
const pinned = slots.replace("const STATE_FILE = '.image-slots.state.json';", PINNED);
if (!pinned.includes(PINNED)) throw new Error("could not pin STATE_FILE in image-slot.js");
await writeFile(path.join(OUT, "image-slot.js"), pinned, "utf8");

await writeFile(path.join(OUT, "sitemap.xml"), sitemap(), "utf8");

console.log(`built ${routes.length} routes into dist/`);
for (const { lang, section, doc } of routes) {
  console.log(`  ${pathFor(lang, section, doc).padEnd(22)} ${META(lang, section, doc, legal).title}`);
}
