export const projectContent = {
  en: {
    projects: [
      {
        slug: "opspilot-delivery-operations-analytics",
        title: "OpsPilot — Delivery Operations Analytics",
        intro:
          "A deterministic operations analytics system that detects delivery deterioration, investigates business impact, and turns verified results into decision-ready outputs.",
        context:
          "Operational dashboards can show that a KPI changed, but they do not always explain whether the change is material, where the impact is concentrated, or what should be investigated next. OpsPilot was built around this gap using historical Brazilian e-commerce data.",
        role:
          "I designed the data pipeline, PostgreSQL model, SQL KPI logic, incident detection, investigation queries, Power BI reporting layer, read-only FastAPI interface, automated tests, continuous integration, and Docker Compose runtime.",
        reflection:
          "The biggest lesson was that reliable analytics depends on much more than the final chart. Data grain, validation rules, reproducible calculations, testing, and careful analytical language all matter before a dashboard can support a decision.",
        story: [
          "The system validated seven linked datasets and transformed them into order-level analytical facts and monthly delivery KPIs.",
          "Four material delivery deterioration months were detected using an explicit month-over-month rule. February 2018 was the most severe, with on-time delivery falling from 93.44% to 84.01%.",
          "The final analytical outputs included a Power BI dashboard, deterministic decision brief, read-only API, 35 automated tests, GitHub Actions validation, and a Docker Compose local stack.",
        ],
      },

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
        title: "Football Performance Analytics & Fan Intelligence",
        intro:
          "A football analytics workflow combining Real Madrid match-performance reporting, football text evaluation, and controlled reporting.",
        context:
          "Football match statistics, fan reactions, and project findings often exist in separate files. This project explored how these sources could be organised into a clearer analytics and reporting workflow for a football analyst or media team.",
        role:
          "I prepared public La Liga match data with Python, filtered Real Madrid matches, created calculated performance fields, and developed a one-page Power BI dashboard. I also compared text-classification prompts and tested a rule-based reporting workflow with human approval.",
        reflection:
          "The project showed me that data quality, clear evaluation, and focused reporting are more important than unnecessary technical complexity.",
        story: [
          "The dashboard analysed 38 matches, including 26 wins, a 68.4% win rate, 78 goals scored, and a +40 goal difference.",
          "A more detailed prompt improved topic and intent classification, while sarcasm, neutral language, and mixed meanings remained difficult.",
          "A small document-retrieval module was evaluated with 20 project questions and used prepared project documents as its knowledge base.",
        ],
      },

      {
        slug: "ai-portfolio-platform",
        title: "Personal Portfolio Platform",
        intro:
          "A multilingual full-stack portfolio built as a personal digital product.",
        context:
          "I wanted to create more than a static CV website. The goal was to build a clear and interactive platform for presenting my studies, projects, and professional direction.",
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
        slug: "opspilot-delivery-operations-analytics",
        title: "OpsPilot — Delivery Operations Analytics",
        intro:
          "Ein deterministisches Operations-Analytics-System zur Erkennung von Lieferproblemen, Untersuchung ihrer Business-Auswirkungen und Aufbereitung verifizierter Ergebnisse für Entscheidungen.",
        context:
          "Operative Dashboards können zeigen, dass sich ein KPI verändert hat, erklären aber nicht immer, ob die Veränderung relevant ist, wo die Auswirkungen konzentriert sind oder was als Nächstes untersucht werden sollte. OpsPilot wurde für genau diese Lücke mit historischen E-Commerce-Daten entwickelt.",
        role:
          "Ich entwickelte die Datenpipeline, das PostgreSQL-Modell, die SQL-KPI-Logik, Incident Detection, Investigation Queries, die Power-BI-Reporting-Schicht, eine Read-only-FastAPI-Schnittstelle, automatisierte Tests, Continuous Integration und einen Docker-Compose-Runtime.",
        reflection:
          "Die wichtigste Erkenntnis war, dass zuverlässige Analytics weit über das finale Diagramm hinausgeht. Datengranularität, Validierungsregeln, reproduzierbare Berechnungen, Tests und eine sorgfältige analytische Sprache müssen stimmen, bevor ein Dashboard Entscheidungen unterstützen kann.",
        story: [
          "Das System validierte sieben verbundene Datensätze und transformierte sie in Order-Level-Facts und monatliche Delivery-KPIs.",
          "Vier relevante Monate mit Delivery-Verschlechterung wurden über eine explizite Month-over-Month-Regel erkannt. Im Februar 2018 fiel die On-Time-Delivery-Rate von 93,44 % auf 84,01 %.",
          "Die finalen Outputs umfassten ein Power-BI-Dashboard, einen deterministischen Decision Brief, eine Read-only-API, 35 automatisierte Tests, GitHub-Actions-Validierung und einen lokalen Docker-Compose-Stack.",
        ],
      },

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
          "Ein detaillierterer Prompt verbesserte die Topic- und Intent-Klassifikation, während Sarkasmus, neutrale Sprache und Mehrdeutigkeit schwierig blieben.",
          "Ein kleines Dokumenten-Retrieval-Modul wurde mit 20 Projektfragen evaluiert und nutzte vorbereitete Projektdokumente als Wissensbasis.",
        ],
      },

      {
        slug: "ai-portfolio-platform",
        title: "Persönliche Portfolio-Plattform",
        intro:
          "Ein mehrsprachiges Full-Stack Portfolio, aufgebaut wie ein persönliches digitales Produkt.",
        context:
          "Ich wollte mehr als eine statische Lebenslauf-Website entwickeln. Das Ziel war eine klare und interaktive Plattform für mein Studium, meine Projekte und meine berufliche Richtung.",
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