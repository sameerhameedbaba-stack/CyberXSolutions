import Link from 'next/link';
import { site, footerNav, legalNav } from '@/content/site';
import { trustMarkers } from '@/content/social';
import { Icon } from '@/components/ui/Icon';
import { LogoMark } from './Logo';

const socials = [
  { label: 'LinkedIn', href: site.social.linkedin, icon: 'linkedin' },
  { label: 'X', href: site.social.x, icon: 'x-social' },
  { label: 'GitHub', href: site.social.github, icon: 'github' },
  { label: 'YouTube', href: site.social.youtube, icon: 'youtube' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden border-t border-ink-100 bg-ink-950 text-ink-300">
      {/* Aurora wash */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -left-32 -top-40 h-[36rem] w-[36rem] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(47,107,255,0.28), rgba(47,107,255,0) 68%)' }}
        />
        <div
          className="absolute -right-40 top-1/3 h-[32rem] w-[32rem] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.24), rgba(124,58,237,0) 68%)' }}
        />
        <div
          className="absolute bottom-[-14rem] left-1/3 h-[28rem] w-[28rem] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.2), rgba(6,182,212,0) 70%)' }}
        />
      </div>

      <div className="container-x">
        {/* --- Top: brand + navigation --- */}
        <div className="grid gap-12 py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,2.4fr)] lg:gap-16 lg:py-20">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="CyberXSolutions — home">
              <LogoMark id="footer-logo" className="h-10 w-10" />
              <span className="font-display text-lg font-extrabold leading-none tracking-[-0.03em] text-white">
                Cyber<span className="text-gradient">X</span>
                <span className="font-semibold text-ink-300">Solutions</span>
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-[0.9375rem] leading-relaxed text-ink-300">
              We design, build and operate the AI, automation and security systems that run the work — for
              organisations where being wrong is expensive.
            </p>

            <address className="mt-7 not-italic text-sm leading-relaxed text-ink-300">
              <span className="mb-2 flex items-center gap-2 font-semibold text-ink-200">
                <Icon name="map-pin" className="h-4 w-4 text-brand-400" />
                {site.legalName}
              </span>
              {site.address.street}
              <br />
              {site.address.unit}
              <br />
              {site.address.city}, {site.address.regionCode} {site.address.postalCode}
              <br />
              {site.address.country}
            </address>

            <a
              href={`mailto:${site.email}`}
              className="mt-5 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-white transition-colors hover:text-cyan-300"
            >
              <Icon name="mail" className="h-4 w-4" />
              {site.email}
            </a>

            <ul className="mt-7 flex items-center gap-2.5">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${site.name} on ${social.label}`}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-ink-300 transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 hover:text-white"
                  >
                    <Icon name={social.icon} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {footerNav.map((group) => (
              <div key={group.heading}>
                <h2 className="font-mono text-[0.625rem] font-bold uppercase tracking-[0.16em] text-ink-300">
                  {group.heading}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[0.875rem] text-ink-300 transition-colors duration-300 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* --- Trust markers --- */}
        <ul className="grid gap-3 border-t border-white/10 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustMarkers.map((marker) => (
            <li key={marker.label} className="flex items-center gap-2.5 text-[0.8125rem] font-medium text-ink-300">
              <Icon name={marker.icon} className="h-4 w-4 shrink-0 text-emerald-400" />
              {marker.label}
            </li>
          ))}
        </ul>

        {/* --- Legal --- */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.8125rem] text-ink-300">
            © {year} {site.legalName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[0.8125rem] text-ink-300 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
