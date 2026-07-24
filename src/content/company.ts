/**
 * Brand narrative. Every line of company voice lives here so the story stays
 * identical wherever it surfaces.
 */

export const mission =
  'Take the repetitive, error-prone work that consumes good people and move it into software that can be trusted with it.';

export const vision =
  'A decade from now, chasing approvals, reconciling records and triaging alerts will not be jobs. They will be background processes. We build the systems that get companies there without losing control on the way.';

export const brandPromise =
  'We ship systems that work on the days nobody is watching.';

export const customerPromise =
  'You will always know what our software did, why it did it, and how to stop it.';

export const positioning =
  'CyberXSolutions is an AI-first engineering company. We design, build and operate agentic AI, automation and security systems for organisations where being wrong is expensive.';

export type Value = { title: string; body: string; icon: string; accent: 'blue' | 'violet' | 'cyan' | 'emerald' | 'orange' | 'pink' | 'indigo' };

export const coreValues: Value[] = [
  {
    title: 'Evidence over enthusiasm',
    body: 'A demo proves nothing. We hold every system to measured baselines, evaluation sets and production telemetry before we call it finished.',
    icon: 'chart-line',
    accent: 'blue',
  },
  {
    title: 'Own the outcome',
    body: 'We are not finished when the code merges. We are finished when the metric moves and stays moved after we leave the room.',
    icon: 'target',
    accent: 'violet',
  },
  {
    title: 'Say the hard thing',
    body: 'If AI is the wrong answer for your problem, you will hear that in week one — not after a six-figure discovery phase.',
    icon: 'megaphone',
    accent: 'orange',
  },
  {
    title: 'Build it to be handed over',
    body: 'Documentation, runbooks and training are part of the build. Your team should be able to run and change what we deliver without us.',
    icon: 'handshake',
    accent: 'emerald',
  },
  {
    title: 'Security is a constraint, not a phase',
    body: 'Threat models, least-privilege access and audit trails are written into the first design review, never bolted on before launch.',
    icon: 'shield-check',
    accent: 'cyan',
  },
  {
    title: 'Speed with a paper trail',
    body: 'Fast is only useful if it is reversible. Every automated action we ship is logged, explainable and safe to undo.',
    icon: 'clock',
    accent: 'indigo',
  },
];

export const story = {
  intro:
    'CyberXSolutions started with an unglamorous observation: most companies were not short of data, talent or ambition. They were short of systems that could act.',
  chapters: [
    {
      period: '2019',
      title: 'A security team drowning in alerts',
      body: 'Our first engagement was a security operations centre reviewing 40,000 alerts a month by hand. We did not sell them a model. We rebuilt their triage path, automated the 92% that were noise, and gave three analysts their evenings back. That became the template.',
    },
    {
      period: '2021',
      title: 'From scripts to systems',
      body: 'Automation projects kept dying the same way — a clever script, one edge case, and a workflow nobody trusted again. So we started building automation the way we build software: versioned, tested, observable, and reversible.',
    },
    {
      period: '2023',
      title: 'Agents that could be held accountable',
      body: 'When language models became capable enough to plan and act, most of the industry shipped chat. We built the boring parts instead — permissions, evaluation harnesses, cost ceilings, audit history — so an agent could be given real authority without becoming a liability.',
    },
    {
      period: 'Today',
      title: 'Systems that run the work',
      body: 'We now design, build and operate the AI, automation, cloud and security systems that keep our clients running. Same discipline, larger surface area, and a bar that has only moved up.',
    },
  ],
};

export const founderMessage = {
  quote:
    'Every company we meet has already been sold AI once. What they have rarely been offered is someone who will tell them which half of the plan is a bad idea, then build the other half properly.',
  body: [
    'We started this company because we kept watching good organisations spend real money on technology that could not survive contact with their actual operations. The pattern was always the same: an impressive pilot, a quiet rollout, and a system nobody trusted six months later.',
    'So we built the company we wanted to hire. Senior engineers on every engagement. Measured baselines before anyone writes code. Guardrails, audit trails and rollback paths treated as features, not overhead. And an honest answer when the honest answer is that you do not need us.',
    'If that is the kind of partner you are looking for, we should talk.',
  ],
  // Replace with the named founder before launch — see README.
  attribution: 'The founding team',
  role: `${'CyberXSolutions Inc'}`,
};

export const philosophies = [
  {
    title: 'Innovation philosophy',
    body: 'We do not chase releases. We adopt a technology when it survives a hostile evaluation against the thing it claims to replace, and we retire our own work the moment something better exists. Novelty is not a deliverable.',
    icon: 'lightbulb',
    accent: 'violet' as const,
    points: [
      'Every new capability enters through a benchmark, not a blog post',
      'Prototypes are timeboxed and allowed to fail loudly',
      'We publish what we learn, including what did not work',
    ],
  },
  {
    title: 'Security philosophy',
    body: 'Assume compromise. Every system we build is designed so that a stolen credential, a bad prompt or a rogue integration produces a contained incident rather than a headline.',
    icon: 'shield-check',
    accent: 'emerald' as const,
    points: [
      'Least privilege by default, with time-bound and revocable access',
      'Every automated action is attributable to an identity and reversible',
      'Threat modelling happens at design review, not before launch',
    ],
  },
  {
    title: 'Engineering philosophy',
    body: 'Boring, observable systems beat clever, opaque ones. We optimise for the engineer who inherits this in three years — which is often our own client.',
    icon: 'code',
    accent: 'blue' as const,
    points: [
      'Typed end to end, tested where it matters, documented as it ships',
      'Infrastructure as code, with environments that can be rebuilt from scratch',
      'Instrumentation before optimisation — never guess where the cost is',
    ],
  },
];

export const qualityStandards = [
  { title: 'Definition of done', body: 'Tested, documented, instrumented, deployed through a repeatable pipeline, and handed over with a runbook.', icon: 'list-checks' },
  { title: 'Review discipline', body: 'Every change is peer-reviewed. Security-sensitive changes get a second reviewer with an explicit threat lens.', icon: 'user-check' },
  { title: 'Measured baselines', body: 'We record the before state — cost, cycle time, error rate — so improvement is a fact rather than an impression.', icon: 'gauge' },
  { title: 'Accessibility floor', body: 'WCAG 2.2 AA is the minimum on everything we ship with a user interface, verified with real assistive technology.', icon: 'users' },
  { title: 'Performance budget', body: 'Interfaces are held to Core Web Vitals budgets in CI. Regressions fail the build rather than the launch.', icon: 'bolt' },
  { title: 'Operational readiness', body: 'Alerts, dashboards, on-call runbooks and rollback procedures exist before the first user does.', icon: 'activity' },
];

export const roadmap = [
  {
    period: 'Now',
    title: 'Agents with real authority',
    body: 'Production agents operating inside finance, service and security workflows — with spend ceilings, scoped credentials and complete decision history.',
  },
  {
    period: 'Next',
    title: 'Fleet-level orchestration',
    body: 'Coordinating dozens of specialised agents across a business the way a service mesh coordinates microservices: discovery, policy, quotas, and a single pane of accountability.',
  },
  {
    period: 'Later',
    title: 'Self-defending operations',
    body: 'Security and reliability systems that not only detect and contain, but propose and validate the permanent fix — with human approval as the only manual step.',
  },
  {
    period: 'Always',
    title: 'Handover as a first-class outcome',
    body: 'Whatever we build, your team should be able to operate, extend and eventually replace it. Dependency is not a business model we are interested in.',
  },
];

export const differentiators = [
  {
    title: 'Senior engineers, not a sales layer',
    body: 'The people who scope your project are the people who build it. There is no handoff to a junior team after the contract is signed.',
    icon: 'users',
    accent: 'blue' as const,
  },
  {
    title: 'We publish the numbers',
    body: 'Baselines before, telemetry after, and a written account of what moved. Including the times a result came in under what we projected.',
    icon: 'chart-bar',
    accent: 'violet' as const,
  },
  {
    title: 'Security built in, not billed later',
    body: 'Threat modelling, least-privilege design and audit trails are part of every engagement at no additional line item.',
    icon: 'shield-check',
    accent: 'emerald' as const,
  },
  {
    title: 'Fixed scope, fixed price options',
    body: 'For well-defined work we quote a number and hold it. Change requests are priced openly rather than absorbed into a moving estimate.',
    icon: 'banknote',
    accent: 'cyan' as const,
  },
  {
    title: 'Your stack, not ours',
    body: 'We build on the platforms you already run and the models that fit your constraints. No proprietary runtime you cannot leave.',
    icon: 'plug',
    accent: 'indigo' as const,
  },
  {
    title: 'A real handover',
    body: 'Documentation, runbooks, architecture decision records and training sessions are part of delivery — not an upsell after launch.',
    icon: 'book',
    accent: 'orange' as const,
  },
];

export const companyStats = [
  { value: 240, suffix: '+', label: 'Systems in production', detail: 'Across finance, healthcare, logistics, retail and public sector' },
  { value: 4.1, decimals: 1, prefix: '$', suffix: 'M', label: 'Annual client savings', detail: 'Verified against pre-engagement baselines' },
  { value: 99.98, decimals: 2, suffix: '%', label: 'Platform uptime', detail: 'Trailing twelve months across managed environments' },
  { value: 11, suffix: ' min', label: 'Mean time to contain', detail: 'From first signal to contained incident, autonomous response' },
];
