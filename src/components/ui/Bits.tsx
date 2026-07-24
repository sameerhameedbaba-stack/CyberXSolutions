import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Icon } from './Icon';
import { site } from '@/content/site';
import { breadcrumbSchema, graph } from '@/lib/schema';

/* ------------------------------------------------------------------ */
/* Structured data                                                     */
/* ------------------------------------------------------------------ */

export function JsonLd({ data }: { data: string }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: data }} />;
}

/* ------------------------------------------------------------------ */
/* Badge / pill                                                        */
/* ------------------------------------------------------------------ */

export function Badge({
  children,
  className,
  tone = 'brand',
  icon,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: 'brand' | 'neutral' | 'emerald' | 'violet' | 'invert';
  icon?: string;
}) {
  const tones = {
    brand: 'border-brand-100 bg-brand-50/80 text-brand-700',
    neutral: 'border-ink-200 bg-white/80 text-ink-600',
    emerald: 'border-emerald-100 bg-emerald-50/80 text-emerald-700',
    violet: 'border-violet-100 bg-violet-50/80 text-violet-700',
    invert: 'border-white/15 bg-white/10 text-white',
  } as const;

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.8125rem] font-semibold backdrop-blur',
        tones[tone],
        className,
      )}
    >
      {icon ? <Icon name={icon} className="h-3.5 w-3.5" strokeWidth={2} /> : null}
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Breadcrumbs                                                         */
/* ------------------------------------------------------------------ */

export type Crumb = { name: string; href: string };

export function Breadcrumbs({ trail, className }: { trail: Crumb[]; className?: string }) {
  const full: Crumb[] = [{ name: 'Home', href: '/' }, ...trail];

  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(full))} />
      <nav aria-label="Breadcrumb" className={cn('text-sm', className)}>
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-ink-400">
          {full.map((crumb, index) => {
            const isLast = index === full.length - 1;
            return (
              <li key={crumb.href} className="flex items-center gap-2">
                {isLast ? (
                  <span aria-current="page" className="font-semibold text-ink-700">
                    {crumb.name}
                  </span>
                ) : (
                  <Link href={crumb.href} className="transition-colors hover:text-brand-600">
                    {crumb.name}
                  </Link>
                )}
                {!isLast ? <Icon name="chevron-right" className="h-3.5 w-3.5 text-ink-300" /> : null}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Checklist                                                           */
/* ------------------------------------------------------------------ */

export function CheckList({
  items,
  className,
  tone = 'brand',
  columns = 1,
}: {
  items: string[];
  className?: string;
  tone?: 'brand' | 'emerald' | 'invert';
  columns?: 1 | 2;
}) {
  const dot = {
    brand: 'bg-brand-gradient text-white',
    emerald: 'bg-brand-gradient-fresh text-white',
    invert: 'bg-white/15 text-white',
  }[tone];

  return (
    <ul className={cn('grid gap-3.5', columns === 2 && 'sm:grid-cols-2 sm:gap-x-8', className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className={cn('mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full', dot)}>
            <Icon name="check" className="h-3 w-3" strokeWidth={3} />
          </span>
          <span className={cn('text-[0.9375rem] leading-relaxed', tone === 'invert' ? 'text-ink-200' : 'text-ink-600')}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------ */
/* Inline "related links" rail — internal linking on every page         */
/* ------------------------------------------------------------------ */

export function RelatedLinks({
  title = 'Keep exploring',
  links,
  className,
}: {
  title?: string;
  links: { label: string; href: string; description?: string }[];
  className?: string;
}) {
  return (
    <div className={cn('rounded-3xl border border-ink-100 bg-ink-50/60 p-6 sm:p-8', className)}>
      <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-ink-500">{title}</h2>
      <ul className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group flex items-start gap-3 rounded-xl p-2 -m-2 transition-colors hover:bg-white"
            >
              <Icon
                name="arrow-up-right"
                className="mt-0.5 h-4 w-4 shrink-0 text-brand-500 transition-transform duration-300 ease-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
              <span>
                <span className="block font-semibold text-ink-900 group-hover:text-brand-700">{link.label}</span>
                {link.description ? (
                  <span className="mt-0.5 block text-sm text-ink-500">{link.description}</span>
                ) : null}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Contact chip used in footer + contact page                          */
/* ------------------------------------------------------------------ */

export function MailLink({ className }: { className?: string }) {
  return (
    <a href={`mailto:${site.email}`} className={cn('link-arrow', className)}>
      {site.email}
      <Icon name="arrow-up-right" className="h-4 w-4" />
    </a>
  );
}
