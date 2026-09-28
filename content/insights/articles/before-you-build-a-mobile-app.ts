import type { Insight } from "../types";

export const beforeMobileApp: Insight = {
  slug: "before-you-build-a-mobile-app",
  title: "What to know before building a mobile app",
  excerpt:
    "A mobile app can transform how customers or staff work with you — or sit unused after launch. The questions to answer before you commit to building one.",
  category: "Product",
  tags: ["Mobile", "Planning", "Product strategy"],
  author: "JEV Technologies",
  date: "2026-09-28",
  cover: "insight-mobile-app",
  status: "published",
  body: [
    {
      type: "p",
      text: "Building a mobile app is a bigger commitment than it first appears. Beyond design and development, apps need store approval, regular updates for new operating system versions, and a reason for people to keep them installed. The good news: answering a few questions early makes success far more likely.",
    },
    { type: "h2", text: "1. Does it need to be an app?" },
    {
      type: "p",
      text: "A well-built responsive website or web application works on every phone without a download. An app earns its place when people use it frequently, need it to work offline, or rely on device features such as push notifications, the camera, location or biometric login.",
    },
    {
      type: "p",
      text: "If customers will use it a few times a year, a mobile-friendly web experience is usually the better investment.",
    },
    { type: "h2", text: "2. Who is it for, and what will they do?" },
    {
      type: "p",
      text: "Define the two or three tasks users will perform most often and design everything around them. Apps that try to replicate an entire website on a small screen tend to feel cluttered and slow.",
    },
    { type: "h2", text: "3. What conditions will people use it in?" },
    {
      type: "ul",
      items: [
        "Which devices do your users own? Test on mid-range phones, not just the latest models.",
        "How reliable is their connectivity? Field teams often need offline support with background sync.",
        "How much data are they willing to use? Large downloads and heavy images cost users money.",
        "Will they use it one-handed, outdoors, or in a hurry?",
      ],
    },
    { type: "h2", text: "4. Native or cross-platform?" },
    {
      type: "p",
      text: "Cross-platform frameworks let one codebase serve both iOS and Android, which usually lowers cost and keeps the two versions consistent. Native development makes sense when an app depends heavily on specific device capabilities or demanding performance.",
    },
    { type: "h2", text: "5. What does it connect to?" },
    {
      type: "p",
      text: "Most business apps are a window into existing systems — accounts, orders, HR records, payments. The backend and integrations often represent as much work as the app itself. Identify them early so they’re planned, not discovered.",
    },
    { type: "h2", text: "6. What happens after launch?" },
    {
      type: "ol",
      items: [
        "Budget for updates when Apple and Google release new operating system versions.",
        "Monitor crashes and performance from day one.",
        "Plan how you’ll collect feedback and prioritize improvements.",
        "Decide how users will be encouraged to install and keep using the app.",
      ],
    },
    {
      type: "quote",
      text: "The launch is the easiest day in an app’s life. Plan for the months that follow.",
    },
    {
      type: "p",
      text: "Answering these questions before development begins leads to a smaller, sharper first version — and an app people keep coming back to.",
    },
  ],
};
