import type { Metadata } from "next";
import { productLessons, staffdem } from "@/content/products";
import { modules } from "@/content/staffdem";
import { site } from "@/lib/site";
import { ButtonLink, Container, Section, SectionHeading } from "@/components/ui";
import PageHero from "@/components/page/PageHero";
import Photo from "@/components/page/Photo";
import Screenshot from "@/components/page/Screenshot";
import StaffDemTour from "@/components/page/StaffDemTour";
import JsonLd from "@/components/page/JsonLd";

export const metadata: Metadata = {
  title: "StaffDem — HR & Payroll Platform",
  description:
    "StaffDem brings payroll, leave, performance, employee self-service and HR records into one platform. Built and operated by JEV Technologies.",
  alternates: { canonical: "/products/staffdem" },
};

const demoHref = "/contact?topic=staffdem";

const facts = [
  { label: "Modules", value: "12", detail: "From onboarding to exit" },
  { label: "Workspaces", value: "2", detail: "HR admin and employee self-service" },
  { label: "Statutory", value: "NHF · Pension · PAYE", detail: "Remittances generated with payroll" },
  { label: "Built by", value: "JEV", detail: "Designed, engineered and operated in-house" },
];

export default function StaffDemPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: staffdem.name, href: "/products/staffdem" },
        ]}
        eyebrow={`${staffdem.name} · ${staffdem.category}`}
        title="HR, payroll and people operations in one platform."
        description="StaffDem replaces spreadsheets, paper forms and email approvals with one system for HR teams, finance, managers and every employee."
        actions={
          <>
            <ButtonLink href={demoHref} size="lg" arrow>
              Request a demo
            </ButtonLink>
            <ButtonLink href="#modules" variant="outline" size="lg">
              See the modules
            </ButtonLink>
          </>
        }
        visual={
          <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-3 pt-4 sm:px-10 sm:pt-12 lg:px-16 lg:pt-14">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(var(--color-line-strong)_1px,transparent_1px)] bg-size-[22px_22px] opacity-60" />
            <div aria-hidden="true" className="absolute -top-24 -right-24 size-96 rounded-full bg-violet-300/30 blur-3xl" />
            <Screenshot
              screen="payrollOverview"
              priority
              className="relative mx-auto -mb-px max-w-5xl rounded-b-none sm:rounded-b-none"
            />
          </div>
        }
      />

      {/* Facts */}
      <Section className="pt-4! pb-16! sm:pb-20!" aria-label={`${staffdem.name} at a glance`}>
        <Container>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4">
            {facts.map((f) => (
              <div key={f.label} className="bg-canvas p-6 sm:p-8">
                <dt className="font-mono text-caption uppercase text-muted">{f.label}</dt>
                <dd className="mt-3 text-h3 font-semibold">{f.value}</dd>
                <dd className="mt-1 text-sm text-muted">{f.detail}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      {/* Two workspaces */}
      <Section tone="surface" aria-labelledby="workspaces-title">
        <Container>
          <SectionHeading
            id="workspaces-title"
            eyebrow="Two workspaces"
            title="One system for HR, and for everyone else."
            description="HR and finance run the organization from the admin workspace. Every employee gets a self-service workspace for their own pay, leave and requests."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {[
              {
                title: "Admin workspace",
                body: "Headcount, payroll status, approvals and workforce trends at a glance — with every HR process a click away.",
                screen: "hrDashboard" as const,
              },
              {
                title: "Employee self-service",
                body: "Staff see their leave balance, latest payslip and pending actions the moment they sign in.",
                screen: "employeeDashboard" as const,
              },
            ].map((w) => (
              <article key={w.title} className="reveal flex flex-col rounded-3xl bg-canvas p-6 ring-1 ring-line sm:p-8">
                <h3 className="text-h3 font-semibold">{w.title}</h3>
                <p className="mt-3 max-w-md text-muted">{w.body}</p>
                <div className="mt-8 lg:mt-auto lg:pt-8">
                  <Screenshot screen={w.screen} sizes="(min-width: 1024px) 45vw, 100vw" />
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* Module tour */}
      <Section id="modules" aria-labelledby="tour-title">
        <Container>
          <SectionHeading id="tour-title" eyebrow="Inside StaffDem" title="A closer look." />
          <div className="mt-12">
            <StaffDemTour />
          </div>
        </Container>
      </Section>

      {/* All modules */}
      <Section tone="surface" aria-labelledby="modules-title">
        <Container>
          <SectionHeading
            id="modules-title"
            eyebrow="Everything included"
            title="The whole employee lifecycle."
            description="From the day someone joins to the day they leave, every HR process lives in one place with one record."
          />
          <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {modules.map((m) => (
              <li key={m.name} className="bg-canvas p-6 sm:p-7">
                <span aria-hidden="true" className="block size-2.5 rounded-full border-2 border-brand-500" />
                <h3 className="mt-5 text-h4 font-semibold">{m.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{m.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Who it's for */}
      <Section aria-labelledby="audience-title">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Photo image="staffdem" aspect="aspect-[4/3]" sizes="(min-width: 1024px) 50vw, 100vw" />
          <div>
            <SectionHeading
              id="audience-title"
              eyebrow="Who it’s for"
              title="Built for the people who run organizations."
              description="Growing organizations that have outgrown spreadsheets and want HR, finance and staff working from the same information."
            />
            <ul className="mt-8 space-y-3">
              {staffdem.audiences.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-full border-2 border-brand-500" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Why it matters */}
      <Section tone="dark" aria-labelledby="lessons-title">
        <Container>
          <SectionHeading
            id="lessons-title"
            tone="dark"
            eyebrow="Why it matters to our clients"
            title="What running our own product teaches us."
            description="Building software is one skill. Operating it for real organizations every day is another. Everything we learn from StaffDem goes into the products we build for clients."
          />
          <ul className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {productLessons.map((l) => (
              <li key={l.title} className="border-t border-line-dark pt-6">
                <h3 className="text-h4 font-semibold text-white">{l.title}</h3>
                <p className="mt-2 text-on-dark-muted">{l.description}</p>
              </li>
            ))}
          </ul>
          <div className="mt-14 flex flex-col gap-6 rounded-3xl bg-graphite-900 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-h3 font-semibold text-white">See {staffdem.name} in action.</p>
              <p className="mt-2 text-on-dark-muted">We&rsquo;ll walk you through it with your own processes in mind.</p>
            </div>
            <ButtonLink href={demoHref} size="lg" arrow className="self-start lg:self-auto">
              Request a demo
            </ButtonLink>
          </div>
        </Container>
      </Section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: staffdem.name,
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description: staffdem.summary,
          publisher: { "@type": "Organization", name: site.name, url: site.url },
        }}
      />
    </>
  );
}
