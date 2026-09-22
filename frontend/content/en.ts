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
  title:
    "I’m exploring how data, analytics, and digital systems can support better business decisions.",
  description:
    "I have completed the first two semesters of my M.Sc. AI in Business at SRH Berlin. This portfolio brings together projects where I work with analytics, operations, dashboards, data systems, and practical digital products.",
  rotatingLines: [
    "Reliable analytics starts before the dashboard.",
    "I’m interested in systems that turn data into decisions.",
    "Operational problems become clearer when the data is structured well.",
    "Good reporting should explain what changed and what to investigate next.",
  ],
  primaryCta: "View work",
  secondaryCta: "Contact",
},

introStrip: {
items: [],
},

work: {
  eyebrow: "Selected work",
  title:
    "Projects that connect analytics, operations, and digital systems.",
  description:
    "A focused collection of projects where I worked with business data, dashboards, processes, reporting, and practical digital systems.",
  projects: [
    {
      title: "OpsPilot — Delivery Operations Analytics",
      category: "Python · PostgreSQL · Power BI · FastAPI",
      summary:
        "A deterministic operations analytics system that detects delivery deterioration, investigates business impact, and publishes verified decision-support outputs.",
      details: [],
      outcome:
        "This project strengthened my skills in data engineering, SQL analytics, business intelligence, API design, testing, and reproducible delivery.",
    },

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
      title: "Football Performance Analytics & Fan Intelligence",
      category: "Python · Power BI · Data Evaluation",
      summary:
        "A football analytics workflow combining Real Madrid performance reporting, football text evaluation, and controlled reporting.",
      details: [],
      outcome:
        "This project strengthened my skills in data preparation, dashboard development, evaluation, and workflow design.",
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
eyebrow: "Recent academic focus",
title: "What I worked on during my second semester.",
description:
"These areas shaped my recent coursework and helped me connect business concepts with practical projects.",
items: [
{
id: "ai-practice",
label: "AI in operations",
value: "01",
text:
"I explored how data and AI-supported methods can improve operations, supply chain planning, process visibility, and business decisions.",
},
{
id: "llm",
label: "Language models and prompting",
value: "02",
text:
"I studied language-model behaviour, prompt design, evaluation, retrieval, and controlled workflow concepts.",
},
{
id: "data",
label: "Programming and data analysis",
value: "03",
text:
"I worked with Python, datasets, evaluation methods, dashboards, and practical data-analysis tasks.",
},
{
id: "strategy",
label: "Digital transformation",
value: "04",
text:
"I examined how organisations connect technology adoption with business strategy, processes, and organisational change.",
},
{
id: "ethics",
label: "AI ethics and governance",
value: "05",
text:
"I studied legal, ethical, governance, and risk questions related to the responsible use of AI systems.",
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
"I am studying M.Sc. AI in Business at SRH University Berlin and have completed the first two semesters of the programme.",
"My main interest is practical analytics: how reliable data, dashboards, workflows, and business systems can help people investigate problems and make better decisions.",
"Outside academics, music, football, travel, and visual design matter a lot to me. They shape how I notice rhythm, structure, movement, and detail.",
],
stats: [
{
label: "Based in",
value: "Berlin",
},
{
label: "Studying",
value: "M.Sc. AI in Business",
},
{
label: "Study progress",
value: "Two semesters completed",
},
{
label: "Focus",
value: "Analytics · Operations · Data Systems",
},
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
title:
"I’m looking for opportunities where I can learn, contribute, and develop practical experience.",
description:
"If my projects and direction connect with what you are working on, I would be glad to hear from you.",
emailText: "Email",
linkedinText: "LinkedIn",
instagramText: "Instagram",
},

footer: {
smallLine: "Ajin Babu · Berlin",
},
};
