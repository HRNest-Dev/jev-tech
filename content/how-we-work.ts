/** Detailed delivery phases for /how-we-work. Titles match content/process.ts. */
export const phases: {
  title: string;
  summary: string;
  happens: string[];
  deliverables: string[];
  involvement: string;
}[] = [
  {
    title: "Discover",
    summary: "We start with the business problem, the people affected and what success looks like.",
    happens: ["Stakeholder and user interviews", "Review of current processes and systems", "Goals, constraints and risks"],
    deliverables: ["Problem statement", "Summary of findings", "Success measures"],
    involvement: "A few workshops and interviews with the people who know the work best.",
  },
  {
    title: "Define",
    summary: "We turn what we’ve learned into a clear scope, architecture direction and plan.",
    happens: ["Requirements and priorities", "Architecture and technology choices", "Release plan and estimate"],
    deliverables: ["Scope and requirements", "Architecture outline", "Roadmap, timeline and estimate"],
    involvement: "Agreeing priorities and signing off the scope for the first release.",
  },
  {
    title: "Design",
    summary: "We design how the product works and looks, and test it with users before building.",
    happens: ["User flows and wireframes", "Interface design and prototype", "Usability testing with real users"],
    deliverables: ["Clickable prototype", "Final interface designs", "Design system components"],
    involvement: "Reviewing designs and helping us reach users for testing.",
  },
  {
    title: "Build",
    summary: "We engineer the product in short cycles, with working software to review every few weeks.",
    happens: ["Frontend, backend and integrations", "Automated testing and code review", "Regular demos on a staging environment"],
    deliverables: ["Working software each cycle", "Test coverage and documentation", "Staging environment you can use"],
    involvement: "Joining demos, giving feedback and answering questions quickly.",
  },
  {
    title: "Launch",
    summary: "We release carefully, with the production environment, monitoring and support in place.",
    happens: ["Production setup and data migration", "Final QA and performance checks", "Go-live and early-life support"],
    deliverables: ["Live product", "Monitoring and alerts", "Training and handover materials"],
    involvement: "User acceptance testing and preparing your team for launch.",
  },
  {
    title: "Grow",
    summary: "We keep the product healthy and help it evolve as your business and users change.",
    happens: ["Maintenance and security updates", "Analytics and user feedback", "New features and improvements"],
    deliverables: ["Regular releases", "Health and usage reports", "Prioritized improvement roadmap"],
    involvement: "Sharing business priorities so improvements stay focused on what matters.",
  },
];

export const collaboration = [
  {
    title: "One accountable lead",
    body: "A single point of contact who knows your project inside out and keeps everyone aligned.",
  },
  {
    title: "Regular demos",
    body: "You see working software every few weeks — not just status reports.",
  },
  {
    title: "Shared visibility",
    body: "A shared project board and staging environment, so progress is never a mystery.",
  },
  {
    title: "Clear decisions",
    body: "Changes to scope, cost or timeline are discussed and agreed before they happen.",
  },
  {
    title: "Plain language",
    body: "We explain technical choices in business terms, so you can make informed decisions.",
  },
  {
    title: "Honest advice",
    body: "If something isn’t worth building, or an existing product fits better, we’ll say so.",
  },
];

export const standards = [
  { title: "Code review", body: "Every change is reviewed by another engineer before it’s merged." },
  { title: "Automated testing", body: "Tests run on every change, so regressions are caught before release." },
  { title: "Security by default", body: "Access control, encryption, dependency updates and secure handling of data." },
  { title: "Accessibility", body: "Interfaces designed and tested to work for people using assistive technology." },
  { title: "Performance", body: "Fast load times and responsive interfaces, measured rather than assumed." },
  { title: "Documentation", body: "Architecture, setup and operational notes your future team can rely on." },
];

export const ownership = [
  "You own the source code, designs and project assets.",
  "Code lives in a repository your organization controls.",
  "Documentation for setup, architecture and operations.",
  "Training for the people who will run and use the system.",
  "A clean handover to your internal team if you choose.",
];

export const support = [
  "Monitoring, maintenance and security updates.",
  "Bug fixes and help for your team.",
  "Capacity for improvements and new features.",
  "Regular reviews of performance, usage and priorities.",
];

export const howWeWorkFaqs = [
  {
    question: "How involved do we need to be?",
    answer:
      "Most involvement happens early — workshops during discovery and design reviews — then regular demos during the build. We keep meetings focused and make sure your time is spent on decisions only you can make.",
  },
  {
    question: "What if our requirements change during the project?",
    answer:
      "They usually do, and that’s fine. We work in short cycles so priorities can shift. Any change that affects scope, cost or timeline is discussed and agreed with you first.",
  },
  {
    question: "Do you work with our in-house team?",
    answer:
      "Yes. We can work alongside your developers, designers or IT team — sharing code, reviews and knowledge so they’re confident owning the product after launch.",
  },
  {
    question: "How do you estimate cost?",
    answer:
      "We estimate from a defined scope. For larger or less certain projects, a short discovery phase comes first so the estimate is based on real detail rather than assumptions.",
  },
];
