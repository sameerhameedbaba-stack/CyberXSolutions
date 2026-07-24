'use client';

import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { prefersReducedMotion } from '@/lib/observer';

/**
 * Card with a cursor-tracked spotlight. The pointer position is written to CSS
 * custom properties inside a rAF, so the gradient follows without re-rendering.
 */
export function SpotlightCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  const handleMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion()) return;
    const element = ref.current;
    if (!element) return;

    const { clientX, clientY } = event;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const rect = element.getBoundingClientRect();
      element.style.setProperty('--mx', `${clientX - rect.left}px`);
      element.style.setProperty('--my', `${clientY - rect.top}px`);
    });
  };

  return (
    <div ref={ref} onPointerMove={handleMove} className={cn('spotlight surface-card', className)}>
      {children}
    </div>
  );
}
