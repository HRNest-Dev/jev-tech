export type Product = {
  name: string;
  category: string;
  summary: string;
  modules: { title: string; description: string }[];
  audiences: string[];
  /** Public product URL. The "Visit" link only renders when this is set. */
  url?: string;
};

export const staffdem: Product = {
  name: "StaffDem",
  category: "HR & payroll platform",
  summary:
    "StaffDem is our workforce platform for growing organizations — bringing payroll, leave, employee records and self-service into one system.",
  modules: [
    { title: "Payroll", description: "Automated pay runs, deductions and payslips." },
    { title: "Leave & attendance", description: "Requests, approvals and balances in one place." },
    { title: "Employee self-service", description: "Staff manage their own records and requests." },
    { title: "HR records & reporting", description: "A single source of truth for people data." },
  ],
  audiences: [
    "HR teams replacing spreadsheets and paper forms",
    "Finance teams that need accurate, auditable payroll",
    "Managers approving leave and requests",
    "Employees who want answers without chasing HR",
  ],
};

/** What operating our own product proves about how we build for clients. */
export const productLessons = [
  {
    title: "SaaS architecture",
    description: "Multi-tenant design, onboarding, subscriptions and data isolation between organizations.",
  },
  {
    title: "Complex workflows",
    description: "Approval chains, payroll rules and edge cases that real organizations depend on.",
  },
  {
    title: "Payments & finance",
    description: "Calculations and records that must be correct every time, with a full audit trail.",
  },
  {
    title: "Infrastructure & operations",
    description: "Hosting, monitoring, backups and security for software people rely on daily.",
  },
  {
    title: "Continuous delivery",
    description: "Shipping improvements to live users without disrupting their work.",
  },
  {
    title: "Support & iteration",
    description: "Listening to customers and turning feedback into a better product over time.",
  },
];
