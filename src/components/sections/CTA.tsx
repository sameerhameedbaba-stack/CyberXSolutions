import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { Icon } from '@/components/ui/Icon';
import { site } from '@/content/site';

/**
 * Closing call to action. Deep ink panel with an aurora wash — the one place
 * the site goes dark, so it lands as a deliberate full stop.
 */
export function CTA({
  eyebrow = 'Start the conversation',
  title = 'Bring us the process that keeps breaking.',
  body = 'Ninety minutes with our engineers and strategists. You leave with a systems map, an automation shortlist and an honest read on what AI should and should not touch in your business.',
  primary = { label: 'Book a working session', href: '/contact' },
  secondary = { label: 'See the work', href: '/case-studies' },
  points = ['No pitch deck, no obligation', 'Senior engineers in the room', 'A written plan within five days'],
  className,
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  body?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  points?: string[];
  className?: string;
}) {
  return (
    <section className={cn('relative isolate overflow-hidden bg-white py-section', className)}>
      <div className="container-x">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-ink-950 px-6 py-14 shadow-lift-xl sm:rounded-[2.75rem] sm:px-12 sm:py-18 lg:px-20 lg:py-24">
            {/* Aurora wash */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
              <div
                className="absolute -left-24 -top-32 h-[34rem] w-[34rem] rounded-full blur-3xl animate-drift"
                style={{ background: 'radial-gradient(circle, rgba(47,107,255,0.55), rgba(47,107,255,0) 66%)' }}
              />
              <div
                className="absolute -right-20 -bottom-32 h-[32rem] w-[32rem] rounded-full blur-3xl animate-drift [animation-delay:-9s]"
                style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.5), rgba(168,85,247,0) 66%)' }}
              />
              <div
                className="absolute left-1/2 top-1/3 h-[24rem] w-[24rem] rounded-full blur-3xl animate-drift [animation-delay:-15s]"
                style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.36), rgba(6,182,212,0) 68%)' }}
              />
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 opacity-[0.13]"
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)',
                backgroundSize: '56px 56px',
                maskImage: 'radial-gradient(ellipse 70% 70% at 50% 40%, #000 20%, transparent 75%)',
                WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 40%, #000 20%, transparent 75%)',
              }}
            />

            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
              <div>
                <p className="eyebrow text-cyan-300">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  {eyebrow}
                </p>
                <h2 className="mt-5 text-display-md text-white">{title}</h2>
                <p className="mt-6 max-w-xl text-lead text-ink-300">{body}</p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <Button href={primary.href} size="lg" arrow className="w-full sm:w-auto">
                    {primary.label}
                  </Button>
                  <a
                    href={secondary.href}
                    className="btn btn-lg w-full border border-white/20 bg-white/5 text-white backdrop-blur transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10 sm:w-auto"
                  >
                    {secondary.label}
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-white/12 bg-white/[0.06] p-7 backdrop-blur-xl sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-300">What to expect</p>
                <ul className="mt-6 space-y-4">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white">
                        <Icon name="check" className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span className="text-[0.9375rem] leading-relaxed text-ink-200">{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 border-t border-white/10 pt-6">
                  <p className="text-sm text-ink-300">Prefer email?</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-white transition-colors hover:text-cyan-300"
                  >
                    {site.email}
                    <Icon name="arrow-up-right" className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
