'use client';

import { useEffect } from 'react';

/**
 * Last-resort boundary: catches failures in the root layout itself, so it
 * cannot rely on any of the layout's markup, fonts or styles. Everything here
 * is inline on purpose.
 */
export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error('[global error]', error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          background: '#ffffff',
          color: '#141A31',
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif',
        }}
      >
        <main style={{ maxWidth: '32rem', textAlign: 'center' }}>
          <div
            style={{
              width: 56,
              height: 56,
              margin: '0 auto',
              borderRadius: 17,
              background: 'linear-gradient(135deg, #2F6BFF 0%, #7C3AED 52%, #EC4899 100%)',
            }}
          />
          <h1 style={{ margin: '1.75rem 0 0', fontSize: '1.875rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
            Something broke on our side.
          </h1>
          <p style={{ margin: '1rem 0 0', fontSize: '1rem', lineHeight: 1.6, color: '#565F81' }}>
            The page could not be loaded. Try again, and if it keeps happening email{' '}
            <a href="mailto:support@cyberxsolutions.us" style={{ color: '#1A4CF0', fontWeight: 600 }}>
              support@cyberxsolutions.us
            </a>
            .
          </p>
          {error.digest ? (
            <p style={{ margin: '1rem 0 0', fontSize: '0.8125rem', color: '#67718F', fontFamily: 'ui-monospace, monospace' }}>
              Reference {error.digest}
            </p>
          ) : null}
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: '2rem',
              padding: '0.875rem 1.75rem',
              borderRadius: 9999,
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.9375rem',
              fontWeight: 600,
              color: '#ffffff',
              background: 'linear-gradient(105deg, #2F6BFF 0%, #7C3AED 100%)',
            }}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
