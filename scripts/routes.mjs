/** Every indexable route, shared by the QA scripts. */
export const ROUTES = [
  '/',
  '/about',
  '/services',
  '/ai-agents',
  '/ai-automation',
  '/enterprise-solutions',
  '/ai-cybersecurity',
  '/custom-software-development',
  '/web-development',
  '/mobile-development',
  '/cloud-engineering',
  '/digital-marketing',
  '/seo',
  '/industries',
  '/case-studies',
  '/technologies',
  '/why-choose-us',
  '/process',
  '/resources',
  '/blog',
  '/careers',
  '/partners',
  '/contact',
  '/privacy-policy',
  '/terms',
  '/cookie-policy',
  '/sitemap',
  '/case-studies/accounts-payable-agents',
  '/case-studies/autonomous-soc',
  '/blog/why-ai-pilots-do-not-reach-production',
  '/blog/what-guardrails-actually-mean',
];

export const BASE = process.env.QA_BASE_URL ?? 'http://localhost:3000';

/**
 * Playwright resolves its own bundled Chromium when this is unset. Set
 * QA_CHROMIUM_PATH only when pointing at a browser installed out of band.
 */
export const launchOptions = process.env.QA_CHROMIUM_PATH
  ? { executablePath: process.env.QA_CHROMIUM_PATH }
  : {};
