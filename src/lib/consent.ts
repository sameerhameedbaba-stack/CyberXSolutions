/**
 * Cookie consent state.
 *
 * Strictly necessary storage is always on. Everything else is off until the
 * visitor opts in — including for anyone sending a Global Privacy Control
 * signal, which we treat as a standing opt-out rather than a suggestion.
 */

export type Consent = {
  analytics: boolean;
  /** ISO timestamp of the decision, so the choice can be evidenced. */
  decidedAt: string;
};

export const CONSENT_KEY = 'cx_consent';
export const CONSENT_EVENT = 'cx:consent';
/** Twelve months, matching the retention stated in the cookie policy. */
const MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

export function hasGlobalPrivacyControl(): boolean {
  if (typeof navigator === 'undefined') return false;
  return (
    (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true ||
    (navigator as Navigator & { doNotTrack?: string }).doNotTrack === '1'
  );
}

export function readConsent(): Consent | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<Consent>;
    if (typeof parsed.analytics !== 'boolean') return null;
    return { analytics: parsed.analytics, decidedAt: parsed.decidedAt ?? '' };
  } catch {
    return null;
  }
}

export function writeConsent(analytics: boolean): Consent {
  const consent: Consent = { analytics, decidedAt: new Date().toISOString() };

  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  } catch {
    // Storage can be unavailable (private mode, blocked cookies). The cookie
    // mirror below is enough to honour the choice for this session.
  }

  // Mirrored to a cookie so the decision survives storage clearing policies
  // and could be read server-side if analytics is ever rendered server-first.
  document.cookie = `${CONSENT_KEY}=${analytics ? 'analytics' : 'essential'}; path=/; max-age=${MAX_AGE_SECONDS}; SameSite=Lax`;

  window.dispatchEvent(new CustomEvent<Consent>(CONSENT_EVENT, { detail: consent }));
  return consent;
}

/**
 * Subscribe to consent changes. Wire an analytics loader to this rather than
 * loading a tag unconditionally — nothing non-essential should run before the
 * visitor has opted in.
 *
 *   onConsentChange((consent) => { if (consent.analytics) loadAnalytics(); });
 */
export function onConsentChange(callback: (consent: Consent) => void): () => void {
  const handler = (event: Event) => callback((event as CustomEvent<Consent>).detail);
  window.addEventListener(CONSENT_EVENT, handler);
  return () => window.removeEventListener(CONSENT_EVENT, handler);
}
