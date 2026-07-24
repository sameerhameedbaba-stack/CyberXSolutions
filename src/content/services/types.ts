export type Accent = 'blue' | 'violet' | 'cyan' | 'emerald' | 'orange' | 'pink' | 'indigo';

export type ServiceStat = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
};

export type ServiceCapability = {
  title: string;
  body: string;
  icon: string;
  accent?: Accent;
};

export type ServiceOutcome = {
  title: string;
  body: string;
  result: string;
  icon: string;
  accent?: Accent;
};

export type ServiceStep = {
  label: string;
  title: string;
  body: string;
  icon: string;
  meta?: string;
};

export type PricingTier = {
  name: string;
  frame: string;
  body: string;
  includes: string[];
  featured?: boolean;
};

export type Service = {
  slug: string;
  href: string;
  /** Short label for navigation and cards. */
  name: string;
  /** One-line summary used on the services index and in link rails. */
  summary: string;
  icon: string;
  accent: Accent;
  eyebrow: string;
  h1: string;
  lead: string;
  heroBadge?: string;
  /** Which bespoke visual the page hero renders. */
  visual:
    | 'agents'
    | 'automation'
    | 'blueprint'
    | 'web'
    | 'mobile'
    | 'security'
    | 'cloud'
    | 'funnel'
    | 'serp'
    | 'enterprise';
  stats: ServiceStat[];
  problem: { title: string; body: string; costs: string[] };
  capabilities: ServiceCapability[];
  outcomes: ServiceOutcome[];
  steps: ServiceStep[];
  stack: { heading: string; items: string[] }[];
  pricing: { note: string; tiers: PricingTier[] };
  faqs: { question: string; answer: string }[];
  related: { label: string; href: string; description: string }[];
  seo: { title: string; description: string; keywords: string[] };
};
