import type { Service } from './types';

export const digitalMarketing: Service = {
  slug: 'digital-marketing',
  href: '/digital-marketing',
  name: 'Digital Marketing',
  summary: 'Demand you can forecast, attributed to pipeline rather than impressions.',
  icon: 'growth',
  accent: 'orange',
  eyebrow: 'Digital Marketing',
  h1: 'Marketing that reports in pipeline.',
  lead: 'Paid media, content and lifecycle programmes run as one system, measured against closed revenue rather than clicks — with the honesty to turn off what is not working.',
  heroBadge: 'Reported against revenue, not impressions',
  visual: 'funnel',
  stats: [
    { value: 6.2, decimals: 1, suffix: 'x', label: 'Blended return on ad spend' },
    { value: 41, suffix: '%', label: 'Lower cost per opportunity' },
    { value: 2.4, decimals: 1, suffix: 'x', label: 'Pipeline velocity improvement' },
    { value: 94, suffix: '%', label: 'Of spend attributed to revenue' },
  ],
  problem: {
    title: 'The dashboard is green and the pipeline is empty.',
    body: 'Impressions are up, cost per click is down, the agency report looks excellent — and sales cannot find a single deal that came from it. Somewhere between the campaign and the CRM the connection was never made, so nobody can say which half of the budget is working.',
    costs: [
      'Spend optimised toward cheap clicks instead of qualified buyers',
      'Attribution that stops at the form fill and never reaches revenue',
      'Content produced on a calendar rather than against buyer questions',
      'Channels reported separately, so overlap and cannibalisation stay invisible',
      'Creative refreshed on instinct instead of on measured fatigue',
    ],
  },
  capabilities: [
    { title: 'Demand strategy', body: 'Segment definition, message testing and channel economics modelled before budget is committed rather than justified afterwards.', icon: 'target', accent: 'orange' },
    { title: 'Paid media', body: 'Search, paid social, programmatic and retargeting managed against cost per opportunity and pipeline, not cost per click.', icon: 'megaphone', accent: 'pink' },
    { title: 'Content engineering', body: 'Content built around the questions buyers actually ask in the buying cycle, structured so it earns organic and AI-search visibility.', icon: 'file-text', accent: 'blue' },
    { title: 'Lifecycle marketing', body: 'Email, nurture and onboarding sequences triggered by real behaviour, with a suppression discipline that protects the list.', icon: 'mail', accent: 'violet' },
    { title: 'Conversion optimisation', body: 'Landing pages, forms and journeys tested against pipeline outcomes, with a hypothesis and a sample size rather than a hunch.', icon: 'trending-up', accent: 'emerald' },
    { title: 'Attribution engineering', body: 'Server-side tracking, offline conversion import and a model that connects spend to closed revenue in your CRM.', icon: 'chart-line', accent: 'cyan' },
    { title: 'Marketing automation', body: 'AI agents handling enrichment, routing, list hygiene and reporting so the team spends its time on strategy and creative.', icon: 'automation', accent: 'indigo' },
    { title: 'Creative production', body: 'Ad creative, video and design produced at the volume modern platforms consume, tested systematically for fatigue.', icon: 'wand', accent: 'pink' },
  ],
  outcomes: [
    { title: 'B2B demand generation', body: 'Budget reallocated from broad awareness into intent-driven capture, with sales-accepted opportunity as the only optimisation target.', result: 'Cost per opportunity down 41%', icon: 'target', accent: 'orange' },
    { title: 'Account-based programmes', body: 'Coordinated advertising, content and outbound against a named account list, with engagement scored at account level.', result: '3.1x meeting rate in target accounts', icon: 'briefcase', accent: 'blue' },
    { title: 'Product-led growth', body: 'Acquisition tuned to activation rather than signup, with lifecycle sequences built around the first value moment.', result: 'Signup-to-activation up 47%', icon: 'rocket', accent: 'violet' },
    { title: 'Attribution rebuild', body: 'Server-side measurement and CRM-closed-loop reporting replacing a last-click model that was quietly misallocating budget.', result: '31% of spend reallocated to proven channels', icon: 'chart-bar', accent: 'emerald' },
    { title: 'Marketplace and retail', body: 'Shopping, feed management and retargeting driven by margin contribution rather than by revenue alone.', result: 'Contribution margin up 28% at flat spend', icon: 'cart', accent: 'cyan' },
    { title: 'Content programme', body: 'A buyer-question content engine feeding organic search, AI answers, sales enablement and paid distribution from one library.', result: 'Organic pipeline contribution up 2.6x', icon: 'book', accent: 'indigo' },
  ],
  steps: [
    { label: 'Month 1', title: 'Measure honestly', icon: 'gauge', meta: '3 weeks', body: 'Attribution audit, channel economics and a real read on what is working. Most engagements start by finding 20–30% of spend producing nothing.' },
    { label: 'Month 1–2', title: 'Fix the measurement', icon: 'chart-line', meta: '2–3 weeks', body: 'Server-side tracking, CRM integration and closed-loop reporting, so every subsequent decision is made on evidence.' },
    { label: 'Month 2–3', title: 'Rebuild and test', icon: 'wand', meta: '4–6 weeks', body: 'Creative, landing pages, audiences and sequences rebuilt around what the data actually showed, then tested systematically.' },
    { label: 'Ongoing', title: 'Compound', icon: 'trending-up', meta: 'Monthly', body: 'Continuous testing, budget reallocation toward what converts, and monthly reporting that leads with pipeline.' },
  ],
  stack: [
    { heading: 'Platforms', items: ['Google Ads', 'LinkedIn Ads', 'Meta', 'Microsoft Ads', 'Reddit', 'Programmatic DSPs'] },
    { heading: 'Measurement', items: ['GA4', 'Server-side GTM', 'Segment', 'Looker Studio', 'BigQuery', 'Offline conversion import'] },
    { heading: 'Marketing systems', items: ['HubSpot', 'Marketo', 'Salesforce', 'Customer.io', 'Braze', 'Klaviyo'] },
    { heading: 'Intelligence', items: ['Clearbit', '6sense', 'Demandbase', 'Similarweb', 'Custom intent models'] },
  ],
  pricing: {
    note: 'We charge a flat management fee, never a percentage of media spend. A percentage model rewards us for spending your money, which is the wrong incentive to build a relationship on.',
    tiers: [
      {
        name: 'Growth audit',
        frame: 'Fixed price · 3 weeks',
        body: 'Attribution, channel economics, creative and funnel reviewed together, with a reallocation plan and a forecast.',
        includes: ['Attribution and tracking audit', 'Channel-level economic analysis', 'Creative and landing page review', 'Reallocation plan with projected return'],
      },
      {
        name: 'Growth programme',
        frame: 'Monthly · flat fee',
        body: 'Strategy, media management, creative and lifecycle run as one team, reported against pipeline every month.',
        includes: ['Paid media strategy and management', 'Creative production and testing', 'Landing page and conversion work', 'Lifecycle and nurture programmes', 'Monthly pipeline reporting'],
        featured: true,
      },
      {
        name: 'Embedded growth team',
        frame: 'Quarterly · retained',
        body: 'A full growth function for organisations without one in-house — strategy, execution, analytics and creative.',
        includes: ['Dedicated strategist and channel specialists', 'In-house creative capacity', 'Analytics and attribution engineering', 'Marketing automation build', 'Executive-level reporting'],
      },
    ],
  },
  faqs: [
    {
      question: 'Do you charge a percentage of ad spend?',
      answer: 'No. Flat management fee, always. Percentage-of-spend creates an incentive to increase budget rather than efficiency, and it makes recommending a spend reduction commercially painful for the agency. We would rather be able to tell you to spend less.',
    },
    {
      question: 'How long before we see results?',
      answer: 'Measurement improvements land in the first month and are usually where the first savings appear. Media performance typically improves meaningfully by month two to three. Content and organic programmes compound over six to twelve months — anyone promising organic results in six weeks is selling something else.',
    },
    {
      question: 'Can you prove marketing drove revenue?',
      answer: 'That is the point of the measurement work. We implement server-side tracking, connect it to your CRM, and import closed-won data back into the ad platforms so optimisation targets revenue rather than form fills. Typically we can attribute 90%+ of spend to pipeline outcomes with a documented methodology and stated confidence limits.',
    },
    {
      question: 'What if our sales cycle is nine months?',
      answer: 'Then we optimise against leading indicators that predict revenue — sales-accepted opportunity, meeting rate, account engagement depth — and validate them against closed deals as the cohort matures. Long cycles need patience and a model, not a different set of vanity metrics.',
    },
    {
      question: 'Will you work with our existing agency?',
      answer: 'Yes, and often we handle strategy and measurement while an incumbent runs execution in a channel they are strong in. What we will not do is duplicate work invisibly — the split is documented and reviewed quarterly.',
    },
    {
      question: 'What is the minimum media budget worth managing?',
      answer: 'Below roughly $20,000 a month in paid media, the management fee usually eats the gain and you are better served by improving conversion and content first. We will tell you that in the audit rather than take the retainer.',
    },
  ],
  related: [
    { label: 'SEO', href: '/seo', description: 'Compounding organic revenue' },
    { label: 'Web Development', href: '/web-development', description: 'The platform behind the campaigns' },
    { label: 'AI Automation', href: '/ai-automation', description: 'Automating marketing operations' },
    { label: 'Case studies', href: '/case-studies', description: 'Measured growth outcomes' },
    { label: 'Resources', href: '/resources', description: 'Playbooks and calculators' },
    { label: 'Contact', href: '/contact', description: 'Start with the audit' },
  ],
  seo: {
    title: 'B2B Digital Marketing & Demand Generation | CyberXSolutions',
    description:
      'Paid media, content and lifecycle marketing measured against pipeline, not clicks. Flat fees, never a percentage of spend. 6.2x blended ROAS, 41% lower cost per opportunity.',
    keywords: ['digital marketing agency', 'B2B demand generation', 'paid media management', 'marketing attribution', 'performance marketing', 'account based marketing', 'lifecycle marketing'],
  },
};

export const seo: Service = {
  slug: 'seo',
  href: '/seo',
  name: 'SEO',
  summary: 'Organic revenue that compounds — built on technical foundations, not tricks.',
  icon: 'search',
  accent: 'cyan',
  eyebrow: 'Search Engine Optimisation',
  h1: 'The channel that keeps paying after you stop.',
  lead: 'Technical foundations, content built around real buyer questions, and authority earned rather than bought — engineered for classic search and for the AI answers that increasingly sit above it.',
  heroBadge: 'Optimised for AI answer engines as well as classic search',
  visual: 'serp',
  stats: [
    { value: 214, suffix: '%', label: 'Average non-brand click growth' },
    { value: 9, suffix: ' months', label: 'Typical time to compounding returns' },
    { value: 3.4, decimals: 1, suffix: 'x', label: 'Organic pipeline contribution' },
    { value: 0, suffix: '', label: 'Tactics we would not show a search engineer' },
  ],
  problem: {
    title: 'You rank for your own name and nothing else.',
    body: 'The blog publishes weekly, the agency reports rising impressions, and the traffic that arrives never buys. Meanwhile the pages that would convert are slow, thin, or invisible to the crawler — and the AI answer above the results cites a competitor instead of you.',
    costs: [
      'Content written for keyword volume rather than buying intent',
      'Technical debt preventing indexing of the pages that matter most',
      'Authority spread thin across pages that will never rank',
      'No presence in AI-generated answers where research now starts',
      'Reporting that celebrates impressions while pipeline stays flat',
    ],
  },
  capabilities: [
    { title: 'Technical SEO', body: 'Crawl efficiency, rendering, site architecture, Core Web Vitals and index management — the foundation everything else depends on.', icon: 'settings', accent: 'cyan' },
    { title: 'Content strategy', body: 'Topic authority built around genuine buyer questions and mapped to the buying stage, not to a keyword volume spreadsheet.', icon: 'book', accent: 'blue' },
    { title: 'Answer engine optimisation', body: 'Structured, citable, well-sourced content designed to be quoted by AI answer engines rather than skipped over.', icon: 'sparkles', accent: 'violet' },
    { title: 'Structured data', body: 'Schema implemented properly across organisation, service, article, FAQ and breadcrumb — validated and monitored, not fire-and-forget.', icon: 'code', accent: 'indigo' },
    { title: 'Internal linking', body: 'Deliberate authority flow between pages so the commercial pages inherit the strength the content earns.', icon: 'link', accent: 'emerald' },
    { title: 'Digital PR and authority', body: 'Links earned through work worth citing — original data, tools and expert commentary. No purchased placements, ever.', icon: 'award', accent: 'orange' },
    { title: 'International SEO', body: 'Hreflang, market-appropriate content and per-region technical configuration for multi-market organisations.', icon: 'globe', accent: 'pink' },
    { title: 'Measurement', body: 'Rankings mapped to sessions, sessions to opportunities and opportunities to revenue, reported at the page level.', icon: 'chart-line', accent: 'blue' },
  ],
  outcomes: [
    { title: 'Technical recovery', body: 'A JavaScript-rendered site where two thirds of commercial pages were never being indexed, rebuilt for crawl and render.', result: 'Indexed pages up 3.2x in 60 days', icon: 'refresh', accent: 'cyan' },
    { title: 'Topic authority build', body: 'A structured content programme covering an entire buying category rather than scattered high-volume terms.', result: 'Top-3 rankings for 84 commercial terms', icon: 'target', accent: 'blue' },
    { title: 'AI answer visibility', body: 'Content restructured for citability with original data and clear sourcing, tracked against AI answer inclusion.', result: 'Cited in 61% of tracked AI answers', icon: 'sparkles', accent: 'violet' },
    { title: 'Migration protection', body: 'A replatform delivered with full redirect mapping, schema parity and daily monitoring through the transition.', result: 'Zero ranking loss through migration', icon: 'shield-check', accent: 'emerald' },
    { title: 'International expansion', body: 'Six new markets launched with correct hreflang, localised content and per-market technical configuration.', result: 'Non-domestic organic up 4.1x', icon: 'globe', accent: 'orange' },
    { title: 'Enterprise consolidation', body: 'Four overlapping domains merged into one authority with a careful, staged redirect and content strategy.', result: 'Combined organic traffic up 88%', icon: 'layers', accent: 'indigo' },
  ],
  steps: [
    { label: 'Month 1', title: 'Technical audit', icon: 'search', meta: '3 weeks', body: 'Crawl, render, index and performance analysis alongside a competitive gap assessment. Findings ranked by revenue impact.' },
    { label: 'Month 1–2', title: 'Fix the foundation', icon: 'settings', meta: '3–5 weeks', body: 'Technical remediation first. Content on a broken foundation is money spent on pages a crawler will not reach.' },
    { label: 'Month 2–6', title: 'Build authority', icon: 'book', meta: 'Ongoing', body: 'A content programme against genuine buyer questions, structured for both classic ranking and AI citation.' },
    { label: 'Month 6+', title: 'Compound', icon: 'trending-up', meta: 'Ongoing', body: 'Expansion into adjacent topics, refresh cycles for decaying pages, and reporting tied to pipeline rather than to rank.' },
  ],
  stack: [
    { heading: 'Analysis', items: ['Screaming Frog', 'Ahrefs', 'Semrush', 'Search Console', 'Sitebulb', 'Log file analysis'] },
    { heading: 'Measurement', items: ['GA4', 'BigQuery', 'Looker Studio', 'Rank tracking APIs', 'AI answer monitoring'] },
    { heading: 'Implementation', items: ['Next.js', 'Schema.org / JSON-LD', 'Edge rendering', 'Headless CMS', 'Core Web Vitals tooling'] },
    { heading: 'Content', items: ['Original research', 'Interactive tools', 'Expert interviews', 'Structured FAQs', 'Comparison frameworks'] },
  ],
  pricing: {
    note: 'SEO is a compounding investment and we price it that way — no long lock-ins, but be honest with yourself about the timeline. Nine months is a realistic horizon for meaningful compounding.',
    tiers: [
      {
        name: 'Technical audit',
        frame: 'Fixed price · 3 weeks',
        body: 'A full technical and competitive assessment with issues ranked by estimated revenue impact and effort.',
        includes: ['Crawl, render and index analysis', 'Core Web Vitals assessment', 'Competitive gap analysis', 'Prioritised remediation plan with estimates'],
      },
      {
        name: 'SEO programme',
        frame: 'Monthly · 6 month minimum',
        body: 'Technical work, content production and authority building run together, reported against organic pipeline.',
        includes: ['Ongoing technical optimisation', 'Content strategy and production', 'Structured data and internal linking', 'Digital PR and authority building', 'Monthly pipeline-level reporting'],
        featured: true,
      },
      {
        name: 'Enterprise SEO',
        frame: 'Quarterly · retained',
        body: 'For large or multi-market estates: governance, developer enablement, migration support and international configuration.',
        includes: ['Multi-domain and multi-market strategy', 'Developer training and SEO guardrails in CI', 'Migration and replatform support', 'International and hreflang management', 'Executive reporting'],
      },
    ],
  },
  faqs: [
    {
      question: 'How long until we see results?',
      answer: 'Technical fixes can move things within weeks — recovering unindexed pages sometimes produces immediate gains. Content and authority take longer: meaningful movement around month four, compounding returns from month nine. Anyone promising page-one rankings in thirty days is describing terms nobody searches.',
    },
    {
      question: 'Does SEO still matter now that AI answers the question directly?',
      answer: 'It matters differently. Zero-click results are real and rising. But AI answers are built from indexed content and they cite sources — so the work shifts toward being the source worth citing: structured, original, well-evidenced and technically accessible. We track AI answer inclusion alongside classic rankings because both now drive discovery.',
    },
    {
      question: 'Do you build links?',
      answer: 'We earn them. Original research, useful tools, and expert commentary that publications genuinely want to reference. We do not buy links, use private blog networks, or run guest-post schemes — those work briefly and then cost you a manual action. If a competitor is outranking you through purchased links, we will show you the risk they are carrying.',
    },
    {
      question: 'Can you work with our developers?',
      answer: 'Yes, and it is usually the fastest path. We provide specifications, review pull requests and can add SEO regression checks to your CI pipeline so fixes stay fixed. Where you have no development capacity, we implement directly.',
    },
    {
      question: 'What if we are planning a replatform?',
      answer: 'Tell us before, not after. Migration is the single most common cause of catastrophic organic loss, and it is almost entirely preventable with redirect mapping, schema parity, content preservation and pre-launch crawl comparison. Handled properly, a replatform usually improves rankings.',
    },
    {
      question: 'How do you report?',
      answer: 'Page-level organic sessions, opportunities and revenue, alongside rankings and AI answer inclusion. Rankings are a leading indicator, not the outcome. If organic pipeline is flat while rankings improve, we treat that as a problem to explain rather than a chart to highlight.',
    },
  ],
  related: [
    { label: 'Digital Marketing', href: '/digital-marketing', description: 'Paid demand alongside organic' },
    { label: 'Web Development', href: '/web-development', description: 'The technical foundation' },
    { label: 'Resources', href: '/resources', description: 'Guides and frameworks' },
    { label: 'Blog', href: '/blog', description: 'Field notes on search' },
    { label: 'Case studies', href: '/case-studies', description: 'Organic growth outcomes' },
    { label: 'Contact', href: '/contact', description: 'Start with the audit' },
  ],
  seo: {
    title: 'Enterprise SEO & Answer Engine Optimisation | CyberXSolutions',
    description:
      'Technical SEO, content strategy and authority building engineered for classic search and AI answer engines. 214% average non-brand click growth, no purchased links.',
    keywords: ['SEO agency', 'enterprise SEO', 'technical SEO', 'answer engine optimisation', 'AEO', 'generative engine optimisation', 'SEO consulting', 'international SEO'],
  },
};
