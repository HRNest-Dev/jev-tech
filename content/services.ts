import type { ImageKey } from "./images";

export type ServiceGroup = "Build" | "Design" | "Technology";

export type ServiceVisual =
  | "website"
  | "storefront"
  | "workflow"
  | "dashboard"
  | "mobile"
  | "design"
  | "integration"
  | "pipeline"
  | "roadmap";

export type Service = {
  slug: string;
  name: string;
  group: ServiceGroup;
  /** One line for menus, cards and meta descriptions. */
  summary: string;
  headline: string;
  intro: string;
  /** Product scene shown in the hero. */
  visual: ServiceVisual;
  /** Small floating notification over the hero scene. */
  toast?: { title: string; detail: string };
  /** Photo used alongside the approach section. */
  image: ImageKey;
  signs: string[];
  offerings: { title: string; description: string }[];
  approach: { title: string; intro: string; points: { title: string; body: string }[] };
  capabilities: string[];
  deliverables: string[];
  /** Indicative phases; confirmed per project after discovery. */
  timeline: { phase: string; duration: string; body: string }[];
  faqs: { question: string; answer: string }[];
  related: string[];
};

export const services: Service[] = [
  /* ---------------------------------------------------------------- */
  {
    slug: "corporate-websites",
    name: "Corporate Websites",
    group: "Build",
    summary: "Websites for companies and institutions that communicate credibility and create opportunities.",
    headline: "Digital experiences that communicate credibility and create opportunities.",
    intro:
      "Your website is often the first serious conversation a client, partner or candidate has with your organization. We design and build corporate websites that explain what you do clearly, reflect the quality of your work and turn interest into enquiries.",
    visual: "website",
    toast: { title: "New enquiry received", detail: "Partnership request · routed to business development" },
    image: "corporate-websites",
    signs: [
      "Your website no longer reflects the size or quality of your organization.",
      "Visitors can’t quickly tell what you do or who you serve.",
      "Updating a page means waiting on a developer.",
      "The site is slow on mobile, or you can’t tell whether it generates enquiries.",
    ],
    offerings: [
      {
        title: "Corporate & institutional websites",
        description: "Multi-page sites for corporations, institutions and organizations with many audiences to serve.",
      },
      {
        title: "Service business websites",
        description: "Sites that explain complex services simply and guide visitors towards a conversation.",
      },
      {
        title: "Landing pages & campaigns",
        description: "Focused pages for launches, campaigns and events, built to measure what works.",
      },
      {
        title: "Portals",
        description: "Secure areas for clients, members or partners to access documents, updates and services.",
      },
    ],
    approach: {
      title: "Structure first, then style.",
      intro:
        "A corporate website succeeds when the right people find the right information quickly. We plan the structure and content around your audiences before designing a single page.",
      points: [
        {
          title: "Built around your audiences",
          body: "Clients, partners, investors and candidates each get a clear path to what they need.",
        },
        {
          title: "Fast and accessible by default",
          body: "Performance, accessibility and SEO foundations are part of the build, not add-ons.",
        },
        {
          title: "Easy for your team to run",
          body: "A content management system your staff can use confidently after launch.",
        },
      ],
    },
    capabilities: [
      "Website strategy",
      "Information architecture",
      "Content structure",
      "UX & UI design",
      "Frontend & backend development",
      "Content management (CMS)",
      "SEO foundations",
      "Analytics",
      "Integrations",
      "Performance optimization",
      "Security",
      "Hosting & deployment",
      "Maintenance & support",
    ],
    deliverables: [
      "Sitemap and content structure",
      "Page designs for desktop and mobile",
      "Production website with CMS",
      "SEO setup and analytics",
      "Hosting, SSL and deployment",
      "Team training and documentation",
    ],
    timeline: [
      { phase: "Discovery & structure", duration: "1–2 weeks", body: "Audiences, goals, sitemap and content plan." },
      { phase: "Design", duration: "2–3 weeks", body: "Visual direction, key pages and responsive layouts." },
      { phase: "Build & content", duration: "3–5 weeks", body: "Development, CMS setup and content population." },
      { phase: "Launch & handover", duration: "1 week", body: "Testing, go-live, training and support handover." },
    ],
    faqs: [
      {
        question: "Can our team update the website ourselves?",
        answer:
          "Yes. Where content changes regularly we set up a content management system so your team can edit pages, news and listings without a developer.",
      },
      {
        question: "Do you write the content?",
        answer:
          "We structure the content and help shape the messaging with you. For larger sites we can bring in copywriting support, but the knowledge of your business always comes from your team.",
      },
      {
        question: "Will our website rank on Google?",
        answer:
          "We build strong technical SEO foundations — fast pages, clean structure, proper metadata and structured data. Rankings also depend on content and competition over time, and we can advise on both.",
      },
      {
        question: "What happens after launch?",
        answer:
          "We handle hosting, monitoring, security updates and improvements on an ongoing support plan, or hand over cleanly to your internal team if you prefer.",
      },
    ],
    related: ["ecommerce", "ui-ux-design", "cloud-devops"],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "ecommerce",
    name: "E-Commerce",
    group: "Build",
    summary: "Commerce platforms built around how your business sells — B2B, B2C and marketplaces.",
    headline: "Commerce experiences built around how your business sells.",
    intro:
      "Selling online is more than a product page and a checkout. We build commerce systems that connect your catalog, payments, inventory, fulfilment and reporting — so the store supports your operations instead of creating extra work.",
    visual: "storefront",
    toast: { title: "Order #10483 paid", detail: "₦84,500 · stock updated · dispatch notified" },
    image: "ecommerce",
    signs: [
      "Orders arrive through calls, chat and spreadsheets with no single view.",
      "Stock levels online and in the warehouse don’t match.",
      "Your current platform can’t handle your pricing, B2B accounts or delivery rules.",
      "Customers abandon checkout because paying is difficult.",
    ],
    offerings: [
      {
        title: "B2C online stores",
        description: "Fast, trustworthy shopping experiences with smooth checkout and customer accounts.",
      },
      {
        title: "B2B commerce",
        description: "Custom pricing, bulk ordering, approvals and account management for business buyers.",
      },
      {
        title: "Marketplaces",
        description: "Multi-vendor platforms with onboarding, commissions, payouts and moderation.",
      },
      {
        title: "Commerce operations",
        description: "Admin dashboards for orders, inventory, promotions and reporting in one place.",
      },
    ],
    approach: {
      title: "Designed around your operations.",
      intro:
        "A store is only as good as what happens after the order. We map how you price, stock, fulfil and account for sales, then build the storefront and back office around it.",
      points: [
        {
          title: "Checkout that converts",
          body: "Simple, mobile-first checkout with the payment methods your customers already use.",
        },
        {
          title: "One source of truth",
          body: "Orders, inventory and customers stay in sync across your store, warehouse and finance.",
        },
        {
          title: "Built to grow",
          body: "Promotions, new channels and higher volumes without replatforming.",
        },
      ],
    },
    capabilities: [
      "Product catalogs",
      "Shopping cart & checkout",
      "Customer accounts",
      "Payment gateways",
      "Inventory management",
      "Order management",
      "Promotions & discounts",
      "Shipping & logistics integrations",
      "Admin dashboards",
      "Reporting & analytics",
      "CRM & ERP integration",
      "Commerce APIs",
    ],
    deliverables: [
      "Storefront for web and mobile",
      "Checkout with payment integration",
      "Order, inventory and customer admin",
      "Delivery and logistics setup",
      "Sales reporting",
      "Staff training and launch support",
    ],
    timeline: [
      { phase: "Discovery", duration: "1–2 weeks", body: "Catalog, pricing, fulfilment and payment requirements." },
      { phase: "Design", duration: "2–4 weeks", body: "Storefront, product, cart and checkout experiences." },
      { phase: "Build & integrations", duration: "5–10 weeks", body: "Store, admin, payments, logistics and data migration." },
      { phase: "Test & launch", duration: "1–2 weeks", body: "Payment testing, order rehearsals and go-live." },
    ],
    faqs: [
      {
        question: "Which payment providers can you integrate?",
        answer:
          "We integrate the gateways your customers use, including local card and bank-transfer providers and international processors, and can support more than one where needed.",
      },
      {
        question: "Should we use a platform like Shopify or build custom?",
        answer:
          "It depends on how you sell. Standard retail often fits an existing platform well. Complex pricing, B2B workflows or marketplace features usually justify a custom build. We’ll recommend the approach that fits, not the one that’s biggest.",
      },
      {
        question: "Can you migrate products and customers from our current store?",
        answer: "Yes. We plan and test data migration for products, customers and order history as part of the project.",
      },
      {
        question: "Can the store connect to our accounting or inventory system?",
        answer:
          "Yes. We integrate with accounting, ERP and warehouse systems so orders and stock stay consistent without manual re-entry.",
      },
    ],
    related: ["corporate-websites", "api-integration", "mobile-apps"],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "custom-software",
    name: "Custom Software",
    group: "Build",
    summary: "Systems engineered around your processes when off-the-shelf software can’t keep up.",
    headline: "Software built around your business.",
    intro:
      "When off-the-shelf tools cannot support how your organization operates, we design and engineer systems around your processes, people and objectives — from internal operations platforms to customer-facing products.",
    visual: "workflow",
    toast: { title: "Request approved", detail: "Finance review complete · requester notified" },
    image: "custom-software",
    signs: [
      "Your team re-enters the same data into several systems every day.",
      "Critical processes depend on spreadsheets only a few people understand.",
      "Approvals happen over email or chat, with no record of decisions.",
      "You pay for several tools that each solve part of the problem.",
    ],
    offerings: [
      {
        title: "Operations & workflow systems",
        description: "Replace spreadsheets and email chains with structured workflows, approvals and audit trails.",
      },
      {
        title: "HR, payroll & people platforms",
        description: "Workforce systems built on the experience of running our own HR platform, StaffDem.",
      },
      {
        title: "Finance & payment systems",
        description: "Loan management, collections, payments and reconciliation with the controls finance teams need.",
      },
      {
        title: "Customer & employee portals",
        description: "Self-service portals that reduce manual requests and give people answers faster.",
      },
      {
        title: "CRM & ERP-style platforms",
        description: "Connected systems for sales, operations and resources, shaped around how you actually work.",
      },
      {
        title: "SaaS products",
        description: "Multi-tenant products with subscriptions, onboarding and the infrastructure to scale.",
      },
    ],
    approach: {
      title: "We learn how you work before we write code.",
      intro:
        "Custom software only pays off when it fits the real process — including the exceptions and workarounds. We spend time with the people doing the work, then build in stages you can use early.",
      points: [
        {
          title: "Process before features",
          body: "We map the workflow as it really happens, then decide what the system should do.",
        },
        {
          title: "Release early, improve often",
          body: "A focused first version in use quickly, followed by regular improvements.",
        },
        {
          title: "Yours to own",
          body: "Documented, maintainable code and infrastructure that your organization owns.",
        },
      ],
    },
    capabilities: [
      "Product discovery",
      "Process mapping",
      "System architecture",
      "UX & UI design",
      "Backend engineering",
      "Web & mobile interfaces",
      "Roles & permissions",
      "Reporting & dashboards",
      "Integrations",
      "Automation",
      "Data migration",
      "Testing & QA",
      "Deployment",
      "Ongoing support",
    ],
    deliverables: [
      "Process maps and requirements",
      "System architecture",
      "Designed and tested application",
      "Roles, permissions and audit trails",
      "Data migration and integrations",
      "Documentation, training and support",
    ],
    timeline: [
      { phase: "Discovery", duration: "2–4 weeks", body: "Process mapping, requirements, scope and architecture." },
      { phase: "Design", duration: "3–6 weeks", body: "User flows, prototypes and interface design, tested with users." },
      { phase: "Build in releases", duration: "8–20+ weeks", body: "Iterative development with demos every few weeks." },
      { phase: "Rollout", duration: "2–4 weeks", body: "Data migration, training, go-live and early support." },
    ],
    faqs: [
      {
        question: "How do we know if we need custom software?",
        answer:
          "If your team is working around your tools — duplicating data, relying on spreadsheets or waiting on manual approvals — and existing products can’t be configured to fit, custom software is worth exploring. We’ll tell you honestly if an existing product would serve you better.",
      },
      {
        question: "Who owns the code?",
        answer: "You do. On completion and payment, the source code and project assets belong to your organization.",
      },
      {
        question: "Can you work with our existing systems?",
        answer:
          "Yes. Most custom systems need to connect to accounting, HR, payment or legacy tools. Integration is planned from the start, not bolted on at the end.",
      },
      {
        question: "How do you keep the project on budget?",
        answer:
          "We agree a clear scope for each release, show working software regularly and discuss any change in scope before it affects cost or timeline.",
      },
    ],
    related: ["web-applications", "api-integration", "technology-consulting"],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "web-applications",
    name: "Web Applications",
    group: "Build",
    summary: "SaaS platforms, dashboards and portals engineered for real-world scale.",
    headline: "Web applications that stay fast, secure and maintainable as you grow.",
    intro:
      "From customer portals to data-heavy dashboards and multi-tenant SaaS, we engineer web applications with the architecture, testing and infrastructure they need to stay reliable long after launch.",
    visual: "dashboard",
    toast: { title: "Report ready", detail: "Weekly revenue summary · shared with 4 managers" },
    image: "web-applications",
    signs: [
      "You’re launching a SaaS product or customer-facing platform.",
      "Your team needs one dashboard instead of five exports.",
      "An existing application is slow, fragile or hard to change.",
      "You expect significant growth in users or data.",
    ],
    offerings: [
      {
        title: "SaaS platforms",
        description: "Multi-tenant products with billing, onboarding, roles and admin tools.",
      },
      {
        title: "Dashboards & reporting",
        description: "Clear views of complex data, designed around the decisions people need to make.",
      },
      {
        title: "Portals",
        description: "Customer, partner and employee portals with secure access and self-service.",
      },
      {
        title: "Real-time & workflow apps",
        description: "Live updates, notifications and multi-step workflows across teams.",
      },
    ],
    approach: {
      title: "Engineered for the long run.",
      intro:
        "Web applications live for years and change constantly. We make architecture, testing and deployment decisions that keep them fast to improve and safe to change.",
      points: [
        {
          title: "Sound architecture",
          body: "Clear boundaries, well-designed APIs and data models that grow with your product.",
        },
        {
          title: "Automated quality",
          body: "Automated tests and deployment pipelines so every release is predictable.",
        },
        {
          title: "Performance you can measure",
          body: "Monitoring and performance budgets from day one, not after users complain.",
        },
      ],
    },
    capabilities: [
      "SaaS & multi-tenancy",
      "Dashboards",
      "Customer & employee portals",
      "Administration systems",
      "Real-time features",
      "Workflow engines",
      "Progressive web apps",
      "Authentication & roles",
      "API design",
      "Automated testing",
      "Performance & caching",
      "Monitoring",
    ],
    deliverables: [
      "Product and technical specification",
      "Designed, responsive application",
      "APIs and admin tools",
      "Automated tests and CI/CD pipeline",
      "Production infrastructure and monitoring",
      "Technical documentation",
    ],
    timeline: [
      { phase: "Discovery", duration: "2–3 weeks", body: "Users, data, architecture and release plan." },
      { phase: "Design", duration: "3–5 weeks", body: "Flows, dashboards and interface system." },
      { phase: "Build", duration: "8–16 weeks", body: "Iterative engineering with regular demos." },
      { phase: "Launch", duration: "1–2 weeks", body: "Load testing, security review and release." },
    ],
    faqs: [
      {
        question: "What technologies do you use?",
        answer:
          "Typically React and Next.js with TypeScript on the frontend, and Laravel or Node.js on the backend with PostgreSQL or MySQL. We choose proven, well-supported tools that your future team can maintain.",
      },
      {
        question: "Can the application work on mobile?",
        answer:
          "Every web application we build is responsive. Where offline use or device features matter, we can deliver it as a progressive web app or pair it with a native mobile app.",
      },
      {
        question: "Can you take over an application another team built?",
        answer:
          "Yes. We start with a code and infrastructure review, stabilize what’s critical, then improve the application in manageable steps.",
      },
    ],
    related: ["custom-software", "ui-ux-design", "cloud-devops"],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "mobile-apps",
    name: "Mobile Applications",
    group: "Build",
    summary: "iOS, Android and cross-platform apps designed for how your users actually work.",
    headline: "Mobile products designed for how your users actually work.",
    intro:
      "We design and build mobile applications for customers and for workforces — connected to your existing systems, tested on real devices and supported after they reach the app stores.",
    visual: "mobile",
    image: "mobile-apps",
    signs: [
      "Your customers expect to use your service from their phone.",
      "Field or sales teams still report on paper or by phone call.",
      "Your web platform needs a mobile companion.",
      "An existing app has poor reviews or is hard to update.",
    ],
    offerings: [
      {
        title: "Customer apps",
        description: "Consumer and client-facing apps that make your service easy to use on the go.",
      },
      {
        title: "Workforce apps",
        description: "Field, sales and staff apps that work reliably, including with poor connectivity.",
      },
      {
        title: "Mobile-first SaaS",
        description: "Product experiences where the phone is the primary way people use your platform.",
      },
      {
        title: "Mobile for existing systems",
        description: "Apps that extend your current backend, ERP or web platform to mobile users.",
      },
    ],
    approach: {
      title: "Designed for real conditions.",
      intro:
        "People use apps on the move, on mid-range devices and on unreliable networks. We design and test for those conditions, not just for the latest phone on office Wi-Fi.",
      points: [
        {
          title: "Offline-aware",
          body: "Apps that keep working when connectivity drops and sync when it returns.",
        },
        {
          title: "Tested on real devices",
          body: "Performance and usability checked across the devices your users actually own.",
        },
        {
          title: "Connected to your systems",
          body: "Secure integration with your backend, payments and notifications.",
        },
      ],
    },
    capabilities: [
      "iOS & Android",
      "Cross-platform development",
      "Product & UX design",
      "Backend & API integration",
      "Authentication",
      "Push notifications",
      "Payments",
      "Offline support",
      "Analytics",
      "App store deployment",
      "Maintenance & updates",
    ],
    deliverables: [
      "App designs and prototype",
      "iOS and Android applications",
      "Backend APIs and admin tools",
      "Push notifications and analytics",
      "App Store and Play Store release",
      "Update and maintenance plan",
    ],
    timeline: [
      { phase: "Discovery", duration: "1–3 weeks", body: "Users, journeys, devices and integration needs." },
      { phase: "Design & prototype", duration: "3–5 weeks", body: "Flows, screens and a tappable prototype." },
      { phase: "Build", duration: "8–14 weeks", body: "App, APIs and testing on real devices." },
      { phase: "Store release", duration: "1–2 weeks", body: "Store listings, review and staged rollout." },
    ],
    faqs: [
      {
        question: "Native or cross-platform?",
        answer:
          "For most business apps, a cross-platform approach delivers iOS and Android from one codebase with a lower long-term cost. We recommend native development when an app depends heavily on device-specific features or performance.",
      },
      {
        question: "Do you handle App Store and Play Store submission?",
        answer: "Yes. We prepare listings, handle review requirements and manage releases and updates.",
      },
      {
        question: "Can the app work without internet?",
        answer:
          "Yes, where the use case needs it. We design offline storage and background sync so work isn’t lost when connectivity drops.",
      },
    ],
    related: ["ui-ux-design", "api-integration", "custom-software"],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "ui-ux-design",
    name: "UI/UX & Product Design",
    group: "Design",
    summary: "Research-led product design that makes complex software feel simple.",
    headline: "Design that makes complex products feel simple.",
    intro:
      "Good design is how a product works, not just how it looks. We research, structure and design digital products around real user needs — and hand developers everything they need to build them properly.",
    visual: "design",
    toast: { title: "Prototype test complete", detail: "5 users · checkout time down, 2 issues found" },
    image: "ui-ux-design",
    signs: [
      "Users struggle with your product or rely on training to use it.",
      "You’re about to build something new and want to validate it first.",
      "Your product has grown inconsistent across screens and teams.",
      "Developers are designing on the fly because specs are missing.",
    ],
    offerings: [
      {
        title: "Product discovery",
        description: "Understand users, goals and constraints before committing to features.",
      },
      {
        title: "UX & interaction design",
        description: "User flows, wireframes and prototypes that are tested before they’re built.",
      },
      {
        title: "Interface design",
        description: "Clear, consistent, accessible interfaces for web and mobile products.",
      },
      {
        title: "Design systems",
        description: "Reusable components and guidelines that keep large products consistent as they grow.",
      },
    ],
    approach: {
      title: "Evidence over opinion.",
      intro:
        "Design decisions should be based on what users actually do. We research, prototype and test early, so the product that gets built is the one people can use.",
      points: [
        {
          title: "Research with real users",
          body: "Interviews and observation with the people who will use the product.",
        },
        {
          title: "Prototype before building",
          body: "Clickable prototypes tested with users while changes are still cheap.",
        },
        {
          title: "Ready for engineering",
          body: "Design systems and specifications developers can build from precisely.",
        },
      ],
    },
    capabilities: [
      "Product strategy",
      "User research",
      "Information architecture",
      "User flows",
      "Wireframing",
      "Prototyping",
      "UI design",
      "Responsive design",
      "Accessibility",
      "Design systems",
      "Usability testing",
      "Developer handoff",
    ],
    deliverables: [
      "Research findings and user journeys",
      "Information architecture and flows",
      "Wireframes and interactive prototype",
      "High-fidelity interface designs",
      "Design system and component library",
      "Developer handoff specifications",
    ],
    timeline: [
      { phase: "Research", duration: "1–3 weeks", body: "User interviews, analytics review and goals." },
      { phase: "Structure & flows", duration: "1–2 weeks", body: "Information architecture and key journeys." },
      { phase: "Interface & prototype", duration: "2–4 weeks", body: "Visual design and clickable prototype." },
      { phase: "Test & handoff", duration: "1–2 weeks", body: "Usability testing, refinements and specs." },
    ],
    faqs: [
      {
        question: "Can you redesign an existing product?",
        answer:
          "Yes. We start by reviewing how the product is used today and where people struggle, then improve it in stages so your users aren’t disrupted.",
      },
      {
        question: "Do you only design, or also build?",
        answer:
          "Both. Many clients engage us for design and engineering together, but we also work alongside in-house development teams.",
      },
      {
        question: "What tools do you design in?",
        answer:
          "We design in Figma and share files, prototypes and component libraries with your team throughout the project.",
      },
    ],
    related: ["web-applications", "mobile-apps", "corporate-websites"],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "api-integration",
    name: "API & Systems Integration",
    group: "Technology",
    summary: "Connect payments, CRMs, ERPs and internal systems so data flows where it’s needed.",
    headline: "Systems that talk to each other.",
    intro:
      "Most organizations run on several systems that don’t share data well. We design APIs and integrations that connect your tools, remove manual re-entry and give you one reliable picture of your operations.",
    visual: "integration",
    image: "api-integration",
    signs: [
      "Staff copy data between systems by hand.",
      "Finance reconciles payments manually at the end of each day.",
      "Partners or customers need programmatic access to your platform.",
      "Reports disagree because each system holds a different version of the truth.",
    ],
    offerings: [
      {
        title: "Payment integrations",
        description: "Card, bank transfer and wallet payments with reliable reconciliation.",
      },
      {
        title: "Business system integrations",
        description: "Connect CRM, ERP, accounting and HR tools to your products and to each other.",
      },
      {
        title: "Public & partner APIs",
        description: "Secure, documented APIs that let partners and customers build on your platform.",
      },
      {
        title: "Internal services",
        description: "Webhooks, queues and services that automate work between your systems.",
      },
    ],
    approach: {
      title: "Reliable by design.",
      intro:
        "Integrations fail quietly — a missed webhook, a timeout, a changed field. We design for those failures so your data stays correct and problems are visible immediately.",
      points: [
        {
          title: "Clear contracts",
          body: "Documented, versioned APIs that are predictable for every system that uses them.",
        },
        {
          title: "Built for failure",
          body: "Retries, idempotency and reconciliation so nothing is lost or duplicated.",
        },
        {
          title: "Observable",
          body: "Logging and alerts that show what moved, when, and what needs attention.",
        },
      ],
    },
    capabilities: [
      "REST API design",
      "Third-party integrations",
      "Payment integrations",
      "CRM & ERP integrations",
      "Accounting systems",
      "Messaging & notifications",
      "Authentication & authorization",
      "Webhooks",
      "Rate limiting",
      "API documentation",
    ],
    deliverables: [
      "Integration map and data flows",
      "API specification and documentation",
      "Built and tested integrations",
      "Error handling and reconciliation",
      "Monitoring and alerts",
      "Runbook for your team",
    ],
    timeline: [
      { phase: "Assessment", duration: "1–2 weeks", body: "Systems, data flows and integration options." },
      { phase: "Design", duration: "1 week", body: "API contracts, mappings and error handling." },
      { phase: "Build", duration: "2–6 weeks", body: "Integration development and testing." },
      { phase: "Go-live & monitor", duration: "1–2 weeks", body: "Parallel runs, monitoring and handover." },
    ],
    faqs: [
      {
        question: "Can you integrate with a system that has no API?",
        answer:
          "Often, yes — through file exchanges, database connectors or automation. We’ll assess what’s reliable and secure before recommending an approach.",
      },
      {
        question: "How do you keep integrations secure?",
        answer:
          "We use strong authentication, least-privilege access, encrypted connections and audit logging, and we never store credentials in code.",
      },
      {
        question: "What happens when a connected system changes?",
        answer:
          "Monitoring alerts us to failures quickly, and versioned APIs let us adapt integrations without breaking the systems that depend on them.",
      },
    ],
    related: ["custom-software", "cloud-devops", "ecommerce"],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "cloud-devops",
    name: "Cloud & DevOps",
    group: "Technology",
    summary: "Hosting, deployment pipelines and monitoring that keep your software reliable.",
    headline: "Infrastructure you don’t have to worry about.",
    intro:
      "Reliable software needs reliable foundations. We plan, set up and run the infrastructure behind your products — automated deployments, monitoring, backups and security — so your team can focus on the business.",
    visual: "pipeline",
    toast: { title: "Release deployed", detail: "Zero downtime · all health checks passing" },
    image: "cloud-devops",
    signs: [
      "Releases are manual, stressful and happen late at night.",
      "You find out about outages from customers.",
      "Nobody is sure when backups last ran — or whether they restore.",
      "Hosting costs keep rising without a clear reason.",
    ],
    offerings: [
      {
        title: "Cloud setup & migration",
        description: "Plan and move applications to the cloud with minimal disruption.",
      },
      {
        title: "Deployment automation",
        description: "CI/CD pipelines that make releases routine, tested and reversible.",
      },
      {
        title: "Monitoring & reliability",
        description: "Alerts, logging and uptime monitoring so issues are caught before users notice.",
      },
      {
        title: "Security & backups",
        description: "Hardened environments, access controls and tested backup and recovery.",
      },
    ],
    approach: {
      title: "Boring infrastructure, on purpose.",
      intro:
        "The best infrastructure is the kind nobody talks about. We automate the routine, document the rest and make sure problems are caught early.",
      points: [
        {
          title: "Everything automated",
          body: "Builds, tests and deployments run the same way every time.",
        },
        {
          title: "Visible health",
          body: "Dashboards and alerts show how your systems are performing right now.",
        },
        {
          title: "Recovery tested",
          body: "Backups that are verified, and a plan for when things go wrong.",
        },
      ],
    },
    capabilities: [
      "Infrastructure planning",
      "Cloud deployment",
      "Server configuration",
      "CI/CD pipelines",
      "Environment management",
      "Monitoring & alerting",
      "Database infrastructure",
      "Performance optimization",
      "Security hardening",
      "Backups & recovery",
    ],
    deliverables: [
      "Infrastructure audit and plan",
      "Production and staging environments",
      "CI/CD deployment pipeline",
      "Monitoring, logging and alerts",
      "Backup and recovery procedures",
      "Infrastructure documentation",
    ],
    timeline: [
      { phase: "Audit", duration: "1–2 weeks", body: "Current setup, risks, costs and priorities." },
      { phase: "Plan", duration: "1 week", body: "Target architecture and migration approach." },
      { phase: "Implement", duration: "2–6 weeks", body: "Environments, pipelines, monitoring and backups." },
      { phase: "Operate", duration: "Ongoing", body: "Monitoring, updates and continuous improvement." },
    ],
    faqs: [
      {
        question: "Can you manage infrastructure for software you didn’t build?",
        answer: "Yes. We start with an audit of the current setup, then stabilize, document and improve it.",
      },
      {
        question: "Which cloud providers do you work with?",
        answer:
          "We work with the major cloud providers and with managed hosting, and recommend based on your workload, budget and data requirements.",
      },
      {
        question: "Can you reduce our hosting costs?",
        answer:
          "Often. An audit usually finds over-provisioned resources, unused services or better pricing options. We’ll show you the savings before making changes.",
      },
    ],
    related: ["web-applications", "api-integration", "technology-consulting"],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "technology-consulting",
    name: "Technology Consulting",
    group: "Technology",
    summary: "Clear guidance on what to build, how to build it and whether to build at all.",
    headline: "A technology partner for the decisions that matter.",
    intro:
      "You don’t need to know exactly what technology you need before talking to us. We help you define the problem, weigh the options and plan a path forward — whether that ends in a custom build, an existing product or a better process.",
    visual: "roadmap",
    image: "technology-consulting",
    signs: [
      "You know something needs to change but not what to build.",
      "You’re choosing between vendors, platforms or a custom build.",
      "An existing system is holding the business back.",
      "Leadership needs a clear, costed technology plan.",
    ],
    offerings: [
      {
        title: "Product discovery",
        description: "Turn an idea or problem into clear requirements, scope and a roadmap.",
      },
      {
        title: "Architecture & stack advice",
        description: "Choose technology that fits your team, budget and growth plans.",
      },
      {
        title: "Software audits",
        description: "Independent review of an existing application’s code, security and infrastructure.",
      },
      {
        title: "Digital transformation planning",
        description: "Identify which processes to digitize or automate first, and in what order.",
      },
    ],
    approach: {
      title: "Independent, practical advice.",
      intro:
        "We give recommendations we’d be comfortable delivering ourselves — and we’ll tell you when the right answer is an existing product or a simpler process.",
      points: [
        {
          title: "Business first",
          body: "Every recommendation is tied to a business outcome, cost and risk.",
        },
        {
          title: "Options, not dogma",
          body: "Build, buy or improve — we compare real options side by side.",
        },
        {
          title: "Plans you can act on",
          body: "Phased roadmaps with priorities, estimates and clear next steps.",
        },
      ],
    },
    capabilities: [
      "Product discovery",
      "Technical feasibility",
      "Software architecture",
      "Technology stack recommendations",
      "Build-vs-buy analysis",
      "System modernization",
      "Product roadmaps",
      "Software audits",
      "Process automation",
      "Existing application improvement",
    ],
    deliverables: [
      "Current-state assessment",
      "Options analysis with costs and risks",
      "Recommended architecture",
      "Prioritized roadmap",
      "Budget and resourcing estimates",
      "Executive summary for decision makers",
    ],
    timeline: [
      { phase: "Discovery", duration: "1–2 weeks", body: "Interviews, systems review and goals." },
      { phase: "Analysis", duration: "1–3 weeks", body: "Options, feasibility, costs and risks." },
      { phase: "Recommendations", duration: "1 week", body: "Architecture, roadmap and estimates." },
      { phase: "Next steps", duration: "As needed", body: "Support with procurement, hiring or delivery." },
    ],
    faqs: [
      {
        question: "Is consulting a separate engagement?",
        answer:
          "It can be. Many clients start with a short discovery engagement, which gives them a clear plan and estimate whether or not they continue with us for the build.",
      },
      {
        question: "Will you always recommend building custom software?",
        answer:
          "No. If an existing product or a process change solves the problem better, that’s what we’ll recommend.",
      },
      {
        question: "Can you review software another vendor built for us?",
        answer:
          "Yes. We provide independent audits covering code quality, security, infrastructure and maintainability, with prioritized recommendations.",
      },
    ],
    related: ["custom-software", "ui-ux-design", "cloud-devops"],
  },
];

export const serviceGroups: { name: ServiceGroup; description: string }[] = [
  { name: "Build", description: "Websites, commerce, software and apps." },
  { name: "Design", description: "Research-led product and interface design." },
  { name: "Technology", description: "Integration, infrastructure and advice." },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function servicesInGroup(group: ServiceGroup) {
  return services.filter((s) => s.group === group);
}
