'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { primaryNav, type NavItem } from '@/content/site';
import { Icon, IconTile } from '@/components/ui/Icon';
import { Logo } from './Logo';

/* ------------------------------------------------------------------ */
/* Desktop mega panel                                                  */
/* ------------------------------------------------------------------ */

function MegaPanel({ item, onNavigate }: { item: Extract<NavItem, { kind: 'mega' }>; onNavigate: () => void }) {
  return (
    <div className="grid gap-8 p-6 lg:grid-cols-[repeat(3,minmax(0,1fr))_minmax(0,0.9fr)] lg:p-7">
      {item.groups.map((group) => (
        <div key={group.heading}>
          <h3 className="mb-4 font-mono text-[0.625rem] font-bold uppercase tracking-[0.16em] text-ink-400">
            {group.heading}
          </h3>
          <ul className="space-y-1">
            {group.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onNavigate}
                  className="group/link flex items-start gap-3 rounded-xl p-2.5 transition-colors duration-300 hover:bg-ink-50"
                >
                  <IconTile name={link.icon ?? 'sparkles'} accent={link.accent ?? 'blue'} size="sm" />
                  <span className="min-w-0">
                    <span className="flex items-center gap-2">
                      <span className="text-[0.9375rem] font-semibold text-ink-950 group-hover/link:text-brand-700">
                        {link.label}
                      </span>
                      {link.badge ? (
                        <span className="rounded-full bg-brand-gradient px-1.5 py-0.5 text-[0.5625rem] font-bold uppercase tracking-wide text-white">
                          {link.badge}
                        </span>
                      ) : null}
                    </span>
                    <span className="mt-0.5 block text-[0.8125rem] leading-snug text-ink-500">{link.description}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {item.feature ? (
        <div className="relative overflow-hidden rounded-2xl bg-ink-950 p-6">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full blur-2xl"
            style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.6), rgba(139,92,246,0) 70%)' }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-14 -left-10 h-40 w-40 rounded-full blur-2xl"
            style={{ background: 'radial-gradient(circle, rgba(47,107,255,0.55), rgba(47,107,255,0) 70%)' }}
          />
          <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur">
            <Icon name="sparkles" className="h-5 w-5" strokeWidth={1.9} />
          </span>
          <h3 className="relative mt-4 text-base font-bold text-white">{item.feature.title}</h3>
          <p className="relative mt-2 text-[0.8125rem] leading-relaxed text-ink-300">{item.feature.body}</p>
          <Link
            href={item.feature.href}
            onClick={onNavigate}
            className="relative mt-5 inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-cyan-300 transition-colors hover:text-white"
          >
            {item.feature.cta}
            <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
        </div>
      ) : null}

      <div className="lg:col-span-4">
        <Link
          href={item.href}
          onClick={onNavigate}
          className="flex items-center justify-between rounded-xl border border-ink-100 bg-ink-50/70 px-4 py-3 text-sm font-semibold text-ink-800 transition-colors hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
        >
          Every service in one place
          <Icon name="arrow-right" className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

function DropdownPanel({
  item,
  onNavigate,
}: {
  item: Extract<NavItem, { kind: 'dropdown' }>;
  onNavigate: () => void;
}) {
  return (
    <ul className="w-[22rem] space-y-1 p-3">
      {item.links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            onClick={onNavigate}
            className="group/link flex items-start gap-3 rounded-xl p-2.5 transition-colors duration-300 hover:bg-ink-50"
          >
            <span
              aria-hidden="true"
              className={cn(
                'mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full',
                link.accent === 'violet'
                  ? 'bg-violet-500'
                  : link.accent === 'cyan'
                    ? 'bg-cyan-500'
                    : link.accent === 'emerald'
                      ? 'bg-emerald-500'
                      : link.accent === 'orange'
                        ? 'bg-sunset-500'
                        : link.accent === 'indigo'
                          ? 'bg-indigo-500'
                          : 'bg-brand-500',
              )}
            />
            <span>
              <span className="block text-[0.9375rem] font-semibold text-ink-950 group-hover/link:text-brand-700">
                {link.label}
              </span>
              <span className="mt-0.5 block text-[0.8125rem] leading-snug text-ink-500">{link.description}</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------ */
/* Header                                                              */
/* ------------------------------------------------------------------ */

export function Header() {
  const pathname = usePathname();
  const baseId = useId();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Solid chrome once the page has moved — keeps the hero clean at rest.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Any navigation closes everything.
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileSection(null);
  }, [pathname]);

  // Escape closes menus; the mobile drawer locks background scroll.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setOpenMenu(null);
      setMobileOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Pointer leaving the whole nav region closes the open panel, with a grace
  // period so diagonal travel toward the panel does not dismiss it.
  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!navRef.current) return;
      if (!navRef.current.contains(event.target as Node)) setOpenMenu(null);
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, []);

  const scheduleClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <>
      <a href="#main" className="sr-only-focusable btn btn-primary btn-sm fixed left-4 top-4 z-[60]">
        Skip to content
      </a>

      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-smooth',
          scrolled || mobileOpen
            ? 'border-b border-ink-100/80 bg-white/85 backdrop-blur-xl backdrop-saturate-150'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <div className="container-x">
          <div className="flex h-[var(--header-h)] items-center justify-between gap-6">
            <Logo id="header-logo" />

            {/* --- Desktop navigation --- */}
            <div ref={navRef} className="hidden lg:block" onPointerLeave={scheduleClose} onPointerEnter={cancelClose}>
              <nav aria-label="Primary">
                <ul className="flex items-center gap-1">
                  {primaryNav.map((item) => {
                    const panelId = `${baseId}-${item.label}`;
                    const hasPanel = item.kind !== 'link';
                    const isOpen = openMenu === item.label;

                    if (!hasPanel) {
                      return (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            className={cn(
                              'relative rounded-lg px-3.5 py-2 text-[0.9375rem] font-medium transition-colors duration-300',
                              isActive(item.href) ? 'text-brand-700' : 'text-ink-700 hover:text-ink-950',
                            )}
                          >
                            {item.label}
                            {isActive(item.href) ? (
                              <span
                                aria-hidden="true"
                                className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-brand-gradient"
                              />
                            ) : null}
                          </Link>
                        </li>
                      );
                    }

                    return (
                      <li key={item.label} className="relative">
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          onClick={() => setOpenMenu(isOpen ? null : item.label)}
                          onPointerEnter={() => {
                            cancelClose();
                            setOpenMenu(item.label);
                          }}
                          className={cn(
                            'relative flex items-center gap-1 rounded-lg px-3.5 py-2 text-[0.9375rem] font-medium transition-colors duration-300',
                            isOpen || isActive(item.href) ? 'text-brand-700' : 'text-ink-700 hover:text-ink-950',
                          )}
                        >
                          {item.label}
                          <Icon
                            name="chevron-down"
                            className={cn('h-3.5 w-3.5 transition-transform duration-300 ease-smooth', isOpen && 'rotate-180')}
                            strokeWidth={2.2}
                          />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Panels render outside the list so they can span the container. */}
              {primaryNav.map((item) => {
                if (item.kind === 'link') return null;
                const panelId = `${baseId}-${item.label}`;
                const isOpen = openMenu === item.label;

                return (
                  <div
                    key={item.label}
                    id={panelId}
                    // `inert` keeps closed panels out of the tab order and the
                    // accessibility tree while still allowing the fade to play.
                    inert={!isOpen}
                    aria-hidden={!isOpen}
                    className={cn(
                      'absolute left-1/2 top-[calc(var(--header-h)-0.25rem)] z-50 -translate-x-1/2 origin-top transition-all duration-300 ease-smooth',
                      item.kind === 'mega' ? 'w-[min(72rem,calc(100vw-3rem))]' : 'w-auto',
                      isOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-1 opacity-0',
                    )}
                  >
                    <div className="surface-menu overflow-hidden rounded-3xl">
                      {item.kind === 'mega' ? (
                        <MegaPanel item={item} onNavigate={() => setOpenMenu(null)} />
                      ) : (
                        <DropdownPanel item={item} onNavigate={() => setOpenMenu(null)} />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* --- Actions --- */}
            <div className="flex items-center gap-2.5">
              <Link
                href="/contact"
                className="btn btn-primary btn-md hidden sm:inline-flex"
              >
                <span className="relative z-10">Talk to us</span>
              </Link>

              <button
                type="button"
                aria-expanded={mobileOpen}
                aria-controls={`${baseId}-mobile`}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                onClick={() => setMobileOpen((open) => !open)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink-200 bg-white/80 text-ink-800 transition-colors hover:border-brand-300 hover:text-brand-700 lg:hidden"
              >
                <Icon name={mobileOpen ? 'close' : 'menu'} className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* --- Mobile drawer --- */}
      <div
        id={`${baseId}-mobile`}
        inert={!mobileOpen}
        aria-hidden={!mobileOpen}
        className={cn(
          'fixed inset-0 z-40 transition-opacity duration-300 ease-smooth lg:hidden',
          mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
        aria-label="Mobile navigation"
      >
        <button
          type="button"
          aria-label="Close menu"
          tabIndex={-1}
          onClick={() => setMobileOpen(false)}
          className="absolute inset-0 bg-ink-950/25 backdrop-blur-sm"
        />
        <nav
          aria-label="Mobile primary"
          className={cn(
            'absolute inset-x-0 top-[var(--header-h)] max-h-[calc(100dvh-var(--header-h))] overflow-y-auto overscroll-contain border-b border-ink-100 bg-white px-5 pb-8 pt-4 shadow-lift-lg',
            'transition-transform duration-300 ease-smooth',
            mobileOpen ? 'translate-y-0' : '-translate-y-3',
          )}
        >
          <ul className="space-y-1">
            {primaryNav.map((item) => {
              if (item.kind === 'link') {
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={cn(
                        'flex items-center justify-between rounded-xl px-3 py-3.5 text-base font-semibold transition-colors',
                        isActive(item.href) ? 'bg-brand-50 text-brand-700' : 'text-ink-900 hover:bg-ink-50',
                      )}
                    >
                      {item.label}
                      <Icon name="chevron-right" className="h-4 w-4 text-ink-300" />
                    </Link>
                  </li>
                );
              }

              const links = item.kind === 'mega' ? item.groups.flatMap((group) => group.links) : item.links;
              const expanded = mobileSection === item.label;

              return (
                <li key={item.label}>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    onClick={() => setMobileSection(expanded ? null : item.label)}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-3.5 text-base font-semibold text-ink-900 transition-colors hover:bg-ink-50"
                  >
                    {item.label}
                    <Icon
                      name="chevron-down"
                      className={cn('h-4 w-4 text-ink-400 transition-transform duration-300 ease-smooth', expanded && 'rotate-180')}
                    />
                  </button>
                  <div
                    className={cn(
                      'grid transition-all duration-500 ease-smooth',
                      expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                    )}
                  >
                    <div className="overflow-hidden">
                      <ul className="space-y-0.5 border-l border-ink-100 pb-2 pl-3 ml-3">
                        <li>
                          <Link
                            href={item.href}
                            className="block rounded-lg px-3 py-2.5 text-[0.9375rem] font-semibold text-brand-600 hover:bg-brand-50"
                          >
                            All {item.label.toLowerCase()}
                          </Link>
                        </li>
                        {links.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              className={cn(
                                'block rounded-lg px-3 py-2.5 text-[0.9375rem] transition-colors',
                                isActive(link.href) ? 'bg-ink-50 font-semibold text-ink-950' : 'text-ink-600 hover:bg-ink-50 hover:text-ink-950',
                              )}
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <Link href="/contact" className="btn btn-primary btn-lg mt-6 w-full">
            <span className="relative z-10">Talk to us</span>
          </Link>
        </nav>
      </div>
    </>
  );
}
