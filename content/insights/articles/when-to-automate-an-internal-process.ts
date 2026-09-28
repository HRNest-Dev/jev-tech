import type { Insight } from "../types";

export const whenToAutomate: Insight = {
  slug: "when-to-automate-an-internal-process",
  title: "When should you automate an internal process?",
  excerpt:
    "Automation saves time only when it’s aimed at the right work. A simple way to decide which processes to automate first — and which to leave alone.",
  category: "Business & Technology",
  tags: ["Automation", "Operations", "Process improvement"],
  author: "JEV Technologies",
  date: "2026-09-28",
  cover: "insight-automation",
  status: "published",
  body: [
    {
      type: "p",
      text: "Almost every organization has work that feels like it should be automatic: copying figures from one system to another, chasing approvals, compiling the same report every Monday. The temptation is to automate all of it. The better approach is to automate the right things, in the right order.",
    },
    { type: "h2", text: "Start by measuring the work, not the frustration" },
    {
      type: "p",
      text: "The processes people complain about most loudly are not always the ones costing the most. Before choosing what to automate, estimate three things for each candidate process: how often it happens, how long it takes each time, and what an error costs when it goes wrong.",
    },
    {
      type: "p",
      text: "A ten-minute task done fifty times a day by several people is a far bigger opportunity than a two-hour task done once a quarter — even if the quarterly task is more painful.",
    },
    { type: "h2", text: "Good candidates for automation" },
    {
      type: "ul",
      items: [
        "The steps are the same every time, or follow clear rules.",
        "The same data is typed into more than one system.",
        "Work waits in someone’s inbox before it can move forward.",
        "Mistakes are common and expensive to fix — payroll, invoicing, stock.",
        "You need a reliable record of who did what, and when.",
      ],
    },
    { type: "h2", text: "Poor candidates — for now" },
    {
      type: "ul",
      items: [
        "The process changes every few weeks, or nobody agrees how it should work.",
        "Most cases are exceptions that need human judgement.",
        "It happens so rarely that automation would never pay back.",
        "The underlying data is unreliable. Automating bad data only spreads errors faster.",
      ],
    },
    {
      type: "quote",
      text: "Automating a broken process just gives you a faster broken process. Fix the steps first, then automate them.",
    },
    { type: "h2", text: "Fix the process before you automate it" },
    {
      type: "p",
      text: "Map the process as it actually happens today, including the workarounds. You’ll often find steps that exist only because of an old system, or approvals nobody remembers the reason for. Removing those is free. Automating them is not.",
    },
    { type: "h2", text: "Automate in small, useful steps" },
    {
      type: "ol",
      items: [
        "Pick one process with high volume and clear rules.",
        "Automate the most repetitive part first — often data entry or routing.",
        "Keep a human in the loop for exceptions and approvals.",
        "Measure the time saved and errors avoided after a few weeks.",
        "Use what you learn to choose the next process.",
      ],
    },
    {
      type: "p",
      text: "Small wins build confidence across the organization and make the case for further investment far better than a large, all-at-once transformation plan.",
    },
    { type: "h2", text: "Off-the-shelf or custom?" },
    {
      type: "p",
      text: "Many common processes — expense approvals, leave requests, invoicing — are well served by existing tools. Custom automation makes sense when the process is specific to how you operate, spans several systems, or when existing tools force you to change a process that works well for your business.",
    },
  ],
};
