import type { Insight } from "../types";

export const planningProject: Insight = {
    slug: "how-to-plan-a-custom-software-project",
    title: "How to plan a custom software project",
    excerpt:
      "Most software projects that go wrong do so before a line of code is written. A practical guide to planning one properly.",
    category: "Product",
    tags: ["Planning", "Discovery", "Project management"],
    author: "JEV Technologies",
    date: "2026-09-26",
    cover: "insight-project-planning",
    status: "published",
    body: [
      {
        type: "p",
        text: "Projects rarely fail because the engineering is too hard. They fail because the problem was unclear, the scope kept moving, or the people who would use the software were never properly involved. Good planning addresses all three.",
      },
      { type: "h2", text: "1. Start with the problem, not the features" },
      {
        type: "p",
        text: "Write down what is going wrong today and what it costs — in time, money, errors or missed opportunities. A clear problem statement becomes the test for every later decision: does this feature help solve it?",
      },
      { type: "h2", text: "2. Involve the people who will use it" },
      {
        type: "p",
        text: "The manager commissioning a system and the staff who use it every day often see the process very differently. Talk to both. Watch the work being done. The most valuable requirements usually come from the people closest to the task.",
      },
      { type: "h2", text: "3. Define what 'done' looks like" },
      {
        type: "ul",
        items: [
          "Who are the users and what are their roles?",
          "What are the core workflows the first version must support?",
          "Which existing systems does it need to connect to?",
          "What data needs to be migrated?",
          "How will you measure whether it worked?",
        ],
      },
      { type: "h2", text: "4. Separate the first version from the full vision" },
      {
        type: "p",
        text: "Keep a list of everything the system could eventually do, then choose the smallest set that delivers real value. Releasing a focused first version sooner lets you learn from actual use instead of assumptions.",
      },
      { type: "h2", text: "5. Design before you build" },
      {
        type: "p",
        text: "Wireframes and clickable prototypes are cheap to change. Code is not. Putting a prototype in front of real users for an hour will surface misunderstandings that would otherwise appear weeks into development.",
      },
      { type: "h2", text: "6. Plan for life after launch" },
      {
        type: "p",
        text: "Decide early who will own the system, how it will be supported, and how improvements will be prioritized. Training, documentation and a clear support arrangement are part of the project, not extras.",
      },
      {
        type: "quote",
        text: "A clear problem, involved users and a focused first release will do more for a project's success than any technology choice.",
      },
    ],
  };
