export const reasons = [
  {
    title: "Real problems",
    body: "We build software that organizations depend on every day — payroll, operations, commerce — not throwaway prototypes.",
  },
  {
    title: "Client work and our own product",
    body: "Work across client projects and StaffDem, our own platform, and see how software is built and run for the long term.",
  },
  {
    title: "Craft that matters",
    body: "Code review, testing, design critique and documentation are part of the job, not optional extras.",
  },
  {
    title: "Room to grow",
    body: "A small team means real responsibility early, direct access to clients and a say in how things are done.",
  },
];

export const disciplines = [
  { title: "Engineering", body: "Frontend, backend and mobile engineers who care about maintainable, well-tested software." },
  { title: "Product design", body: "Designers who research, prototype and test — and work closely with engineering." },
  { title: "Product & delivery", body: "People who keep projects clear, organized and moving, with clients and the team aligned." },
  { title: "Operations & support", body: "People who keep products and customers running smoothly after launch." },
];

// TODO(content): confirm these steps match JEV's actual hiring process.
export const hiringSteps = [
  { title: "Apply", body: "Send us your CV or portfolio and a short note about the work you’re proud of." },
  { title: "Conversation", body: "An informal call to get to know each other and talk about the role." },
  { title: "Practical exercise", body: "A focused task or review that reflects the real work — no trick questions." },
  { title: "Meet the team", body: "Talk with the people you’d work with day to day." },
  { title: "Offer", body: "We move quickly and keep you informed at every stage." },
];

export type OpenRole = {
  title: string;
  team: string;
  location: string;
  type: string;
  summary: string;
  /** Where to apply — a mailto: or job-board link. */
  applyHref: string;
};

/** Add open roles here. While empty, the page invites general applications. */
export const openRoles: OpenRole[] = [];
