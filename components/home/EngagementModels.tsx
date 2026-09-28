import { engagementModels } from "@/content/home";
import { startProjectHref } from "@/lib/site";
import { cn } from "@/lib/cn";
import { ButtonLink, Container, Section, SectionHeading } from "@/components/ui";

export default function EngagementModels() {
  return (
    <Section aria-labelledby="engage-title">
      <Container>
        <SectionHeading
          id="engage-title"
          eyebrow="Ways to work with us"
          title="Start where it makes sense for you."
          description="Whether you need clarity on an idea, a team to build it, or a partner to run it — there’s a clear way in."
        />

        <div className="mt-14 grid gap-5 sm:mt-16 lg:grid-cols-3">
          {engagementModels.map((m) => (
            <article
              key={m.name}
              className={cn(
                "reveal flex flex-col rounded-3xl p-8 sm:p-10",
                m.featured ? "bg-ink text-on-dark" : "border border-line bg-canvas",
              )}
            >
              <p className={cn("font-mono text-caption uppercase", m.featured ? "text-brand-400" : "text-brand-700")}>
                {m.tagline}
              </p>
              <h3 className={cn("mt-4 text-h2 font-semibold", m.featured && "text-white")}>{m.name}</h3>
              <p className={cn("mt-4", m.featured ? "text-on-dark-muted" : "text-muted")}>{m.description}</p>

              <ul className={cn("mt-8 space-y-3 border-t pt-8", m.featured ? "border-line-dark" : "border-line")}>
                {m.includes.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      className={cn("size-4 shrink-0", m.featured ? "text-brand-400" : "text-brand-600")}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3.5 8.5l3 3 6-7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <p className={cn("mt-8 text-sm lg:mt-auto lg:pt-8", m.featured ? "text-on-dark-muted" : "text-muted")}>
                <span className={cn("font-medium", m.featured ? "text-white" : "text-fg")}>Best for: </span>
                {m.bestFor}
              </p>
              <ButtonLink
                href={startProjectHref}
                variant={m.featured ? "primary" : "outline"}
                arrow
                className="mt-6 self-start"
              >
                Get started
              </ButtonLink>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
