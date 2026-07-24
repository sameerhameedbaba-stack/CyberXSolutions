/**
 * Social proof. Client organisations are referred to by sector and scale rather
 * than by name — engagements are covered by confidentiality agreements.
 */

export type Testimonial = {
  quote: string;
  attribution: string;
  org: string;
  metric?: string;
  accent: 'blue' | 'violet' | 'cyan' | 'emerald' | 'orange' | 'pink' | 'indigo';
  icon: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'They spent the first two weeks telling us which half of our plan was a bad idea. That is not what we were used to from a vendor, and it is the reason the rest of it worked.',
    attribution: 'Chief Technology Officer',
    org: 'Global professional services firm · 12,000 staff',
    metric: 'Time to production: 7 months → 9 weeks',
    accent: 'indigo',
    icon: 'enterprise',
  },
  {
    quote:
      'We did not add analysts. We stopped asking the ones we had to prove that thirty-six thousand things were fine every month.',
    attribution: 'Director of Security Operations',
    org: 'National insurance carrier',
    metric: 'Mean time to contain: 6.3 hours → 2.8 minutes',
    accent: 'emerald',
    icon: 'shield-check',
  },
  {
    quote:
      'The number I care about is not the 94%. It is that we stopped having the same argument about unposted liability every single month-end.',
    attribution: 'Group Financial Controller',
    org: 'Industrial manufacturer · $4B revenue',
    metric: 'Cost per document: $2.40 → $0.07',
    accent: 'blue',
    icon: 'banknote',
  },
  {
    quote:
      'Two previous apps were built for head office. This one was built for the van. That is the whole difference.',
    attribution: 'VP of Field Operations',
    org: 'National field services group · 900 technicians',
    metric: 'Adoption: 12% → 99.4% daily active',
    accent: 'pink',
    icon: 'truck',
  },
  {
    quote:
      'The first month was entirely unglamorous technical work with nothing to show a board. It also produced the biggest single jump we have ever had.',
    attribution: 'VP of Marketing',
    org: 'B2B software company · Series C',
    metric: 'Non-brand organic clicks: +214%',
    accent: 'cyan',
    icon: 'search',
  },
  {
    quote:
      'We expected a cost-reduction project. What we actually got was the first time anybody here could rebuild our platform from scratch.',
    attribution: 'VP of Engineering',
    org: 'Healthcare technology provider',
    metric: '$1.9M annualised saving in 90 days',
    accent: 'violet',
    icon: 'cloud',
  },
];

/** Platforms and systems we build on and integrate with — shown as an ecosystem marquee. */
export const ecosystem = [
  'AWS', 'Microsoft Azure', 'Google Cloud', 'Kubernetes', 'Snowflake', 'Databricks',
  'Salesforce', 'ServiceNow', 'SAP', 'Workday', 'NetSuite', 'Stripe',
  'PostgreSQL', 'Terraform', 'Datadog', 'Okta', 'CrowdStrike', 'Next.js',
];

export const trustMarkers = [
  { label: 'SOC 2 Type II aligned delivery', icon: 'shield-check' },
  { label: 'ISO 27001 practices', icon: 'lock' },
  { label: 'HIPAA & GDPR experienced', icon: 'file-text' },
  { label: 'WCAG 2.2 AA as standard', icon: 'users' },
];

export const generalFaqs = [
  {
    question: 'How do engagements usually start?',
    answer:
      'With a ninety-minute working session, not a pitch. We want the process that keeps breaking, the numbers you already have, and the constraint you think is immovable. You leave with a systems map and a shortlist. There is no charge and no obligation, and roughly a third of these end with us recommending you do something other than hire us.',
  },
  {
    question: 'What does a typical project cost?',
    answer:
      'Assessments and audits are fixed price and typically run two to four weeks. Production builds range widely by scope — a single automated workflow is a different order of magnitude from an enterprise platform programme. We quote fixed price wherever scope is properly defined, and we publish the number before you commit rather than discovering it in change requests.',
  },
  {
    question: 'How quickly can you start?',
    answer:
      'Assessment work usually starts within two to three weeks. Build teams are typically available on a four to six week horizon. We do not overbook — if we cannot staff your project with senior people when you need them, we will say so rather than starting with whoever is free.',
  },
  {
    question: 'Do you work with organisations outside the United States?',
    answer:
      'Yes. We deliver across North America and Europe, with data residency and regulatory requirements handled per market. Our teams work overlapping hours with your core business day rather than expecting you to adapt to ours.',
  },
  {
    question: 'What size of organisation do you work with?',
    answer:
      'Mostly mid-market and enterprise — typically 200 employees and up, or smaller organisations with unusually complex regulatory or technical requirements. Below that, our engagement model is often more expensive than the value it can return, and we will tell you that directly.',
  },
  {
    question: 'Who actually does the work?',
    answer:
      'The senior engineers who scoped it. We do not run a model where partners sell and juniors deliver. The people in your first working session are the people writing your code, and they stay on the engagement through handover.',
  },
  {
    question: 'What happens when the project ends?',
    answer:
      'You have working software, documentation, runbooks, architecture decision records and a trained team. Support retainers are available but never required, and nothing we build depends on a licence from us. If you never speak to us again, everything keeps running.',
  },
  {
    question: 'How do you handle our data?',
    answer:
      'We work inside your infrastructure and under your data governance wherever possible. Where we process data on your behalf, it is covered by a data processing agreement, restricted to the minimum necessary, and never used to train models. Open-weight models can be served entirely within your environment where residency requires it.',
  },
];
