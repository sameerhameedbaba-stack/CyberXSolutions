/**
 * Accessibility gate. Runs axe-core against every route and exits non-zero on
 * any violation, so a regression fails CI rather than reaching production.
 *
 *   npm run build && npm start &
 *   QA_BASE_URL=http://localhost:3000 npm run qa:a11y
 */
import { chromium } from 'playwright';
import fs from 'node:fs';
import { ROUTES, BASE, launchOptions } from './routes.mjs';

const AXE = fs.readFileSync(new URL('../node_modules/axe-core/axe.min.js', import.meta.url), 'utf8');
const routes = process.argv[2] ? process.argv[2].split(',') : ROUTES;

const browser = await chromium.launch(launchOptions);
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();

let failures = 0;

for (const route of routes) {
  await page.goto(`${BASE}${route}`, { waitUntil: 'networkidle', timeout: 45000 });

  // Force scroll-reveals into their final state so animated content is audited.
  await page.evaluate(() => {
    document.documentElement.style.scrollBehavior = 'auto';
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-in'));
    window.scrollTo(0, 0);
  });
  // Let the reveal transition settle — a mid-transition opacity skews contrast.
  await page.waitForTimeout(1200);
  await page.addScriptTag({ content: AXE });

  const results = await page.evaluate(async () =>
    window.axe.run(document, {
      runOnly: {
        type: 'tag',
        values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'],
      },
    }),
  );

  const violations = results.violations;
  failures += violations.length;

  if (violations.length === 0) {
    console.log(`OK   ${route}`);
    continue;
  }

  console.log(`FAIL ${route} — ${violations.length} violation type(s)`);
  for (const violation of violations) {
    console.log(`       [${violation.impact}] ${violation.id}: ${violation.help}`);
    for (const node of violation.nodes.slice(0, 3)) {
      console.log(`           ${node.target.join(' ')}`);
    }
  }
}

await browser.close();

if (failures > 0) {
  console.error(`\n${failures} accessibility violation type(s) found.`);
  process.exit(1);
}
console.log(`\nNo accessibility violations across ${routes.length} routes.`);
