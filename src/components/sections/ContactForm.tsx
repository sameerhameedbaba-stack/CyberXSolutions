'use client';

import { useId, useState } from 'react';
import { cn } from '@/lib/utils';
import { Icon } from '@/components/ui/Icon';
import { site } from '@/content/site';

type Status = 'idle' | 'submitting' | 'success' | 'error';
type Errors = Partial<Record<'name' | 'email' | 'message' | 'form', string>>;

const interests = [
  'AI Agents',
  'AI Automation',
  'Enterprise Solutions',
  'AI Cybersecurity',
  'Custom Software',
  'Web Development',
  'Mobile Development',
  'Cloud Engineering',
  'Digital Marketing',
  'SEO',
  'Not sure yet',
];

const budgets = [
  'Under $50k',
  '$50k – $150k',
  '$150k – $500k',
  '$500k+',
  'Not established yet',
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * The bundled Node endpoint by default. A static export has no API routes, so
 * set NEXT_PUBLIC_CONTACT_ENDPOINT to an external form handler in that mode.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || '/api/contact';

function Field({
  id,
  label,
  hint,
  error,
  children,
  required,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[0.8125rem] font-semibold text-ink-900">
        {label}
        {required ? (
          <span className="ml-1 text-brand-600" aria-hidden="true">
            *
          </span>
        ) : (
          <span className="ml-1.5 font-normal text-ink-400">(optional)</span>
        )}
      </label>
      {hint ? (
        <p id={`${id}-hint`} className="mt-1 text-[0.75rem] text-ink-400">
          {hint}
        </p>
      ) : null}
      <div className="mt-2">{children}</div>
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1.5 flex items-center gap-1.5 text-[0.75rem] font-medium text-blossom-600">
          <Icon name="alert-triangle" className="h-3.5 w-3.5 shrink-0" />
          {error}
        </p>
      ) : null}
    </div>
  );
}

const inputClass =
  'w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-[0.9375rem] text-ink-900 transition-colors duration-300 placeholder:text-ink-300 hover:border-ink-300 focus:border-brand-400 focus:outline-none focus-visible:outline-none focus:ring-4 focus:ring-brand-500/12';

export function ContactForm() {
  const baseId = useId();
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Errors>({});

  const fieldId = (name: string) => `${baseId}-${name}`;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    // Validate client-side first so the common mistakes never cost a round trip.
    const nextErrors: Errors = {};
    if (!data.name || data.name.trim().length < 2) nextErrors.name = 'Please tell us your name.';
    if (!EMAIL_PATTERN.test(data.email ?? '')) nextErrors.email = 'Please enter a valid work email address.';
    if (!data.message || data.message.trim().length < 20) {
      nextErrors.message = 'A couple of sentences about the problem helps us route this properly.';
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus('idle');
      const firstInvalid = form.querySelector<HTMLElement>('[aria-invalid="true"]');
      firstInvalid?.focus();
      return;
    }

    setErrors({});
    setStatus('submitting');

    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });

      const result = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        errors?: Errors;
      };

      // Our own endpoint returns { ok: true }; third-party handlers such as
      // Formspree or Web3Forms just return 2xx.
      if (response.ok && (result.ok ?? true)) {
        setStatus('success');
        form.reset();
        return;
      }

      setErrors({
        ...(result.errors ?? {}),
        form: result.error ?? 'Something went wrong on our side. Please email us directly.',
      });
      setStatus('error');
    } catch {
      setErrors({ form: 'We could not reach the server. Please email us directly.' });
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50/60 p-8 text-center sm:p-12" role="status">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient-fresh text-white shadow-lift">
          <Icon name="check" className="h-7 w-7" strokeWidth={2.6} />
        </span>
        <h3 className="mt-6 font-display text-2xl font-extrabold tracking-tight text-ink-950">Message received.</h3>
        <p className="mx-auto mt-3 max-w-md text-[0.9375rem] leading-relaxed text-ink-600">
          A senior engineer will read this and reply within one working day — not a sales development rep, and not an
          automated sequence.
        </p>
        <button type="button" onClick={() => setStatus('idle')} className="btn btn-secondary btn-sm mt-7">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-3xl border border-ink-100 bg-white p-6 shadow-lift-sm sm:p-8">
      {/* Honeypot */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor={fieldId('website')}>Leave this field empty</label>
        <input id={fieldId('website')} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={fieldId('name')} label="Name" required error={errors.name}>
          <input
            id={fieldId('name')}
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${fieldId('name')}-error` : undefined}
            className={cn(inputClass, errors.name && 'border-blossom-400 focus:border-blossom-500 focus:ring-blossom-500/12')}
            placeholder="Alex Morgan"
          />
        </Field>

        <Field id={fieldId('email')} label="Work email" required error={errors.email}>
          <input
            id={fieldId('email')}
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${fieldId('email')}-error` : undefined}
            className={cn(inputClass, errors.email && 'border-blossom-400 focus:border-blossom-500 focus:ring-blossom-500/12')}
            placeholder="alex@company.com"
          />
        </Field>

        <Field id={fieldId('company')} label="Company">
          <input
            id={fieldId('company')}
            name="company"
            type="text"
            autoComplete="organization"
            className={inputClass}
            placeholder="Company name"
          />
        </Field>

        <Field id={fieldId('role')} label="Your role">
          <input
            id={fieldId('role')}
            name="role"
            type="text"
            autoComplete="organization-title"
            className={inputClass}
            placeholder="VP of Operations"
          />
        </Field>

        <Field id={fieldId('interest')} label="What is this about">
          <select id={fieldId('interest')} name="interest" className={cn(inputClass, 'select-chevron appearance-none pr-10')} defaultValue="Not sure yet">
            {interests.map((interest) => (
              <option key={interest}>{interest}</option>
            ))}
          </select>
        </Field>

        <Field id={fieldId('budget')} label="Budget range" hint="Helps us propose something realistic.">
          <select id={fieldId('budget')} name="budget" className={cn(inputClass, 'select-chevron appearance-none pr-10')} defaultValue="Not established yet">
            {budgets.map((budget) => (
              <option key={budget}>{budget}</option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field
          id={fieldId('message')}
          label="What is the problem"
          required
          hint="The process that keeps breaking, and whatever numbers you already have."
          error={errors.message}
        >
          <textarea
            id={fieldId('message')}
            name="message"
            rows={5}
            required
            aria-required="true"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={cn(`${fieldId('message')}-hint`, errors.message && `${fieldId('message')}-error`)}
            className={cn(
              inputClass,
              'resize-y',
              errors.message && 'border-blossom-400 focus:border-blossom-500 focus:ring-blossom-500/12',
            )}
            placeholder="We process about 40,000 invoices a month across two ERPs. Matching is manual and month-end close keeps slipping past day ten…"
          />
        </Field>
      </div>

      {errors.form ? (
        <p role="alert" className="mt-5 flex items-start gap-2.5 rounded-xl border border-blossom-200 bg-blossom-50 p-4 text-[0.875rem] leading-relaxed text-blossom-700">
          <Icon name="alert-triangle" className="mt-0.5 h-4 w-4 shrink-0" />
          <span>
            {errors.form}{' '}
            <a href={`mailto:${site.email}`} className="font-semibold underline underline-offset-2">
              {site.email}
            </a>
          </span>
        </p>
      ) : null}

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <button type="submit" disabled={status === 'submitting'} className="btn btn-primary btn-lg">
          <span className="relative z-10 inline-flex items-center gap-2">
            {status === 'submitting' ? (
              <>
                <Icon name="refresh" className="h-4 w-4 animate-spin-slow" strokeWidth={2.2} />
                Sending…
              </>
            ) : (
              <>
                Send message
                <Icon name="arrow-right" className="h-4 w-4" />
              </>
            )}
          </span>
        </button>
        <p className="text-[0.8125rem] text-ink-400">Replies come from a senior engineer, usually same working day.</p>
      </div>

      <p className="mt-5 border-t border-ink-100 pt-5 text-[0.75rem] leading-relaxed text-ink-400">
        We use what you send only to answer your enquiry. No mailing list, no sequence, no resale. See our{' '}
        <a href="/privacy-policy" className="font-semibold text-ink-600 underline underline-offset-2 hover:text-brand-600">
          privacy policy
        </a>
        .
      </p>
    </form>
  );
}
