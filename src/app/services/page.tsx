import type { Metadata } from 'next';
import Link from 'next/link';

import { PageHero } from '@/components/sections/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Icon } from '@/components/ui/Icon';
import { JsonLd, RelatedLinks } from '@/components/ui/Bits';
import { ServiceIndexCard } from '@/components/templates/ServicePage';
import { FAQSection } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';
import { StatsBand } from '@/components/sections/Blocks';
import { MetricPanel } from '@/components/visuals/Panels';

import { services, serviceGroups, getService } from '@/content/services';
import { generalFaqs } from '@/content/social';
import { companyStats } from '@/content/company';
import { buildMetadata } from '@/lib/seo';
import { graph, collectionSchema } from '@/lib/schema';

export const metadata: Metadata = buildMetadata({
  title: 'Services — AI, Automation, Engineering & Security',
  description:
    'Ten disciplines built by the same engineers to the same standard: AI agents, automation, enterprise platforms, cybersecurity, custom software, web, mobile, cloud, marketing and SEO.',
  keywords: [
    'AI services',
    'enterprise AI consulting',
    'business automation services',
    'software development services',
    'cybersecurity services',
    'cloud consulting',
    'digital transformation services',
  ],
  path: '/services',
  ogTitle: 'Ten disciplines. One engineering standard.',
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={graph(
          collectionSchema({
            name: 'CyberXSolutions services',
            description: 'AI, automation, engineering, security and growth services.',
            path: '/services',
            items: services.map((service) => ({ name: service.name, href: service.href })),
          }),
        )}
      />

      <PageHero
        eyebrow="Services"
        title={
          <>
            Ten disciplines.
            <br />
            <span className="text-gradient">One engineering standard.</span>
          </>
        }
        lead="Most engagements start in one service and end up touching three. That is why they are built by the same senior engineers, to the same bar, rather than sold by separate teams with separate incentives."
        trail={[{ name: 'Services', href: '/services' }]}
        badge="Senior engineers on every engagement"
        secondaryCta={{ label: 'See the work', href: '/case-studies' }}
        visual={
          <MetricPanel
            label="Across every engagement"
            badge="Verified"
            headline={{ value: '96%', caption: 'Projects delivered on the scope we agreed', delta: 'Fixed price where scope allows' }}
            rows={[
              { label: 'Baseline measured before build', value: '100%', ratio: 100, accent: 'blue' },
              { label: 'Benefit re-tested at 90 days', value: '100%', ratio: 100, accent: 'violet' },
              { label: 'Client owns the code outright', value: 'Always', ratio: 100, accent: 'emerald' },
            ]}
            metrics={[
              { value: '240+', label: 'Systems in production' },
              { value: '0', label: 'Proprietary runtimes' },
              { value: '24/7', label: 'Managed operations' },
            ]}
          />
        }
      />

      {/* Grouped services */}
      <Section tone="mesh" aria-labelledby="catalogue-heading">
        <Reveal>
          <SectionHeading
            id="catalogue-heading"
            eyebrow="The catalogue"
            title={
              <>
                Pick the problem. <span className="text-gradient">We will tell you which one it actually is.</span>
              </>
            }
            lead="Clients often arrive asking for a chatbot and leave with a reconciliation workflow. Naming the real problem is the first thing we do."
          />
        </Reveal>

        <div className="mt-16 space-y-16">
          {serviceGroups.map((group) => (
            <div key={group.heading}>
              <Reveal>
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-ink-200/70 pb-5">
                  <h3 className="font-display text-2xl font-extrabold tracking-tight text-ink-950">{group.heading}</h3>
                  <p className="text-[0.9375rem] text-ink-500">{group.blurb}</p>
                </div>
              </Reveal>
              <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {group.slugs.map((slug, index) => {
                  const service = getService(slug);
                  if (!service) return null;
                  return <ServiceIndexCard key={slug} service={service} index={index} />;
                })}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Proof */}
      <Section tone="white" size="sm" aria-label="Results across engagements">
        <StatsBand stats={companyStats} />
      </Section>

      {/* How to choose */}
      <Section tone="muted" aria-labelledby="choose-heading">
        <Reveal>
          <SectionHeading
            id="choose-heading"
            eyebrow="Where to start"
            title={
              <>
                Not sure which one? <span className="text-gradient">Start with the symptom.</span>
              </>
            }
          />
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {[
            { symptom: 'The same exception lands in the same inbox every week.', service: 'AI Automation', href: '/ai-automation' },
            { symptom: 'Our people spend the day gathering context, then make a two-minute decision.', service: 'AI Agents', href: '/ai-agents' },
            { symptom: 'We have eleven AI pilots and two things in production.', service: 'Enterprise Solutions', href: '/enterprise-solutions' },
            { symptom: 'Our analysts close alerts they have not really read.', service: 'AI Cybersecurity', href: '/ai-cybersecurity' },
            { symptom: 'The platform covers 70% and spreadsheets cover the rest.', service: 'Custom Software', href: '/custom-software-development' },
            { symptom: 'Our site looks fine and produces no pipeline.', service: 'Web Development', href: '/web-development' },
            { symptom: 'Field teams still use paper because the app needs a signal.', service: 'Mobile Development', href: '/mobile-development' },
            { symptom: 'The cloud bill grows faster than the revenue.', service: 'Cloud Engineering', href: '/cloud-engineering' },
            { symptom: 'The dashboard is green and sales cannot find a single deal.', service: 'Digital Marketing', href: '/digital-marketing' },
            { symptom: 'We rank for our own name and nothing else.', service: 'SEO', href: '/seo' },
          ].map((row, index) => (
            <Reveal key={row.href} delay={index * 50}>
              <Link
                href={row.href}
                className="group flex items-center justify-between gap-5 rounded-2xl border border-ink-100 bg-white p-5 transition-all duration-500 ease-smooth hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lift sm:p-6"
              >
                <span className="min-w-0">
                  <span className="block text-[0.9375rem] font-medium leading-snug text-ink-700">
                    &ldquo;{row.symptom}&rdquo;
                  </span>
                  <span className="mt-2 block text-[0.8125rem] font-bold text-brand-600">{row.service}</span>
                </span>
                <Icon
                  name="arrow-right"
                  className="h-5 w-5 shrink-0 text-ink-300 transition-transform duration-300 ease-smooth group-hover:translate-x-1 group-hover:text-brand-500"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <FAQSection
        faqs={generalFaqs}
        eyebrow="Engagement questions"
        title="How working with us actually goes"
        tone="white"
      />

      <Section tone="white" size="sm" aria-label="Related pages">
        <RelatedLinks
          title="Keep exploring"
          links={[
            { label: 'Industries', href: '/industries', description: 'Sector-specific constraints and work' },
            { label: 'Case studies', href: '/case-studies', description: 'Measured before-and-after results' },
            { label: 'Process', href: '/process', description: 'The five phases in detail' },
            { label: 'Technologies', href: '/technologies', description: 'The stack behind the systems' },
            { label: 'Why choose us', href: '/why-choose-us', description: 'How we differ, concretely' },
            { label: 'Contact', href: '/contact', description: 'Book a working session' },
          ]}
        />
      </Section>

      <CTA />
    </>
  );
}
