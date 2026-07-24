import { cn } from '@/lib/utils';

type Blob = {
  className: string;
  /** Inline gradient so each blob can carry its own colour mix. */
  style: React.CSSProperties;
};

const presets: Record<string, Blob[]> = {
  hero: [
    {
      className: 'aurora-blob h-[42rem] w-[42rem] -left-[14rem] -top-[16rem] animate-drift',
      style: { background: 'radial-gradient(circle at 30% 30%, rgba(47,107,255,0.55), rgba(47,107,255,0) 65%)' },
    },
    {
      className: 'aurora-blob h-[38rem] w-[38rem] right-[-12rem] -top-[10rem] animate-drift [animation-delay:-7s]',
      style: { background: 'radial-gradient(circle at 60% 40%, rgba(139,92,246,0.5), rgba(139,92,246,0) 65%)' },
    },
    {
      className: 'aurora-blob h-[32rem] w-[32rem] left-[26%] top-[38%] animate-drift [animation-delay:-14s]',
      style: { background: 'radial-gradient(circle at 50% 50%, rgba(6,182,212,0.4), rgba(6,182,212,0) 68%)' },
    },
    {
      className: 'aurora-blob h-[26rem] w-[26rem] right-[8%] bottom-[-8rem] animate-drift [animation-delay:-4s]',
      style: { background: 'radial-gradient(circle at 40% 60%, rgba(236,72,153,0.34), rgba(236,72,153,0) 66%)' },
    },
  ],
  cool: [
    {
      className: 'aurora-blob h-[34rem] w-[34rem] -left-[10rem] top-[-8rem] animate-drift',
      style: { background: 'radial-gradient(circle, rgba(6,182,212,0.42), rgba(6,182,212,0) 68%)' },
    },
    {
      className: 'aurora-blob h-[30rem] w-[30rem] right-[-8rem] bottom-[-10rem] animate-drift [animation-delay:-9s]',
      style: { background: 'radial-gradient(circle, rgba(47,107,255,0.4), rgba(47,107,255,0) 68%)' },
    },
  ],
  violet: [
    {
      className: 'aurora-blob h-[36rem] w-[36rem] left-[-8rem] bottom-[-12rem] animate-drift',
      style: { background: 'radial-gradient(circle, rgba(124,58,237,0.42), rgba(124,58,237,0) 68%)' },
    },
    {
      className: 'aurora-blob h-[30rem] w-[30rem] right-[-6rem] top-[-8rem] animate-drift [animation-delay:-11s]',
      style: { background: 'radial-gradient(circle, rgba(236,72,153,0.36), rgba(236,72,153,0) 68%)' },
    },
  ],
  fresh: [
    {
      className: 'aurora-blob h-[34rem] w-[34rem] left-[-10rem] top-[-10rem] animate-drift',
      style: { background: 'radial-gradient(circle, rgba(16,185,129,0.4), rgba(16,185,129,0) 68%)' },
    },
    {
      className: 'aurora-blob h-[32rem] w-[32rem] right-[-10rem] bottom-[-10rem] animate-drift [animation-delay:-8s]',
      style: { background: 'radial-gradient(circle, rgba(6,182,212,0.4), rgba(6,182,212,0) 68%)' },
    },
  ],
  warm: [
    {
      className: 'aurora-blob h-[32rem] w-[32rem] left-[-8rem] top-[-8rem] animate-drift',
      style: { background: 'radial-gradient(circle, rgba(249,115,22,0.34), rgba(249,115,22,0) 68%)' },
    },
    {
      className: 'aurora-blob h-[34rem] w-[34rem] right-[-10rem] bottom-[-12rem] animate-drift [animation-delay:-10s]',
      style: { background: 'radial-gradient(circle, rgba(236,72,153,0.38), rgba(236,72,153,0) 68%)' },
    },
  ],
};

export function Aurora({
  preset = 'cool',
  className,
}: {
  preset?: keyof typeof presets;
  className?: string;
}) {
  return (
    <div aria-hidden="true" className={cn('aurora -z-10', className)}>
      {presets[preset].map((blob, index) => (
        <div key={index} className={blob.className} style={blob.style} />
      ))}
    </div>
  );
}

/**
 * Floating light motes. Pure CSS transforms — composited on the GPU, zero JS,
 * and silenced entirely by the reduced-motion rule in globals.css.
 */
export function Motes({ count = 14, className }: { count?: number; className?: string }) {
  const motes = Array.from({ length: count }, (_, i) => {
    const seedX = (i * 37) % 100;
    const seedY = (i * 61) % 100;
    const size = 3 + ((i * 13) % 5);
    const duration = 7 + ((i * 7) % 9);
    const delay = -((i * 3) % 11);
    const palette = ['#2F6BFF', '#8B5CF6', '#06B6D4', '#10B981', '#EC4899', '#F97316'];
    return { seedX, seedY, size, duration, delay, color: palette[i % palette.length] };
  });

  return (
    <div aria-hidden="true" className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      {motes.map((mote, index) => (
        <span
          key={index}
          className="absolute rounded-full animate-float-slow"
          style={{
            left: `${mote.seedX}%`,
            top: `${mote.seedY}%`,
            width: mote.size,
            height: mote.size,
            background: mote.color,
            opacity: 0.36,
            boxShadow: `0 0 12px ${mote.color}`,
            animationDuration: `${mote.duration}s`,
            animationDelay: `${mote.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
