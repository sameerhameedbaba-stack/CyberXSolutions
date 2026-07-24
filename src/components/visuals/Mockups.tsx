import { cn } from '@/lib/utils';
import { Icon, IconTile, type Accent } from '@/components/ui/Icon';

/* ================================================================== */
/* Browser frame                                                       */
/* ================================================================== */

export function BrowserFrame({
  children,
  url = 'cyberxsolutions.us',
  className,
}: {
  children: React.ReactNode;
  url?: string;
  className?: string;
}) {
  return (
    <div className={cn('glass-strong overflow-hidden rounded-2xl', className)}>
      <div className="flex items-center gap-3 border-b border-white/60 bg-white/50 px-4 py-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-blossom-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-sunset-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        </span>
        <span className="flex flex-1 items-center gap-1.5 rounded-lg bg-white/80 px-3 py-1.5">
          <Icon name="lock" className="h-3 w-3 shrink-0 text-emerald-600" strokeWidth={2.2} />
          <span className="truncate font-mono text-[0.6875rem] text-ink-500">{url}</span>
        </span>
      </div>
      <div className="bg-white">{children}</div>
    </div>
  );
}

/* ================================================================== */
/* Core Web Vitals gauges                                              */
/* ================================================================== */

function Gauge({ label, value, unit, ratio }: { label: string; value: string; unit: string; ratio: number }) {
  const radius = 26;
  const circumference = Math.PI * radius; // semicircle
  const dash = circumference * ratio;

  return (
    <div className="rounded-xl border border-ink-100 bg-white p-3 text-center">
      <svg viewBox="0 0 64 38" className="mx-auto h-10 w-16" aria-hidden="true">
        <defs>
          <linearGradient id={`g-${label}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        <path d="M6 32 A26 26 0 0 1 58 32" fill="none" stroke="#ECEEF6" strokeWidth="6" strokeLinecap="round" />
        <path
          d="M6 32 A26 26 0 0 1 58 32"
          fill="none"
          stroke={`url(#g-${label})`}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={`${dash} ${circumference}`}
        />
      </svg>
      <p className="mt-1 font-display text-base font-extrabold leading-none text-ink-950">
        {value}
        <span className="ml-0.5 text-[0.625rem] font-semibold text-ink-400">{unit}</span>
      </p>
      <p className="mt-1 text-[0.625rem] font-bold uppercase tracking-wider text-ink-400">{label}</p>
    </div>
  );
}

export function WebPerformancePanel({ className }: { className?: string }) {
  return (
    <div className={cn('tilt-scene relative mx-auto w-full max-w-[34rem] lg:max-w-none', className)}>
      <BrowserFrame url="yourcompany.com" className="tilt-panel-soft">
        <div className="p-5">
          {/* Faux page content */}
          <div className="flex items-center justify-between">
            <span className="h-2.5 w-24 rounded-full bg-brand-gradient" />
            <span className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <span key={i} className="h-2 w-10 rounded-full bg-ink-100" />
              ))}
            </span>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-[1.2fr_1fr]">
            <div>
              <span className="block h-3 w-4/5 rounded-full bg-ink-200" />
              <span className="mt-2.5 block h-3 w-3/5 rounded-full bg-ink-100" />
              <span className="mt-4 block h-2 w-full rounded-full bg-ink-100" />
              <span className="mt-2 block h-2 w-11/12 rounded-full bg-ink-100" />
              <span className="mt-5 inline-block h-8 w-28 rounded-full bg-brand-gradient" />
            </div>
            <div className="rounded-xl bg-gradient-to-br from-brand-50 via-violet-50 to-cyan-50 p-3">
              <div className="h-full rounded-lg border border-white bg-white/70 p-3">
                <span className="block h-2 w-2/3 rounded-full bg-ink-200" />
                <div className="mt-3 flex h-14 items-end gap-1.5">
                  {[40, 62, 51, 78, 92, 70].map((h, i) => (
                    <span
                      key={i}
                      className="flex-1 rounded-sm bg-gradient-to-t from-brand-500 to-cyan-400"
                      style={{ height: `${h}%`, opacity: 0.55 + i * 0.07 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-4 gap-2 border-t border-ink-100 pt-5">
            <Gauge label="LCP" value="0.9" unit="s" ratio={0.93} />
            <Gauge label="INP" value="48" unit="ms" ratio={0.95} />
            <Gauge label="CLS" value="0.01" unit="" ratio={0.97} />
            <Gauge label="TTFB" value="120" unit="ms" ratio={0.9} />
          </div>
        </div>
      </BrowserFrame>

      <div className="glass-strong absolute -bottom-6 -left-4 hidden animate-float items-center gap-2.5 rounded-2xl px-3.5 py-2.5 sm:flex lg:-left-10">
        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 text-white">
          <Icon name="gauge" className="h-4 w-4" strokeWidth={2.1} />
        </span>
        <span className="leading-tight">
          <span className="block text-[0.8125rem] font-bold text-ink-950">100 / 100</span>
          <span className="block text-[0.6875rem] text-ink-500">Lighthouse performance</span>
        </span>
      </div>
    </div>
  );
}

/* ================================================================== */
/* Phone frames                                                        */
/* ================================================================== */

export function PhoneFrame({
  children,
  className,
  tone = 'light',
}: {
  children: React.ReactNode;
  className?: string;
  tone?: 'light' | 'dark';
}) {
  return (
    <div
      className={cn(
        'relative aspect-[9/19] w-full rounded-[2rem] p-2 shadow-lift-xl',
        tone === 'dark' ? 'bg-ink-950' : 'bg-ink-900',
        className,
      )}
    >
      <div className="absolute left-1/2 top-2.5 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-ink-950" aria-hidden="true" />
      <div className="h-full w-full overflow-hidden rounded-[1.6rem] bg-white">{children}</div>
    </div>
  );
}

export function MobileShowcase({ className }: { className?: string }) {
  return (
    <div className={cn('relative mx-auto w-full max-w-[30rem]', className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-8 bottom-0 h-32 rounded-full bg-blossom-400/25 blur-3xl"
      />

      <div className="relative flex items-end justify-center gap-4 sm:gap-6">
        {/* Back phone */}
        <PhoneFrame className="w-[38%] translate-y-6 rotate-[-6deg] animate-float-slow" tone="dark">
          <div className="bg-gradient-to-b from-violet-50 to-white p-3">
            <div className="mt-5 space-y-2">
              <span className="block h-1.5 w-10 rounded-full bg-violet-400" />
              <span className="block h-2.5 w-4/5 rounded-full bg-ink-200" />
            </div>
            <div className="mt-4 space-y-2">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="rounded-lg border border-ink-100 bg-white p-2">
                  <span className="block h-1.5 w-2/3 rounded-full bg-ink-100" />
                  <span className="mt-1.5 block h-1.5 w-1/3 rounded-full bg-ink-100" />
                </div>
              ))}
            </div>
          </div>
        </PhoneFrame>

        {/* Front phone */}
        <PhoneFrame className="w-[46%] animate-float" >
          <div className="flex h-full flex-col bg-white">
            <div className="bg-brand-gradient px-3.5 pb-6 pt-8 text-white">
              <p className="text-[0.625rem] font-semibold uppercase tracking-wider text-white/70">Today</p>
              <p className="mt-1 font-display text-lg font-extrabold leading-tight">Approvals cleared</p>
              <div className="mt-3 flex items-baseline gap-1.5">
                <span className="font-display text-3xl font-extrabold leading-none">128</span>
                <span className="text-[0.6875rem] font-semibold text-white/80">of 131</span>
              </div>
            </div>
            <div className="-mt-4 flex-1 rounded-t-2xl bg-white p-3">
              <div className="space-y-2">
                {[
                  { label: 'Vendor payout', meta: '$48,120', tone: 'emerald' },
                  { label: 'Contract renewal', meta: 'Legal review', tone: 'brand' },
                  { label: 'Access request', meta: 'Auto-denied', tone: 'sunset' },
                  { label: 'Refund batch', meta: '412 items', tone: 'violet' },
                ].map((row) => (
                  <div key={row.label} className="flex items-center gap-2 rounded-lg border border-ink-100 p-2">
                    <span
                      className={cn(
                        'h-6 w-6 shrink-0 rounded-md bg-gradient-to-br',
                        row.tone === 'emerald' && 'from-emerald-400 to-cyan-500',
                        row.tone === 'brand' && 'from-brand-500 to-indigo-500',
                        row.tone === 'sunset' && 'from-sunset-400 to-blossom-500',
                        row.tone === 'violet' && 'from-violet-500 to-blossom-500',
                      )}
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[0.625rem] font-bold text-ink-900">{row.label}</span>
                      <span className="block truncate text-[0.5625rem] text-ink-400">{row.meta}</span>
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-lg bg-brand-50 p-2.5">
                <span className="block h-1.5 w-1/2 rounded-full bg-brand-300" />
                <span className="mt-1.5 block h-1.5 w-3/4 rounded-full bg-brand-200" />
              </div>
            </div>
          </div>
        </PhoneFrame>
      </div>
    </div>
  );
}

/* ================================================================== */
/* SERP preview                                                        */
/* ================================================================== */

export function SerpPreview({ className }: { className?: string }) {
  return (
    <div className={cn('tilt-scene relative mx-auto w-full max-w-[34rem] lg:max-w-none', className)}>
      <BrowserFrame url="google.com/search?q=enterprise+ai+agents" className="tilt-panel-soft">
        <div className="p-5">
          <div className="flex items-center gap-2 rounded-full border border-ink-200 px-3.5 py-2">
            <Icon name="search" className="h-3.5 w-3.5 text-ink-400" />
            <span className="text-[0.75rem] text-ink-600">enterprise ai agents</span>
          </div>

          {/* AI overview block */}
          <div className="mt-4 rounded-xl border border-violet-100 bg-gradient-to-br from-violet-50/80 to-brand-50/60 p-3.5">
            <p className="flex items-center gap-1.5 text-[0.625rem] font-bold uppercase tracking-wider text-violet-700">
              <Icon name="sparkles" className="h-3 w-3" strokeWidth={2.2} />
              AI overview
            </p>
            <p className="mt-2 text-[0.6875rem] leading-relaxed text-ink-600">
              Enterprise AI agents execute multi-step work across business systems with policy controls and audit
              trails…
            </p>
            <p className="mt-2 text-[0.625rem] font-semibold text-brand-600">Cited: cyberxsolutions.us</p>
          </div>

          {/* Winning result */}
          <div className="mt-4 rounded-xl border-2 border-brand-200 bg-brand-50/40 p-3.5">
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-md bg-brand-gradient text-[0.5rem] font-bold text-white">
                CX
              </span>
              <span className="text-[0.625rem] text-ink-500">cyberxsolutions.us › ai-agents</span>
              <span className="ml-auto rounded-full bg-emerald-100 px-1.5 py-0.5 text-[0.5625rem] font-bold text-emerald-700">
                #1
              </span>
            </div>
            <p className="mt-1.5 text-[0.8125rem] font-semibold leading-snug text-[#1a0dab]">
              AI Agents for Enterprise Operations | CyberXSolutions
            </p>
            <p className="mt-1 text-[0.6875rem] leading-relaxed text-ink-500">
              Production AI agents that resolve tickets, reconcile invoices and close the loop — with guardrails,
              evaluation and full audit history.
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {['Use cases', 'Pricing approach', 'Security', 'FAQs'].map((chip) => (
                <span key={chip} className="rounded bg-white px-1.5 py-0.5 text-[0.5625rem] font-medium text-brand-600">
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Muted competitors */}
          <div className="mt-3 space-y-3 opacity-45">
            {[1, 2].map((i) => (
              <div key={i}>
                <span className="block h-1.5 w-1/3 rounded-full bg-ink-200" />
                <span className="mt-1.5 block h-2 w-3/4 rounded-full bg-brand-200" />
                <span className="mt-1.5 block h-1.5 w-full rounded-full bg-ink-100" />
              </div>
            ))}
          </div>
        </div>
      </BrowserFrame>

      <div className="glass-strong absolute -right-4 top-24 hidden animate-float rounded-2xl px-3.5 py-2.5 sm:block lg:-right-10">
        <p className="text-[0.625rem] font-bold uppercase tracking-wider text-ink-400">Non-brand clicks</p>
        <p className="font-display text-lg font-extrabold text-gradient">+214%</p>
        <p className="text-[0.625rem] text-ink-500">in 9 months</p>
      </div>
    </div>
  );
}

/* ================================================================== */
/* Growth funnel                                                       */
/* ================================================================== */

export function GrowthFunnel({ className }: { className?: string }) {
  const stages = [
    { label: 'Qualified reach', value: '412,800', width: 100, tone: 'from-cyan-400 to-brand-500' },
    { label: 'Engaged sessions', value: '68,400', width: 80, tone: 'from-brand-500 to-indigo-500' },
    { label: 'Hand-raisers', value: '5,120', width: 60, tone: 'from-indigo-500 to-violet-500' },
    { label: 'Sales-accepted', value: '1,284', width: 42, tone: 'from-violet-500 to-blossom-500' },
    { label: 'Closed won', value: '318', width: 26, tone: 'from-blossom-500 to-sunset-500' },
  ];

  return (
    <div className={cn('glass rounded-[1.75rem] p-5 sm:p-7', className)}>
      <div className="mb-6 flex items-center justify-between">
        <p className="font-mono text-eyebrow uppercase text-ink-500">Revenue funnel</p>
        <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[0.6875rem] font-bold uppercase tracking-wide text-emerald-700">
          Trailing 90 days
        </span>
      </div>

      <div className="space-y-2.5">
        {stages.map((stage, index) => (
          <div key={stage.label} className="flex items-center gap-3">
            <span className="w-28 shrink-0 text-[0.75rem] font-semibold text-ink-700 sm:w-32">{stage.label}</span>
            <div className="flex-1">
              <div
                className={cn(
                  'flex h-9 items-center justify-end rounded-lg bg-gradient-to-r px-3 text-[0.75rem] font-bold text-white shadow-lift-sm transition-all duration-700 ease-smooth',
                  stage.tone,
                )}
                style={{ width: `${stage.width}%`, animationDelay: `${index * 90}ms` }}
              >
                {stage.value}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-3 gap-2.5 border-t border-ink-100 pt-5">
        {[
          { value: '−41%', label: 'Cost per opportunity' },
          { value: '2.4×', label: 'Pipeline velocity' },
          { value: '6.2×', label: 'Blended ROAS' },
        ].map((item) => (
          <div key={item.label} className="text-center">
            <p className="font-display text-lg font-extrabold text-gradient">{item.value}</p>
            <p className="mt-0.5 text-[0.625rem] font-medium leading-tight text-ink-500">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================================================================== */
/* Code window                                                         */
/* ================================================================== */

type CodeLine = { indent?: number; parts: { text: string; tone?: 'kw' | 'fn' | 'str' | 'num' | 'com' | 'var' }[] };

/**
 * Syntax palette. Code renders at 11px, so every token is picked to clear
 * 4.5:1 on white — the usual 500/600 syntax colours do not.
 */
const toneClass: Record<string, string> = {
  kw: 'text-violet-600',
  fn: 'text-brand-600',
  str: 'text-emerald-700',
  num: 'text-[#B45309]',
  com: 'text-ink-400 italic',
  var: 'text-ink-800',
};

export function CodeWindow({
  lines,
  filename = 'agent.ts',
  className,
}: {
  lines: CodeLine[];
  filename?: string;
  className?: string;
}) {
  return (
    <div className={cn('glass-strong overflow-hidden rounded-2xl', className)}>
      <div className="flex items-center gap-3 border-b border-white/60 bg-white/50 px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-blossom-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-sunset-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        </span>
        <span className="font-mono text-[0.6875rem] font-medium text-ink-500">{filename}</span>
      </div>
      <pre className="overflow-x-auto bg-white px-4 py-4 font-mono text-[0.6875rem] leading-[1.85] sm:text-xs">
        <code>
          {lines.map((line, index) => (
            <span key={index} className="block whitespace-pre">
              <span className="mr-4 inline-block w-4 select-none text-right text-ink-400">{index + 1}</span>
              {'  '.repeat(line.indent ?? 0)}
              {line.parts.map((part, partIndex) => (
                <span key={partIndex} className={part.tone ? toneClass[part.tone] : 'text-ink-700'}>
                  {part.text}
                </span>
              ))}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}

/* ================================================================== */
/* Layered architecture blueprint                                      */
/* ================================================================== */

export function BlueprintPanel({
  title = 'System blueprint',
  layers,
  className,
}: {
  title?: string;
  layers: { heading: string; note: string; items: string[]; accent: Accent }[];
  className?: string;
}) {
  return (
    <div className={cn('glass rounded-[1.75rem] p-5 sm:p-7', className)}>
      <div className="mb-6 flex items-center justify-between">
        <p className="font-mono text-eyebrow uppercase text-ink-500">{title}</p>
        <span className="font-mono text-[0.625rem] text-ink-400">v2.4 · reviewed</span>
      </div>

      <div className="space-y-3">
        {layers.map((layer) => (
          <div key={layer.heading} className="rounded-2xl border border-ink-100 bg-white p-4 shadow-lift-sm">
            <div className="flex items-start gap-3">
              <IconTile name="layers" accent={layer.accent} size="sm" />
              <div className="min-w-0 flex-1">
                {/* Illustrative panel labels, not document headings. */}
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <p className="text-[0.875rem] font-bold text-ink-950">{layer.heading}</p>
                  <span className="text-[0.6875rem] text-ink-500">{layer.note}</span>
                </div>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-ink-100 bg-ink-50/70 px-2 py-1 text-[0.6875rem] font-medium text-ink-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================================================================== */
/* Globe with connection arcs                                          */
/* ================================================================== */

export function GlobeArcs({ className }: { className?: string }) {
  return (
    <div className={cn('relative mx-auto w-full max-w-[26rem]', className)}>
      <svg viewBox="0 0 400 400" className="w-full" role="img" aria-label="Global delivery network with connected regions">
        <defs>
          <radialGradient id="globe-fill" cx="35%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#EEF4FF" />
            <stop offset="55%" stopColor="#DAE6FF" />
            <stop offset="100%" stopColor="#BDD2FF" />
          </radialGradient>
          <linearGradient id="arc-a" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
          <linearGradient id="arc-b" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2F6BFF" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
          <radialGradient id="globe-glow" cx="50%" cy="50%" r="50%">
            <stop offset="60%" stopColor="#2F6BFF" stopOpacity="0" />
            <stop offset="100%" stopColor="#2F6BFF" stopOpacity="0.22" />
          </radialGradient>
        </defs>

        <circle cx="200" cy="200" r="150" fill="url(#globe-fill)" />
        <circle cx="200" cy="200" r="150" fill="url(#globe-glow)" />

        {/* Latitudes */}
        {[-100, -50, 0, 50, 100].map((offset) => (
          <ellipse
            key={offset}
            cx="200"
            cy={200 + offset}
            rx={Math.sqrt(Math.max(150 * 150 - offset * offset, 0))}
            ry="14"
            fill="none"
            stroke="#2F6BFF"
            strokeOpacity="0.2"
            strokeWidth="1"
          />
        ))}
        {/* Longitudes */}
        {[30, 70, 110, 150].map((rx) => (
          <ellipse key={rx} cx="200" cy="200" rx={rx} ry="150" fill="none" stroke="#2F6BFF" strokeOpacity="0.16" strokeWidth="1" />
        ))}

        {/* Traffic arcs */}
        <path d="M92 148 Q200 40 300 132" fill="none" stroke="url(#arc-a)" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="7 6" className="animate-dash-flow" />
        <path d="M110 262 Q210 350 306 246" fill="none" stroke="url(#arc-b)" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="7 6" className="animate-dash-flow" style={{ animationDirection: 'reverse' }} />
        <path d="M84 200 Q200 150 316 208" fill="none" stroke="url(#arc-a)" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="5 7" className="animate-dash-flow" />

        {/* Nodes */}
        {[
          { cx: 92, cy: 148, c: '#06B6D4' },
          { cx: 300, cy: 132, c: '#8B5CF6' },
          { cx: 110, cy: 262, c: '#2F6BFF' },
          { cx: 306, cy: 246, c: '#EC4899' },
          { cx: 200, cy: 96, c: '#10B981' },
        ].map((node, index) => (
          <g key={index}>
            <circle cx={node.cx} cy={node.cy} r="12" fill={node.c} opacity="0.2" className="animate-pulse-ring [transform-box:fill-box] [transform-origin:center]" style={{ animationDelay: `${index * 0.7}s` }} />
            <circle cx={node.cx} cy={node.cy} r="5" fill={node.c} />
            <circle cx={node.cx} cy={node.cy} r="5" fill="none" stroke="#fff" strokeWidth="1.6" />
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ================================================================== */
/* Before / after results chart                                        */
/* ================================================================== */

export function ResultsChart({
  className,
  title = 'Before and after',
  rows,
}: {
  className?: string;
  title?: string;
  rows: { label: string; before: number; after: number; unit?: string; better: 'lower' | 'higher' }[];
}) {
  const max = Math.max(...rows.flatMap((row) => [row.before, row.after]));

  return (
    <div className={cn('glass rounded-[1.75rem] p-5 sm:p-7', className)}>
      <div className="mb-6 flex items-center justify-between">
        <p className="font-mono text-eyebrow uppercase text-ink-500">{title}</p>
        <span className="flex items-center gap-3 text-[0.6875rem] font-semibold">
          <span className="flex items-center gap-1.5 text-ink-400">
            <span className="h-2 w-2 rounded-full bg-ink-300" />
            Before
          </span>
          <span className="flex items-center gap-1.5 text-brand-600">
            <span className="h-2 w-2 rounded-full bg-brand-gradient" />
            After
          </span>
        </span>
      </div>

      <div className="space-y-5">
        {rows.map((row) => (
          <div key={row.label}>
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-[0.8125rem] font-semibold text-ink-800">{row.label}</span>
              <span className="font-mono text-[0.6875rem] text-ink-400">
                {row.before}
                {row.unit} → <span className="font-bold text-brand-600">{row.after}{row.unit}</span>
              </span>
            </div>
            <div className="mt-2 space-y-1.5">
              <div className="h-2.5 rounded-full bg-ink-100" style={{ width: `${(row.before / max) * 100}%` }} />
              <div
                className="h-2.5 rounded-full bg-brand-gradient shadow-glow"
                style={{ width: `${Math.max((row.after / max) * 100, 4)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
