import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Browser window chrome around an interface mock. Decorative — wrap usages in aria-hidden. */
export function BrowserFrame({ url, children, className }: { url: string; children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-line bg-canvas shadow-[0_32px_64px_-32px_rgb(11_15_14/0.28)] sm:rounded-2xl",
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-line bg-surface px-3 py-2 sm:px-4 sm:py-2.5">
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className="size-2 rounded-full bg-line-strong sm:size-2.5" />
          ))}
        </div>
        <div className="mx-auto flex h-5 w-full max-w-72 items-center justify-center gap-1.5 rounded-md bg-canvas px-3 text-[9px] text-muted sm:h-6 sm:text-[11px]">
          <svg viewBox="0 0 12 12" className="size-2.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <rect x="2.5" y="5.5" width="7" height="5" rx="1" />
            <path d="M4 5.5V4a2 2 0 014 0v1.5" />
          </svg>
          <span className="truncate">{url}</span>
        </div>
        <div className="w-10 sm:w-12" />
      </div>
      {children}
    </div>
  );
}

/** Phone chrome around a mobile screen mock. Decorative — wrap usages in aria-hidden. */
export function PhoneFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-[2rem] bg-ink p-1.5 shadow-[0_32px_64px_-24px_rgb(11_15_14/0.45)] ring-1 ring-graphite-700",
        className,
      )}
    >
      <div className="relative overflow-hidden rounded-[1.6rem] bg-canvas">
        <div className="absolute top-1.5 left-1/2 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-ink" />
        {children}
      </div>
    </div>
  );
}
