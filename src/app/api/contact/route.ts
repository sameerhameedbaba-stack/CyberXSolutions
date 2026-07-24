import { NextResponse } from 'next/server';

/**
 * Contact endpoint.
 *
 * Validates and forwards enquiries to whatever you point CONTACT_WEBHOOK_URL at
 * (Slack, a CRM intake, an email relay such as Resend/Postmark, Zapier…).
 * Until that variable is set the route returns 503 with an explicit message
 * rather than silently accepting submissions that go nowhere.
 */

export const runtime = 'nodejs';

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  role?: string;
  interest?: string;
  budget?: string;
  message?: string;
  /** Honeypot — real users never fill this in. */
  website?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function clean(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

export async function POST(request: Request) {
  let payload: Payload;

  try {
    payload = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: 'Malformed request body.' }, { status: 400 });
  }

  // Silently accept and discard obvious bot submissions.
  if (clean(payload.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(payload.name, 120);
  const email = clean(payload.email, 200);
  const message = clean(payload.message, 5000);

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = 'Please tell us your name.';
  if (!EMAIL_PATTERN.test(email)) errors.email = 'Please enter a valid work email address.';
  if (message.length < 20) errors.message = 'Please give us at least a couple of sentences to work with.';

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const enquiry = {
    name,
    email,
    company: clean(payload.company, 160),
    role: clean(payload.role, 160),
    interest: clean(payload.interest, 80),
    budget: clean(payload.budget, 80),
    message,
    receivedAt: new Date().toISOString(),
    source: 'cyberxsolutions.us/contact',
  };

  const webhook = process.env.CONTACT_WEBHOOK_URL;

  if (!webhook) {
    console.warn('[contact] CONTACT_WEBHOOK_URL is not configured — enquiry not delivered.');
    return NextResponse.json(
      {
        ok: false,
        error:
          'The contact endpoint is not configured yet. Please email us directly and we will reply the same working day.',
      },
      { status: 503 },
    );
  }

  try {
    const response = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(enquiry),
    });

    if (!response.ok) {
      throw new Error(`Webhook responded ${response.status}`);
    }
  } catch (error) {
    console.error('[contact] Failed to deliver enquiry:', error);
    return NextResponse.json(
      { ok: false, error: 'We could not deliver your message. Please email us directly.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
