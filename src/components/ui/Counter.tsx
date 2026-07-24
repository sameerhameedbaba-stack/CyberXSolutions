'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { observeOnce, prefersReducedMotion } from '@/lib/observer';

/** easeOutExpo — fast start, long settle. Reads as "confident", not "bouncy". */
function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export function Counter({
  value,
  decimals = 0,
  duration = 1800,
  prefix = '',
  suffix = '',
  className,
}: {
  value: number;
  decimals?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (prefersReducedMotion()) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    let start = 0;

    const run = () => {
      const tick = (now: number) => {
        if (!start) start = now;
        const progress = Math.min((now - start) / duration, 1);
        setDisplay(value * easeOutExpo(progress));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const stop = observeOnce(element, run);
    return () => {
      stop();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  const formatted = display.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      {/* The exact figure stays in the DOM for assistive tech and crawlers. */}
      <span aria-hidden="true">
        {prefix}
        {formatted}
        {suffix}
      </span>
      <span className="sr-only">
        {prefix}
        {value.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
        {suffix}
      </span>
    </span>
  );
}

export function Stat({
  value,
  decimals,
  prefix,
  suffix,
  label,
  sub,
  className,
  valueClassName,
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sub?: string;
  className?: string;
  valueClassName?: string;
}) {
  return (
    <div className={cn('text-left', className)}>
      <div className={cn('text-display-sm font-display font-extrabold text-gradient', valueClassName)}>
        <Counter value={value} decimals={decimals} prefix={prefix} suffix={suffix} />
      </div>
      <div className="mt-2 text-sm font-semibold text-ink-900">{label}</div>
      {sub ? <p className="mt-1 text-sm leading-relaxed text-ink-500">{sub}</p> : null}
    </div>
  );
}
