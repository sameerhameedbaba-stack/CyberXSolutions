import { cn } from '@/lib/utils';

type Tone = 'white' | 'muted' | 'mesh' | 'fresh' | 'warm' | 'ink';

const tones: Record<Tone, string> = {
  white: 'bg-white',
  muted: 'bg-ink-50',
  mesh: 'bg-white bg-mesh-soft',
  fresh: 'bg-white bg-mesh-fresh',
  warm: 'bg-white bg-mesh-warm',
  ink: 'bg-ink-950 text-ink-200',
};

const sizes = {
  sm: 'py-section-sm',
  md: 'py-section',
  lg: 'py-section lg:py-30',
  none: '',
} as const;

export function Section({
  children,
  id,
  tone = 'white',
  size = 'md',
  className,
  containerClassName,
  overlay,
  bleed = false,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
}: {
  children: React.ReactNode;
  id?: string;
  tone?: Tone;
  size?: keyof typeof sizes;
  className?: string;
  containerClassName?: string;
  /** Optional decorative layer (grid, dots, aurora) rendered behind content. */
  overlay?: 'grid' | 'dot' | 'none';
  /** Skips the inner container when a child needs full-bleed control. */
  bleed?: boolean;
  'aria-label'?: string;
  'aria-labelledby'?: string;
}) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      className={cn('relative isolate overflow-hidden', tones[tone], sizes[size], className)}
    >
      {overlay && overlay !== 'none' ? (
        <div
          aria-hidden="true"
          className={cn('pointer-events-none absolute inset-0 -z-10', overlay === 'grid' ? 'grid-overlay' : 'dot-overlay')}
        />
      ) : null}
      {bleed ? children : <div className={cn('container-x relative', containerClassName)}>{children}</div>}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'center',
  as: Tag = 'h2',
  className,
  titleClassName,
  id,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: 'center' | 'left';
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
  titleClassName?: string;
  id?: string;
}) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow ? (
        <p className={cn('eyebrow mb-5', align === 'center' && 'justify-center')}>
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-gradient" />
          {eyebrow}
        </p>
      ) : null}
      <Tag id={id} className={cn(Tag === 'h1' ? 'text-display-lg' : 'text-display-md', titleClassName)}>
        {title}
      </Tag>
      {lead ? (
        <p className={cn('mt-5 text-lead text-ink-500', align === 'center' && 'mx-auto', 'max-w-2xl')}>
          {lead}
        </p>
      ) : null}
    </div>
  );
}
