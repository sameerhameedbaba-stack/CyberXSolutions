import Link from 'next/link';
import { cn } from '@/lib/utils';

import { Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { Icon, IconTile } from '@/components/ui/Icon';
import { JsonLd, RelatedLinks, CheckList } from '@/components/ui/Bits';

import { PageHero } from '@/components/sections/PageHero';
import { FeatureGrid, UseCaseList, ProcessSteps, TechPills } from '@/components/sections/Blocks';
import { FAQSection } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';

import { AgentConstellation, AutomationPipeline, SecurityRadar, CloudTopology } from '@/components/visuals/Diagrams';
import { WebPerformancePanel, MobileShowcase, SerpPreview, GrowthFunnel, BlueprintPanel } from '@/components/visuals/Mockups';
import { MetricPanel } from '@/components/visuals/Panels';

import type { Service } from '@/content/services';
import { graph, serviceSchema } from '@/lib/schema';

/* ------------------------------------------------------------------ */
/* Per-service hero visual                                             */
/* ------------------------------------------------------------------ */

function HeroVisual({ service }: { service: Service }) {
  switch (service.visual) {
    case 'agents':
      return <AgentConstellation />;
    case 'automation':
      return <AutomationPipeline />;
    case 'security':
      return <SecurityRadar />;
    case 'cloud':
      return <CloudTopology />;
    case 'web':
      return <WebPerformancePanel />;
    case 'mobile':
      return <MobileShowcase />;
    case 'serp':
      return <SerpPreview />;
    case 'funnel':
      return <GrowthFunnel />;
    case 'blueprint':
      return (
        <BlueprintPanel
          layers={[
            { heading: 'Experience', note: 'what people touch', accent: 'cyan', items: ['Web app', 'Mobile', 'Admin console', 'Partner portal'] },
            { heading: 'Domain services', note: 'your actual rules', accent: 'blue', items: ['Scheduling', 'Pricing', 'Approvals', 'Billing'] },
            { heading: 'Integration', note: 'systems you keep', accent: 'indigo', items: ['ERP', 'CRM', 'Payments', 'Identity'] },
            { heading: 'Foundation', note: 'reproducible from code', accent: 'emerald', items: ['Postgres', 'Queues', 'Observability', 'CI/CD'] },
          ]}
        />
      );
    case 'enterprise':
    default:
      return (
        <MetricPanel
          label="Portfolio view"
          badge="Live"
          headline={{ value: '40+', caption: 'Workflows running on one shared platform', delta: '62% cheaper per use case' }}
          rows={[
            { label: 'Idea → production', value: '9 weeks', ratio: 82, accent: 'blue' },
            { label: 'Low-risk security approval', value: '4 days', ratio: 92, accent: 'emerald' },
            { label: 'Benefit verified at 90 days', value: '100%', ratio: 100, accent: 'violet' },
          ]}
          metrics={[
            { value: '23', label: 'Systems registered' },
            { value: '47%', label: 'Run cost reduced' },
            { value: '14', label: 'Countries live' },
          ]}
          footnote="Every AI system in the organisation has a named owner, a data classification and a verified benefit."
        />
      );
  }
}

/* ------------------------------------------------------------------ */
/* Problem section                                                     */
/* ------------------------------------------------------------------ */

function ProblemSection({ service }: { service: Service }) {
  return (
    <Section tone="white" overlay="dot" aria-labelledby="problem-heading">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-20">
        <Reveal>
          <p className="eyebrow">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-gradient" />
            The problem
          </p>
          <h2 id="problem-heading" className="mt-5 text-display-md text-ink-950">
            {service.problem.title}
          </h2>
          <p className="mt-6 text-lead text-ink-500">{service.problem.body}</p>
        </Reveal>

        <Reveal from="right" delay={100}>
          <div className="rounded-3xl border border-ink-100 bg-ink-50/70 p-7 sm:p-8">
            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-ink-500">
              <Icon name="alert-triangle" className="h-4 w-4 text-sunset-500" />
              What it costs you
            </p>
            <ul className="mt-6 space-y-4">
              {service.problem.costs.map((cost) => (
                <li key={cost} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-sunset-400 to-blossom-500"
                  />
                  <span className="text-[0.9375rem] leading-relaxed text-ink-600">{cost}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Pricing                                                             */
/* ------------------------------------------------------------------ */

function PricingSection({ service }: { service: Service }) {
  return (
    <Section tone="white" aria-labelledby="pricing-heading">
      <Reveal>
        <SectionHeading
          id="pricing-heading"
          eyebrow="How we price it"
          title={
            <>
              Three ways in. <span className="text-gradient">A stop point at each one.</span>
            </>
          }
          lead={service.pricing.note}
        />
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {service.pricing.tiers.map((tier, index) => (
          <Reveal key={tier.name} delay={index * 90} className="h-full">
            <div
              className={cn(
                'relative flex h-full flex-col rounded-3xl p-7 transition-all duration-500 ease-smooth sm:p-8',
                tier.featured
                  ? 'bg-ink-950 text-ink-300 shadow-lift-lg'
                  : 'border border-ink-100 bg-white shadow-lift-sm hover:-translate-y-1 hover:shadow-lift',
              )}
            >
              {tier.featured ? (
                <>
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl"
                    style={{ background: 'radial-gradient(circle, rgba(47,107,255,0.5), rgba(47,107,255,0) 68%)' }}
                  />
                  <span className="relative w-fit rounded-full bg-brand-gradient px-2.5 py-1 text-[0.625rem] font-bold uppercase tracking-wider text-white">
                    Most chosen
                  </span>
                </>
              ) : null}

              <h3
                className={cn(
                  'relative font-display text-xl font-extrabold tracking-tight',
                  tier.featured ? 'mt-4 text-white' : 'text-ink-950',
                )}
              >
                {tier.name}
              </h3>
              <p
                className={cn(
                  'relative mt-1.5 font-mono text-[0.75rem] font-semibold uppercase tracking-wider',
                  tier.featured ? 'text-cyan-300' : 'text-brand-600',
                )}
              >
                {tier.frame}
              </p>
              <p
                className={cn(
                  'relative mt-5 text-[0.9375rem] leading-relaxed',
                  tier.featured ? 'text-ink-300' : 'text-ink-500',
                )}
              >
                {tier.body}
              </p>

              <ul className="relative mt-6 flex-1 space-y-3 border-t pt-6" style={{ borderColor: tier.featured ? 'rgba(255,255,255,0.1)' : undefined }}>
                {tier.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      className={cn(
                        'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full',
                        tier.featured ? 'bg-white/10 text-cyan-300' : 'bg-brand-gradient text-white',
                      )}
                    >
                      <Icon name="check" className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className={cn('text-[0.875rem] leading-relaxed', tier.featured ? 'text-ink-300' : 'text-ink-600')}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={cn(
                  'btn btn-md relative mt-7 w-full',
                  tier.featured
                    ? 'border border-white/20 bg-white/10 text-white backdrop-blur hover:border-white/40 hover:bg-white/15'
                    : 'btn-secondary',
                )}
              >
                <span className="relative z-10">Discuss {tier.name.toLowerCase()}</span>
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Template                                                            */
/* ------------------------------------------------------------------ */

export function ServicePage({ service }: { service: Service }) {
  const auroraByAccent: Record<string, 'cool' | 'violet' | 'fresh' | 'warm'> = {
    blue: 'cool',
    cyan: 'cool',
    indigo: 'violet',
    violet: 'violet',
    pink: 'violet',
    emerald: 'fresh',
    orange: 'warm',
  };

  return (
    <>
      <JsonLd
        data={graph(
          serviceSchema({
            name: service.name,
            description: service.seo.description,
            path: service.href,
            serviceType: service.eyebrow,
          }),
        )}
      />

      <PageHero
        eyebrow={service.eyebrow}
        title={service.h1}
        lead={service.lead}
        badge={service.heroBadge}
        trail={[{ name: 'Services', href: '/services' }, { name: service.name, href: service.href }]}
        stats={service.stats}
        aurora={auroraByAccent[service.accent] ?? 'cool'}
        secondaryCta={{ label: 'See related work', href: '/case-studies' }}
        visual={<HeroVisual service={service} />}
      />

      <ProblemSection service={service} />

      {/* Capabilities */}
      <Section tone="mesh" aria-labelledby="capabilities-heading">
        <Reveal>
          <SectionHeading
            id="capabilities-heading"
            eyebrow="What we build"
            title={
              <>
                The parts that make it <span className="text-gradient">survive production.</span>
              </>
            }
            lead="Every engagement includes all of this. None of it is an upgrade tier."
          />
        </Reveal>
        <FeatureGrid
          className="mt-14"
          columns={4}
          features={service.capabilities.map((capability) => ({
            title: capability.title,
            body: capability.body,
            icon: capability.icon,
            accent: capability.accent,
          }))}
        />
      </Section>

      {/* Outcomes */}
      <Section tone="white" aria-labelledby="outcomes-heading">
        <Reveal>
          <SectionHeading
            id="outcomes-heading"
            eyebrow="Where it pays"
            title={
              <>
                Real workloads. <span className="text-gradient">Real numbers.</span>
              </>
            }
            lead="Results are drawn from production engagements and measured against a pre-engagement baseline."
          />
        </Reveal>
        <UseCaseList className="mt-14" items={service.outcomes} />
      </Section>

      {/* Process */}
      <Section tone="muted" aria-labelledby="approach-heading">
        <Reveal>
          <SectionHeading
            id="approach-heading"
            eyebrow="How it runs"
            title={
              <>
                From first conversation <span className="text-gradient">to running system.</span>
              </>
            }
          />
        </Reveal>
        <ProcessSteps className="mt-14" steps={service.steps} />
        <Reveal delay={200}>
          <div className="mt-10 flex justify-center">
            <Button href="/process" variant="secondary" arrow>
              The full engagement process
            </Button>
          </div>
        </Reveal>
      </Section>

      {/* Stack */}
      <Section tone="white" aria-labelledby="stack-heading">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <Reveal>
            <SectionHeading
              id="stack-heading"
              align="left"
              eyebrow="Technology"
              title={
                <>
                  Chosen by evaluation, <span className="text-gradient">not by preference.</span>
                </>
              }
              lead="We build on what fits your constraints and what your team can maintain. Nothing here locks you in."
            />
            <CheckList
              className="mt-8"
              items={[
                'Your repositories, your cloud account, your licence',
                'No proprietary runtime you have to keep paying for',
                'Documentation written for the engineer who inherits it',
              ]}
            />
            <Link href="/technologies" className="link-arrow mt-7">
              See the full stack
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </Reveal>

          <TechPills className="lg:grid-cols-2" groups={service.stack} />
        </div>
      </Section>

      <PricingSection service={service} />

      <FAQSection
        faqs={service.faqs}
        eyebrow="Questions"
        title={`What buyers ask about ${service.name.toLowerCase()}`}
        lead="Direct answers, including the ones that are inconvenient for us."
        tone="muted"
      />

      {/* Related */}
      <Section tone="white" size="sm" aria-label="Related pages">
        <RelatedLinks title="Related" links={service.related} />
      </Section>

      <CTA
        title={`Bring us the ${service.name.toLowerCase()} problem you have already tried to solve.`}
        body="Ninety minutes with our engineers. You leave with a systems map, a shortlist and an honest read on whether this is worth doing at all."
      />
    </>
  );
}

export function ServiceIndexCard({ service, index }: { service: Service; index: number }) {
  return (
    <Reveal delay={index * 70} className="h-full">
      <Link href={service.href} className="group block h-full">
        <div className="ring-gradient flex h-full flex-col rounded-3xl bg-white p-7 shadow-lift-sm transition-all duration-500 ease-smooth hover:-translate-y-1.5 hover:shadow-lift-lg sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <IconTile name={service.icon} accent={service.accent} size="lg" />
            <Icon
              name="arrow-up-right"
              className="h-5 w-5 shrink-0 text-ink-300 transition-transform duration-300 ease-smooth group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-500"
            />
          </div>

          <h3 className="mt-6 font-display text-xl font-extrabold tracking-tight text-ink-950 group-hover:text-brand-700">
            {service.name}
          </h3>
          <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-500">{service.summary}</p>

          <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-ink-100 pt-5">
            {service.stats.slice(0, 2).map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-lg font-extrabold leading-none text-gradient">
                    {stat.prefix ?? ''}
                    {stat.decimals ? stat.value.toFixed(stat.decimals) : stat.value.toLocaleString('en-US')}
                    {stat.suffix ?? ''}
                  </span>
                  <span className="mt-1.5 block text-[0.6875rem] font-medium leading-tight text-ink-500">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Link>
    </Reveal>
  );
}
