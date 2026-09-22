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
  title: "Projects that connect analytics, operations, and digital systems.",
  description:
    "A focused collection of projects where I worked with business data, dashboards, processes, reporting, and practical digital products.",
  projects: [
    {
      title: "Operations Intelligence Dashboard",
      category: "Odoo ERP · Power BI · Excel",
      summary:
        "An order-to-cash analytics project focused on inventory risk, payment visibility, and operational reporting.",
      details: [],
      outcome:
        "This project strengthened my understanding of ERP processes, dashboarding, and operations decision support.",
    },
    {
      title: "Football Performance & Fan Intelligence",
      category: "Python · Power BI · Data Evaluation",
      summary:
        "A football analytics workflow combining Real Madrid performance reporting, football text evaluation, and controlled reporting.",
      details: [],
      outcome:
        "This project strengthened my skills in data preparation, dashboard development, evaluation, and workflow design.",
    },
    {
      title: "Coca-Cola FMCG Dashboard",
      category: "Tableau · Business Analytics",
      summary:
        "A seven-KPI operational dashboard focused on sales and product performance.",
      details: [],
      outcome:
        "This project improved my understanding of KPI selection, dashboard readability, and management reporting.",
    },
    {
      title: "Personal Portfolio Platform",
      category: "Next.js · TypeScript · FastAPI",
      summary:
        "A multilingual full-stack portfolio developed and deployed as a personal digital product.",
      details: [],
      outcome:
        "This project gave me practical experience with frontend development, APIs, deployment, and debugging.",
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