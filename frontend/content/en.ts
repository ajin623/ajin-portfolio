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
    title: "I’m exploring how AI can become useful in everyday life.",
    description:
      "I’m currently studying AI in Business in Berlin, and this portfolio brings together the projects, ideas, and directions shaping the way I learn.",
    rotatingLines: [
      "I keep coming back to AI in practice.",
      "I notice products that make complexity feel clear.",
      "Prompting is changing how I think about systems.",
      "Data becomes more meaningful when it becomes readable.",
    ],
    primaryCta: "View work",
    secondaryCta: "Contact",
  },

  introStrip: {
    items: [],
  },

  work: {
    eyebrow: "Selected work",
    title: "A few projects that helped me learn in different ways.",
    description:
      "These projects came from coursework, experimentation, and early practice. Each one helped me understand AI, data, or digital products from a different angle.",
    projects: [
      {
        title: "BerlinMitte Chatbot",
        category: "Python · Replit",
        summary:
          "A restaurant chatbot built around simple conversations and useful interaction.",
        details: [],
        outcome:
          "This was one of the first projects that made AI feel practical to me.",
      },
      {
        title: "Coca-Cola Dashboard",
        category: "Tableau · Analytics",
        summary:
          "A dashboard project focused on operational visibility, KPIs, and clearer business reading.",
        details: [],
        outcome:
          "It made me enjoy the connection between data, structure, and decision-making.",
      },
      {
        title: "Urban-Cycle",
        category: "Concept · Circular Economy",
        summary:
          "A concept built around repair, reuse, and extending product life through a better system.",
        details: [],
        outcome:
          "It pushed me to think less in features and more in systems.",
      },
      {
        title: "Nike Sense",
        category: "Concept · Wearables",
        summary:
          "A concept around movement, support, and connected sports experience.",
        details: [],
        outcome:
          "It connected technology with something more personal and energetic.",
      },
    ],
  },

  learningSignals: {
  eyebrow: "Current directions",
  title: "What I’m starting to focus on now.",
  description:
    "As I move into my second semester, these are the areas I’m beginning to explore more seriously.",

  items: [
    {
      id: "ai-practice",
      label: "AI in real systems",
      value: "01",
      text:
        "I’m starting to look at how AI fits into real operations and systems, especially in areas like supply chain and decision-making.",
    },
    {
      id: "llm",
      label: "LLMs and prompting",
      value: "02",
      text:
        "I’m learning how large language models behave, how prompting shapes output, and how agent-like systems can be structured.",
    },
    {
      id: "data",
      label: "Data and analysis",
      value: "03",
      text:
        "Through lab work and projects, I’m working more with data, tools, and programming to understand how systems are built and evaluated.",
    },
    {
      id: "strategy",
      label: "Business and systems thinking",
      value: "04",
      text:
        "I’m also learning how AI connects with strategy, transformation, and how organizations actually use these technologies.",
    },
    {
      id: "ethics",
      label: "AI ethics and governance",
      value: "05",
      text:
        "I’m starting to explore the responsibility side of AI, including ethics, legal aspects, and long-term impact.",
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
      "I’m currently studying AI in Business at SRH University Berlin, and I’ve completed my first semester.",
      "I’m especially interested in AI, data, digital systems, and product experiences that feel clear and thoughtful.",
      "Outside academics, music, football, travel, and visual design matter a lot to me. They shape the way I notice rhythm, mood, movement, and detail.",
    ],
    stats: [
      { label: "Based in", value: "Berlin" },
      { label: "Studying", value: "M.Sc. AI in Business" },
      { label: "Interested in", value: "AI · Data · Product" },
      { label: "Stage", value: "Early career" },
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
    title: "I’m looking for a place where I can learn well and contribute thoughtfully.",
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