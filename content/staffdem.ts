import type { StaticImageData } from "next/image";

import payrollOverview from "@/public/images/staffdem/payroll-overview.webp";
import hrDashboard from "@/public/images/staffdem/hr-dashboard.webp";
import salaryProcessing from "@/public/images/staffdem/salary-processing.webp";
import employeeDashboard from "@/public/images/staffdem/employee-dashboard.webp";
import leaveRequests from "@/public/images/staffdem/leave-requests.webp";
import performanceReviews from "@/public/images/staffdem/performance-reviews.webp";
import reports from "@/public/images/staffdem/reports.webp";

// Screenshots captured from the StaffDem demo workspace (demo data only).
export const staffdemScreens = {
  payrollOverview: { src: payrollOverview, alt: "StaffDem payroll overview showing net pay, gross breakdown and the payroll approval workflow" },
  hrDashboard: { src: hrDashboard, alt: "StaffDem HR dashboard with headcount, payroll status and workforce charts" },
  salaryProcessing: { src: salaryProcessing, alt: "StaffDem salary processing screen listing payroll batches and approval progress" },
  employeeDashboard: { src: employeeDashboard, alt: "StaffDem employee self-service dashboard with leave balance, payslip and pending actions" },
  leaveRequests: { src: leaveRequests, alt: "StaffDem leave requests screen showing leave policies and remaining balances" },
  performanceReviews: { src: performanceReviews, alt: "StaffDem performance reviews screen tracking review cycles and completion" },
  reports: { src: reports, alt: "StaffDem reports studio with report domains for employees, leave, payroll and performance" },
} satisfies Record<string, { src: StaticImageData; alt: string }>;

export type StaffdemScreen = keyof typeof staffdemScreens;

/** Modules shown in the interactive tour. */
export const tour: {
  id: string;
  name: string;
  title: string;
  description: string;
  points: string[];
  screen: StaffdemScreen;
}[] = [
  {
    id: "payroll",
    name: "Payroll",
    title: "Run payroll with approvals built in.",
    description:
      "Process salary batches, route them through sign-off, then track payouts and statutory remittances — with a clear view of where every naira went.",
    points: ["Salary batches & off-cycle runs", "Multi-step payroll approval", "Payouts & payment profiles", "NHF, pension & PAYE remittances"],
    screen: "salaryProcessing",
  },
  {
    id: "leave",
    name: "Leave",
    title: "Leave that manages itself.",
    description:
      "Employees see their balances and apply in seconds. Policies, approvals and relief officers are handled automatically.",
    points: ["Configurable leave policies", "Live balances for every employee", "Approval routing & relief officers", "Full leave history"],
    screen: "leaveRequests",
  },
  {
    id: "performance",
    name: "Performance",
    title: "Performance reviews people actually complete.",
    description:
      "Set up review cycles and KPIs, assign reviewers and follow progress across the organization — through to improvement plans.",
    points: ["Manager & self-assessment reviews", "KPI review cycles", "Progress tracking & deadlines", "Improvement plans"],
    screen: "performanceReviews",
  },
  {
    id: "self-service",
    name: "Self-service",
    title: "Every employee, their own HR desk.",
    description:
      "Staff check payslips, apply for leave, complete training and respond to approvals themselves — so HR spends less time on routine requests.",
    points: ["Payslips & payroll history", "Leave & other requests", "Training & company documents", "Approvals on the go"],
    screen: "employeeDashboard",
  },
  {
    id: "reports",
    name: "Reports",
    title: "Answers without spreadsheets.",
    description:
      "Generate reports across employees, leave, payroll, exits and performance with filters that match the question you’re asking.",
    points: ["Report domains by area", "Dynamic filters", "Exportable results", "Activity log & audit trail"],
    screen: "reports",
  },
];

/** Every module in the platform, as seen in the product navigation. */
export const modules = [
  { name: "People & records", body: "Employee profiles, documents, departments and employment history." },
  { name: "Onboarding & probation", body: "Structured onboarding and probation tracking for new hires." },
  { name: "Payroll", body: "Salary processing, payouts, tax reliefs and payment profiles." },
  { name: "Remittances", body: "Statutory remittances including NHF, pension and PAYE." },
  { name: "Leave management", body: "Policies, balances, applications, approvals and relief officers." },
  { name: "Performance", body: "Review cycles, KPI reviews and improvement plans." },
  { name: "Training & development", body: "Training sessions, progress tracking and certificates." },
  { name: "Discipline", body: "Queries, cases, sanctions and appeals with a clear record." },
  { name: "Redeployment & careers", body: "Transfers, career progression and bulk pay structures." },
  { name: "Exit management", body: "Resignations, exits and clearance in one workflow." },
  { name: "Approvals", body: "One queue for every request that needs a decision." },
  { name: "Reports & activity log", body: "Reporting across modules and a full audit trail." },
];
