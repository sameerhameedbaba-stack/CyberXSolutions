import { cn } from '@/lib/utils';
import { Icon, IconTile, type Accent } from '@/components/ui/Icon';

/* ================================================================== */
/* Shared parts                                                        */
/* ================================================================== */

function PanelShell({
  children,
  className,
  label,
  badge,
  badgeTone = 'brand',
}: {
  children: React.ReactNode;
  className?: string;
  label: string;
  badge?: string;
  badgeTone?: 'brand' | 'emerald' | 'violet';
}) {
  const tones = {
    brand: 'border-brand-200/70 bg-brand-50/80 text-brand-700',
    emerald: 'border-emerald-200/70 bg-emerald-50/80 text-emerald-700',
    violet: 'border-violet-200/70 bg-violet-50/80 text-violet-700',
  }[badgeTone];

  return (
    <div className={cn('glass relative rounded-[1.75rem] p-5 sm:p-7', className)}>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-eyebrow uppercase text-ink-500">{label}</p>
        {badge ? (
          <span className={cn('inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.6875rem] font-bold uppercase tracking-wide', tones)}>
            <span className="h-1.5 w-1.5 rounded-full bg-current animate-blink-soft" />
            {badge}
          </span>
        ) : null}
      </div>
      {children}
    </div>
  );
}

/**
 * Animated dashed connector, horizontal on desktop and vertical on mobile.
 * Renders many times per page, so its gradients come from the shared
 * <SvgDefs> in the root layout rather than being redefined per instance.
 */
function FlowConnector({ vertical = false, className }: { vertical?: boolean; className?: string }) {
  if (vertical) {
    return (
      <svg aria-hidden="true" className={cn('h-6 w-full', className)} viewBox="0 0 4 24" preserveAspectRatio="none">
        <line
          x1="2"
          y1="0"
          x2="2"
          y2="24"
          stroke="url(#cx-flow-v)"
          strokeWidth="2"
          strokeDasharray="5 5"
          strokeLinecap="round"
          className="animate-dash-flow"
        />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className={cn('h-4 w-full', className)} viewBox="0 0 100 4" preserveAspectRatio="none">
      <line
        x1="0"
        y1="2"
        x2="100"
        y2="2"
        stroke="url(#cx-flow-h)"
        strokeWidth="2"
        strokeDasharray="5 5"
        strokeLinecap="round"
        className="animate-dash-flow"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/* ================================================================== */
/* 1. Agent runtime loop                                               */
/* ================================================================== */

const agentStages: { title: string; body: string; icon: string; accent: Accent }[] = [
  { title: 'Observe', body: 'Reads your systems of record — tickets, ERP, mailboxes, telemetry — as structured context.', icon: 'eye', accent: 'cyan' },
  { title: 'Decide', body: 'Plans a route, selects tools, and prices the risk before it commits to anything.', icon: 'brain', accent: 'blue' },
  { title: 'Act', body: 'Executes through real APIs using scoped, revocable, individually-audited credentials.', icon: 'bolt', accent: 'violet' },
  { title: 'Verify', body: 'Grades its own output against policy and known-good outcomes. Escalates when unsure.', icon: 'shield-check', accent: 'emerald' },
];

export function AgentLoop({ className }: { className?: string }) {
  return (
    <PanelShell label="Agent runtime" badge="Guardrailed" className={className}>
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {agentStages.map((stage, index) => (
          <li key={stage.title} className="relative flex lg:items-stretch">
            <div className="flex-1 rounded-2xl border border-ink-100 bg-white p-4 shadow-lift-sm lg:mx-1.5">
              <div className="flex items-center gap-2.5">
                <IconTile name={stage.icon} accent={stage.accent} size="sm" />
                <span className="font-mono text-[0.625rem] font-bold uppercase tracking-widest text-ink-400">
                  0{index + 1}
                </span>
              </div>
              <p className="mt-3.5 text-[0.9375rem] font-bold text-ink-950">{stage.title}</p>
              <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-ink-500">{stage.body}</p>
            </div>
            {index < agentStages.length - 1 ? (
              <>
                <span className="absolute -bottom-3 left-1/2 hidden w-6 -translate-x-1/2 sm:block lg:hidden">
                  <FlowConnector vertical />
                </span>
                <span className="pointer-events-none absolute -right-2 top-1/2 hidden w-4 -translate-y-1/2 lg:block">
                  <FlowConnector />
                </span>
              </>
            ) : null}
          </li>
        ))}
      </ol>

      {/* Return path */}
      <div className="mt-4 flex items-center gap-3 rounded-2xl border border-dashed border-brand-200 bg-gradient-to-r from-brand-50/70 via-violet-50/60 to-cyan-50/70 px-4 py-3.5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white">
          <Icon name="refresh" className="h-4 w-4" strokeWidth={2.1} />
        </span>
        <p className="text-[0.8125rem] leading-snug text-ink-700">
          <span className="font-bold text-ink-950">Learn.</span> Every run is scored, replayed into an evaluation
          set, and promoted only when it beats the version already in production.
        </p>
      </div>

      <div className="mt-4 grid gap-2.5 sm:grid-cols-3">
        {[
          { label: 'Memory', value: 'Vector + relational', icon: 'database' },
          { label: 'Tools', value: '312 registered APIs', icon: 'plug' },
          { label: 'Policy', value: 'Deny by default', icon: 'lock' },
        ].map((chip) => (
          <div key={chip.label} className="flex items-center gap-2.5 rounded-xl border border-ink-100 bg-white px-3 py-2.5">
            <Icon name={chip.icon} className="h-4 w-4 shrink-0 text-brand-500" />
            <span className="min-w-0">
              <span className="block text-[0.625rem] font-bold uppercase tracking-wider text-ink-400">{chip.label}</span>
              <span className="block truncate text-[0.8125rem] font-semibold text-ink-800">{chip.value}</span>
            </span>
          </div>
        ))}
      </div>
    </PanelShell>
  );
}

/* ================================================================== */
/* 2. Automation pipeline                                              */
/* ================================================================== */

const pipelineNodes: { title: string; meta: string; icon: string; accent: Accent }[] = [
  { title: 'Trigger', meta: 'Email, webhook, schedule', icon: 'bolt', accent: 'cyan' },
  { title: 'Understand', meta: 'Classify, extract, enrich', icon: 'brain', accent: 'blue' },
  { title: 'Decide', meta: 'Rules + model + policy', icon: 'workflow', accent: 'violet' },
  { title: 'Execute', meta: 'Write to ERP, CRM, ITSM', icon: 'plug', accent: 'indigo' },
  { title: 'Confirm', meta: 'Notify, log, reconcile', icon: 'check-circle', accent: 'emerald' },
];

export function AutomationPipeline({ className }: { className?: string }) {
  return (
    <PanelShell label="Workflow topology" badge="Live" badgeTone="emerald" className={className}>
      <ol className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-2">
        {pipelineNodes.map((node, index) => (
          <li key={node.title} className="relative">
            <div className="h-full rounded-2xl border border-ink-100 bg-white p-3.5 text-center shadow-lift-sm transition-transform duration-500 ease-smooth hover:-translate-y-1">
              <IconTile name={node.icon} accent={node.accent} size="sm" className="mx-auto" />
              <p className="mt-3 text-[0.8125rem] font-bold text-ink-950">{node.title}</p>
              <p className="mt-1 text-[0.6875rem] leading-snug text-ink-500">{node.meta}</p>
            </div>
            {index < pipelineNodes.length - 1 ? (
              <span className="pointer-events-none absolute -right-1.5 top-1/2 hidden w-3 -translate-y-1/2 lg:block">
                <FlowConnector />
              </span>
            ) : null}
          </li>
        ))}
      </ol>

      <div className="mt-4 grid gap-3 sm:grid-cols-[1.4fr_1fr]">
        <div className="rounded-2xl border border-dashed border-sunset-300 bg-sunset-50/60 p-4">
          <div className="flex items-center gap-2">
            <Icon name="user-check" className="h-4 w-4 text-sunset-600" />
            <p className="text-[0.8125rem] font-bold text-ink-950">Human in the loop — by design</p>
          </div>
          <p className="mt-2 text-[0.8125rem] leading-relaxed text-ink-600">
            Anything above your confidence or value threshold routes to a named approver with the full reasoning
            trail attached. Nobody has to guess why the system did what it did.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-1">
          <div className="rounded-2xl border border-ink-100 bg-white p-3.5">
            <p className="font-display text-xl font-extrabold text-gradient">99.94%</p>
            <p className="mt-0.5 text-[0.6875rem] font-medium text-ink-500">Run success rate</p>
          </div>
          <div className="rounded-2xl border border-ink-100 bg-white p-3.5">
            <p className="font-display text-xl font-extrabold text-gradient">1.8s</p>
            <p className="mt-0.5 text-[0.6875rem] font-medium text-ink-500">Median end-to-end</p>
          </div>
        </div>
      </div>
    </PanelShell>
  );
}

/* ================================================================== */
/* 3. Security radar                                                   */
/* ================================================================== */

const detections = [
  { label: 'Impossible travel · finance SSO', severity: 'Contained', tone: 'emerald', time: '00:41' },
  { label: 'Token replay from unmanaged host', severity: 'Contained', tone: 'emerald', time: '02:07' },
  { label: 'Privilege escalation attempt', severity: 'Investigating', tone: 'sunset', time: '04:15' },
  { label: 'Anomalous S3 egress volume', severity: 'Watching', tone: 'brand', time: '06:52' },
];

const toneMap: Record<string, string> = {
  emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  sunset: 'bg-sunset-50 text-sunset-700 border-sunset-200',
  brand: 'bg-brand-50 text-brand-700 border-brand-200',
};

export function SecurityRadar({ className }: { className?: string }) {
  const blips = [
    { cx: 118, cy: 62, r: 4, color: '#10B981' },
    { cx: 62, cy: 108, r: 3.4, color: '#10B981' },
    { cx: 142, cy: 132, r: 4.6, color: '#F97316' },
    { cx: 80, cy: 152, r: 3, color: '#2F6BFF' },
    { cx: 152, cy: 92, r: 2.6, color: '#8B5CF6' },
  ];

  return (
    <PanelShell label="Threat surface" badge="Autonomous response" badgeTone="emerald" className={className}>
      <div className="grid items-center gap-6 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)]">
        <div className="relative mx-auto w-full max-w-[15rem]">
          <svg viewBox="0 0 220 220" className="w-full" role="img" aria-label="Radar showing five monitored signals across the estate">
            <defs>
              <radialGradient id="radar-bg" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#2F6BFF" stopOpacity="0.16" />
                <stop offset="70%" stopColor="#06B6D4" stopOpacity="0.07" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.02" />
              </radialGradient>
              <linearGradient id="radar-sweep" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2F6BFF" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#2F6BFF" stopOpacity="0" />
              </linearGradient>
            </defs>

            <circle cx="110" cy="110" r="100" fill="url(#radar-bg)" />
            {[100, 74, 48, 22].map((r) => (
              <circle key={r} cx="110" cy="110" r={r} fill="none" stroke="#2F6BFF" strokeOpacity="0.18" strokeWidth="1" />
            ))}
            <line x1="10" y1="110" x2="210" y2="110" stroke="#2F6BFF" strokeOpacity="0.14" strokeWidth="1" />
            <line x1="110" y1="10" x2="110" y2="210" stroke="#2F6BFF" strokeOpacity="0.14" strokeWidth="1" />

            {/* Sweep */}
            <g className="animate-spin-slow [transform-box:fill-box] [transform-origin:center]" style={{ animationDuration: '7s' }}>
              <path d="M110 110 L110 10 A100 100 0 0 1 200.6 67.5 Z" fill="url(#radar-sweep)" />
            </g>

            {blips.map((blip, index) => (
              <g key={index}>
                <circle
                  cx={blip.cx}
                  cy={blip.cy}
                  r={blip.r * 3}
                  fill={blip.color}
                  opacity="0.18"
                  className="animate-pulse-ring [transform-box:fill-box] [transform-origin:center]"
                  style={{ animationDelay: `${index * 0.6}s` }}
                />
                <circle cx={blip.cx} cy={blip.cy} r={blip.r} fill={blip.color} />
              </g>
            ))}

            <circle cx="110" cy="110" r="7" fill="#fff" stroke="#2F6BFF" strokeWidth="2.4" />
          </svg>
        </div>

        <div>
          <ul className="space-y-2">
            {detections.map((item) => (
              <li key={item.label} className="flex items-center justify-between gap-3 rounded-xl border border-ink-100 bg-white px-3 py-2.5">
                <span className="min-w-0">
                  <span className="block truncate text-[0.8125rem] font-semibold text-ink-900">{item.label}</span>
                  <span className="font-mono text-[0.625rem] text-ink-400">detected → resolved in {item.time}</span>
                </span>
                <span className={cn('shrink-0 rounded-full border px-2 py-0.5 text-[0.625rem] font-bold uppercase tracking-wide', toneMap[item.tone])}>
                  {item.severity}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50/70 px-3 py-2.5">
            <Icon name="shield-check" className="h-4 w-4 shrink-0 text-emerald-600" />
            <p className="text-[0.75rem] font-medium leading-snug text-emerald-900">
              Mean time to contain: <span className="font-bold">under 3 minutes</span>, day or night.
            </p>
          </div>
        </div>
      </div>
    </PanelShell>
  );
}

/* ================================================================== */
/* 4. Cloud topology                                                   */
/* ================================================================== */

export function CloudTopology({ className }: { className?: string }) {
  const layers = [
    {
      heading: 'Edge',
      tone: 'from-cyan-400 to-brand-500',
      items: ['Global CDN', 'WAF + bot control', 'Edge functions'],
    },
    {
      heading: 'Platform',
      tone: 'from-brand-500 to-indigo-500',
      items: ['Kubernetes', 'Service mesh', 'Autoscaling pools'],
    },
    {
      heading: 'Data',
      tone: 'from-violet-500 to-blossom-500',
      items: ['Postgres HA', 'Object storage', 'Streaming bus'],
    },
  ];

  return (
    <PanelShell label="Reference topology" badge="Multi-region" badgeTone="violet" className={className}>
      <div className="space-y-2.5">
        {layers.map((layer, index) => (
          <div key={layer.heading} className="relative">
            <div className="flex items-stretch gap-2.5 rounded-2xl border border-ink-100 bg-white p-3 shadow-lift-sm">
              <div className={cn('flex w-20 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-[0.6875rem] font-bold uppercase tracking-wider text-white sm:w-24', layer.tone)}>
                {layer.heading}
              </div>
              <div className="grid flex-1 grid-cols-3 gap-2">
                {layer.items.map((item) => (
                  <span
                    key={item}
                    className="flex items-center justify-center rounded-lg border border-ink-100 bg-ink-50/70 px-1.5 py-2.5 text-center text-[0.6875rem] font-semibold leading-tight text-ink-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            {index < layers.length - 1 ? (
              <span className="pointer-events-none absolute left-1/2 -bottom-2 h-2 w-px -translate-x-1/2 bg-gradient-to-b from-brand-300 to-violet-300" />
            ) : null}
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2.5">
        {[
          { value: '99.99%', label: 'Availability target' },
          { value: '<8 min', label: 'Recovery time' },
          { value: '−38%', label: 'Cloud spend' },
        ].map((item) => (
          <div key={item.label} className="rounded-xl border border-ink-100 bg-white px-3 py-3 text-center">
            <p className="font-display text-lg font-extrabold text-gradient">{item.value}</p>
            <p className="mt-0.5 text-[0.625rem] font-medium leading-tight text-ink-500">{item.label}</p>
          </div>
        ))}
      </div>
    </PanelShell>
  );
}

/* ================================================================== */
/* 5. Multi-agent constellation                                        */
/* ================================================================== */

export function AgentConstellation({ className }: { className?: string }) {
  const agents = [
    { name: 'Intake', icon: 'mail', accent: 'cyan' as Accent, pos: 'left-0 top-6' },
    { name: 'Research', icon: 'search', accent: 'blue' as Accent, pos: 'right-0 top-2' },
    { name: 'Resolve', icon: 'bolt', accent: 'violet' as Accent, pos: 'left-2 bottom-4' },
    { name: 'Audit', icon: 'shield-check', accent: 'emerald' as Accent, pos: 'right-2 bottom-8' },
  ];

  return (
    <div className={cn('relative mx-auto aspect-square w-full max-w-[26rem]', className)}>
      {/* Orbit rings */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="orbit-a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2F6BFF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="orbit-b" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#EC4899" stopOpacity="0.1" />
          </linearGradient>
          <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2F6BFF" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#2F6BFF" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="200" r="150" fill="url(#core-glow)" />
        <circle cx="200" cy="200" r="150" fill="none" stroke="url(#orbit-a)" strokeWidth="1.5" strokeDasharray="6 8" className="animate-dash-flow" />
        <circle cx="200" cy="200" r="110" fill="none" stroke="url(#orbit-b)" strokeWidth="1.5" strokeDasharray="4 7" className="animate-dash-flow" style={{ animationDirection: 'reverse' }} />
        <circle cx="200" cy="200" r="188" fill="none" stroke="#2F6BFF" strokeOpacity="0.12" strokeWidth="1" />
      </svg>

      {/* Core */}
      <div className="absolute left-1/2 top-1/2 w-[9.5rem] -translate-x-1/2 -translate-y-1/2">
        <div className="glass-strong rounded-2xl p-4 text-center">
          <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
            <Icon name="agent" className="h-5 w-5" strokeWidth={1.9} />
          </span>
          <p className="mt-3 text-[0.8125rem] font-bold text-ink-950">Orchestrator</p>
          <p className="mt-1 text-[0.6875rem] leading-snug text-ink-500">Routes work, holds budget, owns the outcome</p>
        </div>
      </div>

      {/* Satellites */}
      {agents.map((agent, index) => (
        <div
          key={agent.name}
          className={cn('absolute animate-float', agent.pos)}
          style={{ animationDelay: `${index * -1.6}s` }}
        >
          <div className="glass flex items-center gap-2 rounded-xl px-3 py-2">
            <IconTile name={agent.icon} accent={agent.accent} size="sm" className="h-8 w-8 rounded-lg" />
            <span className="text-[0.75rem] font-bold text-ink-900">{agent.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
