import type { Metadata } from 'next';

import { PageHero } from '@/components/sections/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Icon, IconTile } from '@/components/ui/Icon';
import { RelatedLinks, CheckList, Badge } from '@/components/ui/Bits';
import { CTA } from '@/components/sections/CTA';
import { StatsBand, FeatureGrid } from '@/components/sections/Blocks';
import { TimelinePanel, PhilosophyCard, MetricPanel } from '@/components/visuals/Panels';
import { GlobeArcs } from '@/components/visuals/Mockups';

import {
  mission,
  vision,
  brandPromise,
  customerPromise,
  positioning,
  coreValues,
  story,
  founderMessage,
  philosophies,
  qualityStandards,
  roadmap,
  companyStats,
} from '@/content/company';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'About — An AI-first engineering company',
  description:
    'Who we are, what we believe and how we work. CyberXSolutions builds agentic AI, automation and security systems for organisations where being wrong is expensive.',
  keywords: [
    'about CyberXSolutions',
    'AI company',
    'AI engineering company',
    'enterprise AI consultancy',
    'company mission',
    'AI values',
  ],
  path: '/about',
  ogTitle: 'We built the company we wanted to hire.',
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            We built the company <span className="text-gradient">we wanted to hire.</span>
          </>
        }
        lead={positioning}
        trail={[{ name: 'About', href: '/about' }]}
        badge="Founded 2019 · Remote-first across North America and Europe"
        secondaryCta={{ label: 'See open roles', href: '/careers' }}
        aurora="violet"
        visual={
          <MetricPanel
            label="Where we are today"
            badge="Trailing 12 months"
            headline={{ value: '240+', caption: 'Systems running in production for clients', delta: '96% on agreed scope' }}
            rows={[
              { label: 'Engagements with senior-only teams', value: '100%', ratio: 100, accent: 'violet' },
              { label: 'Clients who own their code outright', value: '100%', ratio: 100, accent: 'blue' },
              { label: 'Discoveries that ended in "do not build"', value: '~30%', ratio: 30, accent: 'orange' },
            ]}
            metrics={[
              { value: '$4.1M', label: 'Annual client savings' },
              { value: '99.98%', label: 'Platform uptime' },
              { value: '11 min', label: 'Mean time to contain' },
            ]}
            footnote="We report the discoveries that ended in a no, because the ratio is the point."
          />
        }
      />

      {/* Mission / vision */}
      <Section tone="white" overlay="dot" aria-labelledby="mission-heading">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="ring-gradient h-full rounded-3xl bg-white p-8 shadow-lift-sm sm:p-10">
              <Badge tone="brand" icon="target">
                Mission
              </Badge>
              <h2 id="mission-heading" className="mt-6 font-display text-2xl font-extrabold leading-snug tracking-tight text-ink-950 sm:text-3xl">
                {mission}
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="ring-gradient h-full rounded-3xl bg-white p-8 shadow-lift-sm sm:p-10">
              <Badge tone="violet" icon="compass">
                Vision
              </Badge>
              <p className="mt-6 font-display text-xl font-bold leading-snug tracking-tight text-ink-950 sm:text-2xl">
                {vision}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <Reveal delay={150}>
            <div className="flex h-full items-start gap-4 rounded-2xl border border-ink-100 bg-ink-50/60 p-6">
              <IconTile name="award" accent="emerald" size="sm" />
              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-ink-500">Brand promise</h3>
                <p className="mt-2 text-[1.0625rem] font-semibold leading-snug text-ink-900">{brandPromise}</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex h-full items-start gap-4 rounded-2xl border border-ink-100 bg-ink-50/60 p-6">
              <IconTile name="handshake" accent="cyan" size="sm" />
              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-ink-500">Customer promise</h3>
                <p className="mt-2 text-[1.0625rem] font-semibold leading-snug text-ink-900">{customerPromise}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Values */}
      <Section tone="mesh" aria-labelledby="values-heading">
        <Reveal>
          <SectionHeading
            id="values-heading"
            eyebrow="What we believe"
            title={
              <>
                Six values. <span className="text-gradient">All of them cost us money sometimes.</span>
              </>
            }
            lead="A value you have never lost revenue over is a preference. These have each turned down work at least once."
          />
        </Reveal>
        <FeatureGrid
          className="mt-14"
          columns={3}
          features={coreValues.map((value) => ({
            title: value.title,
            body: value.body,
            icon: value.icon,
            accent: value.accent,
          }))}
        />
      </Section>

      {/* Story */}
      <Section tone="white" aria-labelledby="story-heading">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <SectionHeading
                id="story-heading"
                align="left"
                eyebrow="Our story"
                title={
                  <>
                    It started with a security team <span className="text-gradient">drowning in alerts.</span>
                  </>
                }
                lead={story.intro}
              />
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-8">
                <GlobeArcs className="max-w-[19rem]" />
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <TimelinePanel items={story.chapters} />
          </Reveal>
        </div>
      </Section>

      {/* Founder message */}
      <Section tone="muted" aria-labelledby="founder-heading">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-16">
          <Reveal>
            <SectionHeading
              id="founder-heading"
              align="left"
              eyebrow="From the founding team"
              title={
                <>
                  Every company we meet <span className="text-gradient">has been sold AI once already.</span>
                </>
              }
            />
            <div className="mt-7 space-y-5">
              {founderMessage.body.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="text-lead text-ink-500">
                  {paragraph}
                </p>
              ))}
            </div>
            <p className="mt-8 flex items-center gap-3 border-t border-ink-200/70 pt-6">
              <span className="font-display text-base font-bold text-ink-950">{founderMessage.attribution}</span>
              <span className="text-sm text-ink-500">{founderMessage.role}</span>
            </p>
          </Reveal>

          <Reveal from="right" delay={120}>
            <PhilosophyCard
              quote={founderMessage.quote}
              attribution={founderMessage.attribution}
              role={founderMessage.role}
            />
          </Reveal>
        </div>
      </Section>

      {/* Philosophies */}
      <Section tone="white" aria-labelledby="philosophy-heading">
        <Reveal>
          <SectionHeading
            id="philosophy-heading"
            eyebrow="How we think"
            title={
              <>
                Three philosophies <span className="text-gradient">we actually argue about internally.</span>
              </>
            }
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {philosophies.map((philosophy, index) => (
            <Reveal key={philosophy.title} delay={index * 100} className="h-full">
              <div className="flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-7 shadow-lift-sm transition-all duration-500 ease-smooth hover:-translate-y-1 hover:shadow-lift sm:p-8">
                <IconTile name={philosophy.icon} accent={philosophy.accent} size="lg" />
                <h3 className="mt-6 font-display text-xl font-extrabold tracking-tight text-ink-950">
                  {philosophy.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-500">{philosophy.body}</p>
                <CheckList className="mt-6 border-t border-ink-100 pt-6" items={philosophy.points} />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Quality standards */}
      <Section tone="fresh" aria-labelledby="quality-heading">
        <Reveal>
          <SectionHeading
            id="quality-heading"
            eyebrow="Quality standards"
            title={
              <>
                What &ldquo;done&rdquo; means here — <span className="text-gradient-fresh">written down.</span>
              </>
            }
            lead="These are the criteria every deliverable is checked against before it leaves. They are not aspirational; a build that misses one does not ship."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {qualityStandards.map((standard, index) => (
            <Reveal key={standard.title} delay={index * 70} className="h-full">
              <div className="flex h-full items-start gap-3.5 rounded-2xl border border-ink-100 bg-white p-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-gradient-fresh text-white">
                  <Icon name={standard.icon} className="h-4 w-4" strokeWidth={2} />
                </span>
                <div>
                  <h3 className="text-[0.9375rem] font-bold text-ink-950">{standard.title}</h3>
                  <p className="mt-1.5 text-[0.875rem] leading-relaxed text-ink-500">{standard.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section tone="white" size="sm" aria-label="Company results">
        <StatsBand stats={companyStats} />
      </Section>

      {/* Roadmap */}
      <Section tone="muted" aria-labelledby="roadmap-heading">
        <Reveal>
          <SectionHeading
            id="roadmap-heading"
            eyebrow="Where we are going"
            title={
              <>
                The roadmap, <span className="text-gradient">including the part that shrinks our revenue.</span>
              </>
            }
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {roadmap.map((item, index) => (
            <Reveal key={item.title} delay={index * 90} className="h-full">
              <div className="relative h-full overflow-hidden rounded-3xl border border-ink-100 bg-white p-7 shadow-lift-sm">
                <span className="font-mono text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-brand-600">
                  {item.period}
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink-950">{item.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-500">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="white" size="sm" aria-label="Related pages">
        <RelatedLinks
          links={[
            { label: 'Why choose us', href: '/why-choose-us', description: 'The concrete differences' },
            { label: 'Process', href: '/process', description: 'How an engagement runs' },
            { label: 'Careers', href: '/careers', description: 'Work with us' },
            { label: 'Partners', href: '/partners', description: 'Platforms and alliances' },
            { label: 'Case studies', href: '/case-studies', description: 'What we have shipped' },
            { label: 'Contact', href: '/contact', description: 'Start a conversation' },
          ]}
        />
      </Section>

      <CTA
        title="Bring us the thing you have already tried to fix twice."
        body="Ninety minutes with the engineers who would do the work. You leave with a systems map, a shortlist and an honest read on whether we are the right answer."
      />
    </>
  );
}
