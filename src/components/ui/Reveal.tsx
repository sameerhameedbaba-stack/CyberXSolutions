'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { observeOnce, prefersReducedMotion } from '@/lib/observer';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Direction the element travels in from. */
  from?: 'up' | 'left' | 'right' | 'scale';
  /** Stagger, in milliseconds. */
  delay?: number;
  /**
   * Render as an <li> when the wrapper is a direct child of a list, so the
   * animation never breaks the ul/ol → li relationship assistive tech relies on.
   */
  as?: 'div' | 'li';
};

const fromClass = {
  up: '',
  left: 'reveal-left',
  right: 'reveal-right',
  scale: 'reveal-scale',
} as const;

export function Reveal({ children, className, from = 'up', delay = 0, as = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const setRef = (node: HTMLElement | null) => {
    ref.current = node;
  };

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Reduced motion: show immediately, skip the observer entirely.
    if (prefersReducedMotion()) {
      element.classList.add('is-in');
      return;
    }

    return observeOnce(element, () => element.classList.add('is-in'));
  }, []);

  const classes = cn('reveal', fromClass[from], className);
  const style = delay ? { transitionDelay: `${delay}ms` } : undefined;

  if (as === 'li') {
    return (
      <li ref={setRef} className={classes} style={style}>
        {children}
      </li>
    );
  }

  return (
    <div ref={setRef} className={classes} style={style}>
      {children}
    </div>
  );
}

/**
 * Reveals children in sequence. Wraps each child so grid/flex parents keep
 * their layout contract with the wrapper, not the original element.
 */
export function RevealGroup({
  children,
  className,
  step = 90,
  from = 'up',
  initialDelay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  step?: number;
  from?: RevealProps['from'];
  initialDelay?: number;
}) {
  const items = Array.isArray(children) ? children : [children];
  return (
    <>
      {items.flat().map((child, index) => (
        <Reveal key={index} className={className} from={from} delay={initialDelay + index * step}>
          {child}
        </Reveal>
      ))}
    </>
  );
}
