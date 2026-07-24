import type { Metadata } from 'next';
import Link from 'next/link';

import { PageHero } from '@/components/sections/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Icon, IconTile } from '@/components/ui/Icon';
import { RelatedLinks, JsonLd, Badge } from '@/components/ui/Bits';
import { SpotlightCard } from '@/components/ui/Card';
import { CTA } from '@/components/sections/CTA';
import { MetricPanel } from '@/components/visuals/Panels';

import { posts } from '@/content/insights';
import { formatDate } from '@/lib/utils';
import { buildMetadata } from '@/lib/seo';
import { graph, collectionSchema } from '@/lib/schema';

export const metadata: Metadata = buildMetadata({
  title: 'Blog — Field notes from production AI',
  description:
    'What we have learned shipping agentic AI, automation and security systems into real enterprises. Written by the engineers who did the work, including the parts that did not go well.',
  keywords: [
    'AI blog',
    'enterprise AI insights',
    'AI agents guardrails',
    'automation best practices',
    'SEO for AI answers',
    'security automation',
  ],
  path: '/blog',
  ogTitle: 'Field notes from production AI',
});

export default function BlogPage() {
  const featured = posts.find((post) => post.featured) ?? posts[0];
  const rest = posts.filter((post) => post.slug !== featured.slug);

  return (
    <>
      <JsonLd
        data={graph(
          collectionSchema({
            name: 'CyberXSolutions blog',
            description: 'Field notes from production AI, automation and security engagements.',
            path: '/blog',
            items: posts.map((post) => ({ name: post.title, href: `/blog/${post.slug}` })),
          }),
        )}
      />

      <PageHero
        eyebrow="Blog"
        title={
          <>
            Field notes from <span className="text-gradient">production AI.</span>
          </>
        }
        lead="Written by the engineers who did the work, about the parts that were hard. No thought leadership, no predictions about 2030 — just what we learned putting these systems in front of real users."
        trail={[{ name: 'Blog', href: '/blog' }]}
        badge="Including the engagements that did not go to plan"
        secondaryCta={{ label: 'Resource library', href: '/resources' }}
        aurora="cool"
        visual={
          <MetricPanel
            label="What we write about"
            badge="Updated monthly"
            rows={[
              { label: 'Enterprise AI & agents', value: '3 posts', ratio: 68, accent: 'violet' },
              { label: 'Automation practice', value: '1 post', ratio: 24, accent: 'blue' },
              { label: 'Security operations', value: '1 post', ratio: 24, accent: 'emerald' },
              { label: 'Search & growth', value: '1 post', ratio: 24, accent: 'cyan' },
            ]}
            metrics={[
              { value: '6', label: 'Published pieces' },
              { value: '7 min', label: 'Median read' },
              { value: '0', label: 'Ghostwritten posts' },
            ]}
            footnote="Everything here is written by the team that shipped the work it describes."
          />
        }
      />

      {/* Featured */}
      <Section tone="white" aria-labelledby="featured-heading">
        <Reveal>
          <Link href={`/blog/${featured.slug}`} className="group block">
            <article className="ring-gradient overflow-hidden rounded-[2rem] bg-white shadow-lift transition-all duration-500 ease-smooth hover:-translate-y-1 hover:shadow-lift-lg">
              <div className="grid gap-10 p-7 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14 lg:p-12">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge tone="brand" icon="star">
                      Most read
                    </Badge>
                    <Badge tone="neutral">{featured.category}</Badge>
                  </div>
                  <h2 id="featured-heading" className="mt-6 text-display-sm text-ink-950 group-hover:text-brand-700">
                    {featured.title}
                  </h2>
                  <p className="mt-5 text-lead text-ink-500">{featured.excerpt}</p>
                  <p className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-400">
                    <span className="font-semibold text-ink-600">{featured.author}</span>
                    <span aria-hidden="true">·</span>
                    <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                    <span aria-hidden="true">·</span>
                    <span>{featured.readTime}</span>
                  </p>
                  <span className="link-arrow mt-7">
                    Read the piece
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </span>
                </div>

                <div className="relative flex items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-violet-50 via-brand-50 to-cyan-50 p-10">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-60"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 30% 25%, rgba(139,92,246,0.28), transparent 55%), radial-gradient(circle at 75% 70%, rgba(47,107,255,0.24), transparent 55%)',
                    }}
                  />
                  <IconTile name={featured.icon} accent={featured.accent} size="lg" className="relative h-20 w-20 rounded-3xl animate-float" />
                </div>
              </div>
            </article>
          </Link>
        </Reveal>
      </Section>

      {/* All posts */}
      <Section tone="mesh" aria-labelledby="all-heading">
        <Reveal>
          <SectionHeading
            id="all-heading"
            eyebrow="Everything else"
            title={
              <>
                Six pieces. <span className="text-gradient">All of them opinionated.</span>
              </>
            }
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {rest.map((post, index) => (
            <Reveal key={post.slug} delay={index * 80} className="h-full">
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <SpotlightCard className="flex h-full flex-col p-7 sm:p-8">
                  <div className="relative z-10 flex flex-1 flex-col">
                    <div className="flex items-center justify-between gap-3">
                      <IconTile name={post.icon} accent={post.accent} />
                      <span className="rounded-full border border-ink-100 bg-ink-50 px-2.5 py-1 text-[0.6875rem] font-semibold text-ink-500">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="mt-6 text-lg font-bold leading-snug text-ink-950 group-hover:text-brand-700">
                      {post.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-500">{post.excerpt}</p>
                    <p className="mt-6 flex items-center gap-3 border-t border-ink-100 pt-5 text-[0.8125rem] text-ink-400">
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span aria-hidden="true">·</span>
                      <span>{post.readTime}</span>
                    </p>
                  </div>
                </SpotlightCard>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="white" size="sm" aria-label="Related pages">
        <RelatedLinks
          links={[
            { label: 'Resources', href: '/resources', description: 'Frameworks, models and checklists' },
            { label: 'Case studies', href: '/case-studies', description: 'The work behind the writing' },
            { label: 'AI Agents', href: '/ai-agents', description: 'Our flagship practice' },
            { label: 'Process', href: '/process', description: 'How we deliver' },
            { label: 'Services', href: '/services', description: 'Everything we do' },
            { label: 'Contact', href: '/contact', description: 'Ask us directly' },
          ]}
        />
      </Section>

      <CTA
        title="Have a question these did not answer?"
        body="Send it to a senior engineer rather than a contact form. You will get a straight answer, and a no if that is the honest one."
        secondary={{ label: 'Browse resources', href: '/resources' }}
      />
    </>
  );
}
