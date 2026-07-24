'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Icon } from '@/components/ui/Icon';
import { hasGlobalPrivacyControl, readConsent, writeConsent } from '@/lib/consent';

const OPEN_PREFERENCES_EVENT = 'cx:open-cookie-preferences';

/** Lets the footer button reopen preferences without prop-drilling. */
export function openCookiePreferences() {
  window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT));
}

export function CookieConsent() {
  const titleId = useId();
  const descriptionId = useId();
  const [banner, setBanner] = useState(false);
  const [preferences, setPreferences] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreFocusTo = useRef<HTMLElement | null>(null);

  // Decide what to show once, on mount. A GPC signal counts as a decision, so
  // those visitors are never nagged.
  useEffect(() => {
    const existing = readConsent();
    if (existing) {
      setAnalytics(existing.analytics);
      return;
    }
    if (hasGlobalPrivacyControl()) {
      writeConsent(false);
      setAnalytics(false);
      return;
    }
    setBanner(true);
  }, []);

  useEffect(() => {
    const onOpen = () => {
      restoreFocusTo.current = document.activeElement as HTMLElement;
      setAnalytics(readConsent()?.analytics ?? false);
      setPreferences(true);
    };
    window.addEventListener(OPEN_PREFERENCES_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, onOpen);
  }, []);

  const closePreferences = useCallback(() => {
    setPreferences(false);
    restoreFocusTo.current?.focus();
    restoreFocusTo.current = null;
  }, []);

  // Modal behaviour: focus in, Escape out, Tab kept inside.
  useEffect(() => {
    if (!preferences) return;
    const panel = panelRef.current;
    if (!panel) return;

    const focusable = () =>
      Array.from(
        panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );

    focusable()[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closePreferences();
        return;
      }
      if (event.key !== 'Tab') return;

      const items = focusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [preferences, closePreferences]);

  const decide = (allowAnalytics: boolean) => {
    writeConsent(allowAnalytics);
    setAnalytics(allowAnalytics);
    setBanner(false);
    if (preferences) closePreferences();
  };

  return (
    <>
      {/* Banner */}
      {banner && !preferences ? (
        <div
          role="region"
          aria-label="Cookie consent"
          className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6"
        >
          <div className="surface-menu mx-auto flex max-w-4xl flex-col gap-5 rounded-3xl p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-6">
            <div className="flex items-start gap-3.5">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white">
                <Icon name="lock" className="h-4 w-4" strokeWidth={2} />
              </span>
              <p className="text-[0.875rem] leading-relaxed text-ink-600">
                We use only what this site needs to work. Analytics stays off unless you turn it on.{' '}
                <Link
                  href="/cookie-policy"
                  className="font-semibold text-brand-600 underline decoration-brand-300 underline-offset-2 hover:text-brand-700"
                >
                  Cookie policy
                </Link>
                .
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => {
                  restoreFocusTo.current = document.activeElement as HTMLElement;
                  setPreferences(true);
                }}
                className="btn btn-ghost btn-sm order-3 sm:order-1"
              >
                Preferences
              </button>
              <button type="button" onClick={() => decide(false)} className="btn btn-secondary btn-sm order-2">
                Essential only
              </button>
              <button type="button" onClick={() => decide(true)} className="btn btn-primary btn-sm order-1 sm:order-3">
                <span className="relative z-10">Accept all</span>
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {/* Preferences dialog */}
      {preferences ? (
        <div className="fixed inset-0 z-[70] flex items-end justify-center p-4 sm:items-center sm:p-6">
          <div
            className="absolute inset-0 bg-ink-950/40 backdrop-blur-sm"
            onClick={closePreferences}
            aria-hidden="true"
          />
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            className="surface-menu relative w-full max-w-lg rounded-3xl p-6 sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id={titleId} className="font-display text-xl font-extrabold tracking-tight text-ink-950">
                  Cookie preferences
                </h2>
                <p id={descriptionId} className="mt-2 text-[0.875rem] leading-relaxed text-ink-600">
                  Your choice is stored for twelve months. You can change it any time from the footer.
                </p>
              </div>
              <button
                type="button"
                onClick={closePreferences}
                aria-label="Close cookie preferences"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-ink-200 text-ink-600 transition-colors hover:border-brand-300 hover:text-brand-700"
              >
                <Icon name="close" className="h-4 w-4" strokeWidth={2} />
              </button>
            </div>

            <div className="mt-6 space-y-3">
              <div className="rounded-2xl border border-ink-100 bg-ink-50/60 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.9375rem] font-bold text-ink-950">Strictly necessary</p>
                    <p className="mt-1 text-[0.8125rem] leading-relaxed text-ink-600">
                      Remembers this choice and keeps the site secure. The site cannot work without it.
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-ink-200 px-2.5 py-1 text-[0.6875rem] font-bold uppercase tracking-wide text-ink-700">
                    Always on
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-ink-100 bg-white p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.9375rem] font-bold text-ink-950">Analytics</p>
                    <p className="mt-1 text-[0.8125rem] leading-relaxed text-ink-600">
                      Aggregate measurement of which pages get read. Never used to identify you, never sold.
                    </p>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={analytics}
                    aria-label="Allow analytics cookies"
                    onClick={() => setAnalytics((value) => !value)}
                    className={cn(
                      'relative h-6 w-11 shrink-0 rounded-full transition-colors duration-300 ease-smooth',
                      analytics ? 'bg-brand-gradient' : 'bg-ink-200',
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        'absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-lift-sm transition-transform duration-300 ease-smooth',
                        analytics ? 'translate-x-[1.375rem]' : 'translate-x-0.5',
                      )}
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
              <Link href="/cookie-policy" className="link-arrow text-sm">
                Read the cookie policy
                <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
              <button type="button" onClick={() => decide(analytics)} className="btn btn-primary btn-sm w-full sm:w-auto">
                <span className="relative z-10">Save preferences</span>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

/** Footer entry point — reopens the dialog after a decision has been made. */
export function CookiePreferencesButton({ className }: { className?: string }) {
  return (
    <button type="button" onClick={openCookiePreferences} className={className}>
      Cookie preferences
    </button>
  );
}
