import { cn } from '@/lib/utils';

/**
 * Infinite horizontal scroller. The track is duplicated and translated -50%,
 * so the loop is seamless with a single CSS animation and no JS.
 */
export function Marquee({
  children,
  className,
  speed = 46,
  reverse = false,
  pauseOnHover = true,
}: {
  children: React.ReactNode;
  className?: string;
  /** Seconds for one full pass. */
  speed?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
}) {
  return (
    <div className={cn('marquee-mask group relative w-full overflow-hidden', className)}>
      <div
        className={cn(
          'flex w-max animate-marquee',
          reverse && 'flex-row-reverse',
          pauseOnHover && 'group-hover:animate-paused',
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        <div className="flex shrink-0 items-center" aria-hidden={false}>
          {children}
        </div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
