"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { tour } from "@/content/staffdem";
import { cn } from "@/lib/cn";
import Screenshot from "./Screenshot";

export default function StaffDemTour() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = tour[active];

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const last = tour.length - 1;
    const keys: Record<string, number> = {
      ArrowRight: active === last ? 0 : active + 1,
      ArrowLeft: active === 0 ? last : active - 1,
      Home: 0,
      End: last,
    };
    if (!(e.key in keys)) return;
    e.preventDefault();
    setActive(keys[e.key]);
    tabs.current[keys[e.key]]?.focus();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="StaffDem modules"
        onKeyDown={onKeyDown}
        className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {tour.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            role="tab"
            id={`tour-tab-${t.id}`}
            aria-selected={i === active}
            aria-controls="tour-panel"
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className={cn(
              "shrink-0 rounded-full border px-5 py-2.5 text-[0.9375rem] font-medium transition-colors",
              i === active ? "border-ink bg-ink text-white" : "border-line-strong text-muted hover:border-fg hover:text-fg",
            )}
          >
            {t.name}
          </button>
        ))}
      </div>

      <div
        id="tour-panel"
        role="tabpanel"
        aria-labelledby={`tour-tab-${current.id}`}
        className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12"
      >
        <div key={current.id} className="animate-rise lg:col-span-4">
          <h3 className="text-h2 font-semibold text-balance">{current.title}</h3>
          <p className="mt-4 text-lead text-muted">{current.description}</p>
          <ul className="mt-8 space-y-3 border-t border-line pt-8">
            {current.points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <svg aria-hidden="true" viewBox="0 0 16 16" className="mt-1 size-4 shrink-0 text-brand-600" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3.5 8.5l3 3 6-7" />
                </svg>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-8">
          <div className="rounded-3xl bg-surface p-3 ring-1 ring-line sm:p-6">
            <Screenshot key={current.screen} screen={current.screen} sizes="(min-width: 1024px) 60vw, 100vw" className="animate-rise" />
          </div>
        </div>
      </div>
    </div>
  );
}
