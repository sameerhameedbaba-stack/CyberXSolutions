export type Industry = {
  slug: string;
  name: string;
  icon: string;
  accent: 'blue' | 'violet' | 'cyan' | 'emerald' | 'orange' | 'pink' | 'indigo';
  headline: string;
  body: string;
  pressures: string[];
  work: { title: string; result: string }[];
  compliance: string[];
};

export const industries: Industry[] = [
  {
    slug: 'financial-services',
    name: 'Financial Services',
    icon: 'banknote',
    accent: 'blue',
    headline: 'Automation that can survive a regulator asking why.',
    body: 'Banks, insurers and asset managers do not lack automation ambition — they lack automation they can evidence. We build systems where every decision carries its reasoning, every model has documentation, and every action is reconstructable years later.',
    pressures: [
      'Model risk documentation demanded before deployment, not after',
      'Manual reconciliation consuming finance capacity at month-end',
      'KYC and onboarding cycles measured in weeks, not minutes',
      'Legacy core systems that cannot be replaced but must be integrated',
    ],
    work: [
      { title: 'Claims and underwriting triage', result: 'Quote turnaround 4 days → 6 hours' },
      { title: 'Reconciliation and exception handling', result: 'Close cycle shortened by 71%' },
      { title: 'KYC and onboarding automation', result: 'Time to first value down 64%' },
      { title: 'Identity threat detection', result: 'Credential compromise dwell time: 41 seconds' },
    ],
    compliance: ['SOC 2 Type II', 'PCI DSS', 'SOX controls', 'Model risk (SR 11-7)', 'GDPR'],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare & Life Sciences',
    icon: 'heart-pulse',
    accent: 'emerald',
    headline: 'Clinical time back, without touching clinical judgement.',
    body: 'The administrative load around care is where the burnout lives. We automate the coordination, documentation and prior-authorisation work that surrounds clinicians — and we stay firmly out of the diagnostic decision itself.',
    pressures: [
      'Prior authorisation consuming hours of clinical staff time daily',
      'Patient data fragmented across systems that do not speak',
      'HIPAA obligations that make most AI tooling a non-starter',
      'Staffing shortages making manual coordination unsustainable',
    ],
    work: [
      { title: 'Prior authorisation automation', result: 'Submission-to-decision cut 78%' },
      { title: 'Care coordination platform', result: 'Avoidable follow-up down 31%' },
      { title: 'Clinical documentation support', result: '96 minutes returned per clinician per day' },
      { title: 'Patient companion applications', result: '71% weekly active use at six months' },
    ],
    compliance: ['HIPAA', 'HITRUST', 'FDA SaMD guidance', 'GDPR', '21 CFR Part 11'],
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing & Industrial',
    icon: 'factory',
    accent: 'orange',
    headline: 'The plant floor and the back office, finally on speaking terms.',
    body: 'Manufacturing runs on exceptions — a late shipment, a price variance, a quality hold. We build the systems that catch those exceptions automatically and act on them against your supplier terms, rather than surfacing them at month-end.',
    pressures: [
      'Supply chain exceptions found weeks after they cost money',
      'Quality data trapped in systems that cannot be queried together',
      'Maintenance scheduled by calendar rather than by condition',
      'OT and IT security boundaries that were never properly designed',
    ],
    work: [
      { title: 'Supply chain exception handling', result: '$1.8M variance recovered annually' },
      { title: 'Procurement intake automation', result: 'Requisition cycle 9 days → 2' },
      { title: 'Quality and compliance evidence', result: 'Audit prep 6 weeks → 4 days' },
      { title: 'OT/IT security segmentation', result: 'Critical findings down 88%' },
    ],
    compliance: ['ISO 9001', 'ISO 27001', 'IEC 62443', 'ITAR-aware delivery', 'CMMC readiness'],
  },
  {
    slug: 'retail',
    name: 'Retail & E-commerce',
    icon: 'cart',
    accent: 'pink',
    headline: 'Margin defended at every step, not just at the checkout.',
    body: 'Retail systems are usually optimised for revenue and blind to contribution. We rebuild the operational layer — pricing, fulfilment, returns, service — so decisions are made on margin and the customer experience improves at the same time.',
    pressures: [
      'Returns and service costs eroding otherwise healthy revenue',
      'Marketing optimised to revenue while margin quietly declines',
      'Peak-season traffic requiring a war room every year',
      'Inventory data that is accurate everywhere except where it matters',
    ],
    work: [
      { title: 'Composable commerce replatform', result: 'Checkout completion up 26%' },
      { title: 'Returns and service automation', result: 'Cost per contact down 44%' },
      { title: 'Margin-driven media buying', result: 'Contribution margin up 28%' },
      { title: 'Peak-readiness platform work', result: 'Zero incidents through Black Friday' },
    ],
    compliance: ['PCI DSS', 'GDPR / CCPA', 'Accessibility (WCAG 2.2 AA)', 'SOC 2'],
  },
  {
    slug: 'logistics',
    name: 'Logistics & Transport',
    icon: 'truck',
    accent: 'cyan',
    headline: 'Exceptions handled before the customer notices them.',
    body: 'In logistics, the difference between a good operator and a great one is how fast an exception gets resolved. We build the detection, decision and communication layer that closes that gap without adding headcount.',
    pressures: [
      'Exception handling that depends on individual experience',
      'Customer service absorbing the cost of operational failures',
      'Field teams working offline in vehicles and warehouses',
      'Fragmented visibility across carriers and partners',
    ],
    work: [
      { title: 'Exception detection and resolution', result: 'Resolution time cut 68%' },
      { title: 'Offline-first field applications', result: 'Paper eliminated for 900 technicians' },
      { title: 'Warehouse scanning workflows', result: 'Pick accuracy 99.7%' },
      { title: 'Partner and carrier portal', result: 'Support tickets down 71%' },
    ],
    compliance: ['SOC 2', 'GDPR', 'C-TPAT-aware processes', 'ISO 28000'],
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
    icon: 'briefcase',
    accent: 'indigo',
    headline: 'Billable hours spent on the work clients actually value.',
    body: 'Firms lose margin to the administrative surround of delivery: intake, conflicts, document assembly, status reporting. We automate the surround so senior people spend their time on judgement.',
    pressures: [
      'Senior time consumed by document assembly and reporting',
      'Intake and conflict checks slowing engagement start',
      'Knowledge locked in individuals rather than systems',
      'Client confidentiality requirements limiting tool choice',
    ],
    work: [
      { title: 'Engagement intake automation', result: 'Onboarding cycle down 62%' },
      { title: 'Document assembly and review support', result: '4.2 hours per person per week returned' },
      { title: 'Knowledge retrieval over firm history', result: 'Research time cut 54%' },
      { title: 'Client portal and reporting', result: 'Status queries down 70%' },
    ],
    compliance: ['SOC 2', 'GDPR', 'Legal professional privilege', 'Client data segregation'],
  },
  {
    slug: 'public-sector',
    name: 'Public Sector & Education',
    icon: 'graduation-cap',
    accent: 'violet',
    headline: 'Services that work for everyone, including on a five-year-old phone.',
    body: 'Public services carry an obligation most commercial products do not: they have to work for every citizen, on every device, with every access need. We build to that standard and treat accessibility as a hard requirement rather than a scoring criterion.',
    pressures: [
      'Accessibility obligations that most vendor products fail',
      'Procurement cycles that outlast technology choices',
      'Legacy systems with no supported integration path',
      'Public scrutiny requiring genuine transparency in automated decisions',
    ],
    work: [
      { title: 'Citizen service portals', result: 'WCAG 2.2 AA verified, zero blocking issues' },
      { title: 'Case management automation', result: 'Processing time down 57%' },
      { title: 'Legacy integration layer', result: 'Six systems unified without replacement' },
      { title: 'Explainable decision records', result: 'Full reasoning trail on every automated outcome' },
    ],
    compliance: ['WCAG 2.2 AA', 'Section 508', 'FedRAMP-aligned patterns', 'FERPA', 'GDPR'],
  },
  {
    slug: 'technology',
    name: 'Technology & SaaS',
    icon: 'cpu',
    accent: 'blue',
    headline: 'Ship faster without the incident review that follows.',
    body: 'Software companies come to us for the parts that are hard to staff for: platform engineering, AI features that survive real usage, and the security work investors and enterprise buyers now ask about in diligence.',
    pressures: [
      'AI features expected by customers but hard to make reliable',
      'Enterprise buyers demanding SOC 2 and security evidence',
      'Infrastructure cost growing faster than revenue',
      'Platform work competing with product roadmap for the same engineers',
    ],
    work: [
      { title: 'AI feature engineering', result: 'Trial-to-paid conversion up 38%' },
      { title: 'Developer platform build', result: 'Environment provisioning 3 weeks → 20 minutes' },
      { title: 'Cloud cost engineering', result: '$1.9M annualised saving in 90 days' },
      { title: 'Security and compliance readiness', result: 'SOC 2 evidence prep 6 weeks → 4 days' },
    ],
    compliance: ['SOC 2 Type II', 'ISO 27001', 'GDPR', 'OWASP LLM Top 10'],
  },
];
