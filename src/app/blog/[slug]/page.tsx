import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Section } from '@/components/ui/Section';
import { Aurora } from '@/components/ui/Aurora';
import { Reveal } from '@/components/ui/Reveal';
import { Icon, IconTile } from '@/components/ui/Icon';
import { Breadcrumbs, JsonLd, Badge, RelatedLinks, CheckList } from '@/components/ui/Bits';
import { CTA } from '@/components/sections/CTA';

import { posts, getPost } from '@/content/insights';
import { formatDate, slugify } from '@/lib/utils';
import { buildMetadata } from '@/lib/seo';
import { graph, articleSchema } from '@/lib/schema';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    keywords: [post.category.toLowerCase(), 'enterprise AI', 'CyberXSolutions', 'field notes'],
    path: `/blog/${post.slug}`,
    type: 'article',
    publishedTime: post.date,
    ogTitle: post.title,
  });
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const others = posts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={graph(
          articleSchema({
            headline: post.title,
            description: post.excerpt,
            path: `/blog/${post.slug}`,
            datePublished: post.date,
            author: post.author,
          }),
        )}
      />

      {/* Header */}
      <section className="relative isolate overflow-hidden bg-white pb-12 pt-28 sm:pt-32 lg:pt-36">
        <Aurora preset={post.accent === 'emerald' ? 'fresh' : post.accent === 'orange' ? 'warm' : 'cool'} />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 grid-overlay" />

        <div className="container-narrow">
          <Breadcrumbs
            trail={[
              { name: 'Blog', href: '/blog' },
              { name: post.title, href: `/blog/${post.slug}` },
            ]}
            className="mb-8"
          />

          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <Badge tone="brand">{post.category}</Badge>
              <span className="text-sm text-ink-400">{post.readTime}</span>
            </div>
          </Reveal>

          <Reveal delay={70}>
            <h1 className="mt-6 text-display-lg text-ink-950">{post.title}</h1>
          </Reveal>

          <Reveal delay={130}>
            <p className="mt-6 text-lead-lg text-ink-500">{post.excerpt}</p>
          </Reveal>

          <Reveal delay={190}>
            <div className="mt-9 flex items-center gap-3.5 border-t border-ink-100 pt-7">
              <IconTile name={post.icon} accent={post.accent} />
              <div>
                <p className="text-sm font-bold text-ink-950">{post.author}</p>
                <p className="text-sm text-ink-500">
                  Published <time dateTime={post.date}>{formatDate(post.date)}</time>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Body */}
      <Section tone="white" size="sm" bleed aria-label="Article body">
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] lg:gap-14">
            {/* Contents */}
            <nav className="lg:sticky lg:top-28 lg:self-start" aria-label="On this page">
              <p className="text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-ink-400">On this page</p>
              <ol className="mt-4 space-y-2.5 border-l border-ink-100 pl-4">
                {post.body.map((section) => (
                  <li key={section.heading}>
                    <a
                      href={`#${slugify(section.heading)}`}
                      className="block text-[0.8125rem] leading-snug text-ink-500 transition-colors hover:text-brand-600"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <article className="prose-cx min-w-0">
              {post.body.map((section, index) => (
                <Reveal key={section.heading} delay={index * 40}>
                  <section>
                    <h2 id={slugify(section.heading)} className="scroll-mt-28">
                      {section.heading}
                    </h2>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}
                    {section.list ? (
                      <div className="my-7 rounded-2xl border border-ink-100 bg-ink-50/60 p-6">
                        <CheckList items={section.list} />
                      </div>
                    ) : null}
                  </section>
                </Reveal>
              ))}

              <Reveal>
                <div className="mt-14 rounded-3xl border border-brand-100 bg-brand-50/50 p-7">
                  <p className="flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-[0.14em] text-brand-700">
                    <Icon name="sparkles" className="h-3.5 w-3.5" strokeWidth={2.2} />
                    Working on this yourself?
                  </p>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-700">
                    We run ninety-minute working sessions with no charge and no pitch. Bring the process that keeps
                    breaking and whatever numbers you have.
                  </p>
                  <Link href="/contact" className="link-arrow mt-5 text-sm">
                    Book a session
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </article>
          </div>
        </div>
      </Section>

      {/* More posts */}
      <Section tone="muted" aria-labelledby="more-heading">
        <div className="container-narrow">
          <h2 id="more-heading" className="text-display-sm text-ink-950">
            More field notes
          </h2>
          <div className="mt-10 space-y-4">
            {others.map((other, index) => (
              <Reveal key={other.slug} delay={index * 70}>
                <Link
                  href={`/blog/${other.slug}`}
                  className="group flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-5 transition-all duration-500 ease-smooth hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lift sm:p-6"
                >
                  <IconTile name={other.icon} accent={other.accent} size="sm" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-[1.0625rem] font-bold leading-snug text-ink-950 group-hover:text-brand-700">
                      {other.title}
                    </span>
                    <span className="mt-1.5 block text-[0.9375rem] leading-relaxed text-ink-500">{other.excerpt}</span>
                    <span className="mt-2.5 block text-[0.8125rem] text-ink-400">
                      {other.category} · {other.readTime}
                    </span>
                  </span>
                  <Icon
                    name="arrow-right"
                    className="mt-1 h-5 w-5 shrink-0 text-ink-300 transition-transform duration-300 ease-smooth group-hover:translate-x-1 group-hover:text-brand-500"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="white" size="sm" aria-label="Related pages">
        <RelatedLinks
          links={[
            { label: 'All posts', href: '/blog', description: 'Every field note' },
            { label: 'Resources', href: '/resources', description: 'Frameworks and models' },
            { label: 'Case studies', href: '/case-studies', description: 'The work behind the writing' },
            { label: 'Services', href: '/services', description: 'What we build' },
            { label: 'Process', href: '/process', description: 'How we deliver' },
            { label: 'Contact', href: '/contact', description: 'Ask a senior engineer' },
          ]}
        />
      </Section>

      <CTA />
    </>
  );
}
