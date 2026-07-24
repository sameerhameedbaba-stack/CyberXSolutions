import type { Metadata } from 'next';
import Link from 'next/link';

import { PageHero } from '@/components/sections/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Icon, IconTile } from '@/components/ui/Icon';
import { RelatedLinks, JsonLd, Badge } from '@/components/ui/Bits';
import { CTA } from '@/components/sections/CTA';
import { FAQSection } from '@/components/sections/FAQ';
import { IndustryMosaic } from '@/components/visuals/Panels';

import { industries } from '@/content/industries';
import { buildMetadata } from '@/lib/seo';
import { graph, collectionSchema } from '@/lib/schema';

export const metadata: Metadata = buildMetadata({
  title: 'Industries — AI and automation built to your sector’s constraints',
  description:
    'Financial services, healthcare, manufacturing, retail, logistics, professional services, public sector and technology. The regulatory and operational constraints we design to from day one.',
  keywords: [
    'AI for financial services',
    'healthcare AI',
    'manufacturing automation',
    'retail AI',
    'logistics automation',
    'public sector AI',
    'industry AI solutions',
  ],
  path: '/industries',
  ogTitle: 'The constraint is never the technology. It is your industry.',
});

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={graph(
          collectionSchema({
            name: 'Industries served by CyberXSolutions',
            description: 'Sector-specific AI, automation and security work.',
            path: '/industries',
            items: industries.map((industry) => ({ name: industry.name, href: `/industries#${industry.slug}` })),
          }),
        )}
      />

      <PageHero
        eyebrow="Industries"
        title={
          <>
            The constraint is never the technology. <span className="text-gradient">It is your industry.</span>
          </>
        }
        lead="A model risk framework in banking. A HIPAA boundary in healthcare. An accessibility obligation in the public sector. We have shipped inside all of them, and we design to the constraint from the first review rather than discovering it at launch."
        trail={[{ name: 'Industries', href: '/industries' }]}
        badge="Regulated-sector delivery across eight industries"
        secondaryCta={{ label: 'See case studies', href: '/case-studies' }}
        aurora="warm"
        visual={
          <IndustryMosaic
            items={industries.slice(0, 9).map((industry) => ({
              label: industry.name,
              icon: industry.icon,
              accent: industry.accent,
            }))}
          />
        }
      />

      {/* Sector quick nav */}
      <Section tone="white" size="sm" aria-label="Jump to a sector">
        <Reveal>
          <nav aria-label="Sector navigation" className="flex flex-wrap justify-center gap-2.5">
            {industries.map((industry) => (
              <a
                key={industry.slug}
                href={`#${industry.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2 text-[0.8125rem] font-semibold text-ink-700 transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700"
              >
                <Icon name={industry.icon} className="h-3.5 w-3.5" strokeWidth={2} />
                {industry.name}
              </a>
            ))}
          </nav>
        </Reveal>
      </Section>

      {/* Sectors */}
      {industries.map((industry, index) => (
        <Section
          key={industry.slug}
          id={industry.slug}
          tone={index % 2 === 0 ? 'muted' : 'white'}
          aria-labelledby={`${industry.slug}-heading`}
        >
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-20">
            <Reveal>
              <div className="flex items-center gap-3.5">
                <IconTile name={industry.icon} accent={industry.accent} size="lg" />
                <span className="font-mono text-eyebrow uppercase text-brand-600">{industry.name}</span>
              </div>
              <h2 id={`${industry.slug}-heading`} className="mt-6 text-display-sm text-ink-950">
                {industry.headline}
              </h2>
              <p className="mt-5 text-lead text-ink-500">{industry.body}</p>

              <h3 className="mt-9 text-[0.75rem] font-bold uppercase tracking-[0.14em] text-ink-500">
                Pressures we hear most
              </h3>
              <ul className="mt-4 space-y-3">
                {industry.pressures.map((pressure) => (
                  <li key={pressure} className="flex items-start gap-3">
                    <Icon name="alert-triangle" className="mt-0.5 h-4 w-4 shrink-0 text-sunset-500" />
                    <span className="text-[0.9375rem] leading-relaxed text-ink-600">{pressure}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-2">
                {industry.compliance.map((item) => (
                  <Badge key={item} tone="neutral">
                    {item}
                  </Badge>
                ))}
              </div>
            </Reveal>

            <Reveal from="right" delay={100}>
              <div className="rounded-3xl border border-ink-100 bg-white p-7 shadow-lift-sm sm:p-8">
                <h3 className="text-[0.75rem] font-bold uppercase tracking-[0.14em] text-ink-500">
                  What we have shipped here
                </h3>
                <ul className="mt-6 space-y-3">
                  {industry.work.map((item) => (
                    <li
                      key={item.title}
                      className="rounded-2xl border border-ink-100 bg-ink-50/50 p-4 transition-colors duration-300 hover:border-brand-200 hover:bg-brand-50/40"
                    >
                      <p className="text-[0.9375rem] font-semibold text-ink-950">{item.title}</p>
                      <p className="mt-1.5 flex items-center gap-1.5 text-[0.875rem] font-semibold text-emerald-700">
                        <Icon name="trending-up" className="h-3.5 w-3.5 shrink-0" />
                        {item.result}
                      </p>
                    </li>
                  ))}
                </ul>
                <Link href="/case-studies" className="link-arrow mt-6 text-sm">
                  Read the detailed case studies
                  <Icon name="arrow-right" className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </Section>
      ))}

      <FAQSection
        faqs={[
          {
            question: 'Do you work in industries not listed here?',
            answer:
              'Yes. These are simply where we have the deepest track record. What transfers between sectors is the engineering discipline — measured baselines, guardrails, evaluation, audit trails. What does not transfer is regulatory detail, so if your sector is unfamiliar to us we will say so and factor the learning curve into the estimate rather than pretending otherwise.',
          },
          {
            question: 'How do you handle sector-specific compliance?',
            answer:
              'We treat regulation as a design input from the first architecture review. For regulated deployments we produce the evidence artefacts — model documentation, data governance records, human oversight design, audit trails — as part of delivery. Producing it during the build costs a fraction of reconstructing it for an auditor afterwards.',
          },
          {
            question: 'Can you work with our existing sector-specific software?',
            answer:
              'Almost always. We integrate with core banking platforms, EHRs, MES and WMS systems, practice management tools and case management systems regularly. Where a system offers no API we build a resilient file or database integration and document its limitations honestly rather than promising a clean interface that does not exist.',
          },
          {
            question: 'Do you have references in our sector?',
            answer:
              'Usually, and we arrange introductions selectively with client permission once we are past initial scoping. Most engagements are under confidentiality agreements, which is why the case studies on this site describe organisations by sector and scale rather than by name.',
          },
        ]}
        eyebrow="Sector questions"
        title="Working inside your constraints"
        tone="mesh"
      />

      <Section tone="white" size="sm" aria-label="Related pages">
        <RelatedLinks
          links={[
            { label: 'Case studies', href: '/case-studies', description: 'Sector work in detail' },
            { label: 'Services', href: '/services', description: 'Everything we deliver' },
            { label: 'Enterprise Solutions', href: '/enterprise-solutions', description: 'Governance at scale' },
            { label: 'AI Cybersecurity', href: '/ai-cybersecurity', description: 'Regulated-sector security' },
            { label: 'Process', href: '/process', description: 'How we deliver' },
            { label: 'Contact', href: '/contact', description: 'Talk to a senior engineer' },
          ]}
        />
      </Section>

      <CTA
        title="Tell us the constraint everyone says is immovable."
        body="Most of the time it genuinely is, and the right design works around it. Occasionally it turns out to be a decision from 2016 that nobody has revisited. Either way you will know within ninety minutes."
      />
    </>
  );
}
