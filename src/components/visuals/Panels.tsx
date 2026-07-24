import { cn } from '@/lib/utils';
import { Icon, IconTile, type Accent } from '@/components/ui/Icon';

/* ================================================================== */
/* Flexible KPI panel                                                  */
/* ================================================================== */

export function MetricPanel({
  label,
  badge,
  headline,
  metrics,
  rows,
  footnote,
  className,
}: {
  label: string;
  badge?: string;
  headline?: { value: string; caption: string; delta?: string };
  metrics: { value: string; label: string }[];
  rows?: { label: string; value: string; ratio: number; accent?: Accent }[];
  footnote?: string;
  className?: string;
}) {
  const barTone: Record<Accent, string> = {
    blue: 'from-brand-500 to-indigo-500',
    violet: 'from-violet-500 to-blossom-500',
    cyan: 'from-cyan-400 to-brand-500',
    emerald: 'from-emerald-400 to-cyan-500',
    orange: 'from-sunset-400 to-blossom-500',
    pink: 'from-blossom-400 to-violet-500',
    indigo: 'from-indigo-500 to-violet-600',
  };

  return (
    <div className={cn('tilt-scene relative mx-auto w-full max-w-[34rem] lg:max-w-none', className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-8 -bottom-6 h-20 rounded-full bg-brand-500/20 blur-3xl"
      />
      <div className="glass-strong tilt-panel-soft relative rounded-[1.75rem] p-5 sm:p-7">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-eyebrow uppercase text-ink-500">{label}</p>
          {badge ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200/70 bg-emerald-50/80 px-2.5 py-1 text-[0.6875rem] font-bold uppercase tracking-wide text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-blink-soft" />
              {badge}
            </span>
          ) : null}
        </div>

        {headline ? (
          <div className="rounded-2xl border border-ink-100 bg-white p-5 shadow-lift-sm">
            <div className="flex flex-wrap items-baseline gap-2.5">
              <span className="font-display text-[2.5rem] font-extrabold leading-none tracking-tight text-gradient">
                {headline.value}
              </span>
              {headline.delta ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[0.6875rem] font-bold text-emerald-700">
                  <Icon name="trending-up" className="h-3 w-3" strokeWidth={2.4} />
                  {headline.delta}
                </span>
              ) : null}
            </div>
            <p className="mt-2 text-[0.8125rem] font-medium text-ink-500">{headline.caption}</p>
          </div>
        ) : null}

        {rows?.length ? (
          <div className={cn('space-y-3.5', headline && 'mt-4')}>
            {rows.map((row) => (
              <div key={row.label} className="rounded-xl border border-ink-100 bg-white px-4 py-3">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-[0.8125rem] font-semibold text-ink-800">{row.label}</span>
                  <span className="font-mono text-[0.75rem] font-bold text-ink-950">{row.value}</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink-100">
                  <div
                    className={cn('h-full rounded-full bg-gradient-to-r', barTone[row.accent ?? 'blue'])}
                    style={{ width: `${row.ratio}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : null}

        <div className={cn('grid gap-2.5', metrics.length === 4 ? 'grid-cols-2' : 'grid-cols-3', (headline || rows) && 'mt-4')}>
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-xl border border-ink-100 bg-white px-3 py-3 text-center">
              <p className="font-display text-lg font-extrabold leading-none text-gradient">{metric.value}</p>
              <p className="mt-1.5 text-[0.625rem] font-medium leading-tight text-ink-500">{metric.label}</p>
            </div>
          ))}
        </div>

        {footnote ? (
          <p className="mt-4 flex items-start gap-2 rounded-xl border border-brand-100 bg-brand-50/60 px-3.5 py-2.5 text-[0.75rem] leading-snug text-brand-900">
            <Icon name="sparkles" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-600" strokeWidth={2.1} />
            {footnote}
          </p>
        ) : null}
      </div>
    </div>
  );
}

/* ================================================================== */
/* Industry mosaic                                                     */
/* ================================================================== */

export function IndustryMosaic({
  items,
  className,
}: {
  items: { label: string; icon: string; accent: Accent }[];
  className?: string;
}) {
  return (
    <div className={cn('relative mx-auto w-full max-w-[32rem]', className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-6 rounded-full bg-brand-400/20 blur-3xl"
      />
      <div className="relative grid grid-cols-3 gap-3">
        {items.map((item, index) => (
          <div
            key={item.label}
            className={cn(
              'glass flex flex-col items-center justify-center gap-2.5 rounded-2xl p-4 text-center animate-float-slow',
              index % 3 === 1 && 'translate-y-4',
            )}
            style={{ animationDelay: `${index * -1.3}s` }}
          >
            <IconTile name={item.icon} accent={item.accent} size="sm" />
            <span className="text-[0.6875rem] font-bold leading-tight text-ink-800">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================================================================== */
/* Timeline                                                            */
/* ================================================================== */

export function TimelinePanel({
  items,
  className,
}: {
  items: { period: string; title: string; body: string }[];
  className?: string;
}) {
  return (
    <ol className={cn('relative space-y-8 pl-8', className)}>
      <span
        aria-hidden="true"
        className="absolute bottom-2 left-[0.4375rem] top-2 w-px bg-gradient-to-b from-brand-400 via-violet-400 to-cyan-400"
      />
      {items.map((item) => (
        <li key={item.title} className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-8 top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-white bg-brand-gradient shadow-glow"
          />
          <p className="font-mono text-[0.6875rem] font-bold uppercase tracking-widest text-brand-600">{item.period}</p>
          <h3 className="mt-2 text-lg font-bold text-ink-950">{item.title}</h3>
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-500">{item.body}</p>
        </li>
      ))}
    </ol>
  );
}

/* ================================================================== */
/* Contact panel                                                       */
/* ================================================================== */

export function ContactPanel({
  className,
  channels,
}: {
  className?: string;
  channels: { label: string; value: string; meta: string; icon: string; accent: Accent; href?: string }[];
}) {
  return (
    <div className={cn('relative mx-auto w-full max-w-[34rem] lg:max-w-none', className)}>
      <div className="glass-strong rounded-[1.75rem] p-5 sm:p-7">
        <p className="font-mono text-eyebrow uppercase text-ink-500">Reach us directly</p>
        <ul className="mt-6 space-y-3">
          {channels.map((channel) => {
            const inner = (
              <>
                <IconTile name={channel.icon} accent={channel.accent} size="sm" />
                <span className="min-w-0 flex-1">
                  <span className="block text-[0.6875rem] font-bold uppercase tracking-wider text-ink-400">
                    {channel.label}
                  </span>
                  <span className="block truncate text-[0.9375rem] font-semibold text-ink-950">{channel.value}</span>
                  <span className="mt-0.5 block text-[0.75rem] text-ink-500">{channel.meta}</span>
                </span>
                {channel.href ? (
                  <Icon name="arrow-up-right" className="mt-1 h-4 w-4 shrink-0 text-ink-300 transition-transform duration-300 ease-smooth group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-500" />
                ) : null}
              </>
            );

            return (
              <li key={channel.label}>
                {channel.href ? (
                  <a
                    href={channel.href}
                    className="group flex items-start gap-3.5 rounded-2xl border border-ink-100 bg-white p-4 transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lift"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="flex items-start gap-3.5 rounded-2xl border border-ink-100 bg-white p-4">{inner}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

/* ================================================================== */
/* Quote / philosophy card                                             */
/* ================================================================== */

export function PhilosophyCard({
  quote,
  attribution,
  role,
  className,
}: {
  quote: string;
  attribution: string;
  role: string;
  className?: string;
}) {
  return (
    <figure className={cn('glass relative overflow-hidden rounded-[1.75rem] p-7 sm:p-9', className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-400/20 blur-3xl"
      />
      <Icon name="quote" className="h-8 w-8 text-brand-400" />
      <blockquote className="mt-5 font-display text-xl font-bold leading-snug tracking-tight text-ink-950 sm:text-2xl">
        {quote}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-100 pt-5">
        <span
          aria-hidden="true"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-gradient font-display text-sm font-bold text-white"
        >
          {attribution
            .split(' ')
            .map((part) => part[0])
            .join('')
            .slice(0, 2)}
        </span>
        <span>
          <span className="block text-sm font-bold text-ink-950">{attribution}</span>
          <span className="block text-sm text-ink-500">{role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
