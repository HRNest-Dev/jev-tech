import type { Insight } from "../types";

export const employeeSoftware: Insight = {
  slug: "designing-software-employees-want-to-use",
  title: "Designing software employees actually want to use",
  excerpt:
    "Internal tools are often designed last and used most. Why that matters, and the practical design choices that make staff adopt new software instead of working around it.",
  category: "Design",
  tags: ["UX", "Internal tools", "Adoption"],
  author: "JEV Technologies",
  date: "2026-09-28",
  cover: "insight-employee-software",
  status: "published",
  body: [
    {
      type: "p",
      text: "Customer-facing products get research, testing and polish. Internal systems — the ones staff use for hours every day — are often built from a requirements list and handed over with a training manual. Then organizations wonder why people keep using spreadsheets.",
    },
    {
      type: "p",
      text: "Adoption is the real measure of an internal system. If people avoid it, the investment doesn’t pay back, no matter how complete the feature list is.",
    },
    { type: "h2", text: "Design for the daily task, not the org chart" },
    {
      type: "p",
      text: "Systems are frequently structured around departments or database tables: an Employees section, a Payroll section, a Settings section. But people don’t think in modules. They think in tasks: approve this request, check my balance, find last month’s figure. Put the most common tasks one step away.",
    },
    { type: "h2", text: "Watch people work before designing anything" },
    {
      type: "p",
      text: "Interviews tell you what people think they do. Observation shows you what they actually do — the sticky notes, the second screen with a spreadsheet, the colleague they always ask. Those workarounds are the most valuable requirements you’ll find.",
    },
    { type: "h2", text: "Principles that improve adoption" },
    {
      type: "ul",
      items: [
        "Show people what needs their attention first — pending approvals, overdue items, today’s work.",
        "Use the language your staff use, not system or technical terms.",
        "Reduce typing: sensible defaults, remembered choices and pre-filled forms.",
        "Make status obvious. People should never wonder whether something was submitted or approved.",
        "Design for the devices people actually use, including mid-range phones.",
        "Make errors easy to recover from, with clear messages that say what to do next.",
      ],
    },
    {
      type: "quote",
      text: "If staff need a manual to complete a routine task, the problem is usually the design, not the staff.",
    },
    { type: "h2", text: "Self-service reduces load on everyone" },
    {
      type: "p",
      text: "When employees can check their own payslips, leave balances or request status, HR and finance spend less time answering the same questions. Good self-service design is one of the fastest ways an internal system pays for itself.",
    },
    { type: "h2", text: "Test with real users — briefly and often" },
    {
      type: "p",
      text: "You don’t need a lab. Put a prototype in front of five people who will use the system and ask them to complete real tasks. Watch where they hesitate. A few short sessions before development will surface most of the problems that would otherwise appear after launch.",
    },
    { type: "h2", text: "Plan the rollout as carefully as the build" },
    {
      type: "p",
      text: "Introduce new systems in stages, start with teams willing to give feedback, and make it easy to report problems. Early users who feel heard become the system’s best advocates.",
    },
  ],
};
