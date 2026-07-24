/* ------------------------------------------------------------------ */
/* Careers                                                             */
/* ------------------------------------------------------------------ */

export const careerBeliefs = [
  {
    title: 'Seniority means responsibility, not distance',
    body: 'Our principals write code and sit in client sessions. Nobody here graduates out of the work into a purely commercial role.',
    icon: 'code',
    accent: 'blue' as const,
  },
  {
    title: 'You will be trusted early',
    body: 'You will own a system, talk directly to the client who depends on it, and have the authority to say no. Support is available; permission is assumed.',
    icon: 'key',
    accent: 'violet' as const,
  },
  {
    title: 'We protect focus',
    body: 'Two meeting-light days a week, asynchronous by default, and a genuine expectation that you are offline when you are off.',
    icon: 'clock',
    accent: 'emerald' as const,
  },
  {
    title: 'Learning is scheduled, not aspirational',
    body: 'Ten percent of your time is yours for research, certification or open-source work, with a budget attached rather than a slogan.',
    icon: 'book',
    accent: 'cyan' as const,
  },
  {
    title: 'We hire for judgement',
    body: 'Tool knowledge is teachable. The ability to tell a client something they do not want to hear, kindly and with evidence, is what we interview for.',
    icon: 'scale',
    accent: 'orange' as const,
  },
  {
    title: 'Distributed, deliberately',
    body: 'Remote-first across North America and Europe, with quarterly gatherings that are worth flying for. Where you live is not a career variable.',
    icon: 'globe',
    accent: 'indigo' as const,
  },
];

export const benefits = [
  'Salary benchmarked to the top quartile, reviewed annually and published internally in bands',
  'Genuinely flexible hours, remote-first across North America and Europe',
  'Ten percent research time with an annual learning budget',
  'Full health, dental and vision cover for you and your dependants',
  'Home office allowance and hardware you actually choose',
  'Minimum four weeks leave, and we track that you take it',
  'Parental leave of sixteen weeks at full pay for every parent',
  'Quarterly in-person gatherings with travel covered',
];

export type Role = {
  title: string;
  team: string;
  location: string;
  type: string;
  accent: 'blue' | 'violet' | 'cyan' | 'emerald' | 'orange' | 'pink' | 'indigo';
  icon: string;
  summary: string;
  looking: string[];
};

export const openRoles: Role[] = [
  {
    title: 'Senior AI Engineer',
    team: 'Agent Systems',
    location: 'Remote · North America / Europe',
    type: 'Full time',
    accent: 'violet',
    icon: 'agent',
    summary:
      'Design and ship agent systems that hold real authority inside client operations — planning loops, tool interfaces, evaluation harnesses and the guardrails that make autonomy defensible.',
    looking: [
      'Production experience with LLM applications beyond prototypes',
      'Strong Python or TypeScript, and opinions about evaluation you can defend',
      'Comfort explaining a technical trade-off to a sceptical CFO',
    ],
  },
  {
    title: 'Staff Platform Engineer',
    team: 'Cloud & Reliability',
    location: 'Remote · North America / Europe',
    type: 'Full time',
    accent: 'emerald',
    icon: 'cloud',
    summary:
      'Build and operate the platforms our client systems run on: Kubernetes, Terraform, progressive delivery and the observability that makes 3am survivable.',
    looking: [
      'Deep Kubernetes and infrastructure-as-code experience at scale',
      'Track record reducing cloud cost without reducing reliability',
      'A bias toward deleting complexity rather than adding abstraction',
    ],
  },
  {
    title: 'Security Engineer, Detection & Response',
    team: 'Security',
    location: 'Remote · North America',
    type: 'Full time',
    accent: 'orange',
    icon: 'shield-check',
    summary:
      'Detection engineering, autonomous triage design and purple-team validation for client security operations — including attacking the AI systems we build.',
    looking: [
      'Detection engineering experience across identity, endpoint and cloud',
      'Familiarity with MITRE ATT&CK as a working tool, not a poster',
      'Interest in adversarial testing of LLM-based systems',
    ],
  },
  {
    title: 'Senior Product Designer',
    team: 'Design',
    location: 'Remote · North America / Europe',
    type: 'Full time',
    accent: 'pink',
    icon: 'wand',
    summary:
      'Design interfaces for systems that carry real operational weight — exception queues, approval flows, security consoles — where clarity under pressure matters more than delight.',
    looking: [
      'Portfolio showing complex operational or data-dense interfaces',
      'Fluency with design systems as code, and accessibility as a default',
      'Comfort designing directly alongside engineers rather than handing over',
    ],
  },
  {
    title: 'Engagement Lead',
    team: 'Delivery',
    location: 'Remote · North America',
    type: 'Full time',
    accent: 'blue',
    icon: 'briefcase',
    summary:
      'Own client outcomes end to end: scope, sequence, measure and report. This is a delivery role with commercial responsibility, not an account management role.',
    looking: [
      'Delivery leadership on complex enterprise technology programmes',
      'Enough technical depth to challenge an architecture decision',
      'Willingness to tell a client the honest thing early',
    ],
  },
  {
    title: 'Growth Engineer',
    team: 'Growth',
    location: 'Remote · North America / Europe',
    type: 'Full time',
    accent: 'cyan',
    icon: 'trending-up',
    summary:
      'Build the measurement, experimentation and content infrastructure behind client growth programmes — attribution that survives scrutiny and pages that convert.',
    looking: [
      'Technical marketing background: server-side tracking, data pipelines, CRM integration',
      'Front-end capability with Next.js and a feel for performance',
      'Scepticism about attribution models, expressed constructively',
    ],
  },
];

export const hiringProcess = [
  { title: 'Conversation', body: 'Forty-five minutes with someone who does the work. Two-way — bring hard questions.', meta: '45 min' },
  { title: 'Craft session', body: 'A real problem from our domain, worked through together. Not an algorithm quiz, and never unpaid project work.', meta: '90 min' },
  { title: 'Judgement session', body: 'A scenario with no clean answer. We want to see how you reason and how you disagree.', meta: '60 min' },
  { title: 'Offer', body: 'Decision within five working days of the last session, with the band and the reasoning explained.', meta: '≤ 5 days' },
];

/* ------------------------------------------------------------------ */
/* Partners                                                            */
/* ------------------------------------------------------------------ */

export const partnerTypes = [
  {
    title: 'Cloud and platform',
    body: 'We build on AWS, Azure and Google Cloud and maintain current certifications across all three. Platform choice follows your constraints, never our commercial position.',
    icon: 'cloud',
    accent: 'blue' as const,
    items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Cloudflare', 'Vercel'],
  },
  {
    title: 'AI and data',
    body: 'Working relationships with model and data platform providers, which gives our clients earlier access and a direct escalation path when something breaks.',
    icon: 'brain',
    accent: 'violet' as const,
    items: ['Anthropic', 'OpenAI', 'Snowflake', 'Databricks', 'Hugging Face'],
  },
  {
    title: 'Security',
    body: 'We integrate with the detection and identity platforms our clients already own, and we hold certifications rather than just partner badges.',
    icon: 'shield-check',
    accent: 'emerald' as const,
    items: ['CrowdStrike', 'Microsoft Security', 'Okta', 'Wiz', 'HashiCorp'],
  },
  {
    title: 'Enterprise systems',
    body: 'Integration experience across the systems of record that automation has to touch — with the connectors already written and tested.',
    icon: 'enterprise',
    accent: 'indigo' as const,
    items: ['Salesforce', 'ServiceNow', 'SAP', 'Workday', 'NetSuite'],
  },
];

export const partnerPrograms = [
  {
    title: 'Referral partners',
    body: 'Consultancies and advisory firms who meet a client problem outside their scope. Transparent referral fees, and we stay in our lane.',
    icon: 'handshake',
    accent: 'blue' as const,
    points: ['Clear commercial terms agreed in writing', 'We never approach your client for adjacent work', 'Joint scoping available at no cost'],
  },
  {
    title: 'Delivery partners',
    body: 'Systems integrators who need specialist AI, automation or security capability inside a larger programme. We work as a named subcontractor with defined boundaries.',
    icon: 'layers',
    accent: 'violet' as const,
    points: ['White-label or named delivery', 'Defined scope boundary agreed at the start', 'Your governance and reporting cadence'],
  },
  {
    title: 'Technology partners',
    body: 'Product companies whose customers need implementation depth. We build the integration layer and the deployment path around your product.',
    icon: 'plug',
    accent: 'emerald' as const,
    points: ['Reference implementations and integration accelerators', 'Joint technical enablement', 'Honest product feedback from the field'],
  },
];
