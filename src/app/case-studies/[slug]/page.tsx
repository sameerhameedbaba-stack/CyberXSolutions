import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { PageHero } from '@/components/sections/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Icon, IconTile } from '@/components/ui/Icon';
import { RelatedLinks, Badge, CheckList } from '@/components/ui/Bits';
import { CTA } from '@/components/sections/CTA';
import { ResultsChart } from '@/components/visuals/Mockups';

import { caseStudies, getCaseStudy } from '@/content/caseStudies';
import { buildMetadata } from '@/lib/seo';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return buildMetadata({
    title: `${study.title} — Case Study`,
    description: study.summary,
    keywords: [
      'case study',
      study.sector.toLowerCase(),
      ...study.services.map((service) => service.label.toLowerCase()),
      'measured results',
    ],
    path: `/case-studies/${study.slug}`,
    ogTitle: study.title,
  });
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const others = caseStudies.filter((item) => item.slug !== study.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={study.sector}
        title={study.title}
        lead={study.summary}
        trail={[
          { name: 'Case studies', href: '/case-studies' },
          { name: study.title, href: `/case-studies/${study.slug}` },
        ]}
        badge={`${study.duration} · ${study.region}`}
        secondaryCta={{ label: 'More case studies', href: '/case-studies' }}
        aurora={study.accent === 'emerald' ? 'fresh' : study.accent === 'pink' ? 'violet' : 'cool'}
        visual={<ResultsChart title="Before and after" rows={study.chart} />}
      />

      {/* Headline metrics */}
      <Section tone="white" size="sm" aria-label="Headline results">
        <Reveal>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-ink-100 bg-ink-100 sm:grid-cols-2 lg:grid-cols-4">
            {study.metrics.map((metric) => (
              <div key={metric.label} className="bg-white p-7">
                <p className="font-display text-[2.25rem] font-extrabold leading-none text-gradient">{metric.value}</p>
                <p className="mt-3 text-[0.875rem] font-medium leading-snug text-ink-600">{metric.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Challenge & approach */}
      <Section tone="mesh" aria-labelledby="challenge-heading">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <Reveal>
            <p className="eyebrow">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-gradient" />
              The challenge
            </p>
            <h2 id="challenge-heading" className="mt-5 text-display-sm text-ink-950">
              What they were dealing with
            </h2>
            <p className="mt-6 text-lead text-ink-500">{study.challenge}</p>

            <div className="mt-8 flex flex-wrap gap-2">
              <Badge tone="neutral" icon="building">
                {study.client}
              </Badge>
              <Badge tone="neutral" icon="globe">
                {study.region}
              </Badge>
              <Badge tone="neutral" icon="clock">
                {study.duration}
              </Badge>
            </div>

            <div className="mt-8">
              <h3 className="text-[0.75rem] font-bold uppercase tracking-[0.14em] text-ink-500">Services involved</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {study.services.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-white px-3.5 py-1.5 text-[0.8125rem] font-semibold text-ink-700 transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700"
                    >
                      {service.label}
                      <Icon name="arrow-up-right" className="h-3.5 w-3.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal from="right" delay={100}>
            <div className="rounded-3xl border border-ink-100 bg-white p-7 shadow-lift-sm sm:p-9">
              <p className="eyebrow">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-gradient" />
                What we did
              </p>
              <ol className="mt-7 space-y-6">
                {study.approach.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-gradient font-mono text-[0.6875rem] font-bold text-white shadow-glow">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="pt-1 text-[0.9375rem] leading-relaxed text-ink-600">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Result + quote */}
      <Section tone="white" aria-labelledby="result-heading">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <Reveal>
            <SectionHeading
              id="result-heading"
              align="left"
              eyebrow="The outcome"
              title={
                <>
                  <span className="text-gradient">{study.headline.value}</span> {study.headline.label.toLowerCase()}
                </>
              }
              lead="Measured against the pre-engagement baseline and re-verified at the 90-day review."
            />
            <CheckList
              className="mt-8"
              items={study.metrics.map((metric) => `${metric.value} — ${metric.label}`)}
            />
          </Reveal>

          <Reveal from="right" delay={100}>
            <figure className="relative overflow-hidden rounded-[2rem] bg-ink-950 p-8 sm:p-11">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full blur-3xl"
                style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.5), rgba(124,58,237,0) 68%)' }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full blur-3xl"
                style={{ background: 'radial-gradient(circle, rgba(47,107,255,0.45), rgba(47,107,255,0) 68%)' }}
              />
              <Icon name="quote" className="relative h-9 w-9 text-cyan-300" />
              <blockquote className="relative mt-6 font-display text-2xl font-bold leading-snug tracking-tight text-white sm:text-[1.75rem]">
                {study.quote.text}
              </blockquote>
              <figcaption className="relative mt-8 flex items-center gap-3.5 border-t border-white/10 pt-6">
                <IconTile name={study.icon} accent={study.accent} />
                <span>
                  <span className="block text-sm font-bold text-white">{study.quote.attribution}</span>
                  <span className="block text-sm text-ink-300">{study.client}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Section>

      {/* Other case studies */}
      <Section tone="muted" aria-labelledby="others-heading">
        <Reveal>
          <SectionHeading
            id="others-heading"
            eyebrow="More work"
            title={
              <>
                Other engagements <span className="text-gradient">worth reading.</span>
              </>
            }
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {others.map((other, index) => (
            <Reveal key={other.slug} delay={index * 90} className="h-full">
              <Link href={`/case-studies/${other.slug}`} className="group block h-full">
                <div className="flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-7 shadow-lift-sm transition-all duration-500 ease-smooth hover:-translate-y-1 hover:shadow-lift">
                  <IconTile name={other.icon} accent={other.accent} />
                  <h3 className="mt-5 text-lg font-bold text-ink-950 group-hover:text-brand-700">{other.title}</h3>
                  <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-500">{other.summary}</p>
                  <p className="mt-5 font-display text-xl font-extrabold text-gradient">{other.headline.value}</p>
                  <p className="text-[0.8125rem] text-ink-500">{other.headline.label}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="white" size="sm" aria-label="Related pages">
        <RelatedLinks
          links={[
            ...study.services.map((service) => ({
              label: service.label,
              href: service.href,
              description: 'The service behind this work',
            })),
            { label: 'All case studies', href: '/case-studies', description: 'Every engagement' },
            { label: 'Process', href: '/process', description: 'How we deliver' },
            { label: 'Industries', href: '/industries', description: 'Sector expertise' },
            { label: 'Contact', href: '/contact', description: 'Start a conversation' },
          ]}
        />
      </Section>

      <CTA />
    </>
  );
}
