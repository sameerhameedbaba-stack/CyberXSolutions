import { cn } from '@/lib/utils';
import { Aurora, Motes } from '@/components/ui/Aurora';
import { Breadcrumbs, type Crumb, Badge } from '@/components/ui/Bits';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { Counter } from '@/components/ui/Counter';

export type HeroStat = { value: number; suffix?: string; prefix?: string; decimals?: number; label: string };

/**
 * The hero every interior page uses. Keeping one hero means the rhythm,
 * spacing and motion timing stay identical across 26 pages.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  trail,
  badge,
  primaryCta = { label: 'Book a working session', href: '/contact' },
  secondaryCta,
  visual,
  stats,
  aurora = 'cool',
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead: React.ReactNode;
  trail: Crumb[];
  badge?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  visual?: React.ReactNode;
  stats?: HeroStat[];
  aurora?: 'cool' | 'violet' | 'fresh' | 'warm' | 'hero';
  className?: string;
}) {
  const hasVisual = Boolean(visual);

  return (
    <section className={cn('relative isolate overflow-hidden bg-white pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-36', className)}>
      <Aurora preset={aurora} />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 grid-overlay" />
      <Motes count={10} className="-z-10 hidden lg:block" />

      <div className="container-x relative">
        <Breadcrumbs trail={trail} className="mb-8" />

        <div className={cn('grid items-center gap-12', hasVisual && 'lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16')}>
          <div className={cn(!hasVisual && 'mx-auto max-w-3xl text-center')}>
            <Reveal>
              <p className={cn('eyebrow', !hasVisual && 'justify-center')}>
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-gradient" />
                {eyebrow}
              </p>
            </Reveal>

            <Reveal delay={70}>
              <h1 className="mt-5 text-display-lg text-ink-950">{title}</h1>
            </Reveal>

            <Reveal delay={140}>
              <p className={cn('mt-6 text-lead-lg text-ink-500', !hasVisual ? 'mx-auto max-w-2xl' : 'max-w-xl')}>
                {lead}
              </p>
            </Reveal>

            {badge ? (
              <Reveal delay={180}>
                <div className={cn('mt-6 flex', !hasVisual && 'justify-center')}>
                  <Badge tone="emerald" icon="check-circle">
                    {badge}
                  </Badge>
                </div>
              </Reveal>
            ) : null}

            <Reveal delay={210}>
              {/* Stacked and full-width on phones so the pair never wraps ragged. */}
              <div
                className={cn(
                  'mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center',
                  !hasVisual && 'sm:justify-center',
                )}
              >
                <Button href={primaryCta.href} size="lg" arrow className="w-full sm:w-auto">
                  {primaryCta.label}
                </Button>
                {secondaryCta ? (
                  <Button href={secondaryCta.href} variant="secondary" size="lg" className="w-full sm:w-auto">
                    {secondaryCta.label}
                  </Button>
                ) : null}
              </div>
            </Reveal>

            {stats?.length ? (
              <Reveal delay={280}>
                <dl
                  className={cn(
                    'mt-12 grid gap-x-8 gap-y-6 border-t border-ink-100 pt-8',
                    stats.length === 4 ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-2 sm:grid-cols-3',
                    !hasVisual && 'mx-auto max-w-2xl',
                  )}
                >
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <dt className="sr-only">{stat.label}</dt>
                      <dd>
                        <span className="block font-display text-[1.75rem] font-extrabold leading-none text-gradient sm:text-[2rem]">
                          <Counter
                            value={stat.value}
                            suffix={stat.suffix}
                            prefix={stat.prefix}
                            decimals={stat.decimals}
                          />
                        </span>
                        <span className="mt-2 block text-[0.8125rem] font-medium leading-snug text-ink-500">
                          {stat.label}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            ) : null}
          </div>

          {hasVisual ? (
            <Reveal from="scale" delay={180} className="relative">
              {visual}
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
