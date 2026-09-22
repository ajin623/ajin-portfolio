export const projectContent = {
  en: {
    projects: [
      {
        slug: "operations-intelligence-dashboard",
        title: "Operations Intelligence Dashboard",
        intro:
          "An ERP and Power BI analytics project for a sportswear order-to-cash process.",
        context:
          "This project simulated a sportswear distributor managing sales, inventory, invoices, and payments across European markets. The business problem was limited visibility into stock risk, unpaid invoices, and operational performance.",
        role:
          "I worked with the order-to-cash process, structured the business data, and developed analytics around revenue, inventory, cash collection, product demand, and replenishment risk.",
        reflection:
          "This project helped me understand how ERP transaction data can support operational and financial decisions when it is presented through clear dashboards.",
        story: [
          "Runner Pro showed the highest demand but reached a low-stock level, creating a clear reorder risk.",
          "One unpaid invoice reduced the cash collection rate and highlighted the connection between finance and operations.",
          "The Power BI dashboard connected sales, inventory, invoices, payments, and simple forecast logic in one management view.",
        ],
      },
      {
        slug: "football-performance-fan-intelligence",
        title: "Football Performance & Fan Intelligence",
        intro:
          "A football analytics workflow combining Real Madrid match-performance reporting, football text evaluation, and controlled reporting.",
        context:
          "Football match statistics, fan reactions, and project findings often exist in separate files. This project explored how these data sources could be organised into a clearer analytics and reporting workflow for a football analyst or media team.",
        role:
          "I prepared public La Liga match data with Python, filtered Real Madrid matches, created calculated performance fields, and developed a one-page Power BI dashboard. I also compared text-classification prompts and tested a rule-based reporting workflow with human approval.",
        reflection:
          "The project showed me that data quality, clear evaluation, and focused reporting are more important than adding unnecessary technical complexity.",
        story: [
          "The dashboard analysed 38 matches, including 26 wins, a 68.4% win rate, 78 goals scored, and a +40 goal difference.",
          "A more detailed prompt improved topic and intent classification, but sarcasm, neutral language, and mixed meanings remained difficult.",
          "A small document-retrieval module answered project questions using prepared project documents and was evaluated with 20 test questions.",
        ],
      },
      {
        slug: "coca-cola-dashboard",
        title: "Coca-Cola FMCG Dashboard",
        intro:
          "A Tableau dashboard designed to make sales and product performance easier to understand.",
        context:
          "The project focused on translating business data into a readable operational dashboard for management reporting and decision support.",
        role:
          "I worked with seven business KPIs, sales analysis, product performance, dashboard structure, and visual readability in Tableau.",
        reflection:
          "This project improved my understanding of KPI selection and how a dashboard should guide the user toward the most important information.",
        story: [
          "The dashboard was designed around a COO reporting use case.",
          "Sales and product performance were presented through clear KPI and comparison views.",
          "The project connected data visualisation with practical management questions.",
        ],
      },
      {
        slug: "ai-portfolio-platform",
        title: "Personal Portfolio Platform",
        intro:
          "A multilingual full-stack portfolio built as a personal digital product.",
        context:
          "I wanted to create more than a static CV website. The goal was to build a clear and interactive platform that presents my studies, projects, and current professional direction.",
        role:
          "I built the frontend with Next.js and TypeScript, created a Python FastAPI backend, connected the frontend and backend through API requests, and deployed the system using Vercel and Render.",
        reflection:
          "This project helped me understand how frontend structure, backend APIs, deployment, debugging, and user experience work together.",
        story: [
          "The website provides English and German content.",
          "The portfolio uses reusable components and structured project case-study pages.",
          "The project gave me practical experience with GitHub, environment variables, API connections, deployment, and debugging.",
        ],
      },
    ],

    labels: {
      caseStudy: "Case study",
      backToWork: "Back to projects",
      context: "Context",
      role: "What I worked on",
      reflection: "What I learned",
      notes: "Project notes",
    },
  },

  de: {
    projects: [
      {
        slug: "operations-intelligence-dashboard",
        title: "Operations Intelligence Dashboard",
        intro:
          "Ein ERP- und Power-BI-Analytics-Projekt für einen Sportswear Order-to-Cash Prozess.",
        context:
          "Dieses Projekt simulierte einen Sportswear-Distributor, der Verkäufe, Lagerbestände, Rechnungen und Zahlungen in europäischen Märkten verwaltet. Das Business-Problem war die begrenzte Transparenz über Bestandsrisiken, unbezahlte Rechnungen und operative Performance.",
        role:
          "Ich arbeitete mit dem Order-to-Cash Prozess, strukturierte die Geschäftsdaten und entwickelte Analysen zu Umsatz, Lagerbestand, Zahlungseingang, Produktnachfrage und Nachbestellrisiko.",
        reflection:
          "Das Projekt zeigte mir, wie ERP-Transaktionsdaten operative und finanzielle Entscheidungen unterstützen können, wenn sie in klaren Dashboards dargestellt werden.",
        story: [
          "Runner Pro zeigte die höchste Nachfrage, erreichte jedoch einen niedrigen Bestand und dadurch ein klares Nachbestellrisiko.",
          "Eine unbezahlte Rechnung reduzierte die Cash Collection Rate und zeigte die Verbindung zwischen Finance und Operations.",
          "Das Power-BI-Dashboard verband Sales, Inventory, Rechnungen, Zahlungen und einfache Forecast-Logik in einer Management-Ansicht.",
        ],
      },
      {
        slug: "football-performance-fan-intelligence",
        title: "Football Performance Analytics & Fan Intelligence",
        intro:
          "Ein Football-Analytics-Workflow, der Real-Madrid-Performance-Reporting, Fußball-Textauswertung und kontrolliertes Reporting verbindet.",
        context:
          "Fußballstatistiken, Fanreaktionen und Projektergebnisse befinden sich häufig in getrennten Dateien. Dieses Projekt untersuchte, wie diese Datenquellen in einen klareren Analytics- und Reporting-Workflow für Analysten oder Medienteams integriert werden können.",
        role:
          "Ich bereitete öffentliche La-Liga-Spieldaten mit Python auf, filterte Real-Madrid-Spiele, erstellte berechnete Performance-Felder und entwickelte ein einseitiges Power-BI-Dashboard. Zusätzlich verglich ich Prompts zur Textklassifikation und testete einen regelbasierten Reporting-Workflow mit menschlicher Freigabe.",
        reflection:
          "Das Projekt zeigte mir, dass Datenqualität, klare Evaluation und fokussiertes Reporting wichtiger sind als unnötige technische Komplexität.",
        story: [
          "Das Dashboard analysierte 38 Spiele mit 26 Siegen, einer Siegquote von 68,4 %, 78 erzielten Toren und einer Tordifferenz von +40.",
          "Ein detaillierterer Prompt verbesserte die Topic- und Intent-Klassifikation, aber Sarkasmus, neutrale Sprache und Mehrdeutigkeit blieben schwierig.",
          "Ein kleines Dokumenten-Retrieval-Modul beantwortete Projektfragen anhand vorbereiteter Dokumente und wurde mit 20 Testfragen evaluiert.",
        ],
      },
      {
        slug: "coca-cola-dashboard",
        title: "Coca-Cola FMCG Dashboard",
        intro:
          "Ein Tableau Dashboard, das Sales- und Produktperformance verständlicher darstellt.",
        context:
          "Das Projekt konzentrierte sich darauf, Geschäftsdaten in ein gut lesbares operatives Dashboard für Management Reporting und Entscheidungsunterstützung zu übersetzen.",
        role:
          "Ich arbeitete mit sieben Business KPIs, Sales-Analysen, Produktperformance, Dashboard-Struktur und visueller Lesbarkeit in Tableau.",
        reflection:
          "Das Projekt verbesserte mein Verständnis für KPI-Auswahl und dafür, wie ein Dashboard Nutzer zu den wichtigsten Informationen führen sollte.",
        story: [
          "Das Dashboard wurde für einen COO-Reporting-Anwendungsfall entwickelt.",
          "Sales und Produktperformance wurden durch klare KPI- und Vergleichsansichten dargestellt.",
          "Das Projekt verband Datenvisualisierung mit praktischen Management-Fragen.",
        ],
      },
      {
        slug: "ai-portfolio-platform",
        title: "Persönliche Portfolio-Plattform",
        intro:
          "Ein mehrsprachiges Full-Stack Portfolio, aufgebaut wie ein persönliches digitales Produkt.",
        context:
          "Ich wollte mehr als eine statische Lebenslauf-Website entwickeln. Das Ziel war eine klare und interaktive Plattform, die mein Studium, meine Projekte und meine aktuelle berufliche Richtung zeigt.",
        role:
          "Ich entwickelte das Frontend mit Next.js und TypeScript, erstellte ein Python-FastAPI-Backend, verband Frontend und Backend über API Requests und deployte das System mit Vercel und Render.",
        reflection:
          "Dieses Projekt half mir zu verstehen, wie Frontend-Struktur, Backend APIs, Deployment, Debugging und User Experience zusammenarbeiten.",
        story: [
          "Die Website bietet englische und deutsche Inhalte.",
          "Das Portfolio verwendet wiederverwendbare Komponenten und strukturierte Projektseiten.",
          "Das Projekt gab mir praktische Erfahrung mit GitHub, Environment Variables, API-Verbindungen, Deployment und Debugging.",
        ],
      },
    ],

    labels: {
      caseStudy: "Case Study",
      backToWork: "Zurück zu den Projekten",
      context: "Kontext",
      role: "Woran ich gearbeitet habe",
      reflection: "Was ich gelernt habe",
      notes: "Projektgedanken",
    },
  },
} as const;