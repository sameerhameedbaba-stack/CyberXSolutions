import type { Metadata } from 'next';

import { PageHero } from '@/components/sections/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Icon, IconTile } from '@/components/ui/Icon';
import { RelatedLinks, CheckList, Badge } from '@/components/ui/Bits';
import { CTA } from '@/components/sections/CTA';
import { FeatureGrid } from '@/components/sections/Blocks';
import { FAQSection } from '@/components/sections/FAQ';
import { MetricPanel } from '@/components/visuals/Panels';

import { processPhases, engagementPrinciples, processFaqs } from '@/content/process';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Our Process — Five phases with a stop point at each',
  description:
    'How a CyberXSolutions engagement runs: understand, decide, build, prove, operate. Measured baselines, two-week increments, and the ability to stop at any phase boundary.',
  keywords: [
    'AI project process',
    'software delivery process',
    'enterprise AI engagement',
    'agile delivery',
    'discovery phase',
    'technology consulting process',
  ],
  path: '/process',
  ogTitle: 'Five phases. A stop point at every boundary.',
});

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Our process"
        title={
          <>
            Five phases. <span className="text-gradient">A stop point at every boundary.</span>
          </>
        }
        lead="You can end the engagement at any phase and keep everything produced up to that point. We structure it that way on purpose — it keeps us honest about whether the next phase is worth funding."
        trail={[{ name: 'Process', href: '/process' }]}
        badge="Working software every two weeks, not status reports"
        secondaryCta={{ label: 'See what we have shipped', href: '/case-studies' }}
        aurora="cool"
        visual={
          <MetricPanel
            label="A typical engagement"
            badge="Phase 03"
            headline={{ value: '2 weeks', caption: 'Between demonstrations of running software', delta: 'Always deployable' }}
            rows={[
              { label: 'Phase 01 · Understand', value: '1–3 weeks', ratio: 26, accent: 'cyan' },
              { label: 'Phase 02 · Decide', value: '1 week', ratio: 12, accent: 'blue' },
              { label: 'Phase 03 · Build', value: '4–20 weeks', ratio: 100, accent: 'violet' },
              { label: 'Phase 04 · Prove', value: '2–12 weeks', ratio: 58, accent: 'indigo' },
              { label: 'Phase 05 · Operate', value: 'Ongoing', ratio: 40, accent: 'emerald' },
            ]}
            metrics={[
              { value: '6–10h', label: 'Your time in discovery' },
              { value: '45 min', label: 'Demo every fortnight' },
              { value: '90d', label: 'Benefit verification' },
            ]}
          />
        }
      />

      {/* Phases in detail */}
      <Section tone="mesh" aria-labelledby="phases-heading">
        <Reveal>
          <SectionHeading
            id="phases-heading"
            eyebrow="The five phases"
            title={
              <>
                What happens, when, <span className="text-gradient">and what you get at the end of it.</span>
              </>
            }
            lead="Including the part most proposals leave out: how much of your team&rsquo;s time this actually costs."
          />
        </Reveal>

        <div className="mt-16 space-y-6">
          {processPhases.map((phase, index) => (
            <Reveal key={phase.title} delay={index * 70}>
              <article className="ring-gradient overflow-hidden rounded-3xl bg-white shadow-lift-sm">
                <div className="grid gap-8 p-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12 lg:p-10">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <IconTile name={phase.icon} accent={['cyan', 'blue', 'violet', 'indigo', 'emerald'][index] as 'cyan'} size="lg" />
                      <div>
                        <span className="font-mono text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-brand-600">
                          {phase.label}
                        </span>
                        <h3 className="font-display text-2xl font-extrabold tracking-tight text-ink-950">
                          {phase.title}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-5 text-lead text-ink-500">{phase.body}</p>
                    <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink-50 px-3.5 py-1.5 text-[0.8125rem] font-semibold text-ink-700">
                      <Icon name="clock" className="h-3.5 w-3.5 text-brand-500" />
                      {phase.meta}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-ink-100 bg-ink-50/60 p-6">
                    <h4 className="text-[0.75rem] font-bold uppercase tracking-[0.14em] text-ink-500">
                      What you receive
                    </h4>
                    <CheckList className="mt-4" items={phase.deliverables} />
                    <p className="mt-5 flex items-start gap-2.5 border-t border-ink-200/70 pt-5 text-[0.875rem] leading-relaxed text-ink-600">
                      <Icon name="users" className="mt-0.5 h-4 w-4 shrink-0 text-violet-500" />
                      <span>
                        <span className="font-semibold text-ink-900">Your time: </span>
                        {phase.yourTime}
                      </span>
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Principles */}
      <Section tone="white" aria-labelledby="principles-heading">
        <Reveal>
          <SectionHeading
            id="principles-heading"
            eyebrow="Engagement principles"
            title={
              <>
                The rules we hold ourselves to <span className="text-gradient">when it gets difficult.</span>
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

      {/* First session */}
      <Section tone="fresh" aria-labelledby="session-heading">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Badge tone="emerald" icon="clock">
              Ninety minutes · no charge
            </Badge>
            <h2 id="session-heading" className="mt-6 text-display-md text-ink-950">
              What the first session <span className="text-gradient-fresh">actually looks like.</span>
            </h2>
            <p className="mt-6 text-lead text-ink-500">
              No slides from us. Four to six people from your side, ideally including someone who does the work rather
              than only people who manage it.
            </p>
            <CheckList
              className="mt-8"
              tone="emerald"
              items={[
                'You describe the process that keeps breaking, in whatever detail you have',
                'We ask for whatever numbers already exist — volumes, handling time, error rates',
                'We name the constraint you believe is immovable and test whether it is',
                'You leave with a rough systems map and an honest read on whether this is worth pursuing',
              ]}
            />
          </Reveal>

          <Reveal from="right" delay={120}>
            <div className="glass rounded-[1.75rem] p-7 sm:p-9">
              <h3 className="font-mono text-eyebrow uppercase text-ink-500">What to bring</h3>
              <ul className="mt-6 space-y-4">
                {[
                  { title: 'The process, not the solution', body: 'Describe what happens today. We will work out whether AI is even the right answer.', icon: 'workflow' },
                  { title: 'Whatever numbers you have', body: 'Even rough ones. A wrong baseline is more useful than no baseline.', icon: 'chart-bar' },
                  { title: 'The person who does the work', body: 'They know the exceptions. Their manager usually knows the version in the process document.', icon: 'users' },
                  { title: 'Your hard constraints', body: 'Data residency, regulator, a system you cannot touch. Tell us early so we design to it.', icon: 'lock' },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3.5 rounded-2xl border border-ink-100 bg-white p-4">
                    <IconTile name={item.icon} accent="emerald" size="sm" />
                    <span>
                      <span className="block text-[0.9375rem] font-bold text-ink-950">{item.title}</span>
                      <span className="mt-1 block text-[0.875rem] leading-relaxed text-ink-500">{item.body}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <FAQSection faqs={processFaqs} eyebrow="Process questions" title="How this works in practice" tone="muted" />

      <Section tone="white" size="sm" aria-label="Related pages">
        <RelatedLinks
          links={[
            { label: 'Why choose us', href: '/why-choose-us', description: 'The concrete differences' },
            { label: 'Services', href: '/services', description: 'What we deliver' },
            { label: 'Case studies', href: '/case-studies', description: 'Measured outcomes' },
            { label: 'About', href: '/about', description: 'Who we are' },
            { label: 'Technologies', href: '/technologies', description: 'The stack we build on' },
            { label: 'Contact', href: '/contact', description: 'Book the first session' },
          ]}
        />
      </Section>

      <CTA
        title="Ninety minutes. No slides. No obligation."
        body="Bring the process that keeps breaking and whatever numbers you have. You leave with a systems map and an honest read — including if that read is that you do not need us."
      />
    </>
  );
}
