export type ProblemVisual = "dashboard" | "workflow" | "storefront" | "website" | "mobile" | "integration";

export const problems: {
  id: string;
  problem: string;
  solution: string;
  outcome: string[];
  service: string;
  serviceLabel: string;
  visual: ProblemVisual;
}[] = [
  {
    id: "payroll",
    problem: "Payroll and HR run on spreadsheets",
    solution: "An HR and payroll system that runs pay, leave, records and approvals in one place.",
    outcome: ["Pay runs in hours, not days", "Fewer calculation errors", "Staff self-service"],
    service: "custom-software",
    serviceLabel: "Custom Software",
    visual: "dashboard",
  },
  {
    id: "approvals",
    problem: "Approvals get lost in email and chat",
    solution: "A workflow system with clear owners, deadlines and a full audit trail for every decision.",
    outcome: ["Everyone sees what’s pending", "Nothing waits on one inbox", "A record of who approved what"],
    service: "custom-software",
    serviceLabel: "Custom Software",
    visual: "workflow",
  },
  {
    id: "commerce",
    problem: "Customers can’t order and pay online",
    solution: "A commerce platform with local payments, inventory and order management built in.",
    outcome: ["Sell around the clock", "Stock that stays accurate", "Orders in one dashboard"],
    service: "ecommerce",
    serviceLabel: "E-Commerce",
    visual: "storefront",
  },
  {
    id: "website",
    problem: "Our website doesn’t reflect who we are",
    solution: "A corporate website that explains what you do clearly and turns interest into enquiries.",
    outcome: ["A credible first impression", "Content your team can update", "Enquiries you can track"],
    service: "corporate-websites",
    serviceLabel: "Corporate Websites",
    visual: "website",
  },
  {
    id: "field",
    problem: "Field teams still report on paper",
    solution: "A mobile app that works offline and syncs visits, reports and photos to your back office.",
    outcome: ["Real-time visibility", "No re-typing reports", "Works with poor connectivity"],
    service: "mobile-apps",
    serviceLabel: "Mobile Applications",
    visual: "mobile",
  },
  {
    id: "systems",
    problem: "Our systems don’t talk to each other",
    solution: "Integrations that connect payments, accounting, CRM and HR so data flows automatically.",
    outcome: ["No duplicate data entry", "One reliable picture", "Fewer reconciliation errors"],
    service: "api-integration",
    serviceLabel: "APIs & Integration",
    visual: "integration",
  },
];

export const engagementModels = [
  {
    name: "Discovery",
    tagline: "Start with clarity",
    description:
      "A short, focused engagement to define the problem, shape requirements and plan the right solution before committing to a build.",
    includes: ["Workshops with your team", "Requirements & scope", "Architecture direction", "Estimate & roadmap"],
    bestFor: "Ideas that need shaping, or projects with open questions.",
  },
  {
    name: "Project delivery",
    tagline: "From plan to launch",
    description:
      "We design, build, test and launch your product with a dedicated team, clear milestones and regular demos along the way.",
    includes: ["Product design", "Engineering & QA", "Integrations", "Deployment & launch"],
    bestFor: "Websites, platforms and applications with a defined scope.",
    featured: true,
  },
  {
    name: "Ongoing partnership",
    tagline: "Support and growth",
    description:
      "After launch we keep your product secure, monitored and improving — with capacity for new features as your business changes.",
    includes: ["Monitoring & maintenance", "Security updates", "Feature development", "Priority support"],
    bestFor: "Products your business depends on every day.",
  },
];

export const homeFaqs = [
  {
    question: "What if we only have an idea, not a specification?",
    answer:
      "That’s a common and good starting point. Our discovery process turns a problem or idea into clear requirements, a scope and a plan before any code is written.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "It depends on scope, complexity and integrations. After an initial conversation we give you a clear estimate, and for larger projects we recommend a short discovery phase so the estimate is based on real detail rather than guesswork.",
  },
  {
    question: "How long does it take?",
    answer:
      "A focused website can launch in weeks; custom platforms usually take a few months for a first release. We plan in milestones so you see working software early and often.",
  },
  {
    question: "Do you support what you build after launch?",
    answer:
      "Yes. We offer ongoing support covering hosting, monitoring, security updates and improvements. We also run our own product, StaffDem, so long-term support is part of how we work.",
  },
  {
    question: "Can you improve or take over an existing system?",
    answer:
      "Yes. We start with a review of the code, infrastructure and how the system is used, then recommend whether to improve, extend or gradually replace it.",
  },
];

/** Add real, approved client quotes here. The section is hidden while this is empty. */
export const testimonials: { quote: string; name: string; role: string; organization: string }[] = [];
