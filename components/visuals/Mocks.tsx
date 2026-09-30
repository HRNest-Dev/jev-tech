/**
 * Illustrative interface mocks built in code. They show the kinds of products
 * JEV builds; the data in them is placeholder, not client data.
 * All are decorative — render them inside an aria-hidden container.
 */
import { cn } from "@/lib/cn";

const bars = [38, 52, 44, 61, 57, 70, 64, 78, 72, 86, 81, 94];

function Pill({ tone, children }: { tone: "green" | "amber" | "grey"; children: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[8px] font-medium sm:text-[10px]",
        tone === "green" && "bg-brand-100 text-brand-800",
        tone === "amber" && "bg-amber-100 text-amber-800",
        tone === "grey" && "bg-surface-strong text-muted",
      )}
    >
      <span
        className={cn(
          "size-1 rounded-full",
          tone === "green" ? "bg-brand-600" : tone === "amber" ? "bg-amber-500" : "bg-muted",
        )}
      />
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Dashboard                                                           */
/* ------------------------------------------------------------------ */

const dashboardVariants = {
  commerce: {
    nav: ["Overview", "Orders", "Customers", "Inventory", "Reports", "Settings"],
    title: "Overview",
    kpis: [
      { label: "Revenue", value: "₦12.4M", delta: "+8.2%" },
      { label: "Orders", value: "1,284", delta: "+5.1%" },
      { label: "Fulfilment", value: "96%", delta: "+1.4%" },
    ],
    chart: "Revenue · last 12 weeks",
    tableTitle: "Recent orders",
    rows: [
      { a: "#10482", b: "Adaeze O.", status: ["Paid", "green"], c: "₦84,500" },
      { a: "#10481", b: "Tunde B.", status: ["Processing", "amber"], c: "₦32,000" },
      { a: "#10480", b: "Kemi A.", status: ["Paid", "green"], c: "₦118,200" },
    ],
  },
  hr: {
    nav: ["Dashboard", "Employees", "Payroll", "Leave", "Approvals", "Reports"],
    title: "Payroll · September",
    kpis: [
      { label: "Employees", value: "248", delta: "+6" },
      { label: "Net pay", value: "₦61.8M", delta: "Ready" },
      { label: "On leave", value: "12", delta: "Today" },
    ],
    chart: "Payroll cost · last 12 months",
    tableTitle: "Pending approvals",
    rows: [
      { a: "Leave", b: "Chioma E.", status: ["Awaiting", "amber"], c: "3 days" },
      { a: "Expense", b: "Ibrahim S.", status: ["Approved", "green"], c: "₦45,000" },
      { a: "Overtime", b: "Funmi K.", status: ["Awaiting", "amber"], c: "6 hrs" },
    ],
  },
} as const;

export function DashboardMock({ variant = "commerce", className }: { variant?: keyof typeof dashboardVariants; className?: string }) {
  const d = dashboardVariants[variant];
  return (
    <div className={cn("grid grid-cols-[4.5rem_1fr] bg-canvas text-fg sm:grid-cols-[8.5rem_1fr]", className)}>
      <aside className="border-r border-line bg-surface/60 p-2 sm:p-3">
        <div className="mb-3 flex items-center gap-1.5 sm:mb-4">
          <span className="size-3 rounded bg-brand-500 sm:size-4" />
          <span className="h-1.5 w-8 rounded-full bg-ink sm:h-2 sm:w-12" />
        </div>
        <ul className="space-y-0.5">
          {d.nav.map((n, i) => (
            <li
              key={n}
              className={cn(
                "flex items-center gap-1.5 rounded-md px-1.5 py-1 text-[8px] sm:gap-2 sm:px-2 sm:py-1.5 sm:text-[11px]",
                i === 0 ? "bg-canvas font-medium text-fg shadow-sm" : "text-muted",
              )}
            >
              <span className={cn("size-1.5 rounded-sm sm:size-2", i === 0 ? "bg-brand-500" : "bg-line-strong")} />
              <span className="truncate">{n}</span>
            </li>
          ))}
        </ul>
      </aside>
      <div className="min-w-0 space-y-2 p-2.5 sm:space-y-3 sm:p-4">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-semibold sm:text-sm">{d.title}</p>
          <span className="rounded-md bg-ink px-2 py-1 text-[8px] font-medium text-white sm:text-[10px]">Export</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5">
          {d.kpis.map((k, i) => (
            <div key={k.label} className={cn("rounded-lg border border-line p-1.5 sm:p-2.5", i === 0 && "bg-brand-50")}>
              <p className="truncate text-[8px] text-muted sm:text-[10px]">{k.label}</p>
              <p className="mt-0.5 text-[11px] font-semibold tracking-tight sm:text-base">{k.value}</p>
              <p className="text-[8px] text-brand-700 sm:text-[10px]">{k.delta}</p>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-line p-2 sm:p-3">
          <p className="text-[8px] text-muted sm:text-[10px]">{d.chart}</p>
          <div className="mt-2 flex h-14 items-end gap-[3px] border-b border-line sm:h-24 sm:gap-1.5">
            {bars.map((h, i) => (
              <span
                key={i}
                style={{ height: `${h}%` }}
                className={cn("flex-1 rounded-t-[2px]", i >= bars.length - 3 ? "bg-brand-500" : "bg-surface-strong")}
              />
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-line">
          <p className="border-b border-line px-2 py-1.5 text-[8px] font-medium sm:px-3 sm:text-[10px]">{d.tableTitle}</p>
          {d.rows.map((r) => (
            <div
              key={r.a + r.b}
              className="grid grid-cols-[1fr_1.4fr_1.3fr_1fr] items-center gap-1 border-b border-line px-2 py-1.5 text-[8px] last:border-0 sm:px-3 sm:text-[10px]"
            >
              <span className="text-muted">{r.a}</span>
              <span className="truncate">{r.b}</span>
              <span>
                <Pill tone={r.status[1]}>{r.status[0]}</Pill>
              </span>
              <span className="text-right font-medium">{r.c}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Storefront                                                          */
/* ------------------------------------------------------------------ */

const products = [
  { name: "Linen shirt", price: "₦18,500", tone: "bg-[#e9e4dc]", shape: "rounded-t-[40%]" },
  { name: "Leather tote", price: "₦42,000", tone: "bg-[#d9cfc2]", shape: "rounded-2xl" },
  { name: "Ceramic set", price: "₦26,000", tone: "bg-[#dfe6e2]", shape: "rounded-full" },
  { name: "Desk lamp", price: "₦31,500", tone: "bg-[#e6e2d6]", shape: "rounded-t-full" },
  { name: "Wool throw", price: "₦23,000", tone: "bg-[#e2dfe8]", shape: "rounded-lg" },
  { name: "Plant pot", price: "₦9,800", tone: "bg-[#dde8dc]", shape: "rounded-b-full" },
];

export function StorefrontMock({ className }: { className?: string }) {
  return (
    <div className={cn("bg-canvas text-fg", className)}>
      <div className="flex items-center justify-between gap-3 border-b border-line px-3 py-2 sm:px-5 sm:py-3">
        <span className="text-[10px] font-bold tracking-tight sm:text-sm">Maison&nbsp;·</span>
        <div className="hidden h-6 flex-1 items-center rounded-full bg-surface px-3 text-[10px] text-muted sm:flex sm:max-w-56">
          Search products
        </div>
        <div className="flex items-center gap-3 text-[8px] text-muted sm:text-[11px]">
          <span>Shop</span>
          <span>Account</span>
          <span className="flex items-center gap-1 rounded-full bg-ink px-2 py-0.5 text-white">Cart · 2</span>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_7.5rem] sm:grid-cols-[1fr_11rem]">
        <div className="p-3 sm:p-5">
          <div className="flex items-baseline justify-between">
            <p className="text-[11px] font-semibold sm:text-base">New in: Home & living</p>
            <p className="text-[8px] text-muted sm:text-[10px]">24 products</p>
          </div>
          <div className="mt-2.5 grid grid-cols-3 gap-2 sm:mt-4 sm:gap-3">
            {products.map((p) => (
              <div key={p.name}>
                <div className={cn("flex aspect-[4/3] items-end justify-center rounded-lg pb-[12%]", p.tone)}>
                  <span className={cn("h-1/2 w-2/5 bg-white/70", p.shape)} />
                </div>
                <p className="mt-1 truncate text-[8px] sm:text-[11px]">{p.name}</p>
                <p className="text-[8px] font-semibold sm:text-[11px]">{p.price}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col border-l border-line bg-surface/60 p-2.5 sm:p-4">
          <p className="text-[9px] font-semibold sm:text-xs">Your cart</p>
          {products.slice(0, 2).map((p) => (
            <div key={p.name} className="mt-2 flex items-center gap-1.5 sm:mt-3 sm:gap-2">
              <span className={cn("size-5 shrink-0 rounded sm:size-8", p.tone)} />
              <div className="min-w-0">
                <p className="truncate text-[8px] sm:text-[10px]">{p.name}</p>
                <p className="text-[8px] font-medium sm:text-[10px]">{p.price}</p>
              </div>
            </div>
          ))}
          <div className="mt-auto space-y-1 border-t border-line pt-2 text-[8px] sm:text-[10px]">
            <div className="flex justify-between text-muted">
              <span>Delivery</span>
              <span>₦2,500</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>₦63,000</span>
            </div>
            <div className="mt-1.5 rounded-md bg-brand-500 py-1 text-center font-semibold text-ink sm:py-1.5">Checkout</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Approval workflow                                                   */
/* ------------------------------------------------------------------ */

const steps = [
  { label: "Request submitted", who: "Procurement", state: "done" },
  { label: "Line manager approval", who: "Operations", state: "done" },
  { label: "Finance review", who: "Finance", state: "current" },
  { label: "Final sign-off", who: "Executive", state: "pending" },
] as const;

export function WorkflowMock({ className }: { className?: string }) {
  return (
    <div className={cn("grid bg-canvas text-fg sm:grid-cols-[1.3fr_1fr]", className)}>
      <div className="p-3 sm:p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[8px] text-muted sm:text-[10px]">Purchase request</p>
            <p className="text-[11px] font-semibold sm:text-base">PR-2041 · Office equipment</p>
          </div>
          <Pill tone="amber">In review</Pill>
        </div>
        <ol className="mt-3 sm:mt-5">
          {steps.map((s, i) => (
            <li key={s.label} className="relative flex gap-2.5 pb-3 last:pb-0 sm:gap-3 sm:pb-4">
              {i < steps.length - 1 && (
                <span
                  className={cn(
                    "absolute top-4 left-[7px] h-[calc(100%-12px)] w-px sm:left-[9px] sm:top-5",
                    s.state === "done" ? "bg-brand-500" : "bg-line-strong",
                  )}
                />
              )}
              <span
                className={cn(
                  "relative mt-0.5 flex size-3.5 shrink-0 items-center justify-center rounded-full border-2 sm:size-[18px]",
                  s.state === "done" && "border-brand-500 bg-brand-500",
                  s.state === "current" && "border-brand-500 bg-canvas",
                  s.state === "pending" && "border-line-strong bg-canvas",
                )}
              >
                {s.state === "done" && (
                  <svg viewBox="0 0 12 12" className="size-2 text-ink sm:size-2.5" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M2.5 6.5l2 2 5-5" />
                  </svg>
                )}
                {s.state === "current" && <span className="size-1 rounded-full bg-brand-500 sm:size-1.5" />}
              </span>
              <div>
                <p className={cn("text-[9px] font-medium sm:text-xs", s.state === "pending" && "text-muted")}>{s.label}</p>
                <p className="text-[8px] text-muted sm:text-[10px]">{s.who}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="hidden border-l border-line bg-surface/60 p-5 sm:block">
        <dl className="space-y-3 text-[10px]">
          {[
            ["Amount", "₦2,450,000"],
            ["Department", "Operations"],
            ["Requested by", "A. Okafor"],
            ["Due", "In 2 days"],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="text-muted">{k}</dt>
              <dd className="mt-0.5 text-xs font-medium">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-5 grid grid-cols-2 gap-2 text-center text-[10px] font-semibold">
          <span className="rounded-md bg-brand-500 py-1.5 text-ink">Approve</span>
          <span className="rounded-md border border-line-strong bg-canvas py-1.5">Query</span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Corporate website                                                   */
/* ------------------------------------------------------------------ */

export function WebsiteMock({ className }: { className?: string }) {
  return (
    <div className={cn("bg-canvas text-fg", className)}>
      <div className="flex items-center justify-between border-b border-line px-3 py-2 sm:px-6 sm:py-3">
        <div className="flex items-center gap-1.5">
          <span className="size-3 rounded-sm bg-ink sm:size-4" />
          <span className="text-[9px] font-bold sm:text-xs">Meridian Group</span>
        </div>
        <div className="flex items-center gap-2 text-[8px] text-muted sm:gap-4 sm:text-[11px]">
          <span className="hidden sm:inline">About</span>
          <span className="hidden sm:inline">Services</span>
          <span className="hidden sm:inline">Insights</span>
          <span className="rounded-full bg-ink px-2 py-0.5 text-white sm:px-3 sm:py-1">Contact us</span>
        </div>
      </div>
      <div className="grid gap-3 p-3 sm:grid-cols-[1.1fr_1fr] sm:gap-6 sm:p-6">
        <div className="flex flex-col justify-center">
          <p className="text-[8px] font-medium tracking-wider text-brand-700 uppercase sm:text-[10px]">Infrastructure & advisory</p>
          <p className="mt-1.5 text-sm leading-tight font-semibold tracking-tight sm:mt-2 sm:text-2xl">
            Building infrastructure that lasts for generations.
          </p>
          <p className="mt-2 text-[8px] leading-relaxed text-muted sm:text-[11px]">
            Advisory, delivery and asset management for public and private partners.
          </p>
          <div className="mt-3 flex gap-1.5 text-[8px] font-medium sm:text-[10px]">
            <span className="rounded-full bg-ink px-2.5 py-1 text-white">Our work</span>
            <span className="rounded-full border border-line-strong px-2.5 py-1">Talk to us</span>
          </div>
        </div>
        <div className="relative hidden aspect-[4/3] overflow-hidden rounded-lg bg-[linear-gradient(160deg,#dfe7e3,#b9c7c0)] sm:block">
          <span className="absolute right-[12%] bottom-0 h-[70%] w-[18%] bg-white/60" />
          <span className="absolute right-[34%] bottom-0 h-[52%] w-[16%] bg-white/45" />
          <span className="absolute right-[54%] bottom-0 h-[84%] w-[14%] bg-white/70" />
          <span className="absolute bottom-0 left-0 h-[12%] w-full bg-white/50" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 border-t border-line p-3 sm:gap-4 sm:px-6 sm:py-4">
        {["Advisory", "Delivery", "Asset management"].map((t) => (
          <div key={t}>
            <span className="block h-0.5 w-5 bg-brand-500" />
            <p className="mt-1.5 text-[8px] font-semibold sm:text-[11px]">{t}</p>
            <span className="mt-1 block h-1 w-4/5 rounded-full bg-surface-strong" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Mobile app screen                                                   */
/* ------------------------------------------------------------------ */

export function MobileAppMock({ variant = "field", className }: { variant?: "field" | "finance"; className?: string }) {
  const field = variant === "field";
  return (
    <div className={cn("flex h-full flex-col bg-surface px-3 pt-8 pb-3 text-fg", className)}>
      <p className="text-[9px] text-muted">{field ? "Tuesday, 14 Oct" : "Good morning"}</p>
      <p className="text-[13px] font-semibold tracking-tight">{field ? "Today’s visits" : "Hi, Amaka"}</p>
      <div className="mt-3 rounded-xl bg-ink p-3 text-white">
        <p className="text-[8px] text-on-dark-muted">{field ? "Completed" : "Available balance"}</p>
        <p className="mt-0.5 text-base font-semibold tracking-tight">{field ? "5 of 8" : "₦482,300"}</p>
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-graphite-700">
          <span className="block h-full w-[62%] rounded-full bg-brand-500" />
        </div>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-1.5">
        {(field ? ["Check in", "Report", "Photos", "Sync"] : ["Send", "Pay", "Save", "More"]).map((a) => (
          <div key={a} className="flex min-w-0 flex-col items-center gap-1">
            <span className="flex size-7 items-center justify-center rounded-full bg-canvas shadow-sm">
              <span className="size-2 rounded-full border-2 border-brand-500" />
            </span>
            <span className="w-full truncate text-center text-[7px] text-muted">{a}</span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[9px] font-semibold">{field ? "Up next" : "Recent"}</p>
      <ul className="mt-1.5 space-y-1.5">
        {(field
          ? [
              ["Ikeja site", "10:30", "green"],
              ["Yaba office", "12:00", "grey"],
              ["Lekki store", "14:30", "grey"],
            ]
          : [
              ["Transfer to Tobi", "−₦15,000", "grey"],
              ["Salary", "+₦350,000", "green"],
              ["Electricity", "−₦8,200", "grey"],
            ]
        ).map(([a, b, tone]) => (
          <li key={a} className="flex items-center justify-between rounded-lg bg-canvas px-2 py-1.5">
            <span className="flex items-center gap-1.5 text-[8px]">
              <span className={cn("size-1.5 rounded-full", tone === "green" ? "bg-brand-500" : "bg-line-strong")} />
              {a}
            </span>
            <span className="text-[8px] font-medium">{b}</span>
          </li>
        ))}
      </ul>
      {field && (
        <p className="mt-auto flex items-center justify-center gap-1 pt-3 text-[7px] text-muted">
          <span className="size-1 rounded-full bg-brand-500" /> Works offline · syncs when connected
        </p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Integration hub                                                     */
/* ------------------------------------------------------------------ */

const nodes = [
  { label: "Payments", x: 16, y: 18 },
  { label: "Accounting", x: 84, y: 18 },
  { label: "CRM", x: 8, y: 50 },
  { label: "HR & payroll", x: 92, y: 50 },
  { label: "SMS & email", x: 16, y: 82 },
  { label: "Analytics", x: 84, y: 82 },
];

export function IntegrationMock({ className }: { className?: string }) {
  return (
    <div className={cn("relative aspect-[16/10] bg-canvas text-fg", className)}>
      <div className="absolute inset-0 bg-[radial-gradient(var(--color-line-strong)_1px,transparent_1px)] bg-size-[18px_18px] opacity-50" />
      <svg className="absolute inset-0 size-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
        {nodes.map((n) => (
          <path
            key={n.label}
            d={`M50 50 C ${(50 + n.x) / 2} 50, ${(50 + n.x) / 2} ${n.y}, ${n.x} ${n.y}`}
            stroke="var(--color-brand-500)"
            strokeWidth="1.25"
            strokeDasharray="3 4"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>
      {nodes.map((n) => (
        <span
          key={n.label}
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-line bg-canvas px-2 py-1 text-[8px] font-medium whitespace-nowrap shadow-sm sm:px-3 sm:py-1.5 sm:text-[11px]"
        >
          {n.label}
        </span>
      ))}
      <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-xl bg-ink px-3 py-2 text-white shadow-lg sm:rounded-2xl sm:px-5 sm:py-3.5">
        <span className="flex items-center gap-1 text-[7px] text-brand-400 sm:text-[10px]">
          <span className="size-1 rounded-full bg-brand-400" /> All systems synced
        </span>
        <span className="mt-0.5 text-[10px] font-semibold sm:text-sm">Your platform</span>
      </div>
    </div>
  );
}
