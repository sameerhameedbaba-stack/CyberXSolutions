import type { Metadata } from 'next';
import Link from 'next/link';

import { PageHero } from '@/components/sections/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Icon, IconTile } from '@/components/ui/Icon';
import { RelatedLinks, JsonLd, Badge } from '@/components/ui/Bits';
import { SpotlightCard } from '@/components/ui/Card';
import { CTA } from '@/components/sections/CTA';
import { FAQSection } from '@/components/sections/FAQ';
import { MetricPanel } from '@/components/visuals/Panels';

import { resourceItems, posts } from '@/content/insights';
import { formatDate } from '@/lib/utils';
import { buildMetadata } from '@/lib/seo';
import { graph, collectionSchema } from '@/lib/schema';

export const metadata: Metadata = buildMetadata({
  title: 'Resources — Frameworks, models and checklists we actually use',
  description:
    'The AI readiness assessment, agent guardrail specification, automation payback model, governance starter, performance budget template and migration checklist we run on live engagements.',
  keywords: [
    'AI readiness assessment',
    'AI guardrails framework',
    'automation ROI calculator',
    'AI governance template',
    'Core Web Vitals budget',
    'SEO migration checklist',
  ],
  path: '/resources',
  ogTitle: 'The frameworks we use on live engagements',
});

export default function ResourcesPage() {
  return (
    <>
      <JsonLd
        data={graph(
          collectionSchema({
            name: 'CyberXSolutions resource library',
            description: 'Frameworks, models and checklists used on live engagements.',
            path: '/resources',
            items: resourceItems.map((item) => ({ name: item.title, href: item.href })),
          }),
        )}
      />

      <PageHero
        eyebrow="Resources"
        title={
          <>
            The frameworks we use <span className="text-gradient">on live engagements.</span>
          </>
        }
        lead="Not gated lead magnets rewritten from a blog post. These are the actual assessment questions, control specifications and cost models our engineers run — published because they are more useful to you than they are secret to us."
        trail={[{ name: 'Resources', href: '/resources' }]}
        badge="Nothing here is gated"
        secondaryCta={{ label: 'Read the blog', href: '/blog' }}
        aurora="fresh"
        visual={
          <MetricPanel
            label="What is in the library"
            badge="Free"
            headline={{ value: '6', caption: 'Working frameworks, all used on real engagements' }}
            rows={[
              { label: 'AI readiness assessment', value: '40 questions', ratio: 100, accent: 'blue' },
              { label: 'Agent guardrail specification', value: 'Reference impl.', ratio: 82, accent: 'emerald' },
              { label: 'Automation payback model', value: 'Spreadsheet', ratio: 70, accent: 'violet' },
              { label: 'Migration protection checklist', value: '38 points', ratio: 64, accent: 'orange' },
            ]}
            metrics={[
              { value: '0', label: 'Email walls' },
              { value: '0', label: 'Sales follow-up' },
              { value: '100%', label: 'Used internally' },
            ]}
          />
        }
      />

      {/* Library */}
      <Section tone="white" aria-labelledby="library-heading">
        <Reveal>
          <SectionHeading
            id="library-heading"
            eyebrow="The library"
            title={
              <>
                Take them. <span className="text-gradient">Use them without us.</span>
              </>
            }
            lead="Some are published in full on this site; the working documents we send on request, because they are worth a five-minute conversation about your context. Either way there is no email wall and no follow-up sequence."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {resourceItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 80} className="h-full">
              <Link href={item.href} className="group block h-full">
                <SpotlightCard className="flex h-full flex-col p-7 sm:p-8">
                  <div className="relative z-10 flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <IconTile name={item.icon} accent={item.accent} size="lg" />
                      <Badge tone="neutral">{item.type}</Badge>
                    </div>
                    <h3 className="mt-6 text-lg font-bold text-ink-950 group-hover:text-brand-700">{item.title}</h3>
                    <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-500">{item.description}</p>
                    <p className="mt-6 flex items-center justify-between gap-3 border-t border-ink-100 pt-5 text-[0.8125rem] text-ink-500">
                      <span>{item.meta}</span>
                      <span className="inline-flex shrink-0 items-center gap-1.5 font-semibold text-brand-600">
                        {item.action}
                        <Icon
                          name="arrow-right"
                          className="h-4 w-4 transition-transform duration-300 ease-smooth group-hover:translate-x-1"
                        />
                      </span>
                    </p>
                  </div>
                </SpotlightCard>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Latest writing */}
      <Section tone="mesh" aria-labelledby="writing-heading">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionHeading
              id="writing-heading"
              align="left"
              eyebrow="From the blog"
              title={
                <>
                  Field notes <span className="text-gradient">from the same engagements.</span>
                </>
              }
            />
          </Reveal>
          <Reveal delay={80}>
            <Link href="/blog" className="link-arrow">
              All posts
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {posts.slice(0, 3).map((post, index) => (
            <Reveal key={post.slug} delay={index * 90} className="h-full">
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <div className="flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-7 shadow-lift-sm transition-all duration-500 ease-smooth hover:-translate-y-1 hover:shadow-lift">
                  <IconTile name={post.icon} accent={post.accent} />
                  <h3 className="mt-5 text-lg font-bold leading-snug text-ink-950 group-hover:text-brand-700">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-500">{post.excerpt}</p>
                  <p className="mt-5 text-[0.8125rem] text-ink-400">
                    <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readTime}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <FAQSection
        faqs={[
          {
            question: 'Why are none of these behind an email wall?',
            answer:
              'Because a framework behind a form gets downloaded and never opened. We would rather it get used. Several are published in full on this site; the working documents — the assessment sheet and the payback model — we send on request, because they are genuinely more useful with five minutes of context about your situation. Asking does not put you on a list.',
          },
          {
            question: 'Can we use these commercially?',
            answer:
              'Yes, inside your own organisation, without attribution. If you are a consultancy planning to resell them as your own methodology, please ask first — we will usually say yes with a credit line.',
          },
          {
            question: 'Will these be updated?',
            answer:
              'They change when our practice changes. The guardrail specification in particular has been revised several times as model capabilities and attack techniques have moved. We date each revision so you can tell whether yours is current.',
          },
          {
            question: 'Can you walk us through one?',
            answer:
              'Yes. We run the readiness assessment and the payback model with clients as part of a working session at no charge. It is more useful with someone asking follow-up questions than as a document you fill in alone.',
          },
        ]}
        eyebrow="About the library"
        title="Using these frameworks"
        tone="white"
      />

      <Section tone="white" size="sm" aria-label="Related pages">
        <RelatedLinks
          links={[
            { label: 'Blog', href: '/blog', description: 'Field notes from the work' },
            { label: 'Case studies', href: '/case-studies', description: 'Measured outcomes' },
            { label: 'Process', href: '/process', description: 'How we deliver' },
            { label: 'Enterprise Solutions', href: '/enterprise-solutions', description: 'Governance at scale' },
            { label: 'AI Agents', href: '/ai-agents', description: 'Guardrails in practice' },
            { label: 'Contact', href: '/contact', description: 'Run one with us' },
          ]}
        />
      </Section>

      <CTA
        title="Want us to run one of these with you?"
        body="The readiness assessment and the payback model both work better as a conversation. Ninety minutes, no charge, and you keep the output whatever you decide afterwards."
        secondary={{ label: 'Read the blog', href: '/blog' }}
      />
    </>
  );
}
