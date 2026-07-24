export type CaseStudy = {
  slug: string;
  /** Sector descriptor used in place of a client name (engagements are under NDA). */
  client: string;
  sector: string;
  region: string;
  title: string;
  summary: string;
  accent: 'blue' | 'violet' | 'cyan' | 'emerald' | 'orange' | 'pink' | 'indigo';
  icon: string;
  services: { label: string; href: string }[];
  challenge: string;
  approach: string[];
  headline: { value: string; label: string };
  metrics: { value: string; label: string }[];
  chart: { label: string; before: number; after: number; unit?: string; better: 'lower' | 'higher' }[];
  quote: { text: string; attribution: string };
  duration: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'accounts-payable-agents',
    client: 'Industrial manufacturer',
    sector: 'Manufacturing',
    region: 'North America',
    title: 'Accounts payable that closes itself',
    summary:
      'A $4B manufacturer processing 1.2 million supplier invoices a year across three ERPs, with a 26-person team and a month-end close that regularly ran past day ten.',
    accent: 'blue',
    icon: 'banknote',
    services: [
      { label: 'AI Agents', href: '/ai-agents' },
      { label: 'AI Automation', href: '/ai-automation' },
    ],
    challenge:
      'Invoices arrived as PDFs, EDI feeds and scanned paper across three business units, each on a different ERP instance with different tolerance rules. Matching was manual, exceptions were emailed, and nobody could say at any given moment how much unposted liability was sitting in a shared mailbox.',
    approach: [
      'Measured the real baseline first: 1.2M documents, $2.40 average processing cost, 14% exception rate, 9.4-day average cycle',
      'Built a single extraction and matching layer in front of all three ERPs rather than three separate automations',
      'Gave agents authority to clear exceptions inside agreed price and quantity tolerances, with everything above threshold routed to a named approver',
      'Ran twelve weeks in parallel with the manual process until reconciliation agreed to the cent',
      'Handed the exception dashboard to the shared services team, who now tune tolerances themselves',
    ],
    headline: { value: '94.2%', label: 'Straight-through processing' },
    metrics: [
      { value: '$0.07', label: 'Cost per document, from $2.40' },
      { value: '71%', label: 'Reduction in close cycle time' },
      { value: '$2.6M', label: 'Annual run-rate saving' },
      { value: '0', label: 'Headcount reductions — team redeployed' },
    ],
    chart: [
      { label: 'Cost per document', before: 240, after: 7, unit: '¢', better: 'lower' },
      { label: 'Cycle time (days)', before: 94, after: 26, unit: '/10', better: 'lower' },
      { label: 'Exception rate', before: 14, after: 6, unit: '%', better: 'lower' },
      { label: 'Straight-through rate', before: 31, after: 94, unit: '%', better: 'higher' },
    ],
    quote: {
      text: 'The number I care about is not the 94%. It is that we stopped having the same conversation about unposted liability every month.',
      attribution: 'Group Financial Controller',
    },
    duration: '16 weeks to production',
  },
  {
    slug: 'autonomous-soc',
    client: 'National insurance carrier',
    sector: 'Financial Services',
    region: 'North America',
    title: 'From 40,000 alerts to 40 real cases',
    summary:
      'A security operations team of nine reviewing roughly 40,000 alerts a month, with mean time to contain measured in hours and a growing backlog nobody could clear.',
    accent: 'emerald',
    icon: 'shield-check',
    services: [
      { label: 'AI Cybersecurity', href: '/ai-cybersecurity' },
      { label: 'Cloud Engineering', href: '/cloud-engineering' },
    ],
    challenge:
      'The tooling was good and the coverage was reasonable. The problem was arithmetic: nine analysts could not investigate 40,000 alerts, so triage became pattern-matching on alert titles. Two genuine incidents in the preceding year had been closed as noise and only found later during a routine hunt.',
    approach: [
      'Spent three weeks tuning detections before automating anything — the queue was 91% false positive and automating that would have industrialised the wrong answer',
      'Correlated identity, endpoint, cloud and SaaS telemetry into a single timeline per entity',
      'Built triage agents that gather the same context an analyst would and write up a case with an explicit dismissal rationale',
      'Limited autonomous containment to reversible actions — session revocation, token invalidation, host isolation. Destructive actions still require a named human',
      'Validated with a purple-team exercise before granting any autonomous authority',
    ],
    headline: { value: '2.8 min', label: 'Mean time to contain' },
    metrics: [
      { value: '92%', label: 'Alert noise cleared pre-review' },
      { value: '41 sec', label: 'Credential compromise dwell time' },
      { value: '3', label: 'Material incidents caught pre-exfiltration' },
      { value: '100%', label: 'Autonomous actions with audit records' },
    ],
    chart: [
      { label: 'Alerts to human review', before: 40000, after: 3200, better: 'lower' },
      { label: 'Mean time to contain (min)', before: 380, after: 3, better: 'lower' },
      { label: 'Analyst investigation depth', before: 22, after: 91, unit: '%', better: 'higher' },
      { label: 'Backlog age (days)', before: 34, after: 1, better: 'lower' },
    ],
    quote: {
      text: 'We did not add analysts. We stopped asking the ones we had to prove that 36,000 things were fine.',
      attribution: 'Director of Security Operations',
    },
    duration: '14 weeks to autonomous containment',
  },
  {
    slug: 'field-service-mobile',
    client: 'National field services group',
    sector: 'Logistics & Field Services',
    region: 'North America',
    title: '900 technicians, no more paper',
    summary:
      'A field services business running work orders on printed sheets because every previous app had failed the moment technicians went into a basement or a rural site.',
    accent: 'pink',
    icon: 'truck',
    services: [
      { label: 'Mobile Development', href: '/mobile-development' },
      { label: 'Custom Software', href: '/custom-software-development' },
    ],
    challenge:
      'Two prior mobile projects had been abandoned. Both were connectivity-dependent, both had been designed from the desktop system outward, and both were quietly replaced by the paper process within a quarter of launch.',
    approach: [
      'Two weeks riding along with technicians before writing a line of code — the failure mode was obvious within three days',
      'Designed offline-first from the start: local persistence, conflict-aware sync and queued actions',
      'Cut scope aggressively, removing eleven desktop features that had no place on a phone in a crawlspace',
      'Tested on the actual three-year-old mid-range Android devices the field team carried, not on new hardware',
      'Rolled out region by region with technicians from the pilot group running the training',
    ],
    headline: { value: '99.4%', label: 'Daily active use at 12 months' },
    metrics: [
      { value: '+22 pts', label: 'First-time fix rate' },
      { value: '1.1s', label: 'Cold start on mid-range Android' },
      { value: '4.8', label: 'Internal app store rating' },
      { value: '0', label: 'Paper work orders remaining' },
    ],
    chart: [
      { label: 'First-time fix rate', before: 64, after: 86, unit: '%', better: 'higher' },
      { label: 'Job close latency (hrs)', before: 27, after: 1, better: 'lower' },
      { label: 'Adoption', before: 12, after: 99, unit: '%', better: 'higher' },
      { label: 'Admin rework per week (hrs)', before: 180, after: 22, better: 'lower' },
    ],
    quote: {
      text: 'The previous two apps were built for head office. This one was built for the van.',
      attribution: 'VP of Field Operations',
    },
    duration: '18 weeks to national rollout',
  },
  {
    slug: 'enterprise-ai-platform',
    client: 'Global professional services firm',
    sector: 'Professional Services',
    region: 'Europe & North America',
    title: 'Eleven pilots, two in production — then forty',
    summary:
      'A 12,000-person firm with AI activity in nine business units, no shared platform, and a security review queue that averaged eleven weeks per project.',
    accent: 'indigo',
    icon: 'enterprise',
    services: [
      { label: 'Enterprise Solutions', href: '/enterprise-solutions' },
      { label: 'Cloud Engineering', href: '/cloud-engineering' },
    ],
    challenge:
      'Every team had solved the same problems independently: their own model access, their own document pipeline, their own evaluation approach and their own security submission. The second use case in each unit cost roughly as much as the first, and leadership had no view of what was running.',
    approach: [
      'Built the portfolio register first — twenty-three AI systems, of which six were unknown to central IT',
      'Extracted a shared platform from the two use cases that had actually reached production, rather than designing one in the abstract',
      'Created a risk framework with three tiers and a genuine fast lane: low-risk patterns clear in four days instead of eleven weeks',
      'Rebuilt the integration fabric once, centrally, replacing nine separate ERP clients',
      'Moved to advisory at month nine as the internal platform team took ownership',
    ],
    headline: { value: '62%', label: 'Lower cost per new use case' },
    metrics: [
      { value: '9 weeks', label: 'Idea to production, from 7 months' },
      { value: '40+', label: 'Workflows on shared platform' },
      { value: '4 days', label: 'Low-risk security approval' },
      { value: '47%', label: 'Reduction in AI run cost' },
    ],
    chart: [
      { label: 'Time to production (weeks)', before: 30, after: 9, better: 'lower' },
      { label: 'Security review (weeks)', before: 11, after: 1, better: 'lower' },
      { label: 'Cost per use case', before: 100, after: 38, unit: '%', better: 'lower' },
      { label: 'Systems in production', before: 2, after: 40, better: 'higher' },
    ],
    quote: {
      text: 'The platform mattered less than the fast lane. Once teams believed approval was days rather than months, the pipeline unblocked itself.',
      attribution: 'Chief Technology Officer',
    },
    duration: '11 months, then advisory',
  },
  {
    slug: 'organic-growth-programme',
    client: 'B2B software company',
    sector: 'Technology & SaaS',
    region: 'Global',
    title: 'Ranked for its own name and nothing else',
    summary:
      'A Series C software company publishing weekly, ranking well for branded terms, and generating almost no pipeline from organic search.',
    accent: 'cyan',
    icon: 'search',
    services: [
      { label: 'SEO', href: '/seo' },
      { label: 'Web Development', href: '/web-development' },
    ],
    challenge:
      'A client-rendered marketing site meant roughly two thirds of commercial pages were never reliably indexed. The content programme was chasing high-volume terms with no purchase intent, and the AI answers appearing above the results were citing three competitors and never them.',
    approach: [
      'Fixed rendering and crawl first — content investment on an unindexable site is money burned',
      'Rebuilt the content strategy around the questions buyers ask in evaluation, not around search volume',
      'Restructured pages for citability: clear sourcing, original data, answerable sections',
      'Implemented structured data properly across organisation, service, article and FAQ, then monitored it',
      'Reported page-level organic pipeline from month one, so the programme was judged on revenue rather than rank',
    ],
    headline: { value: '+214%', label: 'Non-brand organic clicks' },
    metrics: [
      { value: '3.2x', label: 'Indexed commercial pages' },
      { value: '84', label: 'Top-3 commercial rankings' },
      { value: '61%', label: 'Of tracked AI answers cite them' },
      { value: '3.4x', label: 'Organic pipeline contribution' },
    ],
    chart: [
      { label: 'Indexed pages', before: 31, after: 99, unit: '%', better: 'higher' },
      { label: 'Non-brand clicks', before: 100, after: 314, unit: '%', better: 'higher' },
      { label: 'Organic opportunities/mo', before: 18, after: 74, better: 'higher' },
      { label: 'LCP (s ×10)', before: 41, after: 9, better: 'lower' },
    ],
    quote: {
      text: 'The first month was entirely unglamorous technical work. It also produced the single biggest jump we have had.',
      attribution: 'VP of Marketing',
    },
    duration: '9 months to compounding returns',
  },
  {
    slug: 'cloud-cost-recovery',
    client: 'Healthcare technology provider',
    sector: 'Healthcare',
    region: 'North America',
    title: '$1.9M found in ninety days',
    summary:
      'A HIPAA-regulated platform provider whose cloud bill had grown 60% year on year while revenue grew 18%, with no clear explanation for the gap.',
    accent: 'emerald',
    icon: 'cloud',
    services: [
      { label: 'Cloud Engineering', href: '/cloud-engineering' },
      { label: 'AI Cybersecurity', href: '/ai-cybersecurity' },
    ],
    challenge:
      'Infrastructure had been built quickly during a growth phase and never revisited. Nothing was defined in code, non-production environments ran continuously, storage had no lifecycle policy, and no one wanted to touch a system they could not rebuild if it broke.',
    approach: [
      'Captured the existing estate in Terraform before changing anything, so every subsequent change was reversible',
      'Started with the boring wins: non-production shutdown schedules, storage tiering, orphaned resource cleanup',
      'Rightsized against measured utilisation rather than requested capacity',
      'Restructured commitments once the steady-state baseline was actually known',
      'Rebuilt the landing zone with HIPAA guardrails as policy-as-code, closing every open audit finding',
    ],
    headline: { value: '$1.9M', label: 'Annualised saving in 90 days' },
    metrics: [
      { value: '41%', label: 'Reduction in infrastructure cost' },
      { value: '24x', label: 'Increase in deploy frequency' },
      { value: '8 min', label: 'Recovery time, from 6 hours' },
      { value: '0', label: 'Open audit findings' },
    ],
    chart: [
      { label: 'Monthly cloud spend', before: 100, after: 59, unit: '%', better: 'lower' },
      { label: 'Recovery time (min)', before: 360, after: 8, better: 'lower' },
      { label: 'Deploys per month', before: 4, after: 96, better: 'higher' },
      { label: 'Audit findings', before: 17, after: 0, better: 'lower' },
    ],
    quote: {
      text: 'We expected a cost project. What we actually got was the first time anyone could rebuild our platform from scratch.',
      attribution: 'VP of Engineering',
    },
    duration: '12 weeks',
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
