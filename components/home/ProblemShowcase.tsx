"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { problems, type ProblemVisual } from "@/content/home";
import { cn } from "@/lib/cn";
import { ButtonLink, Container, Section, SectionHeading } from "@/components/ui";
import { BrowserFrame, PhoneFrame } from "@/components/visuals/Frames";
import {
  DashboardMock,
  IntegrationMock,
  MobileAppMock,
  StorefrontMock,
  WebsiteMock,
  WorkflowMock,
} from "@/components/visuals/Mocks";

function Visual({ type }: { type: ProblemVisual }) {
  switch (type) {
    case "dashboard":
      return (
        <BrowserFrame url="people.yourcompany.com" className="rounded-b-none sm:rounded-b-none">
          <DashboardMock variant="hr" />
        </BrowserFrame>
      );
    case "workflow":
      return (
        <BrowserFrame url="approvals.yourcompany.com" className="rounded-b-none sm:rounded-b-none">
          <WorkflowMock />
        </BrowserFrame>
      );
    case "storefront":
      return (
        <BrowserFrame url="shop.yourbrand.com" className="rounded-b-none sm:rounded-b-none">
          <StorefrontMock />
        </BrowserFrame>
      );
    case "website":
      return (
        <BrowserFrame url="yourcompany.com" className="rounded-b-none sm:rounded-b-none">
          <WebsiteMock />
        </BrowserFrame>
      );
    case "mobile":
      return (
        <div className="flex justify-center gap-4 sm:gap-6">
          <PhoneFrame className="w-[42%] max-w-56">
            <div className="aspect-[9/17]">
              <MobileAppMock variant="field" />
            </div>
          </PhoneFrame>
          <PhoneFrame className="mt-10 w-[42%] max-w-56">
            <div className="aspect-[9/17]">
              <MobileAppMock variant="finance" />
            </div>
          </PhoneFrame>
        </div>
      );
    case "integration":
      return (
        <div className="overflow-hidden rounded-t-2xl border border-b-0 border-line shadow-[0_32px_64px_-32px_rgb(11_15_14/0.28)]">
          <IntegrationMock />
        </div>
      );
  }
}

export default function ProblemShowcase() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = problems[active];

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const last = problems.length - 1;
    const next =
      e.key === "ArrowDown" || e.key === "ArrowRight"
        ? active === last ? 0 : active + 1
        : e.key === "ArrowUp" || e.key === "ArrowLeft"
          ? active === 0 ? last : active - 1
          : e.key === "Home"
            ? 0
            : e.key === "End"
              ? last
              : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <Section tone="surface" aria-labelledby="problems-title">
      <Container>
        <SectionHeading
          id="problems-title"
          eyebrow="Problems we solve"
          title="Sound familiar?"
          description="Most of our projects start with a business problem, not a technology request. Here are some we solve regularly."
        />

        <div className="mt-14 grid gap-8 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          <div
            role="tablist"
            aria-label="Business problems"
            aria-orientation="vertical"
            onKeyDown={onKeyDown}
            className="flex flex-col gap-1.5 lg:col-span-5"
          >
            {problems.map((p, i) => {
              const selected = i === active;
              return (
                <button
                  key={p.id}
                  ref={(el) => {
                    tabs.current[i] = el;
                  }}
                  role="tab"
                  id={`problem-tab-${p.id}`}
                  aria-selected={selected}
                  aria-controls="problem-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  className={cn(
                    "group relative flex items-center gap-4 rounded-2xl px-5 py-4 text-left transition-[background-color,box-shadow,color] duration-200",
                    selected
                      ? "bg-canvas text-fg shadow-[0_1px_2px_rgb(11_15_14/0.06),0_8px_24px_-12px_rgb(11_15_14/0.15)]"
                      : "text-muted hover:bg-canvas/60 hover:text-fg",
                  )}
                >
                  <span
                    className={cn(
                      "absolute top-4 bottom-4 left-0 w-0.5 rounded-full transition-colors",
                      selected ? "bg-brand-500" : "bg-transparent",
                    )}
                  />
                  <span className="font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[1.0625rem] font-medium">{p.problem}</span>
                </button>
              );
            })}
          </div>

          <div
            id="problem-panel"
            role="tabpanel"
            aria-labelledby={`problem-tab-${current.id}`}
            className="lg:col-span-7"
          >
            <div
              aria-hidden="true"
              className="relative flex aspect-[4/3] items-end overflow-hidden rounded-3xl bg-[linear-gradient(160deg,var(--color-canvas),var(--color-surface-strong))] px-5 pt-8 ring-1 ring-line sm:aspect-[16/11] sm:px-10 sm:pt-12"
            >
              <div className="absolute inset-0 bg-[radial-gradient(var(--color-line-strong)_1px,transparent_1px)] bg-size-[20px_20px] opacity-50" />
              <div key={current.id} className="relative w-full animate-rise">
                <Visual type={current.visual} />
              </div>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-[1fr_auto] sm:items-start">
              <div>
                <p className="text-h4 font-semibold text-balance">{current.solution}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {current.outcome.map((o) => (
                    <li key={o} className="flex items-center gap-2 rounded-full bg-canvas px-3 py-1.5 text-sm ring-1 ring-line">
                      <svg aria-hidden="true" viewBox="0 0 16 16" className="size-3.5 text-brand-600" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3.5 8.5l3 3 6-7" />
                      </svg>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
              <ButtonLink href={`/services/${current.service}`} variant="secondary" arrow className="self-start">
                {current.serviceLabel}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
