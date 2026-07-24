/**
 * Link and markup integrity gate. Crawls every internal link found on every
 * route, checks each resolves, and flags duplicate DOM ids and empty anchors.
 *
 *   npm run build && npm start &
 *   QA_BASE_URL=http://localhost:3000 npm run qa:links
 */
import { chromium } from 'playwright';
import { ROUTES, BASE, launchOptions } from './routes.mjs';

const browser = await chromium.launch(launchOptions);
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();

const discovered = new Map(); // href -> Set of pages linking to it
const problems = [];

for (const route of ROUTES) {
  await page.goto(`${BASE}${route}`, { waitUntil: 'networkidle', timeout: 45000 });

  const report = await page.evaluate(() => {
    const links = [];
    const emptyLinks = [];
    for (const a of document.querySelectorAll('a[href]')) {
      const href = a.getAttribute('href');
      const label = (a.textContent || '').trim() || a.getAttribute('aria-label') || '';
      if (!label) emptyLinks.push(href);
      links.push(href);
    }

    // Duplicate ids break fragment links and are invalid HTML; SVG <defs>
    // rendered once per instance is the usual culprit.
    const seen = new Map();
    const duplicates = [];
    for (const el of document.querySelectorAll('[id]')) {
      const id = el.id;
      const count = (seen.get(id) ?? 0) + 1;
      seen.set(id, count);
      if (count === 2) duplicates.push(id);
    }

    const fragments = [...document.querySelectorAll('a[href^="#"]')]
      .map((a) => a.getAttribute('href').slice(1))
      .filter((frag) => frag && !document.getElementById(frag));

    return { links, emptyLinks, duplicates, brokenFragments: fragments };
  });

  for (const href of report.links) {
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) continue;
    if (/^https?:\/\//.test(href) && !href.startsWith(BASE)) continue; // external, not our problem
    const path = href.startsWith(BASE) ? href.slice(BASE.length) : href;
    if (!discovered.has(path)) discovered.set(path, new Set());
    discovered.get(path).add(route);
  }

  if (report.emptyLinks.length) {
    problems.push(`[empty-link] ${route}: ${report.emptyLinks.slice(0, 3).join(', ')}`);
  }
  if (report.duplicates.length) {
    problems.push(`[duplicate-id] ${route}: ${[...new Set(report.duplicates)].slice(0, 6).join(', ')}`);
  }
  if (report.brokenFragments.length) {
    problems.push(`[broken-anchor] ${route}: #${report.brokenFragments.slice(0, 4).join(', #')}`);
  }
}

console.log(`Discovered ${discovered.size} distinct internal targets.`);

for (const [path, sources] of discovered) {
  const url = `${BASE}${path.split('#')[0] || '/'}`;
  const response = await page.request.get(url, { failOnStatusCode: false });
  if (response.status() >= 400) {
    problems.push(`[${response.status()}] ${path} — linked from ${[...sources].slice(0, 3).join(', ')}`);
  }
}

await browser.close();

if (problems.length > 0) {
  console.error(`\n${problems.length} problem(s):\n${problems.join('\n')}`);
  process.exit(1);
}
console.log(`\nAll internal links resolve. No duplicate ids, broken anchors or unlabelled links.`);
