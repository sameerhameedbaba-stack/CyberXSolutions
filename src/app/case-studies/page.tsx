import type { Metadata } from 'next';
import Link from 'next/link';

import { PageHero } from '@/components/sections/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Icon, IconTile } from '@/components/ui/Icon';
import { RelatedLinks, JsonLd, Badge } from '@/components/ui/Bits';
import { SpotlightCard } from '@/components/ui/Card';
import { CTA } from '@/components/sections/CTA';
import { StatsBand, TestimonialGrid } from '@/components/sections/Blocks';
import { ResultsChart } from '@/components/visuals/Mockups';

import { caseStudies } from '@/content/caseStudies';
import { testimonials } from '@/content/social';
import { companyStats } from '@/content/company';
import { buildMetadata } from '@/lib/seo';
import { graph, collectionSchema } from '@/lib/schema';

export const metadata: Metadata = buildMetadata({
  title: 'Case Studies — Measured before, measured after',
  description:
    'Six production engagements with the numbers we reported back to the client: accounts payable agents, an autonomous SOC, field mobile, enterprise AI platform, organic growth and cloud cost recovery.',
  keywords: [
    'AI case studies',
    'automation case studies',
    'enterprise AI results',
    'digital transformation case study',
    'security automation results',
    'cloud cost optimisation case study',
  ],
  path: '/case-studies',
  ogTitle: 'Measured before. Measured after.',
});

export default function CaseStudiesPage() {
  const [lead, ...rest] = caseStudies;

  return (
    <>
      <JsonLd
        data={graph(
          collectionSchema({
            name: 'CyberXSolutions case studies',
            description: 'Production engagements with measured outcomes.',
            path: '/case-studies',
            items: caseStudies.map((study) => ({ name: study.title, href: `/case-studies/${study.slug}` })),
          }),
        )}
      />

      <PageHero
        eyebrow="Selected work"
        title={
          <>
            Measured before. <span className="text-gradient">Measured after.</span>
          </>
        }
        lead="Client names are withheld under confidentiality agreements, so organisations are described by sector and scale. The numbers are the ones we reported back to them at the 90-day review."
        trail={[{ name: 'Case studies', href: '/case-studies' }]}
        badge="Every engagement re-measured 90 days after launch"
        secondaryCta={{ label: 'How we work', href: '/process' }}
        aurora="violet"
        visual={
          <ResultsChart
            title="Accounts payable · before and after"
            rows={lead.chart}
          />
        }
      />

      {/* Featured */}
      <Section tone="white" aria-labelledby="featured-heading">
        <Reveal>
          <Link href={`/case-studies/${lead.slug}`} className="group block">
            <article className="ring-gradient overflow-hidden rounded-[2rem] bg-white shadow-lift transition-all duration-500 ease-smooth hover:-translate-y-1 hover:shadow-lift-lg">
              <div className="grid gap-10 p-7 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14 lg:p-12">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge tone="brand" icon="star">
                      Featured
                    </Badge>
                    <Badge tone="neutral">{lead.sector}</Badge>
                    <Badge tone="neutral">{lead.duration}</Badge>
                  </div>

                  <h2 id="featured-heading" className="mt-6 text-display-sm text-ink-950 group-hover:text-brand-700">
                    {lead.title}
                  </h2>
                  <p className="mt-5 text-lead text-ink-500">{lead.summary}</p>

                  <dl className="mt-9 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-ink-100 pt-8 sm:grid-cols-4">
                    {lead.metrics.map((metric) => (
                      <div key={metric.label}>
                        <dt className="sr-only">{metric.label}</dt>
                        <dd>
                          <span className="block font-display text-2xl font-extrabold leading-none text-gradient">
                            {metric.value}
                          </span>
                          <span className="mt-2 block text-[0.75rem] font-medium leading-snug text-ink-500">
                            {metric.label}
                          </span>
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <span className="link-arrow mt-8">
                    Read the full engagement
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </span>
                </div>

                <figure className="rounded-3xl bg-ink-950 p-7 sm:p-9">
                  <Icon name="quote" className="h-8 w-8 text-cyan-300" />
                  <blockquote className="mt-5 font-display text-xl font-bold leading-snug tracking-tight text-white">
                    {lead.quote.text}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-white/10 pt-5 text-sm text-ink-300">
                    <span className="block font-semibold text-white">{lead.quote.attribution}</span>
                    <span className="block">
                      {lead.client} · {lead.region}
                    </span>
                  </figcaption>
                </figure>
              </div>
            </article>
          </Link>
        </Reveal>
      </Section>

      {/* Grid */}
      <Section tone="mesh" aria-labelledby="all-heading">
        <Reveal>
          <SectionHeading
            id="all-heading"
            eyebrow="More engagements"
            title={
              <>
                Different sectors. <span className="text-gradient">The same discipline.</span>
              </>
            }
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {rest.map((study, index) => (
            <Reveal key={study.slug} delay={index * 80} className="h-full">
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

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {study.services.map((service) => (
                        <span
                          key={service.href}
                          className="rounded-md border border-ink-100 bg-white px-2 py-1 text-[0.6875rem] font-medium text-ink-600"
                        >
                          {service.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="white" size="sm" aria-label="Aggregate results">
        <StatsBand stats={companyStats} />
      </Section>

      <Section tone="muted" aria-labelledby="voices-heading">
        <Reveal>
          <SectionHeading
            id="voices-heading"
            eyebrow="In their words"
            title={
              <>
                What clients said <span className="text-gradient">at the 90-day review.</span>
              </>
            }
          />
        </Reveal>
        <TestimonialGrid className="mt-14" items={testimonials} />
      </Section>

      <Section tone="white" size="sm" aria-label="Related pages">
        <RelatedLinks
          links={[
            { label: 'Services', href: '/services', description: 'How we deliver these outcomes' },
            { label: 'Industries', href: '/industries', description: 'Sector-specific work' },
            { label: 'Process', href: '/process', description: 'Five phases explained' },
            { label: 'Why choose us', href: '/why-choose-us', description: 'The concrete differences' },
            { label: 'Blog', href: '/blog', description: 'What we learned along the way' },
            { label: 'Contact', href: '/contact', description: 'Start your own' },
          ]}
        />
      </Section>

      <CTA
        title="Your numbers will be different. Let us find out how."
        body="Ninety minutes with our engineers to establish what your baseline actually is. That measurement is the first deliverable of every engagement, and it is the only honest starting point."
      />
    </>
  );
}
