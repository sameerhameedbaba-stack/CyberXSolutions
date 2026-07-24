import { cn } from '@/lib/utils';
import { Icon } from '@/components/ui/Icon';
import { ParallaxTilt } from '@/components/ui/ParallaxTilt';

type Task = {
  label: string;
  meta: string;
  progress: number;
  state: 'done' | 'running' | 'queued';
};

const tasks: Task[] = [
  { label: 'Ingest supplier invoices', meta: '1,284 documents', progress: 100, state: 'done' },
  { label: 'Match line items to purchase orders', meta: '1,241 matched', progress: 92, state: 'running' },
  { label: 'Resolve pricing exceptions', meta: '12 open · 31 cleared', progress: 61, state: 'running' },
  { label: 'Post approved batch to ERP', meta: 'waiting on approvals', progress: 0, state: 'queued' },
  { label: 'Brief the controller', meta: 'scheduled 08:00', progress: 0, state: 'queued' },
];

const stateStyles: Record<Task['state'], { dot: string; text: string; label: string }> = {
  done: { dot: 'bg-emerald-500', text: 'text-emerald-600', label: 'Done' },
  running: { dot: 'bg-brand-500 animate-blink-soft', text: 'text-brand-600', label: 'Running' },
  queued: { dot: 'bg-ink-300', text: 'text-ink-400', label: 'Queued' },
};

/** Deterministic sparkline — no randomness, so SSR and client always agree. */
const trend = [18, 24, 21, 30, 34, 31, 42, 47, 45, 56, 61, 68, 66, 78, 84];

function Sparkline() {
  const width = 132;
  const height = 40;
  const max = Math.max(...trend);
  const min = Math.min(...trend);
  const points = trend.map((value, index) => {
    const x = (index / (trend.length - 1)) * width;
    const y = height - ((value - min) / (max - min)) * (height - 6) - 3;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="mt-3 h-10 w-full" aria-hidden="true" preserveAspectRatio="none">
      <defs>
        <linearGradient id="spark-stroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="55%" stopColor="#2F6BFF" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2F6BFF" stopOpacity="0.26" />
          <stop offset="100%" stopColor="#2F6BFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={`0,${height} ${points.join(' ')} ${width},${height}`} fill="url(#spark-fill)" />
      <polyline
        points={points.join(' ')}
        fill="none"
        stroke="url(#spark-stroke)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

const costBars = [72, 58, 61, 44, 39, 31, 26, 22, 19, 16];

function FloatingChip({
  className,
  icon,
  title,
  meta,
  accent,
  delay,
}: {
  className?: string;
  icon: string;
  title: string;
  meta: string;
  accent: string;
  delay?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        // Opaque, not glass: these sit over the panel edge and must never let
        // the content behind them bleed through.
        'pointer-events-none absolute hidden animate-float rounded-2xl border border-ink-100 bg-white px-3.5 py-2.5 shadow-lift-lg sm:flex sm:items-center sm:gap-2.5',
        className,
      )}
      style={delay ? { animationDelay: delay } : undefined}
    >
      <span className={cn('flex h-8 w-8 items-center justify-center rounded-xl text-white', accent)}>
        <Icon name={icon} className="h-4 w-4" strokeWidth={2.1} />
      </span>
      <span className="leading-tight">
        <span className="block text-[0.8125rem] font-bold text-ink-950">{title}</span>
        <span className="block text-[0.6875rem] font-medium text-ink-500">{meta}</span>
      </span>
    </div>
  );
}

export function HeroConsole({ className }: { className?: string }) {
  return (
    <div className={cn('tilt-scene relative mx-auto w-full max-w-[38rem] lg:max-w-none', className)}>
      {/* Depth glow beneath the panel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-6 -bottom-8 h-24 rounded-full bg-brand-500/25 blur-3xl"
      />

      <ParallaxTilt>
        <div className="glass-strong relative rounded-[1.75rem] p-3 sm:p-4">
          {/* Window chrome */}
          <div className="flex items-center justify-between gap-3 px-2 pb-3 pt-1">
            <div className="flex items-center gap-2.5">
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-blossom-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-sunset-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              </span>
              <span className="hidden text-[0.8125rem] font-bold text-ink-800 sm:inline">CyberX Control</span>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200/70 bg-emerald-50/80 px-2.5 py-1 text-[0.6875rem] font-bold uppercase tracking-wide text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-blink-soft" />
              4 agents live
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,0.66fr)]">
            {/* --- Task stream --- */}
            <div className="rounded-2xl border border-ink-100 bg-white p-4 shadow-lift-sm sm:p-5">
              <div className="flex items-baseline justify-between gap-3">
                {/* Panel label, not a document heading — keeps h1 → h2 order intact. */}
                <p className="text-sm font-bold text-ink-950">Order-to-cash</p>
                <span className="font-mono text-[0.6875rem] text-ink-400">run 4,912</span>
              </div>

              <ul className="mt-4 space-y-3.5">
                {tasks.map((task) => {
                  const style = stateStyles[task.state];
                  return (
                    <li key={task.label}>
                      <div className="flex items-center justify-between gap-3">
                        <span className="flex min-w-0 items-center gap-2">
                          <span className={cn('h-1.5 w-1.5 shrink-0 rounded-full', style.dot)} aria-hidden="true" />
                          <span className="truncate text-[0.8125rem] font-medium text-ink-800">{task.label}</span>
                        </span>
                        <span className={cn('shrink-0 text-[0.6875rem] font-bold uppercase tracking-wide', style.text)}>
                          {style.label}
                        </span>
                      </div>
                      <div className="mt-1.5 flex items-center gap-2.5 pl-3.5">
                        <span className="relative h-1 flex-1 overflow-hidden rounded-full bg-ink-100">
                          <span
                            className={cn(
                              'absolute inset-y-0 left-0 rounded-full',
                              task.state === 'done' ? 'bg-emerald-500' : 'bg-brand-gradient',
                            )}
                            style={{ width: `${task.progress}%` }}
                          />
                          {task.state === 'running' ? (
                            <span
                              aria-hidden="true"
                              className="absolute inset-y-0 w-1/3 animate-shimmer bg-sheen"
                            />
                          ) : null}
                        </span>
                        <span className="shrink-0 font-mono text-[0.625rem] text-ink-400">{task.meta}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-5 flex items-center gap-2 rounded-xl border border-brand-100 bg-brand-50/60 px-3 py-2.5">
                <Icon name="shield-check" className="h-4 w-4 shrink-0 text-brand-600" />
                <p className="text-[0.6875rem] font-medium leading-snug text-brand-800">
                  Every action policy-checked, logged and reversible.
                </p>
              </div>
            </div>

            {/* --- Metrics --- */}
            <div className="grid gap-3">
              <div className="rounded-2xl border border-ink-100 bg-white p-4 shadow-lift-sm">
                <p className="text-[0.6875rem] font-bold uppercase tracking-wider text-ink-400">Straight-through</p>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-display text-2xl font-extrabold tracking-tight text-ink-950">94.2%</span>
                  <span className="inline-flex items-center gap-0.5 text-[0.6875rem] font-bold text-emerald-600">
                    <Icon name="trending-up" className="h-3 w-3" strokeWidth={2.4} />
                    11.4
                  </span>
                </div>
                <Sparkline />
              </div>

              <div className="rounded-2xl border border-ink-100 bg-white p-4 shadow-lift-sm">
                <p className="text-[0.6875rem] font-bold uppercase tracking-wider text-ink-400">Cost per document</p>
                <div className="mt-1 flex items-baseline gap-1.5">
                  <span className="font-display text-2xl font-extrabold tracking-tight text-ink-950">$0.07</span>
                  <span className="text-[0.6875rem] font-medium text-ink-400">from $2.40</span>
                </div>
                <div className="mt-3 flex h-10 items-end gap-1" aria-hidden="true">
                  {costBars.map((bar, index) => (
                    <span
                      key={index}
                      className="flex-1 rounded-sm bg-gradient-to-t from-brand-500 to-violet-400"
                      style={{ height: `${bar}%`, opacity: 0.35 + index * 0.065 }}
                    />
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-ink-100 bg-white p-4 shadow-lift-sm">
                <p className="text-[0.6875rem] font-bold uppercase tracking-wider text-ink-400">Hours returned</p>
                <div className="mt-1 flex items-baseline gap-1.5">
                  <span className="font-display text-2xl font-extrabold tracking-tight text-ink-950">310</span>
                  <span className="text-[0.6875rem] font-medium text-ink-400">per week</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ParallaxTilt>

      {/* Two chips, both anchored to a corner so they overlap the panel's
          padding rather than any of its content. */}
      <FloatingChip
        className="-right-3 -top-6 lg:-right-10"
        icon="shield-check"
        title="0 policy violations"
        meta="18,402 actions audited"
        accent="bg-gradient-to-br from-violet-500 to-blossom-500"
        delay="-2.2s"
      />
      <FloatingChip
        className="-bottom-7 -left-3 lg:-bottom-9 lg:-left-10"
        icon="bolt"
        title="Cycle time −71%"
        meta="9.2 days → 2.6 days"
        accent="bg-gradient-to-br from-brand-500 to-indigo-500"
        delay="-4.1s"
      />
    </div>
  );
}
