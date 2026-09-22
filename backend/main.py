from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
from google import genai
import os
import re

load_dotenv()

app = FastAPI()

allowed_origins_raw = os.getenv("ALLOWED_ORIGINS", "")

allowed_origins = [
    origin.strip()
    for origin in allowed_origins_raw.split(",")
    if origin.strip()
]

default_allowed_origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "https://initial-portfolio-gamma.vercel.app",
]

allowed_origins = list(set(allowed_origins + default_allowed_origins))

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_origin_regex=r"https://.*\.vercel\.app$",
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

gemini_api_key = os.getenv("GEMINI_API_KEY")
client = genai.Client(api_key=gemini_api_key) if gemini_api_key else None


class Question(BaseModel):
    message: str


SYSTEM_PROMPT = """
You are Ajin Babu's personal portfolio assistant.

You must always answer in FIRST PERSON, as if you are Ajin speaking.
Use "I", "my", and "I'm".

Tone:
- natural
- simple
- warm
- clear
- grounded
- not exaggerated

Answering rules:
- answer the user's actual question directly
- when asked about a specific aspect of a project, focus on that aspect
- if asked about technologies, explain the technology stack
- if asked about findings, explain the findings
- if asked about data, explain the datasets
- if asked about limitations, explain the limitations
- do not repeat the complete project overview for every question
- keep most answers concise unless the user asks for detail

Do not:
- pretend I am a senior professional
- claim advanced experience I do not have
- invent skills, projects, results, or education

Context about me:

My name is Ajin Babu.
I am based in Berlin.
I am studying M.Sc. Artificial Intelligence in Business at SRH University Berlin.
I have completed the first two semesters of the programme.
I am still early in my professional journey and I am learning through coursework, practical projects, and experimentation.

My second-semester studies included:

* AI for Operations and Supply Chain Management
* Business Strategy and Digital Transformation
* Large Language Models, Prompting, and Agentic AI
* AI Lab Sessions with programming, tools, and data analysis
* AI Ethics, Legal, and Governance

I am now building on those subjects through practical projects focused on:

* business analytics
* data visualisation
* ERP and operations analytics
* dashboards and KPI reporting
* business processes
* workflow design
* practical digital systems
* responsible use of AI

My selected projects:

1. OpsPilot - Delivery Operations Analytics
- my strongest end-to-end analytics project
- built with Python, pandas, PostgreSQL, SQL, Power BI, FastAPI, Docker Compose, GitHub Actions, and automated tests
- uses historical Brazilian e-commerce data
- validates seven linked datasets and creates reliable order-level analytical facts
- detects material delivery deterioration using an explicit deterministic rule
- investigates business impact, geographic contribution, seller cohorts, and process timing
- provides results through a Power BI dashboard, deterministic decision brief, and read-only API
- includes 35 local automated tests, including 14 environment-free tests used in CI
- it is a historical analytical system and not a live production monitoring platform
- it does not claim causal inference

2. Operations Intelligence Dashboard
- Odoo ERP, Power BI, and Excel project
- based on a sportswear order-to-cash process
- focused on sales, inventory, invoices, payments, cash collection, and replenishment risk

3. Football Performance Analytics and Fan Intelligence
- Python and Power BI football analytics project
- used public La Liga match data filtered for Real Madrid
- included performance dashboarding, football text evaluation, document retrieval, and a controlled reporting workflow
- the football text dataset contained general football data and was not Real Madrid-specific

4. Personal Portfolio Platform
- multilingual full-stack portfolio
- built with Next.js, TypeScript, Python FastAPI, Vercel, and Render
- focused on project presentation, APIs, deployment, and user experience

If someone asks about my current semester:
Explain that I have completed the first two semesters of my master's programme.

If someone asks what I studied recently:
Explain that my second semester covered operations and supply chain, digital transformation, language models and prompting, practical AI lab work, and AI ethics and governance.

If someone asks what I am doing now:
Say that I am continuing to build practical projects around business analytics, dashboards, ERP processes, operations reporting, and digital systems.

If someone asks about my level:
Say that I am still early in my professional journey, but I am developing practical experience by completing projects that connect data, business processes, reporting, and digital systems.

If someone asks what I want:
Say that I want to keep learning and contribute to practical business analytics, data analytics, ERP, operations, and digital transformation work.
"""



def normalize(text: str) -> str:
    text = text.lower().strip()
    text = re.sub(r"\s+", " ", text)
    return text


def has_any(text: str, words: list[str]) -> bool:
    return any(word in text for word in words)


def reply_intro() -> str:
    return (
        "I’m Ajin Babu, based in Berlin and studying M.Sc. AI in Business "
        "at SRH University Berlin. I have completed the first two semesters "
        "of the programme. I’m building practical experience through projects "
        "around business analytics, dashboards, ERP processes, operations, "
        "and digital systems."
    )


def reply_studies() -> str:
    return (
        "I’m studying M.Sc. AI in Business at SRH University Berlin and have "
        "completed the first two semesters. My second-semester subjects included "
        "AI for operations and supply chain, business strategy and digital "
        "transformation, language models and prompting, practical AI lab work, "
        "and AI ethics and governance."
    )


def reply_beginner() -> str:
    return (
        "I’m still early in my journey. I don’t pretend to be senior, but I’m learning by building practical projects and connecting AI, analytics, and business problems."
    )


def reply_projects() -> str:
    return (
        "My main portfolio projects are OpsPilot, an Operations Intelligence Dashboard, "
        "a Football Performance Analytics and Fan Intelligence project, and my personal "
        "portfolio platform. OpsPilot is currently my most complete project because it "
        "connects data engineering, SQL analytics, Power BI, API development, testing, "
        "and reproducible deployment around one operational business problem."
    )

def reply_learning() -> str:
    return (
        "After completing my second semester, I’m continuing to build practical "
        "projects around business analytics, dashboards, ERP processes, operations "
        "reporting, data evaluation, workflow design, and responsible digital systems."
    )

def reply_interests() -> str:
    return (
        "I’m interested in AI in business, business analytics, dashboards, ERP and operations analytics, data visualization, and practical digital systems."
    )


def reply_operations_project() -> str:
    return (
        "The Operations Intelligence Dashboard is based on a sportswear order-to-cash case. "
        "I worked with sales, inventory, invoices, payment status, stock risk, and simple forecast logic to show how ERP data can support better operational decisions."
    )


def reply_portfolio_project() -> str:
    return (
        "The AI Portfolio Platform is my full-stack personal project. I built the frontend with Next.js and TypeScript, created a FastAPI backend, connected Gemini API, and deployed it using Vercel and Render."
    )


def reply_coca_project() -> str:
    return (
        "The Coca-Cola Dashboard is a Tableau project focused on KPI visibility, business performance, and making data easier to read for decision support."
    )
def reply_opspilot_overview() -> str:
    return (
        "OpsPilot is my most complete operations analytics project. "
        "I built it around historical Brazilian e-commerce data to investigate "
        "delivery-performance deterioration. The workflow validates the source data, "
        "calculates delivery KPIs, detects material issue months, investigates business "
        "impact, and publishes verified results through a Power BI dashboard, "
        "a decision brief, and a read-only API. I kept the analytical logic "
        "deterministic so the calculations remain reproducible and auditable."
    )


def reply_opspilot_technologies() -> str:
    return (
        "For OpsPilot, I used Python 3.12 with pandas and NumPy for data preparation "
        "and validation, PostgreSQL with SQL and Psycopg for the analytical data layer, "
        "and Power BI with Power Query and DAX for reporting. "
        "I built a read-only API with FastAPI, Pydantic, and Uvicorn. "
        "For reproducibility and software quality, I used Docker Compose, "
        "Python unittest, GitHub Actions, Git, and GitHub."
    )


def reply_opspilot_findings() -> str:
    return (
        "OpsPilot detected four months where on-time delivery deteriorated by at least "
        "five percentage points compared with the previous month. "
        "The most severe case was February 2018, when on-time delivery fell "
        "from 93.44% to 84.01%. There were 1,048 late orders and approximately "
        "617.74 excess late orders compared with the previous month's late rate. "
        "RJ and SP together represented about 50.1% of the estimated excess. "
        "Carrier-to-customer time increased by 2.91 days, while seller handling time "
        "was almost unchanged. I treated this as an investigation hypothesis rather "
        "than claiming that the data proved the cause."
    )


def reply_opspilot_data() -> str:
    return (
        "OpsPilot uses the historical Brazilian E-Commerce Public Dataset by Olist. "
        "I worked with seven linked datasets covering customers, products, sellers, "
        "orders, order items, payments, and reviews. I validated and cleaned the files "
        "before loading them into PostgreSQL, then created order-level analytical facts "
        "so one-to-many relationships would not distort KPIs."
    )


def reply_opspilot_limitations() -> str:
    return (
        "OpsPilot uses historical data rather than a live operational feed. "
        "The analysis identifies patterns, concentrations, and investigation priorities, "
        "but it does not prove causation. The dataset does not include carrier identifiers "
        "or inventory information, and the current FastAPI and Docker setup is designed "
        "for local analytical validation rather than public production deployment."
    )

def reply_football_project() -> str:
    return (
        "The Football Performance and Fan Intelligence project combines Python data preparation, "
        "a Power BI dashboard for Real Madrid match performance, football text evaluation, "
        "and a rule-based reporting workflow. The match data was Real Madrid-specific, "
        "but the football text dataset was general football content."
    )


def fallback_answer(message: str) -> str:
    text = normalize(message)

    # ---------------------------------------------------------
    # GREETING
    # ---------------------------------------------------------

    if text in [
        "hi",
        "hello",
        "hey",
        "hii",
        "hey there",
        "yo",
    ]:
        return (
            "Hi, I’m Ajin. You can ask me about my studies, projects, "
            "OpsPilot, interests, or what I’m learning."
        )

    # ---------------------------------------------------------
    # OPSPILOT - SPECIFIC QUESTIONS
    # Specific checks MUST come before the general OpsPilot check.
    # ---------------------------------------------------------

    if (
        has_any(
            text,
            [
                "technology",
                "technologies",
                "tech",
                "tech stack",
                "stack",
                "tools",
                "programming",
                "built with",
                "what did you use",
            ],
        )
        and has_any(text, ["opspilot", "ops pilot"])
    ):
        return reply_opspilot_technologies()

    if (
    has_any(
        text,
        [
            "find",
            "finding",
            "findings",
            "found",
            "result",
            "results",
            "discover",
            "discovered",
            "detect",
            "detected",
            "identify",
            "identified",
            "incident",
            "february",
            "late orders",
            "delivery problem",
            "delivery issue",
            "what happened",
            "main issue",
        ],
    )
    and has_any(text, ["opspilot", "ops pilot"])
):
        return reply_opspilot_findings()

    if (
        has_any(
            text,
            [
                "data",
                "dataset",
                "datasets",
                "source data",
                "olist",
                "records",
                "tables",
            ],
        )
        and has_any(text, ["opspilot", "ops pilot"])
    ):
        return reply_opspilot_data()

    if (
        has_any(
            text,
            [
                "limitation",
                "limitations",
                "weakness",
                "weaknesses",
                "production",
                "live",
                "causal",
                "causation",
                "constraint",
                "constraints",
            ],
        )
        and has_any(text, ["opspilot", "ops pilot"])
    ):
        return reply_opspilot_limitations()

    # ---------------------------------------------------------
    # OPSPILOT - GENERAL QUESTION
    # ---------------------------------------------------------

    if has_any(
        text,
        [
            "opspilot",
            "ops pilot",
        ],
    ):
        return reply_opspilot_overview()

    # ---------------------------------------------------------
    # OTHER SPECIFIC PROJECTS
    # ---------------------------------------------------------

    if has_any(
        text,
        [
            "football",
            "real madrid",
            "fan intelligence",
            "match performance",
            "la liga",
            "tf-idf",
        ],
    ):
        return reply_football_project()

    if has_any(
        text,
        [
            "operations intelligence",
            "supply chain",
            "stride",
            "odoo",
            "order-to-cash",
            "inventory",
        ],
    ):
        return reply_operations_project()

    if has_any(
        text,
        [
            "ai portfolio",
            "personal portfolio",
            "fastapi",
            "next.js",
            "vercel",
            "render",
        ],
    ):
        return reply_portfolio_project()

    # ---------------------------------------------------------
    # PERSONAL / STUDIES
    # ---------------------------------------------------------

    if has_any(
        text,
        [
            "who are you",
            "about you",
            "introduce",
            "overview",
            "summary",
            "tell me about yourself",
        ],
    ):
        return reply_intro()

    if has_any(
        text,
        [
            "study",
            "studies",
            "studying",
            "education",
            "semester",
            "srh",
            "course",
        ],
    ):
        return reply_studies()

    if has_any(
        text,
        [
            "beginner",
            "experience",
            "level",
            "junior",
            "senior",
        ],
    ):
        return reply_beginner()

    if has_any(
        text,
        [
            "learning",
            "learn",
            "focus",
            "right now",
            "currently",
        ],
    ):
        return reply_learning()

    if has_any(
        text,
        [
            "interest",
            "interests",
            "analytics",
            "dashboard",
            "business analytics",
            "data analytics",
        ],
    ):
        return reply_interests()

    # ---------------------------------------------------------
    # GENERAL PROJECT QUESTION
    # ---------------------------------------------------------

    if has_any(
        text,
        [
            "projects",
            "project",
            "work",
            "portfolio",
            "built",
        ],
    ):
        return reply_projects()

    # ---------------------------------------------------------
    # DEFAULT
    # ---------------------------------------------------------

    return (
        "I’m building practical experience through projects around business analytics, "
        "operations, dashboards, data systems, reporting, and digital products. "
        "You can ask me about OpsPilot, my other projects, my studies, or my current direction."
    )

@app.get("/")
async def root():
    return {"message": "Backend is running"}


@app.get("/health")
async def health():
    return {"status": "ok"}


@app.post("/ask")
async def ask_question(q: Question):
    try:
        if not gemini_api_key or client is None:
            return {"answer": fallback_answer(q.message)}

        prompt = f"{SYSTEM_PROMPT}\n\nUser question: {q.message}"

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt,
        )

        answer = getattr(response, "text", None)
        return {"answer": answer if answer else fallback_answer(q.message)}

    except Exception:
        return {"answer": fallback_answer(q.message)}