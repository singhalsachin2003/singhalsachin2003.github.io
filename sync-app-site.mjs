#!/usr/bin/env node
/**
 * Copies one app's website source (the `docs/` folder of its private repo) into
 * this public repo, so GitHub Pages serves it from here at the same URLs it had
 * as a project site.
 *
 *   node sync-app-site.mjs CornerStone ../CornerStone/docs
 *   node sync-app-site.mjs OTC_Learn   ../otc-learning-app/docs
 *   node sync-app-site.mjs OTC_Learn   ../otc-learning-app/docs --prefix preview
 *
 * Why the rewriting: the app repos built as project sites with `baseurl: /<App>`.
 * This repo is the user site, whose baseurl is empty, so every place the source
 * leans on the project setup is rewritten mechanically on the way in:
 *
 *   - `permalink: /x`               -> `permalink: /<App>/x`
 *   - `'/x' | relative_url`         -> `'/<App>/x' | relative_url`  (and absolute_url)
 *   - `site.title` / `site.description` inside Liquid -> `page.app_title` / `page.app_description`
 *     (set per app by the `defaults` in this repo's _config.yml)
 *   - `page.url` used inside a Liquid tag (`case page.url`, `page.url | split`,
 *     comparisons) -> `app_url`, the URL with the app folder taken off, so
 *     `when '/frm/p2-market/'` and `seg[1]` keep meaning what they meant.
 *     `page.url | absolute_url` is left alone: the canonical URL wants the folder.
 *   - `_layouts/default.html`       -> `_layouts/<app>.html`
 *   - jekyll-sitemap's per-site sitemap -> a `<App>/sitemap.xml` Liquid template
 *
 * Files listed under `exclude:` in the app's own _config.yml (working notes such
 * as PRICING.md) are never copied. The target folder is replaced wholesale, so a
 * page deleted in the app repo disappears here too.
 */
import fs from 'node:fs';
import path from 'node:path';

const [app, srcArg, ...rest] = process.argv.slice(2);
if (!app || !srcArg) {
  console.error('usage: node sync-app-site.mjs <App> <path-to-docs> [--prefix preview]');
  process.exit(1);
}
const pi = rest.indexOf('--prefix');
const prefix = pi > -1 ? rest[pi + 1].replace(/^\/|\/$/g, '') : '';
const SRC = path.resolve(srcArg);
const ROOT = path.dirname(new URL(import.meta.url).pathname);
const base = prefix ? `${prefix}/${app}` : app; // e.g. "CornerStone" or "preview/CornerStone"
const OUT = path.join(ROOT, base);
const layoutName = app.toLowerCase();

const cfg = fs.readFileSync(path.join(SRC, '_config.yml'), 'utf8');
const excludes = new Set();
{
  let on = false;
  for (const line of cfg.split('\n')) {
    if (/^exclude:/.test(line)) { on = true; continue; }
    if (!on) continue;
    const m = line.match(/^\s+-\s+(\S+)/);
    if (m) excludes.add(m[1]);
    else if (line.trim() && !line.trim().startsWith('#')) on = false;
  }
}
const SKIP_TOP = new Set(['_config.yml', '_layouts', '.well-known']);

const APP_URL = `{% assign app_url = page.url | remove_first: '/${base}' %}`;

const rewriteLiquid = (text) => {
  let usesAppUrl = false;
  const out = text
    // string literals piped through relative_url / absolute_url
    .replace(/(['"])\/([^'"]*)\1(\s*\|\s*(?:relative_url|absolute_url))/g, `$1/${base}/$2$1$3`)
    // site.title / site.description in any Liquid tag
    .replace(/(\{\{[^}]*\}\}|\{%[^%]*%\})/g, (tag) =>
      tag
        .replace(/\bsite\.title\b/g, 'page.app_title')
        .replace(/\bsite\.description\b/g, 'page.app_description'),
    )
    // page.url inside {% %} tags, unless it is being made absolute or relative
    .replace(/\{%[^%]*%\}/g, (tag) =>
      tag.replace(/\bpage\.url\b(?!\s*\|\s*(?:absolute_url|relative_url))/g, () => {
        usesAppUrl = true;
        return 'app_url';
      }),
    );
  if (!usesAppUrl) return out;
  // Define app_url before its first use: after the front matter, or at the top.
  const fm = out.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n/);
  return fm ? fm[0] + APP_URL + out.slice(fm[0].length) : APP_URL + out;
};

const rewriteFrontMatter = (text) => {
  const end = text.indexOf('\n---', 3);
  if (end === -1) return text;
  const fm = text
    .slice(0, end)
    .replace(/^permalink:\s*\/?(\S*)\s*$/m, (_, p) => `permalink: /${base}/${p}`)
    .replace(/^layout:\s*default\s*$/m, `layout: ${layoutName}`);
  return fm + text.slice(end);
};

const hasFrontMatter = (buf) => buf.slice(0, 4).toString() === '---\n' || buf.slice(0, 5).toString() === '---\r\n';

fs.rmSync(OUT, { recursive: true, force: true });
let copied = 0, processed = 0;
const walk = (dir) => {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, ent.name);
    const rel = path.relative(SRC, abs).split(path.sep).join('/');
    const top = rel.split('/')[0];
    if (SKIP_TOP.has(top) || excludes.has(rel)) continue;
    if (ent.isDirectory()) { walk(abs); continue; }
    const dest = path.join(OUT, rel);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    const buf = fs.readFileSync(abs);
    if (hasFrontMatter(buf)) {
      fs.writeFileSync(dest, rewriteLiquid(rewriteFrontMatter(buf.toString('utf8'))));
      processed++;
    } else if (/\.(md|markdown)$/.test(rel)) {
      // GitHub Pages runs jekyll-optional-front-matter, so Markdown without front
      // matter is still rendered (and its Liquid run) — rewrite it like a page.
      fs.writeFileSync(dest, rewriteLiquid(buf.toString('utf8')));
      processed++;
    } else {
      fs.writeFileSync(dest, buf);
      copied++;
    }
  }
};
walk(SRC);

// The layout, renamed per app so both can live in one _layouts folder.
const layoutSrc = fs.readFileSync(path.join(SRC, '_layouts', 'default.html'), 'utf8');
fs.mkdirSync(path.join(ROOT, '_layouts'), { recursive: true });
const layoutFile = prefix ? `${prefix}-${layoutName}` : layoutName;
fs.writeFileSync(path.join(ROOT, '_layouts', `${layoutFile}.html`), rewriteLiquid(layoutSrc));

// jekyll-sitemap only ever writes /sitemap.xml at the site root, but Search Console
// and robots.txt name /<App>/sitemap.xml, so each app gets its own, same format:
// every HTML page under the folder, then static .html files with their lastmod.
const head = `/${base}/`;
fs.writeFileSync(
  path.join(OUT, 'sitemap.xml'),
  `---
layout: null
permalink: /${base}/sitemap.xml
sitemap: false
---
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{%- assign pages = site.html_pages | sort: "name" -%}
{%- for p in pages -%}{%- assign h = p.url | slice: 0, ${head.length} -%}{%- if h == '${head}' and p.sitemap != false %}
<url>
<loc>{{ p.url | absolute_url | xml_escape }}</loc>
</url>
{%- endif -%}{%- endfor -%}
{%- assign files = site.static_files | where: "extname", ".html" -%}
{%- for f in files -%}{%- assign h = f.path | slice: 0, ${head.length} -%}{%- if h == '${head}' %}
<url>
<loc>{{ f.path | replace: '/index.html', '/' | absolute_url | xml_escape }}</loc>
<lastmod>{{ f.modified_time | date_to_xmlschema }}</lastmod>
</url>
{%- endif -%}{%- endfor %}
</urlset>
`,
);

console.log(`${app} -> ${base}/: ${processed} pages rewritten, ${copied} files copied, ${excludes.size} excluded (${[...excludes].join(', ') || 'none'}); layout _layouts/${layoutFile}.html`);
