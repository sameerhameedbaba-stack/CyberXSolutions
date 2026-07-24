import Link from 'next/link';
import type { Metadata } from 'next';

import { Section, SectionHeading } from '@/components/ui/Section';
import { Aurora, Motes } from '@/components/ui/Aurora';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { Badge, CheckList, JsonLd } from '@/components/ui/Bits';
import { Icon, IconTile } from '@/components/ui/Icon';
import { SpotlightCard } from '@/components/ui/Card';
import { Counter } from '@/components/ui/Counter';

import {
  StatsBand,
  FeatureGrid,
  SplitFeature,
  ProcessSteps,
  LogoCloud,
  TestimonialGrid,
  TechPills,
} from '@/components/sections/Blocks';
import { FAQSection } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';

import { HeroConsole } from '@/components/visuals/HeroConsole';
import { AgentLoop, AutomationPipeline, SecurityRadar } from '@/components/visuals/Diagrams';
import { CodeWindow, GlobeArcs } from '@/components/visuals/Mockups';
import { IndustryMosaic } from '@/components/visuals/Panels';

import { services } from '@/content/services';
import { industries } from '@/content/industries';
import { caseStudies } from '@/content/caseStudies';
import { testimonials, ecosystem, generalFaqs } from '@/content/social';
import { techStack } from '@/content/technologies';
import { processPhases } from '@/content/process';
import { companyStats } from '@/content/company';
import { buildMetadata } from '@/lib/seo';
import { graph, collectionSchema } from '@/lib/schema';

export const metadata: Metadata = buildMetadata({
  title: 'CyberXSolutions — AI Agents, Automation & Cybersecurity for Enterprise',
  description:
    'CyberXSolutions builds agentic AI, business automation and AI-powered security systems that run real operations end to end — with the guardrails, evidence and audit trail enterprises require.',
  keywords: [
    'agentic AI',
    'AI agents',
    'enterprise AI',
    'business automation',
    'AI cybersecurity',
    'custom software development',
    'cloud engineering',
    'digital transformation',
    'AI consulting',
  ],
  path: '/',
  absoluteTitle: true,
});

/* ================================================================== */
/* Hero                                                                */
/* ================================================================== */

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white pb-20 pt-28 sm:pt-32 lg:pb-28 lg:pt-36">
      <Aurora preset="hero" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 grid-overlay" />
      <Motes count={16} className="-z-10 hidden md:block" />

      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12 xl:gap-16">
          <div>
            <Reveal>
              <Badge tone="brand" icon="sparkles">
                AI-first engineering · Built for enterprise
              </Badge>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-display-xl text-ink-950">
                The work <span className="text-gradient animate-gradient-pan">runs itself.</span>
                <br />
                You stay in control.
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-7 max-w-xl text-lead-lg text-ink-500">
                We build agentic AI, automation and security systems that carry real operations end to end — with the
                permissions, evidence and audit trail that let you give software genuine authority.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Button href="/contact" size="lg" arrow className="w-full sm:w-auto">
                  Book a working session
                </Button>
                <Button href="/case-studies" variant="secondary" size="lg" className="w-full sm:w-auto">
                  See the work
                </Button>
              </div>
            </Reveal>

            <Reveal delay={290}>
              <p className="mt-6 flex items-start gap-2 text-sm text-ink-400">
                <Icon name="check-circle" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                Ninety minutes, no pitch deck. Around a third end with us saying you don&rsquo;t need us.
              </p>
            </Reveal>

            <Reveal delay={340}>
              <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-7 border-t border-ink-100 pt-9 sm:grid-cols-4">
                {[
                  { value: 240, suffix: '+', label: 'Systems in production' },
                  { value: 94, suffix: '%', label: 'Straight-through resolution' },
                  { value: 2.8, decimals: 1, suffix: ' min', label: 'Mean time to contain' },
                  { value: 4.1, decimals: 1, prefix: '$', suffix: 'M', label: 'Annual client savings' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <span className="block font-display text-[1.75rem] font-extrabold leading-none text-gradient">
                        <Counter
                          value={stat.value}
                          prefix={stat.prefix}
                          suffix={stat.suffix}
                          decimals={stat.decimals}
                        />
                      </span>
                      <span className="mt-2 block text-[0.8125rem] font-medium leading-snug text-ink-500">
                        {stat.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal from="scale" delay={200}>
            <HeroConsole />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/* Ecosystem band                                                      */
/* ================================================================== */

function EcosystemBand() {
  return (
    <section aria-label="Technology ecosystem" className="border-y border-ink-100 bg-ink-50/50 py-10">
      <p className="container-x mb-7 text-center text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-ink-400">
        We build on the platforms you already run
      </p>
      <LogoCloud items={ecosystem} />
    </section>
  );
}

/* ================================================================== */
/* Why this is hard                                                    */
/* ================================================================== */

const failureModes = [
  {
    stat: '87%',
    title: 'never reach production',
    body: 'Not because the model was weak. Because nobody owned the operating change, and security review had no fast lane.',
  },
  {
    stat: '11 wks',
    title: 'average security review',
    body: 'When every project queues behind the same review regardless of risk, teams quietly stop proposing them.',
  },
  {
    stat: '0',
    title: 'business cases re-tested',
    body: 'The case is written to secure funding and never opened again, so nobody learns which estimates were optimistic.',
  },
];

function RealitySection() {
  return (
    <Section tone="white" overlay="dot" aria-labelledby="reality-heading">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <SectionHeading
              id="reality-heading"
              align="left"
              eyebrow="Why this is hard"
              title={
                <>
                  Everyone has been sold AI once.
                  <br />
                  <span className="text-gradient">Almost nobody was sold the hard part.</span>
                </>
              }
              lead="The model was never the constraint. Permissions, evaluation, cost ceilings, exception handling and an audit trail are — and they are exactly what gets cut when a pilot needs to look impressive by Thursday."
            />
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-10 rounded-2xl border border-ink-100 bg-white p-6 shadow-lift-sm sm:p-7">
              <p className="text-[0.9375rem] font-semibold text-ink-950">What we do differently</p>
              <CheckList
                className="mt-5"
                items={[
                  'Measure the baseline before writing code, so improvement is a fact rather than an impression',
                  'Design permissions, spend ceilings and escalation before the first agent exists',
                  'Run in shadow mode until the numbers agree — that is where the real exceptions surface',
                  'Return at 90 days and re-test the business case, publishing the result either way',
                ]}
              />
              <Link href="/process" className="link-arrow mt-6 text-sm">
                See how an engagement runs
                <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="lg:pt-4">
          <ul className="space-y-4">
            {failureModes.map((mode, index) => (
              <Reveal
                key={mode.title}
                as="li"
                delay={index * 100}
                from="right"
                className="ring-gradient rounded-2xl bg-white p-6 shadow-lift-sm sm:p-7"
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-display text-3xl font-extrabold leading-none text-gradient sm:text-4xl">
                    {mode.stat}
                  </span>
                  <span className="text-base font-bold text-ink-950">{mode.title}</span>
                </div>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-500">{mode.body}</p>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={340}>
            <div className="mt-4 flex items-start gap-3 rounded-2xl border border-dashed border-brand-200 bg-brand-50/50 p-6">
              <Icon name="lightbulb" className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
              <p className="text-[0.9375rem] leading-relaxed text-ink-700">
                <span className="font-bold text-ink-950">The pattern is consistent.</span> Across forty-plus enterprise
                engagements, the projects that reached production had a named business owner, a risk framework with a
                real fast lane, and a verification date in the calendar before anyone wrote code.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

/* ================================================================== */
/* Proof band                                                          */
/* ================================================================== */

function ProofBand() {
  return (
    <Section tone="muted" size="sm" aria-label="Company results">
      <StatsBand stats={companyStats} />
    </Section>
  );
}

/* ================================================================== */
/* Services                                                            */
/* ================================================================== */

function ServicesSection() {
  return (
    <Section id="services" tone="mesh" aria-labelledby="services-heading">
      <Reveal>
        <SectionHeading
          id="services-heading"
          eyebrow="What we do"
          title={
            <>
              Ten disciplines. <span className="text-gradient">One engineering standard.</span>
            </>
          }
          lead="Most of our work starts in one service and ends up touching three. That is why they are built by the same people, to the same bar, rather than sold by separate teams."
        />
      </Reveal>

      <FeatureGrid
        className="mt-14"
        columns={3}
        features={services.map((service) => ({
          title: service.name,
          body: service.summary,
          icon: service.icon,
          accent: service.accent,
          href: service.href,
        }))}
      />

      <Reveal delay={150}>
        <div className="mt-10 flex justify-center">
          <Button href="/services" variant="secondary" size="lg" arrow>
            Compare every service
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}

/* ================================================================== */
/* Agents                                                              */
/* ================================================================== */

function AgentsSection() {
  return (
    <Section tone="white" aria-labelledby="agents-heading">
      <SplitFeature
        eyebrow="AI Agents"
        accent="violet"
        title={
          <span id="agents-heading">
            Give software authority. <span className="text-gradient">Keep the receipts.</span>
          </span>
        }
        body="An agent that can resolve a ticket, reconcile an invoice or contain a threat needs more than a good model. It needs boundaries it cannot argue its way past, and a record of everything it did."
        points={[
          {
            title: 'Deny by default',
            body: 'Agents can only call the tools they were granted, with scoped, revocable credentials per environment.',
            icon: 'lock',
          },
          {
            title: 'Thresholds you set',
            body: 'Anything above your confidence or value line routes to a named approver with the full reasoning attached.',
            icon: 'user-check',
          },
          {
            title: 'Scored every build',
            body: 'A prompt or model change ships only when it beats the version already running, on your own evaluation set.',
            icon: 'flask',
          },
        ]}
        cta={{ label: 'Explore AI Agents', href: '/ai-agents' }}
        visual={<AgentLoop />}
      />
    </Section>
  );
}

/* ================================================================== */
/* Automation                                                          */
/* ================================================================== */

function AutomationSection() {
  return (
    <Section tone="muted" aria-labelledby="automation-heading">
      <SplitFeature
        reverse
        eyebrow="AI Automation"
        accent="blue"
        title={
          <span id="automation-heading">
            The process that keeps breaking, <span className="text-gradient">rebuilt as software.</span>
          </span>
        }
        body="Not a macro, an integration platform and a script from 2021 held together by one person who knows the exception. One durable workflow, one dashboard, one answer when something fails at 3am."
        points={[
          {
            title: 'Redesign before automating',
            body: 'We strip out steps that exist only because of a system constraint nobody remembers. Usually 15–25% of them.',
            icon: 'wand',
          },
          {
            title: 'Exceptions are designed, not discovered',
            body: 'Every workflow has a path for what it cannot handle, with an owner, context and an SLA that is monitored.',
            icon: 'alert-triangle',
          },
          {
            title: 'Reconciled every run',
            body: 'End-of-run checks prove what went in came out. Discrepancies raise themselves instead of waiting for month-end.',
            icon: 'check-circle',
          },
        ]}
        cta={{ label: 'Explore AI Automation', href: '/ai-automation' }}
        visual={<AutomationPipeline />}
      />
    </Section>
  );
}

/* ================================================================== */
/* Security                                                            */
/* ================================================================== */

function SecuritySection() {
  return (
    <Section tone="fresh" aria-labelledby="security-heading">
      <SplitFeature
        eyebrow="AI Cybersecurity"
        accent="emerald"
        title={
          <span id="security-heading">
            Contained in minutes. <span className="text-gradient-fresh">Not discovered in months.</span>
          </span>
        }
        body="Your analysts are not short of alerts. They are short of conclusions. We do the investigative work they currently do by hand, then contain what is real — reversibly, and always with a record."
        points={[
          {
            title: 'Tune before automating',
            body: 'Two to three weeks reducing false positives first. Automating a 91% false-positive queue industrialises the wrong answer.',
            icon: 'filter',
          },
          {
            title: 'Reversible actions only',
            body: 'Session revocation, token invalidation, host isolation. Anything destructive still requires a named human.',
            icon: 'shield-check',
          },
          {
            title: 'We attack our own work',
            body: 'Purple-team validation before any autonomous authority is granted, including prompt injection against our own agents.',
            icon: 'radar',
          },
        ]}
        cta={{ label: 'Explore AI Cybersecurity', href: '/ai-cybersecurity' }}
        visual={<SecurityRadar />}
      />
    </Section>
  );
}

/* ================================================================== */
/* Engineering                                                         */
/* ================================================================== */

const agentCode = [
  { parts: [{ text: '// Tools are typed. An invented value fails here,', tone: 'com' as const }] },
  { parts: [{ text: '// not in your ledger.', tone: 'com' as const }] },
  {
    parts: [
      { text: 'export const', tone: 'kw' as const },
      { text: ' postInvoice ' },
      { text: '=', tone: 'kw' as const },
      { text: ' defineTool', tone: 'fn' as const },
      { text: '({' },
    ],
  },
  { indent: 1, parts: [{ text: 'name: ' }, { text: "'erp.postInvoice'", tone: 'str' as const }, { text: ',' }] },
  { indent: 1, parts: [{ text: 'input: invoiceSchema,' }] },
  { indent: 1, parts: [{ text: 'scope: [' }, { text: "'ap:write'", tone: 'str' as const }, { text: '],' }] },
  { indent: 1, parts: [{ text: 'requiresApprovalAbove: ' }, { text: '25_000', tone: 'num' as const }, { text: ',' }] },
  { indent: 1, parts: [{ text: 'reversible: ' }, { text: 'true', tone: 'kw' as const }, { text: ',' }] },
  {
    indent: 1,
    parts: [{ text: 'async ' }, { text: 'run', tone: 'fn' as const }, { text: '(input, ctx) {' }],
  },
  {
    indent: 2,
    parts: [
      { text: 'await', tone: 'kw' as const },
      { text: ' ctx.' },
      { text: 'policy', tone: 'fn' as const },
      { text: '.assert(input);' },
    ],
  },
  {
    indent: 2,
    parts: [
      { text: 'return', tone: 'kw' as const },
      { text: ' erp.' },
      { text: 'post', tone: 'fn' as const },
      { text: '(input, ctx.audit);' },
    ],
  },
  { indent: 1, parts: [{ text: '},' }] },
  { parts: [{ text: '});' }] },
];

function EngineeringSection() {
  return (
    <Section tone="white" aria-labelledby="engineering-heading">
      <SplitFeature
        reverse
        eyebrow="Engineering"
        accent="cyan"
        title={
          <span id="engineering-heading">
            Boring, observable systems <span className="text-gradient-cool">beat clever ones.</span>
          </span>
        }
        body="We optimise for the engineer who inherits this in three years — which is usually our own client. Typed end to end, tested where it matters, documented as it ships, and yours from the first commit."
        points={[
          {
            title: 'You own everything',
            body: 'Your repositories, your infrastructure, your licence. No proprietary runtime you have to keep paying for.',
            icon: 'key',
          },
          {
            title: 'Handover is a deliverable',
            body: 'Documentation, runbooks and training are scoped and estimated like any other feature, not sold afterwards.',
            icon: 'book',
          },
          {
            title: 'Budgets block the merge',
            body: 'Performance and accessibility thresholds fail the build rather than the launch. It is the only approach that survives a busy team.',
            icon: 'gauge',
          },
        ]}
        cta={{ label: 'Explore custom software', href: '/custom-software-development' }}
        visual={
          <div className="space-y-4">
            <CodeWindow lines={agentCode} filename="tools/post-invoice.ts" />
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: '96%', label: 'Delivered on agreed scope' },
                { value: '0.9s', label: 'Typical LCP' },
                { value: 'AA', label: 'WCAG 2.2 floor' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-ink-100 bg-white px-3 py-4 text-center shadow-lift-sm"
                >
                  <p className="font-display text-xl font-extrabold text-gradient">{item.value}</p>
                  <p className="mt-1 text-[0.6875rem] font-medium leading-tight text-ink-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        }
      />
    </Section>
  );
}

/* ================================================================== */
/* Industries                                                          */
/* ================================================================== */

function IndustriesSection() {
  return (
    <Section tone="muted" aria-labelledby="industries-heading">
      <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-20">
        <div>
          <Reveal>
            <SectionHeading
              id="industries-heading"
              align="left"
              eyebrow="Industries"
              title={
                <>
                  The constraint is never the technology. <span className="text-gradient">It is your industry.</span>
                </>
              }
              lead="A model risk framework in banking, a HIPAA boundary in healthcare, an accessibility obligation in the public sector. We have shipped inside all of them, and we design to the constraint from day one."
            />
          </Reveal>

          <div className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {industries.map((industry, index) => (
              <Reveal key={industry.slug} delay={index * 60}>
                <Link
                  href={`/industries#${industry.slug}`}
                  className="group -m-2 flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-white"
                >
                  <IconTile name={industry.icon} accent={industry.accent} size="sm" />
                  <span className="min-w-0 flex-1 text-[0.9375rem] font-semibold text-ink-950 group-hover:text-brand-700">
                    {industry.name}
                  </span>
                  <Icon
                    name="arrow-right"
                    className="h-4 w-4 shrink-0 text-ink-300 transition-transform duration-300 ease-smooth group-hover:translate-x-1 group-hover:text-brand-500"
                  />
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <Button href="/industries" variant="secondary" className="mt-9" arrow>
              See sector detail
            </Button>
          </Reveal>
        </div>

        <Reveal from="right" delay={120}>
          <IndustryMosaic
            items={industries.slice(0, 6).map((industry) => ({
              label: industry.name,
              icon: industry.icon,
              accent: industry.accent,
            }))}
          />
        </Reveal>
      </div>
    </Section>
  );
}

/* ================================================================== */
/* Process                                                             */
/* ================================================================== */

function ProcessSection() {
  return (
    <Section tone="white" aria-labelledby="process-heading">
      <Reveal>
        <SectionHeading
          id="process-heading"
          eyebrow="How we work"
          title={
            <>
              Five phases. <span className="text-gradient">A stop point at every boundary.</span>
            </>
          }
          lead="You can end the engagement at any phase and keep everything produced up to that point. We structure it that way on purpose — it keeps us honest about whether the next phase is worth funding."
        />
      </Reveal>

      <ProcessSteps
        className="mt-14"
        steps={processPhases.slice(0, 4).map((phase) => ({
          label: phase.label,
          title: phase.title,
          body: phase.body,
          icon: phase.icon,
          meta: phase.meta,
        }))}
      />

      <Reveal delay={200}>
        <div className="mt-10 flex justify-center">
          <Button href="/process" variant="secondary" size="lg" arrow>
            Read the full process
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}

/* ================================================================== */
/* Case studies                                                        */
/* ================================================================== */

function CaseStudiesSection() {
  const featured = caseStudies.slice(0, 3);

  return (
    <Section tone="mesh" aria-labelledby="cases-heading">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <Reveal>
          <SectionHeading
            id="cases-heading"
            align="left"
            eyebrow="Selected work"
            title={
              <>
                Measured before. <span className="text-gradient">Measured after.</span>
              </>
            }
            lead="Client names are withheld under confidentiality agreements. The numbers are the ones we reported back to them."
          />
        </Reveal>
        <Reveal delay={100}>
          <Button href="/case-studies" variant="secondary" arrow>
            All case studies
          </Button>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {featured.map((study, index) => (
          <Reveal key={study.slug} delay={index * 100} className="h-full">
            <Link href={`/case-studies/${study.slug}`} className="group block h-full">
              <SpotlightCard className="flex h-full flex-col p-7 sm:p-8">
                <div className="relative z-10 flex flex-1 flex-col">
                  <div className="flex items-center justify-between gap-3">
                    <IconTile name={study.icon} accent={study.accent} />
                    <span className="rounded-full border border-ink-100 bg-ink-50 px-2.5 py-1 text-[0.6875rem] font-semibold text-ink-500">
                      {study.sector}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-ink-950 group-hover:text-brand-700">{study.title}</h3>
                  <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-500">{study.summary}</p>

                  <div className="mt-6 rounded-2xl bg-ink-50 p-4">
                    <p className="font-display text-2xl font-extrabold leading-none text-gradient">
                      {study.headline.value}
                    </p>
                    <p className="mt-1.5 text-[0.8125rem] font-medium text-ink-600">{study.headline.label}</p>
                  </div>

                  <span className="link-arrow mt-5 text-sm">
                    Read the detail
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </span>
                </div>
              </SpotlightCard>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ================================================================== */
/* Testimonials                                                        */
/* ================================================================== */

function TestimonialsSection() {
  return (
    <Section tone="white" aria-labelledby="voices-heading">
      <Reveal>
        <SectionHeading
          id="voices-heading"
          eyebrow="In their words"
          title={
            <>
              The compliment we hear most <span className="text-gradient">is about being told no.</span>
            </>
          }
          lead="Attribution is by role and sector. Individual names and client organisations stay confidential."
        />
      </Reveal>

      <TestimonialGrid className="mt-14" items={testimonials} />
    </Section>
  );
}

/* ================================================================== */
/* Technology                                                          */
/* ================================================================== */

function TechnologySection() {
  return (
    <Section tone="muted" aria-labelledby="tech-heading">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <Reveal>
            <SectionHeading
              id="tech-heading"
              align="left"
              eyebrow="Technology"
              title={
                <>
                  We pick boring <span className="text-gradient">on purpose.</span>
                </>
              }
              lead="Novel technology carries a maintenance tax your team pays for years. We use the interesting option only where it clearly beats the boring one — and we write down why."
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8">
              <GlobeArcs className="max-w-[20rem]" />
            </div>
          </Reveal>
          <Reveal delay={180}>
            <Button href="/technologies" variant="secondary" className="mt-6" arrow>
              See the full stack
            </Button>
          </Reveal>
        </div>

        <TechPills
          className="lg:grid-cols-2"
          groups={techStack.slice(0, 8).map((group) => ({ heading: group.heading, items: group.items.slice(0, 6) }))}
        />
      </div>
    </Section>
  );
}

/* ================================================================== */
/* Page                                                                */
/* ================================================================== */

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={graph(
          collectionSchema({
            name: 'CyberXSolutions services',
            description: 'AI, automation, engineering and security services from CyberXSolutions Inc.',
            path: '/',
            items: services.map((service) => ({ name: service.name, href: service.href })),
          }),
        )}
      />
      <Hero />
      <EcosystemBand />
      <RealitySection />
      <ProofBand />
      <ServicesSection />
      <AgentsSection />
      <AutomationSection />
      <SecuritySection />
      <EngineeringSection />
      <IndustriesSection />
      <ProcessSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <TechnologySection />
      <FAQSection
        faqs={generalFaqs}
        eyebrow="Common questions"
        title="What buyers ask before the first call"
        lead="If your question is not here, send it to a senior engineer rather than a form."
        tone="mesh"
      />
      <CTA />
    </>
  );
}
