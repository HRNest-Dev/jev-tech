/**
 * Additional illustrative mocks (design tool, deployment pipeline, roadmap).
 * Placeholder data; decorative — render inside an aria-hidden container.
 */
import { cn } from "@/lib/cn";

/* ------------------------------------------------------------------ */
/* Design canvas: wireframe → interface, with a token panel            */
/* ------------------------------------------------------------------ */

export function DesignMock({ className }: { className?: string }) {
  return (
    <div className={cn("grid grid-cols-[1fr] bg-surface text-fg sm:grid-cols-[7.5rem_1fr_8rem]", className)}>
      <aside className="hidden border-r border-line bg-canvas p-3 sm:block">
        <p className="text-[10px] font-semibold">Layers</p>
        <ul className="mt-2 space-y-1 text-[10px] text-muted">
          {["Checkout / mobile", "Header", "Order summary", "Payment method", "Button / primary"].map((l, i) => (
            <li key={l} className={cn("truncate rounded px-1.5 py-1", i === 3 && "bg-brand-50 text-brand-800")} style={{ paddingLeft: i === 0 ? 6 : 14 }}>
              {l}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[10px] font-semibold">Components</p>
        <div className="mt-2 grid grid-cols-2 gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="h-6 rounded border border-line bg-surface" />
          ))}
        </div>
      </aside>

      <div className="relative flex items-center justify-center gap-4 p-4 sm:gap-6 sm:p-6">
        <div className="absolute inset-0 bg-[radial-gradient(var(--color-line-strong)_1px,transparent_1px)] bg-size-[16px_16px] opacity-50" />
        {/* wireframe */}
        <div className="relative w-[40%] max-w-40">
          <p className="mb-1 text-[8px] text-muted sm:text-[10px]">Wireframe</p>
          <div className="space-y-1.5 rounded-lg border border-dashed border-line-strong bg-canvas p-2 sm:space-y-2 sm:p-3">
            <span className="block h-2 w-1/2 rounded-sm bg-surface-strong" />
            <span className="block h-10 rounded border border-dashed border-line-strong sm:h-14" />
            <span className="block h-2 w-full rounded-sm bg-surface-strong" />
            <span className="block h-2 w-4/5 rounded-sm bg-surface-strong" />
            <span className="block h-5 rounded border border-dashed border-line-strong sm:h-6" />
          </div>
        </div>
        <svg viewBox="0 0 24 12" className="relative w-5 shrink-0 text-brand-600 sm:w-7" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 6h19M16 1.5L21 6l-5 4.5" />
        </svg>
        {/* interface */}
        <div className="relative w-[40%] max-w-40">
          <p className="mb-1 text-[8px] text-brand-700 sm:text-[10px]">Interface</p>
          <div className="rounded-lg bg-canvas p-2 shadow-[0_12px_32px_-12px_rgb(11_15_14/0.25)] ring-1 ring-brand-500 sm:p-3">
            <p className="text-[8px] font-semibold sm:text-[10px]">Checkout</p>
            <div className="mt-1.5 flex items-center gap-1.5 rounded-md bg-surface p-1.5">
              <span className="size-5 rounded bg-[#d9cfc2] sm:size-7" />
              <div className="flex-1">
                <span className="block h-1.5 w-3/4 rounded-full bg-graphite-600" />
                <span className="mt-1 block h-1.5 w-1/3 rounded-full bg-line-strong" />
              </div>
            </div>
            <div className="mt-1.5 space-y-1">
              {["Card", "Bank transfer"].map((m, i) => (
                <div key={m} className={cn("flex items-center gap-1.5 rounded-md border px-1.5 py-1 text-[7px] sm:text-[9px]", i === 0 ? "border-brand-500 bg-brand-50" : "border-line")}>
                  <span className={cn("size-2 rounded-full border", i === 0 ? "border-4 border-brand-600" : "border-line-strong")} />
                  {m}
                </div>
              ))}
            </div>
            <span className="mt-2 block rounded-md bg-ink py-1 text-center text-[7px] font-semibold text-white sm:text-[9px]">Pay ₦63,000</span>
          </div>
        </div>
      </div>

      <aside className="hidden border-l border-line bg-canvas p-3 sm:block">
        <p className="text-[10px] font-semibold">Tokens</p>
        <div className="mt-2 flex gap-1.5">
          {["bg-ink", "bg-brand-500", "bg-surface-strong", "bg-canvas"].map((c) => (
            <span key={c} className={cn("size-5 rounded-full ring-1 ring-line", c)} />
          ))}
        </div>
        <p className="mt-4 text-[10px] font-semibold">Type</p>
        <ul className="mt-2 space-y-1.5">
          {[
            ["Display", "text-[13px] font-semibold"],
            ["Heading", "text-[11px] font-semibold"],
            ["Body", "text-[10px]"],
            ["Caption", "text-[8px] text-muted"],
          ].map(([l, cls]) => (
            <li key={l} className={cls}>
              {l}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[10px] font-semibold">Spacing</p>
        <div className="mt-2 flex items-end gap-1">
          {[4, 8, 12, 16, 24].map((s) => (
            <span key={s} className="w-2 rounded-sm bg-brand-200" style={{ height: s }} />
          ))}
        </div>
      </aside>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Deployment pipeline + monitoring                                    */
/* ------------------------------------------------------------------ */

const stages = [
  { name: "Build", time: "1m 12s", state: "done" },
  { name: "Test", time: "2m 40s", state: "done" },
  { name: "Security scan", time: "48s", state: "done" },
  { name: "Deploy", time: "running", state: "running" },
] as const;

const latency = [42, 38, 45, 40, 36, 39, 41, 37, 35, 38, 36, 34, 37, 33, 35, 32];

export function PipelineMock({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-2.5 bg-canvas p-3 text-fg sm:space-y-4 sm:p-5", className)}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[8px] text-muted sm:text-[10px]">main · a41f9c2 · “Add invoice export”</p>
          <p className="text-[11px] font-semibold sm:text-sm">Release to production</p>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-brand-100 px-2 py-0.5 text-[8px] font-medium text-brand-800 sm:text-[10px]">
          <span className="size-1.5 animate-pulse rounded-full bg-brand-600" /> Deploying
        </span>
      </div>

      <ol className="grid grid-cols-4 gap-1.5 sm:gap-3">
        {stages.map((s) => (
          <li
            key={s.name}
            className={cn(
              "rounded-lg border p-1.5 sm:p-2.5",
              s.state === "running" ? "border-brand-500 bg-brand-50" : "border-line",
            )}
          >
            <span
              className={cn(
                "flex size-3.5 items-center justify-center rounded-full sm:size-4",
                s.state === "done" ? "bg-brand-500" : "border-2 border-brand-500",
              )}
            >
              {s.state === "done" && (
                <svg viewBox="0 0 12 12" className="size-2 text-ink sm:size-2.5" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M2.5 6.5l2 2 5-5" />
                </svg>
              )}
            </span>
            <p className="mt-1.5 truncate text-[8px] font-medium sm:text-[11px]">{s.name}</p>
            <p className="text-[7px] text-muted sm:text-[10px]">{s.time}</p>
          </li>
        ))}
      </ol>

      <div className="grid grid-cols-[1fr_1.6fr] gap-2 sm:gap-3">
        <div className="rounded-lg border border-line p-2 sm:p-3">
          <p className="text-[8px] text-muted sm:text-[10px]">Uptime · 30 days</p>
          <p className="mt-0.5 text-[13px] font-semibold tracking-tight sm:text-lg">99.98%</p>
          <div className="mt-1.5 flex gap-[2px]">
            {Array.from({ length: 30 }, (_, i) => (
              <span key={i} className={cn("h-3 flex-1 rounded-[1px] sm:h-4", i === 17 ? "bg-amber-400" : "bg-brand-500")} />
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-line p-2 sm:p-3">
          <p className="text-[8px] text-muted sm:text-[10px]">Response time (ms)</p>
          <svg viewBox="0 0 150 40" className="mt-1 h-8 w-full sm:h-12" preserveAspectRatio="none" fill="none">
            <polyline
              points={latency.map((v, i) => `${(i / (latency.length - 1)) * 150},${v - 10}`).join(" ")}
              stroke="var(--color-brand-600)"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      </div>

      <div className="rounded-lg bg-ink p-2 font-mono text-[7px] leading-relaxed text-on-dark-muted sm:p-3 sm:text-[10px]">
        <p>
          <span className="text-brand-400">✓</span> migrations applied (3)
        </p>
        <p>
          <span className="text-brand-400">✓</span> health check passed · 3/3 instances
        </p>
        <p>
          <span className="text-white">→</span> shifting traffic to new release…
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Product roadmap                                                     */
/* ------------------------------------------------------------------ */

const lanes = [
  { name: "Discovery & architecture", start: 0, span: 2, tone: "bg-ink text-white" },
  { name: "Customer portal", start: 1, span: 4, tone: "bg-brand-500 text-ink" },
  { name: "Payments integration", start: 3, span: 3, tone: "bg-brand-200 text-brand-900" },
  { name: "Mobile app", start: 5, span: 4, tone: "bg-graphite-600 text-white" },
  { name: "Reporting & analytics", start: 7, span: 4, tone: "bg-surface-strong text-fg" },
];

export function RoadmapMock({ className }: { className?: string }) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return (
    <div className={cn("bg-canvas p-3 text-fg sm:p-5", className)}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[8px] text-muted sm:text-[10px]">Digital transformation plan</p>
          <p className="text-[11px] font-semibold sm:text-sm">12-month roadmap</p>
        </div>
        <div className="flex gap-1 text-[8px] sm:text-[10px]">
          {["Now", "Next", "Later"].map((l, i) => (
            <span key={l} className={cn("rounded-full px-2 py-0.5", i === 0 ? "bg-ink text-white" : "bg-surface text-muted")}>
              {l}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mt-3 sm:mt-5">
        <div className="grid grid-cols-12 border-b border-line pb-1 text-[7px] text-muted sm:text-[10px]">
          {months.map((m) => (
            <span key={m} className="text-center">
              {m}
            </span>
          ))}
        </div>
        <div className="relative mt-2 space-y-1.5 sm:space-y-2.5">
          <div className="pointer-events-none absolute inset-0 grid grid-cols-12">
            {months.map((m) => (
              <span key={m} className="border-l border-line/70 first:border-l-0" />
            ))}
          </div>
          <span className="absolute top-0 bottom-0 left-[20.8%] w-px bg-brand-600">
            <span className="absolute -top-1 -left-[3px] size-[7px] rounded-full bg-brand-600" />
          </span>
          {lanes.map((l) => (
            <div key={l.name} className="relative grid grid-cols-12">
              <span
                style={{ gridColumn: `${l.start + 1} / span ${l.span}` }}
                className={cn("truncate rounded-md px-1.5 py-1 text-[7px] font-medium sm:px-2.5 sm:py-1.5 sm:text-[10px]", l.tone)}
              >
                {l.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-1.5 border-t border-line pt-2.5 sm:mt-5 sm:gap-3 sm:pt-4">
        {[
          ["Build vs buy", "Portal: build · CRM: buy"],
          ["Est. investment", "Phased by quarter"],
          ["Key risk", "Legacy data quality"],
        ].map(([k, v]) => (
          <div key={k}>
            <p className="text-[7px] text-muted sm:text-[10px]">{k}</p>
            <p className="text-[8px] font-medium sm:text-[11px]">{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
