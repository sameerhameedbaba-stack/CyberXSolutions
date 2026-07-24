export const processPhases = [
  {
    label: 'Phase 01',
    title: 'Understand',
    meta: '1–3 weeks',
    icon: 'search',
    body: 'We sit with the people doing the work and record what actually happens, including the exceptions nobody documented. Then we measure it.',
    deliverables: ['Systems and data map', 'Measured baseline: cost, cycle time, error rate', 'Constraint and risk register', 'Ranked opportunity shortlist'],
    yourTime: 'Roughly 6–10 hours across the phase, mostly from operators rather than executives.',
  },
  {
    label: 'Phase 02',
    title: 'Decide',
    meta: '1 week',
    icon: 'scale',
    body: 'A costed recommendation with the trade-offs written down — including the option of doing nothing, and the option of buying instead of building.',
    deliverables: ['Solution architecture and decision records', 'Fixed-price proposal where scope allows', 'Guardrails, permissions and escalation design', 'Success metrics agreed in writing'],
    yourTime: 'One two-hour decision session. You get the document three days before it.',
  },
  {
    label: 'Phase 03',
    title: 'Build',
    meta: '4–20 weeks',
    icon: 'code',
    body: 'Two-week increments, always deployable, demonstrated in a running system. Evaluation and security review happen every increment, not at the end.',
    deliverables: ['Working software in your repositories', 'Automated tests and CI/CD pipeline', 'Infrastructure as code', 'Evaluation suite and observability'],
    yourTime: 'A 45-minute demo every two weeks. Async access to the team throughout.',
  },
  {
    label: 'Phase 04',
    title: 'Prove',
    meta: '2–12 weeks',
    icon: 'gauge',
    body: 'Shadow or parallel running until the numbers agree with the baseline. This is where the exceptions that would have become incidents show up instead.',
    deliverables: ['Parallel-run reconciliation report', 'Tuned thresholds and exception handling', 'Rollback procedure, tested', 'Go-live readiness review'],
    yourTime: 'Operator review of exception cases — typically 2–4 hours a week.',
  },
  {
    label: 'Phase 05',
    title: 'Operate',
    meta: 'Ongoing or handover',
    icon: 'activity',
    body: 'Staged rollout, monitoring, and a genuine handover. We are finished when your team can run and change this without us.',
    deliverables: ['Runbooks and architecture documentation', 'Dashboards and alerting', 'Team training sessions', '90-day benefit verification'],
    yourTime: 'Two training sessions, then whatever your team wants.',
  },
];

export const engagementPrinciples = [
  {
    title: 'Senior people, start to finish',
    body: 'The engineers who scope your work build it. No handoff to a delivery team you have not met.',
    icon: 'users',
    accent: 'blue' as const,
  },
  {
    title: 'Baselines before builds',
    body: 'We measure the current state first. Improvement should be a fact you can point at, not an impression.',
    icon: 'gauge',
    accent: 'violet' as const,
  },
  {
    title: 'Working software over status reports',
    body: 'Every two weeks you see the system running, not a slide describing it. Progress is demonstrated, not asserted.',
    icon: 'monitor',
    accent: 'cyan' as const,
  },
  {
    title: 'Change priced in the open',
    body: 'Scope changes get estimated and quoted before they enter the plan. Nothing is silently absorbed into a drifting number.',
    icon: 'banknote',
    accent: 'emerald' as const,
  },
  {
    title: 'Security reviewed continuously',
    body: 'Threat modelling at design review and security testing every increment — not a gate discovered two weeks before launch.',
    icon: 'shield-check',
    accent: 'orange' as const,
  },
  {
    title: 'Handover is a deliverable',
    body: 'Documentation, runbooks and training are scoped, estimated and delivered like any other feature.',
    icon: 'handshake',
    accent: 'indigo' as const,
  },
];

export const processFaqs = [
  {
    question: 'What does the first working session involve?',
    answer:
      'Ninety minutes, usually four to six people from your side, no slides from ours. We want the process that keeps breaking, whatever numbers you already have, and the constraint you believe is immovable. You leave with a rough systems map and an honest read on whether this is worth pursuing. No charge, no obligation.',
  },
  {
    question: 'How much of our team’s time does this take?',
    answer:
      'Less than you expect and more than zero. Discovery is the heaviest — roughly six to ten hours spread across two to three weeks, and mostly from the people who do the work rather than from executives. During the build phase it is a 45-minute demo every fortnight plus async questions.',
  },
  {
    question: 'What if we want to stop partway through?',
    answer:
      'You can, at any phase boundary, and you keep everything produced up to that point — including code, documentation and the assessment findings. We deliberately structure engagements in stages so stopping is a real option rather than a negotiation.',
  },
  {
    question: 'Do you work in sprints?',
    answer:
      'Two-week increments with a demonstrable increment at the end of each. We are unceremonious about the ritual — no story-point theatre — but strict about the discipline: always deployable, always demonstrated, always reviewed.',
  },
  {
    question: 'How do you handle disagreement about direction?',
    answer:
      'We write the trade-off down as a decision record with the options, the risks and our recommendation, then you decide. If you choose differently from our recommendation we record that too and build what you asked for. What we will not do is quietly build our preference.',
  },
  {
    question: 'What happens 90 days after launch?',
    answer:
      'We come back and measure. The business case gets re-tested against the actual numbers and we publish the result — including when it came in under what we projected. That review is part of every engagement and it is not optional on our side.',
  },
];
