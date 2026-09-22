import { Dictionary } from "./types";

export const en: Dictionary = {
  nav: {
    home: "Home",
    work: "Work",
    about: "About",
    contact: "Contact",
  },

  hero: {
    eyebrow: "Ajin Babu · Berlin",
    title: "I’m exploring how AI and data can support better business decisions.",
    description:
      "I’m currently in my second semester of M.Sc. AI in Business at SRH University Berlin. This portfolio brings together projects where I practice AI, analytics, dashboards, and digital product thinking.",
    rotatingLines: [
      "I’m learning how AI fits into real business systems.",
      "I’m interested in dashboards that make decisions easier.",
      "ERP data becomes useful when it is clearly connected.",
      "Good analytics should help people act, not just observe.",
    ],
    primaryCta: "View work",
    secondaryCta: "Contact",
  },

  introStrip: {
    items: [],
  },

  work: {
    eyebrow: "Selected work",
    title: "Projects that connect AI, analytics, and business systems.",
    description:
      "A focused collection of projects where I practiced building, analysing, and explaining digital systems in a business context.",
    projects: [
      {
        title: "AI Portfolio Platform",
        category: "Next.js · FastAPI · Gemini API",
        summary:
          "A full-stack portfolio with an AI assistant, built as a personal digital product.",
        details: [],
        outcome:
          "This helped me understand how frontend, backend, APIs, deployment, and AI interaction connect.",
      },
      {
        title: "Operations Intelligence Dashboard",
        category: "Odoo ERP · Power BI · Supply Chain",
        summary:
          "An order-to-cash analytics project for inventory risk, payment visibility, and replenishment planning.",
        details: [],
        outcome:
          "This helped me understand how ERP data can support operational decision-making.",
      },
      {
        title: "Coca-Cola Dashboard",
        category: "Tableau · Business Analytics",
        summary:
          "A KPI dashboard focused on readable business performance and decision support.",
        details: [],
        outcome:
          "This improved my understanding of dashboard structure and KPI communication.",
      },
      {
        title: "Urban-Cycle",
        category: "Business Model · Circular Economy",
        summary:
          "A business model concept focused on repair, reuse, incentives, and longer product life.",
        details: [],
        outcome:
          "This pushed me to think more in systems and long-term value.",
      },
    ],
  },

  learningSignals: {
    eyebrow: "Current direction",
    title: "What I’m working on in my second semester.",
    description:
      "These are the areas I am studying and connecting to practical projects right now.",
    items: [
      {
        id: "ai-practice",
        label: "AI in operations",
        value: "01",
        text:
          "I’m learning how AI can support operations, supply chain decisions, planning, and business process visibility.",
      },
      {
        id: "llm",
        label: "LLMs and prompting",
        value: "02",
        text:
          "I’m studying how large language models work, how prompts shape outputs, and how AI tools can support structured workflows.",
      },
      {
        id: "data",
        label: "AI lab and data analysis",
        value: "03",
        text:
          "I’m practicing with tools, programming, and data analysis to understand how digital systems are built and evaluated.",
      },
      {
        id: "strategy",
        label: "Digital transformation",
        value: "04",
        text:
          "I’m learning how AI connects with business strategy, transformation, and how organizations adopt new technologies.",
      },
      {
        id: "ethics",
        label: "AI ethics and governance",
        value: "05",
        text:
          "I’m studying the responsibility side of AI, including legal, ethical, and governance questions.",
      },
    ],
  },

  attentionMap: {
    eyebrow: "",
    title: "",
    description: "",
    items: [],
  },

  about: {
    eyebrow: "About",
    title: "From Wayanad to Berlin.",
    paragraphs: [
      "I’m currently in my second semester of M.Sc. AI in Business at SRH University Berlin.",
      "My main interest is the practical side of AI: how data, dashboards, workflows, and digital systems can help people make better decisions.",
      "Outside academics, music, football, travel, and visual design matter a lot to me. They shape how I notice rhythm, structure, movement, and detail.",
    ],
    stats: [
      { label: "Based in", value: "Berlin" },
      { label: "Studying", value: "M.Sc. AI in Business" },
      { label: "Current semester", value: "Second semester" },
      { label: "Focus", value: "AI · Analytics · Business Systems" },
    ],
  },

  learning: {
    eyebrow: "",
    title: "",
    description: "",
    items: [],
  },

  exploring: {
    eyebrow: "",
    title: "",
    description: "",
    items: [],
  },

  contact: {
    eyebrow: "Contact",
    title: "I’m looking for opportunities where I can learn, build, and contribute carefully.",
    description:
      "If my direction connects with what you’re building, I’d be glad to hear from you.",
    emailText: "Email",
    linkedinText: "LinkedIn",
    instagramText: "Instagram",
  },

  footer: {
    smallLine: "Ajin Babu · Berlin",
  },
};