export const site = {
  name: 'CyberXSolutions',
  legalName: 'CyberXSolutions Inc',
  url: 'https://cyberxsolutions.us',
  domain: 'cyberxsolutions.us',
  email: 'support@cyberxsolutions.us',
  foundedYear: 2019,
  tagline: 'AI that runs the work',
  description:
    'CyberXSolutions builds agentic AI, enterprise automation and AI-powered security systems that run real work end to end — designed, engineered and operated for companies that cannot afford to be wrong.',
  address: {
    street: '106 W Fourth Street',
    unit: 'PMB #110',
    city: 'Kalkaska',
    region: 'Michigan',
    regionCode: 'MI',
    postalCode: '49646',
    country: 'United States',
    countryCode: 'US',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/cyberxsolutions',
    x: 'https://x.com/cyberxsolutions',
    github: 'https://github.com/cyberxsolutions',
    youtube: 'https://www.youtube.com/@cyberxsolutions',
  },
} as const;

export const fullAddress = `${site.address.street}, ${site.address.unit}, ${site.address.city}, ${site.address.regionCode} ${site.address.postalCode}, ${site.address.country}`;

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export type NavLink = {
  label: string;
  href: string;
  description?: string;
  /** Accent key drives the icon tile gradient in the mega menu. */
  accent?: 'blue' | 'violet' | 'cyan' | 'emerald' | 'orange' | 'pink' | 'indigo';
  icon?: string;
  badge?: string;
};

export type NavGroup = {
  heading: string;
  links: NavLink[];
};

export type NavItem =
  | { label: string; href: string; kind: 'link' }
  | { label: string; href: string; kind: 'mega'; groups: NavGroup[]; feature?: { title: string; body: string; href: string; cta: string } }
  | { label: string; href: string; kind: 'dropdown'; links: NavLink[] };

export const primaryNav: NavItem[] = [
  {
    label: 'Services',
    href: '/services',
    kind: 'mega',
    groups: [
      {
        heading: 'AI & Autonomy',
        links: [
          { label: 'AI Agents', href: '/ai-agents', description: 'Digital coworkers that own outcomes', accent: 'violet', icon: 'agent', badge: 'Flagship' },
          { label: 'AI Automation', href: '/ai-automation', description: 'Workflows that run without hands', accent: 'blue', icon: 'automation' },
          { label: 'Enterprise Solutions', href: '/enterprise-solutions', description: 'AI platforms at company scale', accent: 'indigo', icon: 'enterprise' },
        ],
      },
      {
        heading: 'Engineering',
        links: [
          { label: 'Custom Software', href: '/custom-software-development', description: 'Systems built for your economics', accent: 'cyan', icon: 'code' },
          { label: 'Web Development', href: '/web-development', description: 'Fast, beautiful, measurable', accent: 'blue', icon: 'web' },
          { label: 'Mobile Development', href: '/mobile-development', description: 'iOS and Android people keep', accent: 'pink', icon: 'mobile' },
          { label: 'Cloud Engineering', href: '/cloud-engineering', description: 'Infrastructure that stays quiet', accent: 'emerald', icon: 'cloud' },
        ],
      },
      {
        heading: 'Security & Growth',
        links: [
          { label: 'AI Cybersecurity', href: '/ai-cybersecurity', description: 'Autonomous detection and response', accent: 'emerald', icon: 'shield' },
          { label: 'Digital Marketing', href: '/digital-marketing', description: 'Demand you can forecast', accent: 'orange', icon: 'growth' },
          { label: 'SEO', href: '/seo', description: 'Compounding organic revenue', accent: 'cyan', icon: 'search' },
        ],
      },
    ],
    feature: {
      title: 'Agent Foundry',
      body: 'Our production system for designing, evaluating and operating AI agents — with the guardrails auditors ask for.',
      href: '/ai-agents',
      cta: 'See how agents ship',
    },
  },
  { label: 'Industries', href: '/industries', kind: 'link' },
  { label: 'Case Studies', href: '/case-studies', kind: 'link' },
  {
    label: 'Company',
    href: '/about',
    kind: 'dropdown',
    links: [
      { label: 'About', href: '/about', description: 'Who we are and what we believe', accent: 'blue' },
      { label: 'Why Choose Us', href: '/why-choose-us', description: 'The case for working with us', accent: 'violet' },
      { label: 'Process', href: '/process', description: 'How work actually gets done', accent: 'cyan' },
      { label: 'Technologies', href: '/technologies', description: 'The stack behind the systems', accent: 'indigo' },
      { label: 'Partners', href: '/partners', description: 'Platforms and alliances', accent: 'emerald' },
      { label: 'Careers', href: '/careers', description: 'Build the systems that run companies', accent: 'orange' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    kind: 'dropdown',
    links: [
      { label: 'Resource Library', href: '/resources', description: 'Playbooks, guides and calculators', accent: 'blue' },
      { label: 'Blog', href: '/blog', description: 'Field notes from production AI', accent: 'violet' },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

export const footerNav: NavGroup[] = [
  {
    heading: 'AI & Automation',
    links: [
      { label: 'AI Agents', href: '/ai-agents' },
      { label: 'AI Automation', href: '/ai-automation' },
      { label: 'Enterprise Solutions', href: '/enterprise-solutions' },
      { label: 'AI Cybersecurity', href: '/ai-cybersecurity' },
    ],
  },
  {
    heading: 'Engineering',
    links: [
      { label: 'Custom Software', href: '/custom-software-development' },
      { label: 'Web Development', href: '/web-development' },
      { label: 'Mobile Development', href: '/mobile-development' },
      { label: 'Cloud Engineering', href: '/cloud-engineering' },
    ],
  },
  {
    heading: 'Growth',
    links: [
      { label: 'Digital Marketing', href: '/digital-marketing' },
      { label: 'SEO', href: '/seo' },
      { label: 'All Services', href: '/services' },
      { label: 'Industries', href: '/industries' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Why Choose Us', href: '/why-choose-us' },
      { label: 'Process', href: '/process' },
      { label: 'Technologies', href: '/technologies' },
      { label: 'Partners', href: '/partners' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Resource Library', href: '/resources' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
      { label: 'Sitemap', href: '/sitemap' },
    ],
  },
];

export const legalNav: NavLink[] = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'Sitemap', href: '/sitemap' },
];

/** Every indexable route, used by sitemap.ts and the HTML sitemap page. */
export const allRoutes: { href: string; label: string; group: string; priority: number }[] = [
  { href: '/', label: 'Home', group: 'Main', priority: 1 },
  { href: '/about', label: 'About', group: 'Main', priority: 0.9 },
  { href: '/services', label: 'Services', group: 'Main', priority: 0.95 },
  { href: '/ai-agents', label: 'AI Agents', group: 'Services', priority: 0.95 },
  { href: '/ai-automation', label: 'AI Automation', group: 'Services', priority: 0.95 },
  { href: '/custom-software-development', label: 'Custom Software Development', group: 'Services', priority: 0.9 },
  { href: '/web-development', label: 'Web Development', group: 'Services', priority: 0.9 },
  { href: '/mobile-development', label: 'Mobile Development', group: 'Services', priority: 0.9 },
  { href: '/ai-cybersecurity', label: 'AI Cybersecurity', group: 'Services', priority: 0.95 },
  { href: '/cloud-engineering', label: 'Cloud Engineering', group: 'Services', priority: 0.9 },
  { href: '/digital-marketing', label: 'Digital Marketing', group: 'Services', priority: 0.85 },
  { href: '/seo', label: 'SEO', group: 'Services', priority: 0.85 },
  { href: '/enterprise-solutions', label: 'Enterprise Solutions', group: 'Services', priority: 0.9 },
  { href: '/industries', label: 'Industries', group: 'Solutions', priority: 0.85 },
  { href: '/case-studies', label: 'Case Studies', group: 'Solutions', priority: 0.85 },
  { href: '/technologies', label: 'Technologies', group: 'Solutions', priority: 0.8 },
  { href: '/why-choose-us', label: 'Why Choose Us', group: 'Company', priority: 0.8 },
  { href: '/process', label: 'Process', group: 'Company', priority: 0.8 },
  { href: '/resources', label: 'Resources', group: 'Resources', priority: 0.75 },
  { href: '/blog', label: 'Blog', group: 'Resources', priority: 0.8 },
  { href: '/careers', label: 'Careers', group: 'Company', priority: 0.7 },
  { href: '/partners', label: 'Partners', group: 'Company', priority: 0.7 },
  { href: '/contact', label: 'Contact', group: 'Main', priority: 0.9 },
  { href: '/privacy-policy', label: 'Privacy Policy', group: 'Legal', priority: 0.3 },
  { href: '/terms', label: 'Terms of Service', group: 'Legal', priority: 0.3 },
  { href: '/cookie-policy', label: 'Cookie Policy', group: 'Legal', priority: 0.3 },
  { href: '/sitemap', label: 'Sitemap', group: 'Legal', priority: 0.3 },
];
