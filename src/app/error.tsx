'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Aurora } from '@/components/ui/Aurora';
import { Icon } from '@/components/ui/Icon';
import { site } from '@/content/site';

/**
 * Route-level error boundary. Keeps the header and footer in place so a failed
 * page still leaves the visitor somewhere to go.
 */
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Replace with your error reporter (Sentry, etc.) when one is configured.
    console.error('[route error]', error);
  }, [error]);

  return (
    <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden bg-white pb-section pt-32">
      <Aurora preset="warm" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 grid-overlay" />

      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sunset-400 to-blossom-500 text-white shadow-lift">
            <Icon name="alert-triangle" className="h-6 w-6" strokeWidth={2} />
          </span>

          <h1 className="mt-7 text-display-md text-ink-950">Something broke on our side.</h1>
          <p className="mx-auto mt-5 max-w-lg text-lead text-ink-500">
            Not your fault, and not something you can fix by refreshing twice. Try again — and if it keeps happening,
            tell us what you were doing and we will chase it down.
          </p>

          {error.digest ? (
            <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink-50 px-3.5 py-1.5 font-mono text-[0.75rem] text-ink-600">
              <Icon name="file-text" className="h-3.5 w-3.5" />
              Reference {error.digest}
            </p>
          ) : null}

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <button type="button" onClick={reset} className="btn btn-primary btn-lg w-full sm:w-auto">
              <span className="relative z-10 inline-flex items-center gap-2">
                Try again
                <Icon name="refresh" className="h-4 w-4" />
              </span>
            </button>
            <Link href="/" className="btn btn-secondary btn-lg w-full sm:w-auto">
              Back to home
            </Link>
          </div>

          <p className="mt-8 text-sm text-ink-500">
            Still stuck?{' '}
            <a
              href={`mailto:${site.email}`}
              className="font-semibold text-brand-600 underline decoration-brand-300 underline-offset-4 hover:text-brand-700"
            >
              {site.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
