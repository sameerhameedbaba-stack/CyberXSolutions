import type { Service } from './types';

export const customSoftware: Service = {
  slug: 'custom-software-development',
  href: '/custom-software-development',
  name: 'Custom Software',
  summary: 'Systems built around how your business actually works, not how a vendor assumed it would.',
  icon: 'code',
  accent: 'cyan',
  eyebrow: 'Custom Software Development',
  h1: 'Software shaped like your business.',
  lead: 'When the off-the-shelf product forces you to work backwards, the licence stops being the cheaper option. We build the system your operation actually needs — and hand it over documented, tested and yours.',
  heroBadge: 'You own the code, the infrastructure and the roadmap',
  visual: 'blueprint',
  stats: [
    { value: 240, suffix: '+', label: 'Systems shipped to production' },
    { value: 12, suffix: ' weeks', label: 'Typical time to first release' },
    { value: 96, suffix: '%', label: 'Projects delivered on agreed scope' },
    { value: 0, suffix: '', label: 'Proprietary runtimes you cannot leave' },
  ],
  problem: {
    title: 'You are paying twice: once for the licence, once for the workaround.',
    body: 'The platform covers 70% of what you do. The other 30% lives in spreadsheets, a shared mailbox and one person who knows the exception. That gap is where your margin, your data quality and your ability to change quickly all quietly disappear.',
    costs: [
      'Process steps that exist only to work around the software',
      'Critical logic living in spreadsheets nobody has reviewed',
      'Per-seat costs rising faster than the value delivered',
      'Roadmap decisions made by a vendor with different priorities',
      'Integration work repeated every time the vendor changes an API',
    ],
  },
  capabilities: [
    { title: 'Product discovery', body: 'We map the operation, the constraints and the economics before proposing a build — including the case for buying instead.', icon: 'search', accent: 'cyan' },
    { title: 'System architecture', body: 'Boundaries, data ownership and failure modes designed deliberately, with the trade-offs written down as decision records.', icon: 'layers', accent: 'blue' },
    { title: 'Backend engineering', body: 'Typed, tested services with clear contracts, sensible transactions and observability from the first commit.', icon: 'server', accent: 'indigo' },
    { title: 'Frontend engineering', body: 'Interfaces that are fast on real hardware, usable with a keyboard and readable with a screen reader. Accessibility is not a phase.', icon: 'monitor', accent: 'violet' },
    { title: 'Data engineering', body: 'Schema design, migration strategy and reporting pipelines that keep working as volume grows by an order of magnitude.', icon: 'database', accent: 'emerald' },
    { title: 'Integration', body: 'Resilient connections to the systems you keep — with retries, idempotency and a documented contract for each one.', icon: 'plug', accent: 'orange' },
    { title: 'AI where it earns its place', body: 'Extraction, classification, search and generation added where they measurably beat the deterministic alternative, and left out where they do not.', icon: 'sparkles', accent: 'pink' },
    { title: 'Quality engineering', body: 'Automated tests at the levels that matter, load testing against realistic traffic, and a pipeline that blocks regressions rather than reporting them.', icon: 'check-circle', accent: 'blue' },
  ],
  outcomes: [
    { title: 'Operations platform', body: 'A national service business replaced eleven tools and four spreadsheets with one scheduling, dispatch and billing system.', result: 'Admin headcount per branch cut 40%', icon: 'briefcase', accent: 'cyan' },
    { title: 'Underwriting workbench', body: 'Submission intake, risk scoring and referral routing in one interface, with the model explanation shown inline for every decision.', result: 'Quote turnaround from 4 days to 6 hours', icon: 'file-text', accent: 'blue' },
    { title: 'Clinical coordination', body: 'Care-pathway tracking across three provider systems with a single patient timeline and audited access.', result: '31% reduction in avoidable readmission follow-up', icon: 'heart-pulse', accent: 'emerald' },
    { title: 'Trading operations', body: 'Position, limit and exposure monitoring rebuilt with sub-second updates and a full reconstruction trail for compliance.', result: 'End-of-day reconciliation from 3 hours to 8 minutes', icon: 'chart-line', accent: 'violet' },
    { title: 'Field service', body: 'Offline-capable mobile work orders with automatic sync, parts availability and photographic evidence capture.', result: 'First-time fix rate up 22 points', icon: 'truck', accent: 'orange' },
    { title: 'Partner portal', body: 'Self-service onboarding, quoting and claim submission for 2,400 partners, replacing an inbox and a spreadsheet.', result: 'Partner support tickets down 71%', icon: 'handshake', accent: 'indigo' },
  ],
  steps: [
    { label: 'Phase 1', title: 'Discovery', icon: 'search', meta: '2–3 weeks', body: 'Workshops with the people who do the work, a systems and data map, and a costed recommendation — which sometimes says do not build this.' },
    { label: 'Phase 2', title: 'Architecture and proof', icon: 'layers', meta: '2 weeks', body: 'The design, the decision records, and a thin slice through the riskiest part of the system to prove the approach before scale-up.' },
    { label: 'Phase 3', title: 'Build in the open', icon: 'code', meta: '8–20 weeks', body: 'Two-week increments, always deployable, demonstrated to real users. You see progress in a running system rather than a status report.' },
    { label: 'Phase 4', title: 'Launch and hand over', icon: 'handshake', meta: '2 weeks + support', body: 'Staged rollout with a rollback path, then documentation, runbooks and training so your team can own it outright.' },
  ],
  stack: [
    { heading: 'Languages', items: ['TypeScript', 'Python', 'Go', 'Rust', 'C#', 'Kotlin'] },
    { heading: 'Frameworks', items: ['Next.js', 'React', 'NestJS', 'FastAPI', 'Django', '.NET'] },
    { heading: 'Data', items: ['PostgreSQL', 'ClickHouse', 'Redis', 'Kafka', 'Elasticsearch', 'S3'] },
    { heading: 'Delivery', items: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'OpenTelemetry', 'Playwright'] },
  ],
  pricing: {
    note: 'For well-defined scope we quote a fixed price and hold it. For genuinely exploratory work we run time-boxed increments with a hard budget and a stop point at every boundary.',
    tiers: [
      {
        name: 'Discovery',
        frame: 'Fixed price · 2–3 weeks',
        body: 'The systems map, the architecture, the estimate and an honest build-versus-buy recommendation. Yours to take anywhere.',
        includes: ['Stakeholder and user workshops', 'Systems and data mapping', 'Solution architecture', 'Costed delivery plan and build-vs-buy analysis'],
      },
      {
        name: 'Fixed-scope build',
        frame: 'Fixed price · 12–24 weeks',
        body: 'A defined system delivered to a defined number. Change requests are priced openly rather than absorbed into a drifting estimate.',
        includes: ['Full design and engineering', 'Automated test suite and CI/CD', 'Infrastructure as code', 'Documentation and runbooks', 'Training and handover'],
        featured: true,
      },
      {
        name: 'Product partnership',
        frame: 'Monthly · rolling',
        body: 'A standing team for products that keep evolving. Predictable monthly cost, quarterly roadmap, and no minimum term beyond 60 days.',
        includes: ['Dedicated cross-functional team', 'Continuous delivery', 'Product and design capability included', 'Quarterly roadmap planning', 'Production support and on-call'],
      },
    ],
  },
  faqs: [
    {
      question: 'Should we build or buy?',
      answer: 'Buy, unless the process is genuinely a source of competitive advantage or no product fits without heavy workaround. Discovery answers this properly, and we have told clients to buy often enough that it is a standing possible outcome rather than a courtesy. We would rather lose a build than deliver one you did not need.',
    },
    {
      question: 'Who owns the code?',
      answer: 'You do — from the first commit, in your repositories, under your licence. There is no shared IP clause and no proprietary framework you have to keep paying for. If you take the codebase to another firm tomorrow, they can pick it up from the documentation.',
    },
    {
      question: 'How do you keep a fixed price honest?',
      answer: 'By only quoting fixed on scope that discovery has properly defined. If we cannot describe it precisely, we will not price it fixed — we will run time-boxed increments with a hard budget instead. Quoting fixed on vague scope is how projects end in disputes.',
    },
    {
      question: 'What happens if requirements change mid-build?',
      answer: 'They will. We work in two-week increments specifically so change is cheap to absorb. Small adjustments are handled inside the increment. Anything material gets estimated and quoted before it enters the plan, so you always decide with the cost visible.',
    },
    {
      question: 'Do you work with our existing engineering team?',
      answer: 'Frequently, and it is usually the better outcome. Your engineers know the domain; we bring delivery velocity and specialist depth. We pair deliberately so capability stays with you when we leave.',
    },
    {
      question: 'What about maintenance after launch?',
      answer: 'Your choice. Many clients take it in-house immediately — that is what the documentation and training are for. Others keep us on a support retainer for a year while their team builds familiarity. We do not make ongoing support a condition of the build.',
    },
  ],
  related: [
    { label: 'Web Development', href: '/web-development', description: 'Customer-facing platforms and sites' },
    { label: 'Mobile Development', href: '/mobile-development', description: 'iOS and Android applications' },
    { label: 'Cloud Engineering', href: '/cloud-engineering', description: 'Where it runs and how it scales' },
    { label: 'AI Automation', href: '/ai-automation', description: 'Automating the processes around it' },
    { label: 'Technologies', href: '/technologies', description: 'Our engineering stack' },
    { label: 'Process', href: '/process', description: 'How we deliver' },
  ],
  seo: {
    title: 'Custom Software Development for Enterprise | CyberXSolutions',
    description:
      'Custom platforms, internal tools and line-of-business systems built to fit your operation. Fixed-scope pricing, full code ownership, documented handover. 240+ systems in production.',
    keywords: ['custom software development', 'bespoke software', 'enterprise software development', 'software development company', 'custom application development', 'legacy modernisation', 'internal tools'],
  },
};

export const webDevelopment: Service = {
  slug: 'web-development',
  href: '/web-development',
  name: 'Web Development',
  summary: 'Fast, accessible, beautiful web platforms that turn traffic into pipeline.',
  icon: 'web',
  accent: 'blue',
  eyebrow: 'Web Development',
  h1: 'A website that carries its own weight.',
  lead: 'Most enterprise sites are expensive brochures that load slowly and convert badly. We build web platforms that are fast on a bad connection, usable by everyone, and measurably responsible for revenue.',
  heroBadge: 'Core Web Vitals budgets enforced in CI',
  visual: 'web',
  stats: [
    { value: 0.9, decimals: 1, suffix: 's', label: 'Typical largest contentful paint' },
    { value: 100, suffix: '', label: 'Lighthouse accessibility score' },
    { value: 64, suffix: '%', label: 'Average lift in qualified enquiries' },
    { value: 2.2, decimals: 1, suffix: 'x', label: 'Improvement in organic entry pages' },
  ],
  problem: {
    title: 'Your site looks fine on the agency laptop.',
    body: 'On a mid-range phone on a train it takes six seconds, the layout jumps, and the form fails silently. Meanwhile every content change needs a developer, and nobody can tell you which pages actually produce pipeline. The site is a cost centre pretending to be a channel.',
    costs: [
      'Slow pages losing visitors before the first paint completes',
      'Content changes queued behind an engineering backlog',
      'Accessibility gaps creating both exclusion and legal exposure',
      'No reliable link between page performance and pipeline',
      'A design system that exists in Figma but not in the code',
    ],
  },
  capabilities: [
    { title: 'Experience design', body: 'Information architecture, narrative and interface design that respect how buyers actually read — skimming, on a phone, mid-task.', icon: 'wand', accent: 'violet' },
    { title: 'Front-end engineering', body: 'Modern React and Next.js with server rendering, aggressive caching and a performance budget enforced in the build pipeline.', icon: 'code', accent: 'blue' },
    { title: 'Design systems', body: 'A component library that exists once, in code, with design tokens shared between engineering and design so the two cannot drift.', icon: 'layers', accent: 'cyan' },
    { title: 'Headless content', body: 'Editors publish without a ticket. Preview, scheduling, localisation and structured content that survives a redesign.', icon: 'file-text', accent: 'emerald' },
    { title: 'Accessibility', body: 'WCAG 2.2 AA as the floor, verified with keyboard, screen reader and automated auditing in CI — not signed off from a checklist.', icon: 'users', accent: 'indigo' },
    { title: 'Technical SEO', body: 'Semantic structure, structured data, clean internal linking and render-safe architecture, built in rather than retro-fitted.', icon: 'search', accent: 'orange' },
    { title: 'Conversion engineering', body: 'Instrumented journeys, tested hypotheses and forms that work — measured against pipeline, not vanity engagement.', icon: 'target', accent: 'pink' },
    { title: 'Analytics and privacy', body: 'Server-side measurement, consent handling and attribution you can defend to both a regulator and a CFO.', icon: 'chart-bar', accent: 'blue' },
  ],
  outcomes: [
    { title: 'Enterprise marketing site', body: 'A 300-page site rebuilt on a headless stack with a shared design system and editor-owned publishing.', result: 'Publish time from 9 days to 40 minutes', icon: 'globe', accent: 'blue' },
    { title: 'Product-led signup', body: 'Onboarding flow rebuilt around the moment users understood value, with instrumentation on every step.', result: 'Trial-to-paid conversion up 38%', icon: 'trending-up', accent: 'violet' },
    { title: 'Customer portal', body: 'Self-service account, billing and support surface replacing a call queue, with SSO and full audit history.', result: 'Inbound support contacts down 44%', icon: 'monitor', accent: 'cyan' },
    { title: 'Global rollout', body: 'One platform, nine locales, regional content governance and per-market performance budgets.', result: 'Non-English organic traffic up 3.1x', icon: 'network', accent: 'emerald' },
    { title: 'E-commerce replatform', body: 'Composable commerce with edge rendering and a checkout rebuilt around the drop-off data rather than assumptions.', result: 'Checkout completion up 26%', icon: 'cart', accent: 'orange' },
    { title: 'Accessibility remediation', body: 'A legacy platform brought to WCAG 2.2 AA with an automated regression suite so it stays there.', result: 'From 41 blocking issues to zero', icon: 'shield-check', accent: 'indigo' },
  ],
  steps: [
    { label: 'Phase 1', title: 'Strategy and audit', icon: 'search', meta: '2 weeks', body: 'Analytics review, technical audit, competitor teardown and interviews with the buyers you actually want. Findings, not opinions.' },
    { label: 'Phase 2', title: 'Design the system', icon: 'wand', meta: '3–4 weeks', body: 'Narrative, information architecture and a component system designed as code from the outset rather than handed over as pictures.' },
    { label: 'Phase 3', title: 'Build and instrument', icon: 'code', meta: '6–12 weeks', body: 'Engineering with performance and accessibility budgets in CI, content modelling, and analytics wired before launch rather than after.' },
    { label: 'Phase 4', title: 'Launch and improve', icon: 'trending-up', meta: 'Ongoing', body: 'Staged launch with redirect mapping, then a continuous testing programme against pipeline metrics rather than page views.' },
  ],
  stack: [
    { heading: 'Framework', items: ['Next.js', 'React', 'TypeScript', 'Astro', 'Remix', 'Tailwind CSS'] },
    { heading: 'Content', items: ['Sanity', 'Contentful', 'Storyblok', 'Payload', 'Strapi', 'Markdown / MDX'] },
    { heading: 'Infrastructure', items: ['Vercel', 'AWS CloudFront', 'Cloudflare', 'Netlify', 'Edge runtimes'] },
    { heading: 'Quality', items: ['Playwright', 'axe-core', 'Lighthouse CI', 'Vitest', 'Percy', 'Sentry'] },
  ],
  pricing: {
    note: 'Web projects are quoted fixed against a defined page and component inventory. Ongoing optimisation is separate and cancellable, because it should have to prove itself monthly.',
    tiers: [
      {
        name: 'Audit & strategy',
        frame: 'Fixed price · 2 weeks',
        body: 'Performance, accessibility, SEO and conversion audit with a prioritised plan and effort estimates. Useful whether or not we build it.',
        includes: ['Technical and performance audit', 'Accessibility assessment', 'Conversion and analytics review', 'Prioritised roadmap with estimates'],
      },
      {
        name: 'Platform build',
        frame: 'Fixed price · 8–16 weeks',
        body: 'Design, build and launch on a modern stack, with a design system and a CMS your marketing team can actually run.',
        includes: ['Experience and interface design', 'Coded design system', 'Headless CMS implementation', 'Performance and accessibility budgets in CI', 'Analytics, SEO and launch migration'],
        featured: true,
      },
      {
        name: 'Growth retainer',
        frame: 'Monthly · rolling',
        body: 'Continuous testing, new pages and campaign surfaces, measured against pipeline contribution rather than traffic.',
        includes: ['Monthly experiment programme', 'New page and component delivery', 'Performance and accessibility monitoring', 'Reporting tied to pipeline'],
      },
    ],
  },
  faqs: [
    {
      question: 'Can our marketing team edit the site without a developer?',
      answer: 'Yes, and this is a first-class requirement rather than a nice-to-have. We model content properly, build reusable blocks, and give editors preview and scheduling. Typical outcome: a page change goes from a two-week ticket to a fifteen-minute task.',
    },
    {
      question: 'Will you use WordPress?',
      answer: 'Only if it genuinely fits — usually where an existing plugin ecosystem or editorial workflow is a hard requirement. Our default is a modern headless stack because it is faster, more secure and much cheaper to maintain at enterprise scale. We will explain the trade-off rather than push a preference.',
    },
    {
      question: 'How do you guarantee performance?',
      answer: 'Budgets in continuous integration. A pull request that pushes largest contentful paint past the agreed threshold fails the build and does not merge. It is the only approach that survives contact with a busy team, because performance otherwise erodes one component at a time.',
    },
    {
      question: 'What about SEO during a replatform?',
      answer: 'Redirect mapping, structured data parity, content preservation and a crawl comparison before and after go-live. We monitor rankings daily for the first month. Handled properly, replatforms are usually a ranking gain rather than a risk — the losses come from skipping this work.',
    },
    {
      question: 'Do you handle branding and visual identity?',
      answer: 'We design digital brand expression — typography, colour systems, motion, illustration and component design. For full corporate identity work including print and naming we will bring in a specialist partner rather than pretend it is our core discipline.',
    },
    {
      question: 'How long does a typical enterprise site take?',
      answer: 'Eight to sixteen weeks from kickoff for a substantial marketing platform, depending on page count, integrations and content readiness. Content is almost always the critical path, so we start that stream in week one rather than waiting for design.',
    },
  ],
  related: [
    { label: 'SEO', href: '/seo', description: 'Making the platform earn organic revenue' },
    { label: 'Digital Marketing', href: '/digital-marketing', description: 'Driving qualified traffic to it' },
    { label: 'Custom Software', href: '/custom-software-development', description: 'Systems behind the interface' },
    { label: 'Mobile Development', href: '/mobile-development', description: 'Native applications' },
    { label: 'Technologies', href: '/technologies', description: 'Our front-end stack' },
    { label: 'Case studies', href: '/case-studies', description: 'Measured outcomes' },
  ],
  seo: {
    title: 'Enterprise Web Development & Design | CyberXSolutions',
    description:
      'High-performance web platforms built on Next.js: sub-second loads, WCAG 2.2 AA accessibility, headless CMS and conversion engineering measured against pipeline.',
    keywords: ['web development', 'enterprise web development', 'Next.js development', 'headless CMS', 'web design agency', 'Core Web Vitals', 'accessible web development', 'React development'],
  },
};

export const mobileDevelopment: Service = {
  slug: 'mobile-development',
  href: '/mobile-development',
  name: 'Mobile Development',
  summary: 'iOS and Android applications people keep on the first screen.',
  icon: 'mobile',
  accent: 'pink',
  eyebrow: 'Mobile Development',
  h1: 'An app that survives the second week.',
  lead: 'Most enterprise apps get installed once and buried in a folder. We build mobile products around a job people genuinely need done on a phone — fast, offline-capable, and worth opening again.',
  heroBadge: 'Offline-first architecture as standard',
  visual: 'mobile',
  stats: [
    { value: 4.8, decimals: 1, suffix: '', label: 'Average store rating at launch' },
    { value: 62, suffix: '%', label: 'Thirty-day retention, median' },
    { value: 1.1, decimals: 1, suffix: 's', label: 'Cold start on mid-range Android' },
    { value: 40, suffix: '%', label: 'Less code with a shared core' },
  ],
  problem: {
    title: 'The app exists because someone said the company needed one.',
    body: 'It wraps the website, needs a connection to do anything useful, and asks for a login before showing any value. Field teams keep using paper because paper works in a basement. The build cost was real; the usage never was.',
    costs: [
      'Features ported from desktop that make no sense on a phone',
      'Anything meaningful failing the moment connectivity drops',
      'Two separate codebases drifting apart release by release',
      'Release cycles measured in months because of manual QA',
      'No instrumentation, so nobody knows which features are used',
    ],
  },
  capabilities: [
    { title: 'Native engineering', body: 'Swift and Kotlin where platform depth matters — background processing, hardware access, widgets, and genuine platform feel.', icon: 'mobile', accent: 'pink' },
    { title: 'Cross-platform', body: 'React Native and Flutter where a shared core is the right economics, with native modules for the parts that need them.', icon: 'layers', accent: 'violet' },
    { title: 'Offline-first', body: 'Local persistence, conflict-aware sync and queued actions, so the app works in a basement, a warehouse or a tunnel.', icon: 'refresh', accent: 'blue' },
    { title: 'Mobile UX', body: 'Thumb-reachable layouts, forgiving targets, and flows designed for one hand, bright sunlight and interruption.', icon: 'wand', accent: 'cyan' },
    { title: 'Security', body: 'Certificate pinning, secure enclave storage, biometric authentication and jailbreak detection where the threat model calls for it.', icon: 'lock', accent: 'emerald' },
    { title: 'Release engineering', body: 'Automated builds, staged rollouts, crash monitoring and over-the-air updates for the layers that permit them.', icon: 'git-branch', accent: 'indigo' },
    { title: 'Device integration', body: 'Camera, scanning, location, NFC, Bluetooth and printing — handled properly rather than as an afterthought.', icon: 'plug', accent: 'orange' },
    { title: 'Product analytics', body: 'Funnels, retention cohorts and feature adoption instrumented at launch, so decisions are made on evidence.', icon: 'chart-line', accent: 'blue' },
  ],
  outcomes: [
    { title: 'Field service app', body: 'Work orders, parts lookup, photo evidence and signature capture, fully functional with no signal and syncing when it returns.', result: 'Paper forms eliminated across 900 technicians', icon: 'truck', accent: 'pink' },
    { title: 'Frontline operations', body: 'Shift handover, task assignment and incident reporting designed for gloves, noise and a two-minute window.', result: 'Reporting compliance from 54% to 96%', icon: 'users', accent: 'violet' },
    { title: 'Customer self-service', body: 'Account, billing, scheduling and support in one app with biometric sign-in and push that people did not disable.', result: 'Call centre volume down 33%', icon: 'headset', accent: 'blue' },
    { title: 'Clinical companion', body: 'Medication adherence, symptom logging and care-team messaging built to HIPAA requirements end to end.', result: '71% weekly active use at six months', icon: 'heart-pulse', accent: 'emerald' },
    { title: 'Warehouse scanning', body: 'High-throughput barcode workflows with sub-second scan-to-confirm and hardware scanner support.', result: 'Pick accuracy up to 99.7%', icon: 'box', accent: 'cyan' },
    { title: 'Executive dashboard', body: 'Secure mobile access to operating metrics with offline snapshots and device-level attestation.', result: 'Daily executive engagement up 4.4x', icon: 'chart-bar', accent: 'indigo' },
  ],
  steps: [
    { label: 'Phase 1', title: 'Find the mobile job', icon: 'search', meta: '2 weeks', body: 'Shadowing real users in their real environment. Half of mobile scope dies here, correctly — desktop work does not become useful by shrinking.' },
    { label: 'Phase 2', title: 'Prototype on device', icon: 'wand', meta: '2–3 weeks', body: 'Interactive prototypes tested on the actual hardware your users carry, not a simulator on a fast laptop.' },
    { label: 'Phase 3', title: 'Build and harden', icon: 'code', meta: '10–16 weeks', body: 'Engineering with device-lab testing, offline scenarios, low-end hardware benchmarks and security review before submission.' },
    { label: 'Phase 4', title: 'Launch and iterate', icon: 'rocket', meta: 'Ongoing', body: 'Store submission, staged rollout, crash and adoption monitoring, then a release cadence driven by usage evidence.' },
  ],
  stack: [
    { heading: 'Native', items: ['Swift', 'SwiftUI', 'Kotlin', 'Jetpack Compose', 'Core Data', 'Room'] },
    { heading: 'Cross-platform', items: ['React Native', 'Flutter', 'Expo', 'Kotlin Multiplatform'] },
    { heading: 'Backend', items: ['GraphQL', 'REST', 'Firebase', 'Supabase', 'AWS Amplify', 'WebSockets'] },
    { heading: 'Operations', items: ['Fastlane', 'Bitrise', 'Sentry', 'Firebase Crashlytics', 'TestFlight', 'Play Console'] },
  ],
  pricing: {
    note: 'Mobile is quoted per platform against a defined feature set. A shared core across iOS and Android typically reduces total cost by 30–40% where the product allows it.',
    tiers: [
      {
        name: 'Product definition',
        frame: 'Fixed price · 3 weeks',
        body: 'Field research, a tested prototype on real devices, and a straight answer on whether the app should be built.',
        includes: ['On-site user research', 'Interactive device prototype', 'Technical approach and platform recommendation', 'Costed delivery plan'],
      },
      {
        name: 'App build',
        frame: 'Fixed scope · 12–20 weeks',
        body: 'Design, engineering and store launch on both platforms, with offline capability, security review and analytics from day one.',
        includes: ['iOS and Android delivery', 'Offline-first architecture', 'Security review and penetration test', 'CI/CD and staged release pipeline', 'Store submission and launch support'],
        featured: true,
      },
      {
        name: 'Ongoing product',
        frame: 'Monthly · rolling',
        body: 'A standing team keeping pace with OS releases, device changes and the roadmap that emerges once real users arrive.',
        includes: ['Continuous feature delivery', 'OS and device compatibility maintenance', 'Crash and performance monitoring', 'Quarterly usage review and roadmap'],
      },
    ],
  },
  faqs: [
    {
      question: 'Native or cross-platform?',
      answer: 'It depends on what the app has to do. Heavy hardware use, background processing or genuine platform-idiomatic feel favours native. Forms, data and content-driven products favour a shared core — usually 30–40% cheaper with no meaningful user-visible difference. We decide during product definition with your specific feature list, not by preference.',
    },
    {
      question: 'Do we really need offline support?',
      answer: 'If anyone will use this in a warehouse, basement, vehicle, hospital or rural site, then yes — and building it in later is far more expensive than designing for it from the start. If the app is purely for connected office use, we will skip it and say so.',
    },
    {
      question: 'How do you handle app store review?',
      answer: 'We manage submission end to end and design against the guidelines from the first sprint, which is where most rejections are actually avoided. Where a rejection happens we handle the appeal. Typical first-review turnaround is one to three days on both stores.',
    },
    {
      question: 'What about existing apps we already have?',
      answer: 'We audit before recommending. Sometimes the right answer is incremental modernisation of what exists; sometimes the codebase is costing more to maintain than to replace. We will show you the maintenance cost curve either way rather than defaulting to a rebuild.',
    },
    {
      question: 'How do you test across devices?',
      answer: 'A physical device lab for the models your users actually carry — including the three-year-old mid-range Android that most testing ignores — plus cloud device farms for breadth and automated UI tests in CI.',
    },
    {
      question: 'Can the app work with our existing systems?',
      answer: 'Yes. Mobile is usually the easiest integration surface because we build a purpose-fit API layer between the app and your systems rather than forcing the app to speak to a legacy platform directly. That layer also gives you caching, versioning and a security boundary.',
    },
  ],
  related: [
    { label: 'Web Development', href: '/web-development', description: 'Web platforms and portals' },
    { label: 'Custom Software', href: '/custom-software-development', description: 'The systems behind the app' },
    { label: 'Cloud Engineering', href: '/cloud-engineering', description: 'Backend infrastructure and scale' },
    { label: 'AI Agents', href: '/ai-agents', description: 'Intelligence inside the product' },
    { label: 'Industries', href: '/industries', description: 'Sector deployments' },
    { label: 'Process', href: '/process', description: 'How we deliver' },
  ],
  seo: {
    title: 'iOS & Android App Development | CyberXSolutions',
    description:
      'Native and cross-platform mobile applications with offline-first architecture, biometric security and analytics from launch. 62% median 30-day retention.',
    keywords: ['mobile app development', 'iOS development', 'Android development', 'React Native development', 'Flutter development', 'enterprise mobile apps', 'offline-first apps'],
  },
};

export const cloudEngineering: Service = {
  slug: 'cloud-engineering',
  href: '/cloud-engineering',
  name: 'Cloud Engineering',
  summary: 'Infrastructure that scales quietly, recovers fast and costs less than it did.',
  icon: 'cloud',
  accent: 'emerald',
  eyebrow: 'Cloud Engineering & DevOps',
  h1: 'Infrastructure you stop thinking about.',
  lead: 'Platforms that absorb a traffic spike without a war room, rebuild themselves from code after a failure, and cost roughly a third less than the setup they replaced.',
  heroBadge: '99.99% availability across managed environments',
  visual: 'cloud',
  stats: [
    { value: 99.99, decimals: 2, suffix: '%', label: 'Availability across managed platforms' },
    { value: 38, suffix: '%', label: 'Average reduction in cloud spend' },
    { value: 8, suffix: ' min', label: 'Median recovery time objective' },
    { value: 24, suffix: 'x', label: 'Increase in deployment frequency' },
  ],
  problem: {
    title: 'Nobody knows what half of it does, and nobody wants to turn it off.',
    body: 'The bill grows every quarter. Deployments happen on Thursday nights because that is when someone is free to watch. Disaster recovery is a document that has never been tested. And the one engineer who understands the networking is on holiday.',
    costs: [
      'Cloud spend rising with no clear link to usage or revenue',
      'Manual deployments that require the same person every time',
      'Infrastructure changes made in a console and never recorded',
      'A recovery plan that has never actually been rehearsed',
      'Environments that cannot be recreated from scratch',
    ],
  },
  capabilities: [
    { title: 'Cloud architecture', body: 'Landing zones, account structure, network design and workload placement designed for how you actually operate.', icon: 'cloud', accent: 'emerald' },
    { title: 'Infrastructure as code', body: 'Everything in Terraform, reviewed, versioned and reproducible. Console changes get detected and reverted, not tolerated.', icon: 'code', accent: 'blue' },
    { title: 'Kubernetes platforms', body: 'Cluster design, multi-tenancy, autoscaling and a developer experience that does not require every engineer to learn it.', icon: 'box', accent: 'cyan' },
    { title: 'CI/CD', body: 'Pipelines with automated testing, progressive delivery and one-command rollback. Deployment stops being an event.', icon: 'git-branch', accent: 'violet' },
    { title: 'Observability', body: 'Metrics, logs and traces unified, with alerts tied to user-facing symptoms rather than to every twitch of CPU.', icon: 'activity', accent: 'indigo' },
    { title: 'Cost engineering', body: 'Rightsizing, commitment strategy, storage lifecycle and workload scheduling — with the savings attributed and tracked.', icon: 'banknote', accent: 'orange' },
    { title: 'Resilience', body: 'Failure modes identified, recovery objectives agreed, and recovery actually rehearsed on a schedule rather than assumed.', icon: 'shield', accent: 'pink' },
    { title: 'Migration', body: 'Moving off legacy hosting or between clouds in stages, with a rollback path at every step and no big-bang weekend.', icon: 'refresh', accent: 'blue' },
  ],
  outcomes: [
    { title: 'Platform modernisation', body: 'A monolith on ageing virtual machines moved to containers with autoscaling and a reproducible environment definition.', result: 'Infrastructure cost down 41%, deploys up 24x', icon: 'server', accent: 'emerald' },
    { title: 'Cost recovery', body: 'Rightsizing, savings-plan strategy, storage tiering and shutdown schedules for non-production environments.', result: '$1.9M annualised saving in 90 days', icon: 'banknote', accent: 'blue' },
    { title: 'Multi-region resilience', body: 'Active-active deployment across regions with automated failover and quarterly rehearsed recovery.', result: 'Recovery time from 6 hours to 8 minutes', icon: 'globe', accent: 'cyan' },
    { title: 'Developer platform', body: 'Self-service environments, golden paths and paved-road templates so teams ship without waiting on infrastructure.', result: 'Environment provisioning from 3 weeks to 20 minutes', icon: 'terminal', accent: 'violet' },
    { title: 'Compliance-ready landing zone', body: 'Account structure, guardrails and policy as code aligned to HIPAA and SOC 2 from the first deployment.', result: 'Audit findings reduced to zero', icon: 'shield-check', accent: 'indigo' },
    { title: 'AI workload platform', body: 'GPU scheduling, model serving, inference caching and cost attribution per team and per workload.', result: 'Inference cost per request down 61%', icon: 'cpu', accent: 'orange' },
  ],
  steps: [
    { label: 'Stage 1', title: 'Assess', icon: 'search', meta: '2 weeks', body: 'Architecture review, cost analysis, resilience testing and a security posture check. You get findings ranked by risk and by dollars.' },
    { label: 'Stage 2', title: 'Codify', icon: 'code', meta: '3–6 weeks', body: 'Existing infrastructure captured in code, environments made reproducible, and drift detection turned on before anything is changed.' },
    { label: 'Stage 3', title: 'Improve', icon: 'trending-up', meta: '6–16 weeks', body: 'Migration, platform build, pipeline automation and cost work, sequenced so each step stands alone and can be stopped.' },
    { label: 'Stage 4', title: 'Operate or hand over', icon: 'handshake', meta: 'Ongoing', body: 'We run it, or we train your team and step back. Both paths end with your team able to operate the platform.' },
  ],
  stack: [
    { heading: 'Clouds', items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Cloudflare', 'On-premises hybrid'] },
    { heading: 'Platform', items: ['Kubernetes', 'Terraform', 'Pulumi', 'Helm', 'Argo CD', 'Crossplane'] },
    { heading: 'Observability', items: ['Datadog', 'Grafana', 'Prometheus', 'OpenTelemetry', 'Loki', 'PagerDuty'] },
    { heading: 'Delivery', items: ['GitHub Actions', 'GitLab CI', 'Docker', 'Vault', 'SOPS', 'Chaos testing'] },
  ],
  pricing: {
    note: 'Cost optimisation work is often self-funding — we will show you the projected saving before you commit, and several clients have run the first engagement against the savings alone.',
    tiers: [
      {
        name: 'Cloud assessment',
        frame: 'Fixed price · 2 weeks',
        body: 'Architecture, cost, resilience and security reviewed together, with a ranked plan and a quantified savings estimate.',
        includes: ['Architecture and security review', 'Detailed cost breakdown and savings model', 'Resilience and recovery testing', 'Prioritised remediation roadmap'],
      },
      {
        name: 'Platform build',
        frame: 'Fixed scope · 8–20 weeks',
        body: 'Landing zone, Kubernetes platform, pipelines and observability — everything in code, everything reproducible.',
        includes: ['Infrastructure as code across all environments', 'CI/CD with progressive delivery', 'Observability and alerting', 'Disaster recovery design and rehearsal', 'Team enablement and documentation'],
        featured: true,
      },
      {
        name: 'Managed platform',
        frame: 'Monthly · 24/7',
        body: 'We operate the platform: on-call, patching, capacity, cost management and continuous improvement against agreed SLOs.',
        includes: ['24/7 on-call and incident response', 'Patching and upgrade management', 'Continuous cost optimisation', 'Quarterly resilience exercises', 'SLO reporting'],
      },
    ],
  },
  faqs: [
    {
      question: 'How much can we realistically save?',
      answer: 'Across our engagements the average is 38%, and the assessment gives you a specific number for your estate before you commit to anything. The biggest wins are usually rightsizing, non-production shutdown schedules, storage lifecycle policy and commitment strategy — rarely anything exotic.',
    },
    {
      question: 'Should we be multi-cloud?',
      answer: 'Usually not. Multi-cloud for resilience is expensive and rarely delivers the resilience people imagine; multi-region within one provider handles most of it far more cheaply. Multi-cloud makes sense for specific workload placement, acquisitions or genuine regulatory requirements. We will argue against it when it is being chosen for the wrong reason.',
    },
    {
      question: 'Do we need Kubernetes?',
      answer: 'Often no. For a handful of services, managed container platforms or serverless are simpler and cheaper to operate. Kubernetes earns its complexity when you have many teams, many services or genuine portability requirements. We have talked more clients out of it than into it.',
    },
    {
      question: 'How do you migrate without downtime?',
      answer: 'In stages, with both environments running in parallel and traffic shifted progressively behind a routing layer. Every step has a rollback path that has been tested. It takes longer than a weekend cutover and it is the reason our migrations do not appear on your incident record.',
    },
    {
      question: 'Can you work with our existing DevOps team?',
      answer: 'Yes, and that is the usual arrangement. We bring depth in the areas they have not had time to build and we pair deliberately so it stays with them. Our objective is to make ourselves unnecessary on the operational side.',
    },
    {
      question: 'What if our workloads have to stay on-premises?',
      answer: 'Then they stay. We build hybrid platforms with consistent tooling across both, so your team is not maintaining two entirely separate operational models. Data residency, latency and sunk hardware cost are all legitimate reasons not to move.',
    },
  ],
  related: [
    { label: 'AI Cybersecurity', href: '/ai-cybersecurity', description: 'Securing the platform' },
    { label: 'Custom Software', href: '/custom-software-development', description: 'What runs on it' },
    { label: 'Enterprise Solutions', href: '/enterprise-solutions', description: 'Platform strategy at scale' },
    { label: 'AI Automation', href: '/ai-automation', description: 'Automating operations' },
    { label: 'Technologies', href: '/technologies', description: 'Our infrastructure stack' },
    { label: 'Why choose us', href: '/why-choose-us', description: 'How we work' },
  ],
  seo: {
    title: 'Cloud Engineering & DevOps Services | CyberXSolutions',
    description:
      'Cloud architecture, Kubernetes platforms, infrastructure as code and FinOps. 99.99% availability, 38% average cost reduction, 8-minute recovery objectives.',
    keywords: ['cloud engineering', 'DevOps services', 'Kubernetes consulting', 'AWS consulting', 'Azure consulting', 'infrastructure as code', 'cloud migration', 'FinOps', 'site reliability engineering'],
  },
};
