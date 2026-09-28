import type { ServiceVisual } from "@/content/services";
import { BrowserFrame, PhoneFrame } from "./Frames";
import { DashboardMock, IntegrationMock, MobileAppMock, StorefrontMock, WebsiteMock, WorkflowMock } from "./Mocks";
import { DesignMock, PipelineMock, RoadmapMock } from "./MoreMocks";

const browser: Partial<Record<ServiceVisual, { url: string; mock: React.ReactNode }>> = {
  website: { url: "yourcompany.com", mock: <WebsiteMock /> },
  storefront: { url: "shop.yourbrand.com", mock: <StorefrontMock /> },
  workflow: { url: "approvals.yourcompany.com", mock: <WorkflowMock /> },
  dashboard: { url: "app.yourproduct.com", mock: <DashboardMock variant="commerce" /> },
  design: { url: "figma.com · Checkout redesign", mock: <DesignMock /> },
  pipeline: { url: "deploy.yourcompany.com", mock: <PipelineMock /> },
  roadmap: { url: "roadmap · Transformation plan", mock: <RoadmapMock /> },
};

/** Decorative hero scene for a service page. */
export default function ServiceScene({
  visual,
  toast,
}: {
  visual: ServiceVisual;
  toast?: { title: string; detail: string };
}) {
  const b = browser[visual];

  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden rounded-3xl border border-line bg-surface px-4 pt-6 sm:px-10 sm:pt-12 lg:px-16 lg:pt-14"
    >
      <div className="absolute inset-0 bg-[radial-gradient(var(--color-line-strong)_1px,transparent_1px)] bg-size-[22px_22px] opacity-60" />
      <div className="absolute -top-24 -right-24 size-96 rounded-full bg-brand-200/40 blur-3xl" />

      {b && (
        <BrowserFrame url={b.url} className="relative mx-auto -mb-px max-w-4xl rounded-b-none sm:rounded-b-none">
          {b.mock}
        </BrowserFrame>
      )}

      {visual === "mobile" && (
        <div className="relative mx-auto flex max-w-2xl items-end justify-center gap-4 sm:gap-8">
          <PhoneFrame className="w-[40%] max-w-64 translate-y-6 rounded-b-none">
            <div className="aspect-[9/16]">
              <MobileAppMock variant="finance" />
            </div>
          </PhoneFrame>
          <PhoneFrame className="w-[40%] max-w-64 translate-y-16 rounded-b-none">
            <div className="aspect-[9/16]">
              <MobileAppMock variant="field" />
            </div>
          </PhoneFrame>
        </div>
      )}

      {visual === "integration" && (
        <div className="relative mx-auto -mb-px max-w-4xl overflow-hidden rounded-t-2xl border border-b-0 border-line shadow-[0_32px_64px_-32px_rgb(11_15_14/0.28)]">
          <IntegrationMock />
        </div>
      )}

      {toast && (
        <div className="absolute right-[2%] bottom-[8%] hidden w-64 rounded-2xl border border-line bg-canvas p-4 shadow-[0_24px_48px_-24px_rgb(11_15_14/0.3)] lg:block">
          <div className="flex items-start gap-3">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
              <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M3.5 8.5l3 3 6-7" />
              </svg>
            </span>
            <div>
              <p className="text-xs font-semibold">{toast.title}</p>
              <p className="mt-0.5 text-[11px] leading-snug text-muted">{toast.detail}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
