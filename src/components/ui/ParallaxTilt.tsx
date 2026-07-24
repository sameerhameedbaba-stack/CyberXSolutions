'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { prefersReducedMotion } from '@/lib/observer';

/**
 * Pointer-reactive tilt. Writes `--tx` / `--ty` only; the resting rotation and
 * the responsive breakpoint live in CSS (`.tilt-panel`), so a narrow screen
 * gets a flat, safe layout while desktop gets the 3D scene.
 */
export function ParallaxTilt({
  children,
  className,
  intensity = 5,
}: {
  children: React.ReactNode;
  className?: string;
  /** Max degrees of travel on the Y axis; X uses 60% of it. */
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (prefersReducedMotion()) return;
    // Coarse pointers get no tilt — it would only fire on tap and feel broken.
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let settled = false;

    const render = () => {
      // The panel trails the cursor rather than snapping to it.
      currentX += (targetX - currentX) * 0.07;
      currentY += (targetY - currentY) * 0.07;

      const closeEnough =
        Math.abs(targetX - currentX) < 0.01 && Math.abs(targetY - currentY) < 0.01;

      if (!closeEnough || !settled) {
        element.style.setProperty('--tx', `${currentX.toFixed(3)}deg`);
        element.style.setProperty('--ty', `${currentY.toFixed(3)}deg`);
        settled = closeEnough;
      }

      frame = requestAnimationFrame(render);
    };

    const onPointerMove = (event: PointerEvent) => {
      const nx = (event.clientX / window.innerWidth) * 2 - 1;
      const ny = (event.clientY / window.innerHeight) * 2 - 1;
      targetY = nx * intensity;
      targetX = -ny * (intensity * 0.6);
      settled = false;
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    frame = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      cancelAnimationFrame(frame);
    };
  }, [intensity]);

  return (
    <div ref={ref} className={cn('tilt-panel', className)}>
      {children}
    </div>
  );
}
