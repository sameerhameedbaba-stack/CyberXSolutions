import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Reveal } from '@/components/ui/Reveal';
import { Counter } from '@/components/ui/Counter';
import { Icon, IconTile, type Accent, accentSoft } from '@/components/ui/Icon';
import { SpotlightCard } from '@/components/ui/Card';
import { Marquee } from '@/components/ui/Marquee';

/* ================================================================== */
/* Stats band                                                          */
/* ================================================================== */

export type StatItem = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  detail?: string;
};

export function StatsBand({
  stats,
  className,
  tone = 'light',
}: {
  stats: StatItem[];
  className?: string;
  tone?: 'light' | 'dark';
}) {
  return (
    <div
      className={cn(
        'grid gap-px overflow-hidden rounded-3xl border sm:grid-cols-2 lg:grid-cols-4',
        tone === 'dark' ? 'border-white/10 bg-white/10' : 'border-ink-100 bg-ink-100',
        className,
      )}
    >
      {stats.map((stat, index) => (
        <Reveal
          key={stat.label}
          delay={index * 80}
          className={cn('p-7 sm:p-8', tone === 'dark' ? 'bg-ink-950' : 'bg-white')}
        >
          <div className="font-display text-[2.25rem] font-extrabold leading-none text-gradient sm:text-[2.75rem]">
            <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.decimals} />
          </div>
          <p className={cn('mt-3 text-sm font-semibold', tone === 'dark' ? 'text-white' : 'text-ink-900')}>
            {stat.label}
          </p>
          {stat.detail ? (
            <p className={cn('mt-1.5 text-sm leading-relaxed', tone === 'dark' ? 'text-ink-300' : 'text-ink-500')}>
              {stat.detail}
            </p>
          ) : null}
        </Reveal>
      ))}
    </div>
  );
}

/* ================================================================== */
/* Feature grid                                                        */
/* ================================================================== */

export type Feature = {
  title: string;
  body: string;
  icon: string;
  accent?: Accent;
  href?: string;
};

export function FeatureGrid({
  features,
  columns = 3,
  className,
  variant = 'card',
}: {
  features: Feature[];
  columns?: 2 | 3 | 4;
  className?: string;
  variant?: 'card' | 'plain';
}) {
  const cols = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  }[columns];

  return (
    <div className={cn('grid gap-6', cols, className)}>
      {features.map((feature, index) => {
        const inner = (
          <>
            <IconTile name={feature.icon} accent={feature.accent ?? 'blue'} />
            <h3 className="mt-6 text-lg font-bold text-ink-950">{feature.title}</h3>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-500">{feature.body}</p>
            {feature.href ? (
              <span className="link-arrow mt-5 text-sm">
                Explore
                <Icon name="arrow-right" className="h-4 w-4" />
              </span>
            ) : null}
          </>
        );

        if (variant === 'plain') {
          return (
            <Reveal key={feature.title} delay={index * 70}>
              <div className="h-full">{inner}</div>
            </Reveal>
          );
        }

        return (
          <Reveal key={feature.title} delay={index * 70} className="h-full">
            {feature.href ? (
              <Link href={feature.href} className="group block h-full">
                <SpotlightCard className="h-full p-7 sm:p-8">
                  <div className="relative z-10">{inner}</div>
                </SpotlightCard>
              </Link>
            ) : (
              <SpotlightCard className="h-full p-7 sm:p-8">
                <div className="relative z-10">{inner}</div>
              </SpotlightCard>
            )}
          </Reveal>
        );
      })}
    </div>
  );
}

/* ================================================================== */
/* Alternating feature rows                                            */
/* ================================================================== */

export function SplitFeature({
  eyebrow,
  title,
  body,
  points,
  visual,
  reverse = false,
  cta,
  className,
  accent = 'blue',
}: {
  eyebrow: string;
  title: React.ReactNode;
  body: React.ReactNode;
  points?: { title: string; body: string; icon: string }[];
  visual: React.ReactNode;
  reverse?: boolean;
  cta?: { label: string; href: string };
  className?: string;
  accent?: Accent;
}) {
  return (
    <div className={cn('grid items-center gap-12 lg:grid-cols-2 lg:gap-16', className)}>
      <Reveal from={reverse ? 'right' : 'left'} className={cn(reverse && 'lg:order-2')}>
        <p className="eyebrow">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-gradient" />
          {eyebrow}
        </p>
        <h2 className="mt-5 text-display-sm text-ink-950">{title}</h2>
        <div className="mt-5 text-lead text-ink-500">{body}</div>

        {points?.length ? (
          <ul className="mt-9 space-y-6">
            {points.map((point) => (
              <li key={point.title} className="flex gap-4">
                <span className={cn('flex h-10 w-10 shrink-0 items-center justify-center rounded-xl', accentSoft[accent])}>
                  <Icon name={point.icon} className="h-5 w-5" strokeWidth={1.9} />
                </span>
                <div>
                  <h3 className="font-bold text-ink-950">{point.title}</h3>
                  <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-500">{point.body}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : null}

        {cta ? (
          <Link href={cta.href} className="link-arrow mt-9">
            {cta.label}
            <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
        ) : null}
      </Reveal>

      <Reveal from={reverse ? 'left' : 'right'} delay={100} className={cn(reverse && 'lg:order-1')}>
        {visual}
      </Reveal>
    </div>
  );
}

/* ================================================================== */
/* Process steps                                                       */
/* ================================================================== */

export type Step = { label: string; title: string; body: string; icon: string; meta?: string };

export function ProcessSteps({ steps, className }: { steps: Step[]; className?: string }) {
  return (
    <ol className={cn('relative grid gap-6 md:grid-cols-2 lg:grid-cols-4', className)}>
      {/* Connector rail behind the cards on wide screens. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-0 top-[3.25rem] hidden h-px bg-gradient-to-r from-brand-200 via-violet-300 to-cyan-200 lg:block"
      />
      {steps.map((step, index) => (
        <Reveal
          key={step.title}
          as="li"
          delay={index * 90}
          className="relative h-full rounded-3xl border border-ink-100 bg-white p-7 shadow-lift-sm transition-all duration-500 ease-smooth hover:-translate-y-1 hover:shadow-lift"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-gradient font-mono text-xs font-bold text-white shadow-glow">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="font-mono text-eyebrow uppercase text-ink-400">{step.label}</span>
          </div>
          <h3 className="mt-6 text-lg font-bold text-ink-950">{step.title}</h3>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-500">{step.body}</p>
          {step.meta ? (
            <p className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-ink-50 px-3 py-1 text-xs font-semibold text-ink-600">
              <Icon name="clock" className="h-3.5 w-3.5" />
              {step.meta}
            </p>
          ) : null}
        </Reveal>
      ))}
    </ol>
  );
}

/* ================================================================== */
/* Logo cloud                                                          */
/* ================================================================== */

export function LogoCloud({ items, className }: { items: string[]; className?: string }) {
  return (
    <Marquee className={className} speed={52}>
      {items.map((item) => (
        <span
          key={item}
          className="mx-4 inline-flex items-center gap-2.5 whitespace-nowrap rounded-2xl border border-ink-100 bg-white px-6 py-3.5 shadow-lift-sm sm:mx-5"
        >
          <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-brand-gradient" />
          <span className="font-display text-base font-bold tracking-tight text-ink-700 sm:text-lg">{item}</span>
        </span>
      ))}
    </Marquee>
  );
}

/* ================================================================== */
/* Testimonials                                                        */
/* ================================================================== */

export type Testimonial = {
  quote: string;
  /** Role only — client organisations are named by sector, never individually. */
  attribution: string;
  org: string;
  accent: Accent;
  icon: string;
  metric?: string;
};

export function TestimonialGrid({ items, className }: { items: Testimonial[]; className?: string }) {
  return (
    <div className={cn('grid gap-6 lg:grid-cols-3', className)}>
      {items.map((item, index) => (
        <Reveal key={item.attribution + item.org} delay={index * 90} className="h-full">
          <figure className="flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-7 shadow-lift-sm transition-all duration-500 ease-smooth hover:-translate-y-1 hover:shadow-lift sm:p-8">
            <Icon name="quote" className={cn('h-7 w-7', accentSoft[item.accent].split(' ')[1])} />
            <blockquote className="mt-5 flex-1 text-[1.0625rem] leading-relaxed text-ink-700">
              {item.quote}
            </blockquote>
            {item.metric ? (
              <p className="mt-6 rounded-xl bg-ink-50 px-4 py-3 text-sm font-semibold text-ink-800">{item.metric}</p>
            ) : null}
            <figcaption className="mt-6 flex items-center gap-3.5 border-t border-ink-100 pt-6">
              <IconTile name={item.icon} accent={item.accent} size="sm" className="rounded-full" />
              <span>
                <span className="block text-sm font-bold text-ink-950">{item.attribution}</span>
                <span className="block text-sm text-ink-500">{item.org}</span>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}

/* ================================================================== */
/* Tech pill grid                                                      */
/* ================================================================== */

export function TechPills({ groups, className }: { groups: { heading: string; items: string[] }[]; className?: string }) {
  return (
    <div className={cn('grid gap-6 sm:grid-cols-2 lg:grid-cols-4', className)}>
      {groups.map((group, index) => (
        <Reveal key={group.heading} delay={index * 70} className="h-full">
          <div className="h-full rounded-3xl border border-ink-100 bg-white p-6 shadow-lift-sm">
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-ink-500">{group.heading}</h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-ink-100 bg-ink-50/70 px-2.5 py-1.5 text-[0.8125rem] font-medium text-ink-700 transition-colors hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ================================================================== */
/* Outcome / use-case list                                             */
/* ================================================================== */

export function UseCaseList({
  items,
  className,
}: {
  items: { title: string; body: string; result: string; icon: string; accent?: Accent }[];
  className?: string;
}) {
  return (
    <div className={cn('grid gap-6 md:grid-cols-2', className)}>
      {items.map((item, index) => (
        <Reveal key={item.title} delay={index * 80} className="h-full">
          <div className="ring-gradient group h-full rounded-3xl bg-white p-7 shadow-lift-sm transition-all duration-500 ease-smooth hover:-translate-y-1 hover:shadow-lift sm:p-8">
            <div className="flex items-start gap-4">
              <IconTile name={item.icon} accent={item.accent ?? 'blue'} size="sm" />
              <div>
                <h3 className="text-lg font-bold text-ink-950">{item.title}</h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-500">{item.body}</p>
              </div>
            </div>
            <p className="mt-6 flex items-center gap-2 border-t border-ink-100 pt-5 text-sm font-semibold text-emerald-700">
              <Icon name="trending-up" className="h-4 w-4 shrink-0" />
              {item.result}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
