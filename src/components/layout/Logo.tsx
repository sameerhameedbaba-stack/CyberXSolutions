import Link from 'next/link';
import { cn } from '@/lib/utils';

/**
 * The mark: an X built from two strokes with a node at the intersection —
 * the crossing point of security and intelligence, which is the whole company.
 */
export function LogoMark({ className, id = 'logo' }: { className?: string; id?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn('h-9 w-9', className)} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-fill`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2F6BFF" />
          <stop offset="52%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
        <linearGradient id={`${id}-sheen`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.34" />
          <stop offset="60%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9.5" fill={`url(#${id}-fill)`} />
      <rect width="32" height="32" rx="9.5" fill={`url(#${id}-sheen)`} />
      <path
        d="M10.4 10.4 21.6 21.6M21.6 10.4 10.4 21.6"
        stroke="#fff"
        strokeWidth="2.7"
        strokeLinecap="round"
        opacity="0.96"
      />
      <circle cx="16" cy="16" r="4.1" fill="#fff" />
      <circle cx="16" cy="16" r="1.9" fill={`url(#${id}-fill)`} />
    </svg>
  );
}

export function Logo({
  className,
  tone = 'dark',
  href = '/',
  id,
}: {
  className?: string;
  tone?: 'dark' | 'light';
  href?: string;
  id?: string;
}) {
  return (
    <Link
      href={href}
      className={cn('group inline-flex items-center gap-2.5 rounded-xl', className)}
      aria-label="CyberXSolutions — home"
    >
      <LogoMark id={id} className="h-9 w-9 transition-transform duration-500 ease-smooth group-hover:rotate-[8deg]" />
      <span
        className={cn(
          'font-display text-[1.0625rem] font-extrabold leading-none tracking-[-0.03em]',
          tone === 'dark' ? 'text-ink-950' : 'text-white',
        )}
      >
        Cyber<span className="text-gradient">X</span>
        <span className={cn('font-semibold', tone === 'dark' ? 'text-ink-500' : 'text-ink-300')}>Solutions</span>
      </span>
    </Link>
  );
}
