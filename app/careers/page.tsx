import type { Metadata } from "next";
import { disciplines, hiringSteps, openRoles, reasons } from "@/content/careers";
import { site } from "@/lib/site";
import { ButtonLink, Container, Section, SectionHeading } from "@/components/ui";
import PageHero from "@/components/page/PageHero";
import Photo from "@/components/page/Photo";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join JEV Technologies. We’re always glad to hear from thoughtful engineers, designers and product people who want to build software that matters.",
  alternates: { canonical: "/careers" },
};

const applyHref = `mailto:${site.email}?subject=${encodeURIComponent("Application — JEV Technologies")}`;

export default function CareersPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Company", href: "/company" },
          { label: "Careers", href: "/careers" },
        ]}
        eyebrow="Careers"
        title="Build software that organizations depend on."
        description="We’re a team of engineers, designers and product people who care about doing the work properly. If that sounds like you, we’d like to hear from you."
        actions={
          <ButtonLink href="#roles" size="lg" arrow>
            See open roles
          </ButtonLink>
        }
        image="insight-employee-software"
      />

      {/* Why JEV */}
      <Section className="pt-0!" aria-labelledby="why-title">
        <Container>
          <SectionHeading id="why-title" eyebrow="Why JEV" title="Meaningful work, done well." />
          <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r, i) => (
              <li key={r.title} className="bg-canvas p-7 sm:p-8">
                <span className="font-mono text-sm text-muted">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 text-h4 font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{r.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Disciplines */}
      <Section tone="surface" aria-labelledby="disciplines-title">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Photo image="company-hero" aspect="aspect-[4/3]" sizes="(min-width: 1024px) 50vw, 100vw" />
          <div>
            <SectionHeading
              id="disciplines-title"
              eyebrow="Where you’d fit"
              title="The teams we hire for."
              description="Roles open as our work grows. We’re always interested in exceptional people in these areas."
            />
            <ul className="mt-10 divide-y divide-line border-y border-line">
              {disciplines.map((d) => (
                <li key={d.title} className="py-5">
                  <h3 className="text-h4 font-semibold">{d.title}</h3>
                  <p className="mt-1.5 text-muted">{d.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Hiring process */}
      <Section tone="dark" aria-labelledby="hiring-title">
        <Container>
          <SectionHeading
            id="hiring-title"
            tone="dark"
            eyebrow="How hiring works"
            title="Clear, respectful and quick."
            description="We know applying takes effort. We keep the process focused and let you know where you stand."
          />
          <ol className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            {hiringSteps.map((s, i) => (
              <li key={s.title} className="reveal relative pt-8">
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-line-dark" />
                <span aria-hidden="true" className="absolute top-0 left-0 size-3 -translate-y-1/2 rounded-full border-2 border-brand-500 bg-ink" />
                <p className="font-mono text-sm text-brand-400">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-h4 font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-on-dark-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Open roles */}
      <Section id="roles" aria-labelledby="roles-title">
        <Container>
          <SectionHeading id="roles-title" eyebrow="Open roles" title="Current opportunities." />
          {openRoles.length > 0 ? (
            <ul className="mt-12 divide-y divide-line border-y border-line">
              {openRoles.map((r) => (
                <li key={r.title} className="grid gap-4 py-7 sm:grid-cols-[1fr_auto] sm:items-center">
                  <div>
                    <h3 className="text-h3 font-semibold">{r.title}</h3>
                    <p className="mt-1 text-sm text-muted">
                      {r.team} · {r.location} · {r.type}
                    </p>
                    <p className="mt-3 max-w-2xl text-muted">{r.summary}</p>
                  </div>
                  <ButtonLink href={r.applyHref} variant="secondary" arrow className="self-start">
                    Apply
                  </ButtonLink>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-12 flex flex-col gap-6 rounded-3xl bg-surface p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h3 className="text-h3 font-semibold">No open roles right now.</h3>
                <p className="mt-3 text-muted">
                  We still want to hear from exceptional people. Send your CV or portfolio and tell us about the work
                  you&rsquo;re proud of — we&rsquo;ll be in touch when there&rsquo;s a fit.
                </p>
              </div>
              <ButtonLink href={applyHref} variant="secondary" size="lg" arrow className="self-start lg:self-auto">
                Send a general application
              </ButtonLink>
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
