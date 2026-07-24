import Link from 'next/link';

import { Aurora } from '@/components/ui/Aurora';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Icon } from '@/components/ui/Icon';
import { Breadcrumbs, Badge } from '@/components/ui/Bits';
import { slugify } from '@/lib/utils';
import { site } from '@/content/site';
import { legalDocs, type LegalDoc } from '@/content/legal';

export function LegalPage({ doc }: { doc: LegalDoc }) {
  const others = legalDocs.filter((item) => item.slug !== doc.slug);

  return (
    <>
      {/* Header */}
      <section className="relative isolate overflow-hidden bg-white pb-10 pt-28 sm:pt-32 lg:pt-36">
        <Aurora preset="cool" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 grid-overlay" />

        <div className="container-x">
          <Breadcrumbs trail={[{ name: doc.title, href: `/${doc.slug}` }]} className="mb-8" />
          <div className="max-w-3xl">
            <Reveal>
              <Badge tone="neutral" icon="file-text">
                Effective {doc.effective}
              </Badge>
            </Reveal>
            <Reveal delay={70}>
              <h1 className="mt-6 text-display-lg text-ink-950">{doc.title}</h1>
            </Reveal>
            <Reveal delay={130}>
              <p className="mt-6 text-lead text-ink-500">{doc.intro}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Body */}
      <Section tone="white" size="sm" aria-label={`${doc.title} contents`}>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-16">
          <nav className="lg:sticky lg:top-28 lg:self-start" aria-label="Contents">
            <p className="text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-ink-400">Contents</p>
            <ol className="mt-4 space-y-2.5 border-l border-ink-100 pl-4">
              {doc.sections.map((section) => (
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

            <div className="mt-8 rounded-2xl border border-ink-100 bg-ink-50/60 p-5">
              <p className="text-[0.8125rem] font-semibold text-ink-900">Questions?</p>
              <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-ink-500">
                A person reads these, not a ticket queue.
              </p>
              <a href={`mailto:${site.email}`} className="link-arrow mt-3 text-[0.8125rem]">
                {site.email}
                <Icon name="arrow-up-right" className="h-3.5 w-3.5" />
              </a>
            </div>
          </nav>

          <div className="prose-cx min-w-0 max-w-prose">
            {doc.sections.map((section, index) => (
              <Reveal key={section.heading} delay={index * 30}>
                <section>
                  <h2 id={slugify(section.heading)} className="scroll-mt-28">
                    {section.heading}
                  </h2>

                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}

                  {section.list ? (
                    <ul>
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}

                  {section.table ? (
                    <div className="my-7 overflow-x-auto rounded-2xl border border-ink-100">
                      <table className="w-full min-w-[34rem] border-collapse text-left text-[0.875rem]">
                        <caption className="sr-only">{section.heading}</caption>
                        <thead>
                          <tr className="bg-ink-50">
                            {section.table.columns.map((column) => (
                              <th
                                key={column}
                                scope="col"
                                className="px-4 py-3 text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-ink-500"
                              >
                                {column}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row, rowIndex) => (
                            <tr key={row[0]} className={rowIndex % 2 === 1 ? 'bg-ink-50/40' : 'bg-white'}>
                              {row.map((cell, cellIndex) => (
                                <td
                                  key={cellIndex}
                                  className={
                                    cellIndex === 0
                                      ? 'px-4 py-3.5 align-top font-semibold text-ink-900'
                                      : 'px-4 py-3.5 align-top text-ink-600'
                                  }
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : null}
                </section>
              </Reveal>
            ))}

            <Reveal>
              <div className="mt-14 rounded-2xl border border-ink-100 bg-ink-50/60 p-6">
                <p className="flex items-start gap-2.5 text-[0.875rem] leading-relaxed text-ink-600">
                  <Icon name="lightbulb" className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                  <span>
                    This document is provided for transparency and is not legal advice. If you need a position on how
                    it applies to your specific circumstances, speak to your own counsel — or write to us and we will
                    put you in touch with ours.
                  </span>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Other policies */}
      <Section tone="muted" size="sm" aria-labelledby="other-policies">
        <h2 id="other-policies" className="text-[0.75rem] font-bold uppercase tracking-[0.14em] text-ink-500">
          Other policies
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {others.map((other) => (
            <Link
              key={other.slug}
              href={`/${other.slug}`}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-ink-100 bg-white p-5 transition-all duration-500 ease-smooth hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lift"
            >
              <span>
                <span className="block text-[0.9375rem] font-bold text-ink-950 group-hover:text-brand-700">
                  {other.title}
                </span>
                <span className="mt-0.5 block text-[0.75rem] text-ink-400">Effective {other.effective}</span>
              </span>
              <Icon
                name="arrow-right"
                className="h-4 w-4 shrink-0 text-ink-300 transition-transform duration-300 ease-smooth group-hover:translate-x-1 group-hover:text-brand-500"
              />
            </Link>
          ))}
          <Link
            href="/sitemap"
            className="group flex items-center justify-between gap-4 rounded-2xl border border-ink-100 bg-white p-5 transition-all duration-500 ease-smooth hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lift sm:col-span-3"
          >
            <span>
              <span className="block text-[0.9375rem] font-bold text-ink-950 group-hover:text-brand-700">Sitemap</span>
              <span className="mt-0.5 block text-[0.75rem] text-ink-400">Every page on this site</span>
            </span>
            <Icon
              name="arrow-right"
              className="h-4 w-4 shrink-0 text-ink-300 transition-transform duration-300 ease-smooth group-hover:translate-x-1 group-hover:text-brand-500"
            />
          </Link>
        </div>
      </Section>
    </>
  );
}
