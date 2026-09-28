export const principles = [
  {
    title: "Start with the problem",
    body: "We make sure we understand the business need before recommending any technology.",
  },
  {
    title: "Design for real users",
    body: "Software only works if people can use it. We design around how your users actually work.",
  },
  {
    title: "Engineer for the long term",
    body: "Clean architecture, tested code and documentation, so your product stays maintainable as it grows.",
  },
  {
    title: "Stay after launch",
    body: "Launch is the start of a product’s life. We support, monitor and improve what we build.",
  },
];

export const stack = [
  { area: "Frontend", tools: ["React", "Next.js", "TypeScript"] },
  { area: "Backend", tools: ["Laravel", "PHP", "Node.js", "NestJS"] },
  { area: "Data", tools: ["PostgreSQL", "MySQL", "Redis"] },
  { area: "Infrastructure", tools: ["Cloud hosting", "CI/CD", "Monitoring"] },
];

export const audiences = [
  { title: "Growing businesses & SMEs", body: "Replacing spreadsheets and disconnected tools with systems that scale." },
  { title: "Corporate organizations", body: "Modernizing internal operations and customer-facing digital services." },
  { title: "Startups", body: "Turning a product idea into a working, launchable first version." },
  { title: "Institutions & organizations", body: "Digitizing processes and serving members, students or the public online." },
];

export type TeamMember = {
  name: string;
  role: string;
  group: "Leadership" | "Engineering" | "Product & design" | "Operations";
  /** Path under /public, e.g. "/team/jane-doe.jpg" (square, at least 800px). */
  photo?: string;
  linkedin?: string;
};

/** Add real team members here; the Team section on /company appears once this has entries. */
export const team: TeamMember[] = [];
