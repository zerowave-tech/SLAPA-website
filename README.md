
<img width="411" height="242" alt="SAPA16" src="https://github.com/user-attachments/assets/598cb38f-4a9d-45de-a173-eae7850f3dae" />

SLAPA — agency website

Source of slapa.agency: a one-page website for a web redesign agency in four languages (Russian, Ukrainian, Hungarian, English), with every section on its own URL, a request form and call booking.

The site is a static bundle hosted on Vercel. Its only backend is a single Supabase Edge Function that turns a form submission into an email.

How it works
The page is a single file, SLAPA.dc.html: dc-runtime markup (<x-dc>, interpolations like {{ t.h1 }}) plus one component holding all the logic. The page renders in the browser.
The runtime is support.js (React 18 and Babel are loaded from unpkg). It is generated from a separate dc-runtime project and is not edited in this repository.
Copy for every language lives in the DICT object inside SLAPA.dc.html. Legal documents live in legal.js.
The build (scripts/build-routes.mjs) creates a separate index.html for every language × section pair, each with its own <title>, description, canonical, hreflang and Open Graph tags. This way search engines and link previews see the right metadata even though the page itself renders on the client. The build also produces sitemap.xml and copies the static files.
Image slots are <image-slot> components (image-slot.js). Images dropped into slots are stored as data URIs in .image-slots.state.json, so that file is required for deployment.
Fonts are Onest and JetBrains Mono from Google Fonts.
Call booking is an embedded Cal.com widget (default: cal.com/slapa.agency/20min).
Repository layout
SLAPA.dc.html                    the page: markup, copy (DICT), logic
legal.js                         legal documents in 4 languages
support.js                       dc-runtime (generated, do not edit)
image-slot.js                    <image-slot> component (editor starter template)
virtual.css                      tooling file with page styles (not referenced, not part of the build)
.image-slots.state.json          contents of the image slots (data URIs)
assets/                          favicon, logos, og-cover, before/after images
uploads/                         images uploaded in the editor
scripts/build-routes.mjs         build: routes, sitemap, static files → dist/
supabase/functions/contact/      Edge Function behind the request form
vercel.json                      build and deploy settings for Vercel
robots.txt                       crawler rules
.agents/, skills-lock.json,
.mcp.json                        AI tooling files (Supabase), not shipped with the site
Quick start

Requires Node.js 18 or newer (the build was checked on Node 22). There are no dependencies, so npm install is not needed.

bash
npm run build                      # same as: node scripts/build-routes.mjs
python3 -m http.server -d dist 8000

The site is then available at http://localhost:8000. The script prints the list of all 40 routes with their titles, and the result is written to dist/ (this folder is not committed and is recreated on every build).

The site needs an internet connection in the browser: React, Babel, fonts and the booking widget are loaded from external hosts.

Routes and languages

4 languages × 10 pages = 40 routes. Russian is the default language and has no prefix; Ukrainian lives under /ua/.

Language	Prefix	Examples
Russian	—	/, /services, /legal/privacy
Ukrainian	/ua	/ua, /ua/faq
Hungarian	/hu	/hu, /hu/cases
English	/en	/en, /en/contact

Sections: services, cases, faq, contact, legal. Legal documents: /legal/privacy, /legal/cookies, /legal/terms, /legal/security.

The old address /SLAPA.dc.html redirects permanently to / (see vercel.json).

Editing content

Site copy (headings, services, cases, FAQ, form labels, cookie banner): the DICT object in SLAPA.dc.html, one block per language. All languages must have the same keys.

A new language, section or document: the CODES, SLUG, SECTIONS and DOCS lists and the pathFor / META functions in the same file.

Legal documents: legal.js, with one block per language (update date, data controller, list of documents).

The block between the /* ROUTE-META-START and /* ROUTE-META-END */ markers in SLAPA.dc.html is read by the build, which runs it as plain JavaScript. Do not remove the markers, and do not use window, document or other browser globals inside that block.

Images: regular files go into assets/, while <image-slot> slots are filled through the editor and saved to .image-slots.state.json. During the build, the path to that file inside image-slot.js is pinned to the site root (/.image-slots.state.json); otherwise it would not resolve on nested routes such as /en/contact/.

Request form

The form sends a JSON POST to the Supabase Edge Function contact (its URL is the ENDPOINT constant in SLAPA.dc.html). The function sends an email through Resend.

Only the contact field is required. The other fields (name, site, task, lang, page) are optional and are truncated to a maximum length.
The hidden company field is a bot trap: if it is filled in, the function answers 200 but sends no email.
CORS allows only https://slapa.agency and https://www.slapa.agency.
If the request fails, the page opens mailto:hello@slapa.agency with the message pre-filled.

Deploying the function (public and without JWT, because the form sends the request without authentication):

bash
supabase functions deploy contact --no-verify-jwt

supabase secrets set RESEND_API_KEY=re_...
supabase secrets set MAIL_FROM="SLAPA <hello@slapa.agency>"   # optional
supabase secrets set MAIL_TO=hello@slapa.agency               # optional

Without MAIL_FROM, emails are sent from Resend's sandbox address (onboarding@resend.dev). To send from your own domain, verify the domain in your Resend account.

Deployment

The site is deployed on Vercel. Settings are in vercel.json: build command node scripts/build-routes.mjs, output directory dist, URLs without a trailing slash. No environment variables are needed on the site side.

Connect the repository to a Vercel project and attach the domains slapa.agency and www.slapa.agency. Mail secrets are stored in Supabase, not in Vercel.
