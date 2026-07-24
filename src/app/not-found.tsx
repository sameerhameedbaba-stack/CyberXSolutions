import Link from 'next/link';
import type { Metadata } from 'next';

import { Aurora, Motes } from '@/components/ui/Aurora';
import { Button } from '@/components/ui/Button';
import { Icon, IconTile } from '@/components/ui/Icon';
import { services } from '@/content/services';

export const metadata: Metadata = {
  title: 'Page not found',
  description: 'That page does not exist. Here is where everything else lives.',
  robots: { index: false, follow: true },
};

const shortcuts = [
  { label: 'Services', href: '/services', description: 'Everything we build', icon: 'layers', accent: 'blue' as const },
  { label: 'Case studies', href: '/case-studies', description: 'Measured outcomes', icon: 'chart-line', accent: 'violet' as const },
  { label: 'Process', href: '/process', description: 'How we work', icon: 'workflow', accent: 'cyan' as const },
  { label: 'Contact', href: '/contact', description: 'Talk to an engineer', icon: 'mail', accent: 'emerald' as const },
];

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-white pb-section pt-32">
      <Aurora preset="hero" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 grid-overlay" />
      <Motes count={12} className="-z-10 hidden md:block" />

      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-[6rem] font-extrabold leading-none tracking-tighter text-gradient sm:text-[8rem]">
            404
          </p>
          <h1 className="mt-4 text-display-md text-ink-950">This page does not exist.</h1>
          <p className="mx-auto mt-5 max-w-lg text-lead text-ink-500">
            Either the link is wrong or we moved something and did not redirect it properly. The second one is our
            fault — if you tell us where you came from, we will fix it.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button href="/" size="lg" arrow>
              Back to home
            </Button>
            <Button href="/sitemap" variant="secondary" size="lg">
              Browse the sitemap
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {shortcuts.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-ink-100 bg-white p-6 text-left shadow-lift-sm transition-all duration-500 ease-smooth hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift"
            >
              <IconTile name={item.icon} accent={item.accent} size="sm" />
              <p className="mt-4 text-[0.9375rem] font-bold text-ink-950 group-hover:text-brand-700">{item.label}</p>
              <p className="mt-1 text-[0.8125rem] text-ink-500">{item.description}</p>
            </Link>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <p className="text-center text-[0.75rem] font-bold uppercase tracking-[0.14em] text-ink-400">
            Or jump straight to a service
          </p>
          <ul className="mt-5 flex flex-wrap justify-center gap-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-white px-3.5 py-1.5 text-[0.8125rem] font-medium text-ink-700 transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700"
                >
                  <Icon name={service.icon} className="h-3.5 w-3.5" strokeWidth={2} />
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
