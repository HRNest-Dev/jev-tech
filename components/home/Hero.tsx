import { ButtonLink, Container } from "@/components/ui";
import { startProjectHref } from "@/lib/site";
import { BrowserFrame, PhoneFrame } from "@/components/visuals/Frames";
import { DashboardMock, MobileAppMock } from "@/components/visuals/Mocks";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <Container>
        <div className="max-w-5xl">
          <p className="animate-rise font-mono text-caption uppercase text-brand-700">
            Digital product &amp; software engineering
          </p>
          <h1 className="mt-6 animate-rise text-display font-semibold text-balance [animation-delay:80ms]">
            Technology built around your business.
          </h1>
        </div>

        <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-12 lg:items-end">
          <p className="animate-rise text-lead text-muted text-pretty [animation-delay:160ms] lg:col-span-6">
            From high-performance websites and e-commerce platforms to custom business applications, we take ideas from
            strategy and design through engineering, launch and ongoing support.
          </p>
          <div className="flex animate-rise flex-wrap gap-3 [animation-delay:240ms] lg:col-span-6 lg:justify-end">
            <ButtonLink href={startProjectHref} size="lg" arrow>
              Start a Project
            </ButtonLink>
            <ButtonLink href="/services" variant="outline" size="lg">
              Explore Our Services
            </ButtonLink>
          </div>
        </div>

        <HeroScene />
      </Container>
    </section>
  );
}

/** Decorative product scene: an operations dashboard, its mobile companion and a live approval. */
function HeroScene() {
  return (
    <div
      aria-hidden="true"
      className="relative mt-14 animate-rise overflow-hidden rounded-3xl border border-line bg-surface px-4 pt-6 [animation-delay:320ms] sm:mt-16 sm:px-10 sm:pt-12 lg:px-14 lg:pt-14"
    >
      <div className="absolute inset-0 bg-[radial-gradient(var(--color-line-strong)_1px,transparent_1px)] bg-size-[22px_22px] opacity-60" />
      <div className="absolute -top-24 -right-24 size-96 rounded-full bg-brand-200/40 blur-3xl" />

      <BrowserFrame url="operations.yourcompany.com" className="relative -mb-px rounded-b-none sm:w-[84%] sm:rounded-b-none">
        <DashboardMock variant="hr" />
      </BrowserFrame>

      <PhoneFrame className="absolute right-3 bottom-4 w-[34%] sm:right-8 sm:bottom-8 sm:w-[22%] lg:right-14 lg:w-[19%]">
        <div className="aspect-[9/18]">
          <MobileAppMock variant="field" />
        </div>
      </PhoneFrame>

      <div className="absolute bottom-[10%] left-[2%] hidden w-64 rounded-2xl border border-line bg-canvas p-4 shadow-[0_24px_48px_-24px_rgb(11_15_14/0.3)] lg:block">
        <div className="flex items-start gap-3">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
            <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M3.5 8.5l3 3 6-7" />
            </svg>
          </span>
          <div>
            <p className="text-xs font-semibold">Leave request approved</p>
            <p className="mt-0.5 text-[11px] leading-snug text-muted">Chioma E. · 3 days · Payroll updated automatically</p>
          </div>
        </div>
      </div>
    </div>
  );
}
