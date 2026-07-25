import type { Metadata } from 'next';
import Link from 'next/link';

import { Aurora } from '@/components/ui/Aurora';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Icon } from '@/components/ui/Icon';
import { Breadcrumbs, Badge } from '@/components/ui/Bits';
import { CTA } from '@/components/sections/CTA';

import { allRoutes, site } from '@/content/site';
import { caseStudies } from '@/content/caseStudies';
import { posts } from '@/content/insights';
import { buildMetadata } from '@/lib/seo';
import { withBasePath } from '@/lib/basePath';

export const metadata: Metadata = buildMetadata({
  title: 'Sitemap — Every page on this site',
  description:
    'A complete index of CyberXSolutions pages: services, industries, case studies, resources, company pages and legal documents.',
  keywords: ['sitemap', 'site index', 'all pages', 'CyberXSolutions'],
  path: '/sitemap',
});

const groupOrder = ['Main', 'Services', 'Solutions', 'Company', 'Resources', 'Legal'];

export default function SitemapPage() {
  const grouped = groupOrder
    .map((group) => ({ group, routes: allRoutes.filter((route) => route.group === group) }))
    .filter((entry) => entry.routes.length > 0);

  const totalPages = allRoutes.length + caseStudies.length + posts.length;

  return (
    <>
      <section className="relative isolate overflow-hidden bg-white pb-10 pt-28 sm:pt-32 lg:pt-36">
        <Aurora preset="cool" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 grid-overlay" />

        <div className="container-x">
          <Breadcrumbs trail={[{ name: 'Sitemap', href: '/sitemap' }]} className="mb-8" />
          <div className="max-w-3xl">
            <Reveal>
              <Badge tone="neutral" icon="list-checks">
                {totalPages} pages
              </Badge>
            </Reveal>
            <Reveal delay={70}>
              <h1 className="mt-6 text-display-lg text-ink-950">
                Everything, <span className="text-gradient">on one page.</span>
              </h1>
            </Reveal>
            <Reveal delay={130}>
              <p className="mt-6 text-lead text-ink-500">
                A human-readable index of the whole site. The machine-readable version lives at{' '}
                <a
                  href={withBasePath('/sitemap.xml')}
                  className="font-semibold text-brand-600 underline decoration-brand-300 underline-offset-4 hover:text-brand-700"
                >
                  /sitemap.xml
                </a>
                .
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Static routes */}
      <Section tone="white" size="sm" aria-label="Site index">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {grouped.map((entry, index) => (
            <Reveal key={entry.group} delay={index * 60}>
              <div>
                <h2 className="flex items-center gap-2.5 border-b border-ink-100 pb-3 text-[0.75rem] font-bold uppercase tracking-[0.14em] text-ink-500">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-gradient" />
                  {entry.group}
                </h2>
                <ul className="mt-4 space-y-1">
                  {entry.routes.map((route) => (
                    <li key={route.href}>
                      <Link
                        href={route.href}
                        className="group -mx-2 flex items-center justify-between gap-3 rounded-lg px-2 py-2 text-[0.9375rem] text-ink-600 transition-colors hover:bg-ink-50 hover:text-ink-950"
                      >
                        {route.label}
                        <Icon
                          name="arrow-right"
                          className="h-3.5 w-3.5 shrink-0 text-ink-200 transition-all duration-300 ease-smooth group-hover:translate-x-0.5 group-hover:text-brand-500"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Case studies + posts */}
      <Section tone="muted" aria-labelledby="detail-heading">
        <Reveal>
          <SectionHeading
            id="detail-heading"
            align="left"
            eyebrow="Detail pages"
            title={
              <>
                Case studies <span className="text-gradient">and field notes.</span>
              </>
            }
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div>
              <h3 className="border-b border-ink-200/70 pb-3 text-[0.75rem] font-bold uppercase tracking-[0.14em] text-ink-500">
                Case studies
              </h3>
              <ul className="mt-4 space-y-1">
                {caseStudies.map((study) => (
                  <li key={study.slug}>
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="group -mx-2 flex items-center justify-between gap-3 rounded-lg px-2 py-2.5 transition-colors hover:bg-white"
                    >
                      <span className="min-w-0">
                        <span className="block text-[0.9375rem] font-medium text-ink-800 group-hover:text-brand-700">
                          {study.title}
                        </span>
                        <span className="text-[0.8125rem] text-ink-400">{study.sector}</span>
                      </span>
                      <Icon
                        name="arrow-right"
                        className="h-3.5 w-3.5 shrink-0 text-ink-300 transition-transform duration-300 ease-smooth group-hover:translate-x-0.5"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <h3 className="border-b border-ink-200/70 pb-3 text-[0.75rem] font-bold uppercase tracking-[0.14em] text-ink-500">
                Blog posts
              </h3>
              <ul className="mt-4 space-y-1">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group -mx-2 flex items-center justify-between gap-3 rounded-lg px-2 py-2.5 transition-colors hover:bg-white"
                    >
                      <span className="min-w-0">
                        <span className="block text-[0.9375rem] font-medium text-ink-800 group-hover:text-brand-700">
                          {post.title}
                        </span>
                        <span className="text-[0.8125rem] text-ink-400">
                          {post.category} · {post.readTime}
                        </span>
                      </span>
                      <Icon
                        name="arrow-right"
                        className="h-3.5 w-3.5 shrink-0 text-ink-300 transition-transform duration-300 ease-smooth group-hover:translate-x-0.5"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 rounded-2xl border border-ink-100 bg-white p-6">
            <a href={withBasePath('/sitemap.xml')} className="link-arrow text-sm">
              XML sitemap
              <Icon name="arrow-up-right" className="h-4 w-4" />
            </a>
            <a href={withBasePath('/robots.txt')} className="link-arrow text-sm">
              robots.txt
              <Icon name="arrow-up-right" className="h-4 w-4" />
            </a>
            <a href={`mailto:${site.email}`} className="link-arrow text-sm">
              {site.email}
              <Icon name="arrow-up-right" className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </Section>

      <CTA />
    </>
  );
}
