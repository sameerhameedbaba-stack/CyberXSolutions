/**
 * Responsive gate. Loads every route at six widths and fails if the document
 * scrolls horizontally or throws a runtime error.
 *
 *   npm run build && npm start &
 *   QA_BASE_URL=http://localhost:3000 npm run qa:responsive
 */
import { chromium } from 'playwright';
import { ROUTES, BASE, launchOptions } from './routes.mjs';

const WIDTHS = [320, 390, 768, 1024, 1280, 1920];

const browser = await chromium.launch(launchOptions);
const problems = [];

for (const width of WIDTHS) {
  const context = await browser.newContext({ viewport: { width, height: 900 } });
  const page = await context.newPage();
  page.on('pageerror', (error) => problems.push(`[error ${width}px] ${String(error).slice(0, 160)}`));

  for (const route of ROUTES) {
    await page.goto(`${BASE}${route}`, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(120);

    const result = await page.evaluate(() => {
      const de = document.documentElement;
      const offenders = [];
      if (de.scrollWidth > de.clientWidth + 1) {
        for (const el of document.querySelectorAll('body *')) {
          const rect = el.getBoundingClientRect();
          if (rect.width === 0) continue;
          if (rect.right > de.clientWidth + 1 || rect.left < -1) {
            // Absolutely-positioned decoration is deliberately off-canvas.
            const position = getComputedStyle(el).position;
            if (position === 'absolute' || position === 'fixed') continue;
            offenders.push(`${el.tagName.toLowerCase()}.${String(el.className).slice(0, 70)}`);
            if (offenders.length >= 3) break;
          }
        }
      }
      return { scrollW: de.scrollWidth, clientW: de.clientWidth, offenders };
    });

    if (result.scrollW > result.clientW + 1) {
      problems.push(
        `[overflow ${width}px] ${route}: ${result.scrollW} > ${result.clientW}` +
          (result.offenders.length ? ` — ${result.offenders.join(' | ')}` : ''),
      );
    }
  }

  await context.close();
  console.log(`OK   ${ROUTES.length} routes @ ${width}px`);
}

await browser.close();

if (problems.length > 0) {
  console.error(`\n${problems.length} problem(s):\n${problems.join('\n')}`);
  process.exit(1);
}
console.log(`\nNo horizontal overflow or runtime errors across ${ROUTES.length * WIDTHS.length} route/width combinations.`);
