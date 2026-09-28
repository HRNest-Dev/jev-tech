export type ProcessStep = {
  title: string;
  summary: string;
  items: string[];
};

export const processSteps: ProcessStep[] = [
  {
    title: "Discover",
    summary: "We start with the business problem, not the technology.",
    items: ["Objectives", "Users", "Constraints", "Opportunities"],
  },
  {
    title: "Define",
    summary: "We turn what we learn into a clear, buildable plan.",
    items: ["Requirements", "Scope", "Roadmap", "Architecture", "Delivery plan"],
  },
  {
    title: "Design",
    summary: "We design flows and interfaces people understand quickly.",
    items: ["User flows", "Wireframes", "UI & UX", "Prototypes", "Design system"],
  },
  {
    title: "Build",
    summary: "We engineer the product in tested, reviewable increments.",
    items: ["Frontend", "Backend", "APIs", "Integrations", "Testing"],
  },
  {
    title: "Launch",
    summary: "We release with production environments, QA and monitoring in place.",
    items: ["Deployment", "QA", "Monitoring", "Performance", "Release"],
  },
  {
    title: "Grow",
    summary: "We stay on to support, improve and scale what we built.",
    items: ["Maintenance", "Support", "Analytics", "New features", "Scaling"],
  },
];
