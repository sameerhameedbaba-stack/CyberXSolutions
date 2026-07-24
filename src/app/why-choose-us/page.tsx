import type { Metadata } from 'next';
import Link from 'next/link';

import { PageHero } from '@/components/sections/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Icon } from '@/components/ui/Icon';
import { RelatedLinks } from '@/components/ui/Bits';
import { CTA } from '@/components/sections/CTA';
import { FeatureGrid, TestimonialGrid, StatsBand } from '@/components/sections/Blocks';
import { FAQSection } from '@/components/sections/FAQ';
import { MetricPanel } from '@/components/visuals/Panels';

import { differentiators, companyStats } from '@/content/company';
import { testimonials } from '@/content/social';
import { engagementPrinciples } from '@/content/process';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Why Choose Us',
  description:
    'Senior engineers start to finish, measured baselines, security built in, fixed-price options and full code ownership. The concrete reasons enterprises pick us — and when they should not.',
  keywords: [
    'why choose CyberXSolutions',
    'AI consulting comparison',
    'enterprise AI partner',
    'software development partner',
    'AI vendor selection',
  ],
  path: '/why-choose-us',
  ogTitle: 'Six reasons, and one honest reason not to.',
});

const comparison = [
  {
    dimension: 'Who does the work',
    typical: 'Partners sell it, a junior team delivers it',
    us: 'The senior engineers who scoped it build it, through to handover',
  },
  {
    dimension: 'Before the build',
    typical: 'A proposal based on a workshop and an assumption',
    us: 'A measured baseline: cost per transaction, cycle time, error rate',
  },
  {
    dimension: 'Security',
    typical: 'A review gate discovered two weeks before launch',
    us: 'Threat modelling at design review, testing every increment',
  },
  {
    dimension: 'Pricing',
    typical: 'Time and materials with an estimate that drifts',
    us: 'Fixed price wherever scope is defined; change quoted openly',
  },
  {
    dimension: 'Code ownership',
    typical: 'Shared IP clauses and a proprietary framework',
    us: 'Yours from the first commit, in your repositories',
  },
  {
    dimension: 'After launch',
    typical: 'A support contract you now depend on',
    us: 'Documentation, runbooks and training so you do not need one',
  },
  {
    dimension: 'Accountability',
    typical: 'The business case is never opened again',
    us: 'We return at 90 days and publish the result either way',
  },
];

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why choose us"
        title={
          <>
            Six concrete reasons. <span className="text-gradient">And one honest reason not to.</span>
          </>
        }
        lead="Every firm claims senior people and measurable outcomes. Here is what those words mean in our contracts, our pricing and our delivery — plus the cases where you should hire someone else."
        trail={[{ name: 'Why choose us', href: '/why-choose-us' }]}
        badge="Around 30% of discoveries end with us recommending you do not proceed"
        secondaryCta={{ label: 'Read our process', href: '/process' }}
        aurora="cool"
        visual={
          <MetricPanel
            label="What clients measure us on"
            badge="Verified"
            headline={{ value: '96%', caption: 'Projects delivered on the scope we agreed', delta: 'Across 240+ systems' }}
            rows={[
              { label: 'Senior engineers through handover', value: '100%', ratio: 100, accent: 'blue' },
              { label: 'Baseline measured before build', value: '100%', ratio: 100, accent: 'cyan' },
              { label: 'Benefit re-tested at 90 days', value: '100%', ratio: 100, accent: 'violet' },
              { label: 'Engagements with a stop point per phase', value: 'Always', ratio: 100, accent: 'emerald' },
            ]}
            metrics={[
              { value: '$0', label: 'Security as a line item' },
              { value: '0', label: 'Proprietary runtimes' },
              { value: '60d', label: 'Notice on any retainer' },
            ]}
          />
        }
      />

      {/* Differentiators */}
      <Section tone="mesh" aria-labelledby="different-heading">
        <Reveal>
          <SectionHeading
            id="different-heading"
            eyebrow="The differences"
            title={
              <>
                Claims are cheap. <span className="text-gradient">These are contractual.</span>
              </>
            }
            lead="Each of these appears in our statements of work, not just on this page."
          />
        </Reveal>
        <FeatureGrid
          className="mt-14"
          columns={3}
          features={differentiators.map((item) => ({
            title: item.title,
            body: item.body,
            icon: item.icon,
            accent: item.accent,
          }))}
        />
      </Section>

      {/* Comparison table */}
      <Section tone="white" aria-labelledby="compare-heading">
        <Reveal>
          <SectionHeading
            id="compare-heading"
            eyebrow="Side by side"
            title={
              <>
                What you usually get. <span className="text-gradient">What you get here.</span>
              </>
            }
            lead="Written from the complaints clients bring us about their last engagement."
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 overflow-x-auto rounded-3xl border border-ink-100 shadow-lift-sm">
            <table className="w-full min-w-[46rem] border-collapse text-left">
              <caption className="sr-only">
                Comparison of typical consultancy engagements and CyberXSolutions engagements
              </caption>
              <thead>
                <tr className="bg-ink-50">
                  <th scope="col" className="px-6 py-4 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-ink-500">
                    Dimension
                  </th>
                  <th scope="col" className="px-6 py-4 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-ink-500">
                    Typical engagement
                  </th>
                  <th scope="col" className="px-6 py-4 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-brand-700">
                    With CyberXSolutions
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr key={row.dimension} className={index % 2 === 1 ? 'bg-ink-50/40' : 'bg-white'}>
                    <th scope="row" className="px-6 py-5 align-top text-[0.9375rem] font-bold text-ink-950">
                      {row.dimension}
                    </th>
                    <td className="px-6 py-5 align-top text-[0.9375rem] leading-relaxed text-ink-500">{row.typical}</td>
                    <td className="px-6 py-5 align-top">
                      <span className="flex items-start gap-2.5">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white">
                          <Icon name="check" className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span className="text-[0.9375rem] font-medium leading-relaxed text-ink-800">{row.us}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Section>

      {/* Principles */}
      <Section tone="muted" aria-labelledby="principles-heading">
        <Reveal>
          <SectionHeading
            id="principles-heading"
            eyebrow="Engagement principles"
            title={
              <>
                How we behave <span className="text-gradient">when the project gets difficult.</span>
              </>
            }
          />
        </Reveal>
        <FeatureGrid
          className="mt-14"
          columns={3}
          features={engagementPrinciples.map((item) => ({
            title: item.title,
            body: item.body,
            icon: item.icon,
            accent: item.accent,
          }))}
        />
      </Section>

      {/* When not to hire us */}
      <Section tone="white" aria-labelledby="not-heading">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <Reveal>
            <SectionHeading
              id="not-heading"
              align="left"
              eyebrow="The honest part"
              title={
                <>
                  When you should <span className="text-gradient">hire somebody else.</span>
                </>
              }
              lead="We would rather lose the engagement than take on work we are the wrong shape for. If any of these describe you, we will say so in the first conversation."
            />
          </Reveal>

          <Reveal from="right" delay={100}>
            <ul className="space-y-4">
              {[
                {
                  title: 'You need it live in three weeks',
                  body: 'We will not skip the baseline, the evaluation or the shadow period. If the date is immovable, a faster firm is genuinely the better answer.',
                },
                {
                  title: 'You want the cheapest possible price',
                  body: 'We staff senior people and include security, documentation and training. There are firms who will quote lower by removing those.',
                },
                {
                  title: 'The decision is already made',
                  body: 'If you have chosen the technology and want hands to implement it, you want a staffing partner. We will keep challenging the choice.',
                },
                {
                  title: 'You are under 200 people with a simple need',
                  body: 'Our engagement model often costs more than it can return at that scale. We will point you at a product or a smaller specialist.',
                },
              ].map((item, index) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-ink-100 bg-ink-50/60 p-6"
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <h3 className="flex items-start gap-2.5 text-base font-bold text-ink-950">
                    <Icon name="alert-triangle" className="mt-0.5 h-4 w-4 shrink-0 text-sunset-500" />
                    {item.title}
                  </h3>
                  <p className="mt-2.5 pl-[1.625rem] text-[0.9375rem] leading-relaxed text-ink-500">{item.body}</p>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="link-arrow mt-7">
              Tell us which one you are
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </Section>

      <Section tone="mesh" size="sm" aria-label="Results">
        <StatsBand stats={companyStats} />
      </Section>

      {/* Testimonials */}
      <Section tone="white" aria-labelledby="voices-heading">
        <Reveal>
          <SectionHeading
            id="voices-heading"
            eyebrow="In their words"
            title={
              <>
                Attribution by role and sector. <span className="text-gradient">Names stay confidential.</span>
              </>
            }
          />
        </Reveal>
        <TestimonialGrid className="mt-14" items={testimonials} />
      </Section>

      <FAQSection
        faqs={[
          {
            question: 'How do you compare on price to a large consultancy?',
            answer:
              'Our day rate sits below the big four and above an offshore development shop. Total cost is usually well below both, because we staff smaller senior teams, do not bill a discovery phase that produces slides, and include security, documentation and training rather than pricing them separately.',
          },
          {
            question: 'What if we already have an internal AI team?',
            answer:
              'That is a good starting position and it changes the shape of the engagement rather than removing it. We usually bring platform depth, evaluation discipline and the security patterns your team has not had time to build, and we pair deliberately so it stays with them.',
          },
          {
            question: 'Do you ever say a project should not go ahead?',
            answer:
              'Roughly a third of our discovery engagements end that way. It is not a rhetorical position — the assessments are fixed-price precisely so that recommending against a build does not cost us anything we were counting on.',
          },
          {
            question: 'How do you handle a project going wrong?',
            answer:
              'We tell you early, in writing, with options. Every engagement has phase boundaries where you can stop and keep what has been produced. What we will not do is absorb a problem quietly and surface it at the deadline.',
          },
          {
            question: 'Can we speak to a reference client?',
            answer:
              'Yes, once we are past initial scoping. Most of our clients are under confidentiality agreements, so we arrange introductions selectively and with their permission rather than publishing a list.',
          },
          {
            question: 'What is your typical engagement size?',
            answer:
              'Assessments run from a couple of weeks. Production builds usually sit between three and six months. Enterprise platform programmes run six to twelve months and then deliberately shrink as your team takes ownership.',
          },
        ]}
        eyebrow="Selection questions"
        title="What procurement usually asks"
        tone="muted"
      />

      <Section tone="white" size="sm" aria-label="Related pages">
        <RelatedLinks
          links={[
            { label: 'About', href: '/about', description: 'Who we are and what we believe' },
            { label: 'Process', href: '/process', description: 'Five phases, stop points at each' },
            { label: 'Case studies', href: '/case-studies', description: 'Measured outcomes' },
            { label: 'Services', href: '/services', description: 'Everything we do' },
            { label: 'Technologies', href: '/technologies', description: 'Our engineering stack' },
            { label: 'Contact', href: '/contact', description: 'Book a working session' },
          ]}
        />
      </Section>

      <CTA />
    </>
  );
}
