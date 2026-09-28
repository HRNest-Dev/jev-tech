import Image from "next/image";
import { team, type TeamMember } from "@/content/company";
import { Container, Section, SectionHeading } from "@/components/ui";

const groups: TeamMember["group"][] = ["Leadership", "Engineering", "Product & design", "Operations"];

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}

/** Renders only when content/company.ts has real team members. */
export default function TeamSection() {
  if (team.length === 0) return null;

  return (
    <Section aria-labelledby="team-title">
      <Container>
        <SectionHeading
          id="team-title"
          eyebrow="Team"
          title="The people behind the work."
          description="A focused team across strategy, design, engineering and operations."
        />
        <div className="mt-14 space-y-14">
          {groups
            .filter((g) => team.some((m) => m.group === g))
            .map((g) => (
              <div key={g}>
                <h3 className="font-mono text-caption uppercase text-muted">{g}</h3>
                <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
                  {team
                    .filter((m) => m.group === g)
                    .map((m) => (
                      <li key={m.name} className="reveal">
                        <div className="relative aspect-square overflow-hidden rounded-2xl bg-surface-strong">
                          {m.photo ? (
                            <Image src={m.photo} alt={`${m.name}, ${m.role}`} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
                          ) : (
                            <span aria-hidden="true" className="flex size-full items-center justify-center text-h2 font-semibold text-muted">
                              {initials(m.name)}
                            </span>
                          )}
                        </div>
                        <p className="mt-4 font-semibold">{m.name}</p>
                        <p className="text-sm text-muted">{m.role}</p>
                        {m.linkedin && (
                          <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm text-brand-700 hover:underline">
                            LinkedIn<span className="sr-only"> profile of {m.name}</span>
                          </a>
                        )}
                      </li>
                    ))}
                </ul>
              </div>
            ))}
        </div>
      </Container>
    </Section>
  );
}
