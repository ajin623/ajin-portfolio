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

* natural
* simple
* warm
* clear
* grounded
* not exaggerated

Do not:

* pretend I am a senior professional
* claim advanced engineering experience
* use unnecessary corporate language
* make answers too long
* invent education, skills, projects, or work experience

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

1. Operations Intelligence Dashboard

* Odoo ERP, Power BI, and Excel project
* based on a sportswear order-to-cash process
* focused on sales, inventory, invoices, payments, cash collection, and replenishment risk

2. Football Performance Analytics and Fan Intelligence

* Python and Power BI football analytics project
* used public La Liga match data filtered for Real Madrid
* included performance dashboarding, football text evaluation, document retrieval, and a controlled reporting workflow
* the football text dataset contained general football data and was not Real Madrid-specific

3. Coca-Cola FMCG Dashboard

* Tableau dashboard with seven operational KPIs
* focused on sales, product performance, readability, and management reporting

4. Personal Portfolio Platform

* multilingual full-stack portfolio
* built with Next.js, TypeScript, Python FastAPI, Vercel, and Render
* focused on project presentation, APIs, deployment, and user experience

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
        "My selected projects are an Operations Intelligence Dashboard, "
        "a Football Performance and Fan Intelligence project, "
        "a Coca-Cola FMCG dashboard, and my personal portfolio platform. "
        "Together they reflect my interest in business analytics, ERP processes, "
        "data visualization, reporting, and practical digital systems."
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


def reply_football_project() -> str:
    return (
        "The Football Performance and Fan Intelligence project combines Python data preparation, "
        "a Power BI dashboard for Real Madrid match performance, football text evaluation, "
        "and a rule-based reporting workflow. The match data was Real Madrid-specific, "
        "but the football text dataset was general football content."
    )


def fallback_answer(message: str) -> str:
    text = normalize(message)

    if text in ["hi", "hello", "hey", "hii", "hey there", "yo"]:
        return "Hi, I’m Ajin. You can ask me about my studies, projects, interests, or what I’m learning right now."

    if has_any(text, ["who are you", "about you", "introduce", "overview", "summary", "tell me about yourself"]):
        return reply_intro()

    if has_any(text, ["study", "studies", "studying", "education", "semester", "srh", "course"]):
        return reply_studies()

    if has_any(text, ["beginner", "experience", "level", "junior", "senior"]):
        return reply_beginner()
    if has_any(text, ["football", "real madrid", "fan intelligence", "match performance", "la liga", "ollama", "tf-idf"]):
        return reply_football_project()
    
    if has_any(text, ["projects", "project", "work", "portfolio", "built"]):
        return reply_projects()

    if has_any(text, ["learning", "learn", "focus", "right now", "currently", "second semester"]):
        return reply_learning()

    if has_any(text, ["interest", "interests", "analytics", "dashboard", "data", "erp", "operations"]):
        return reply_interests()
    
    if has_any(text, ["operations", "supply chain", "stride", "erp", "odoo", "power bi", "order-to-cash", "inventory"]):
        return reply_operations_project()

    if has_any(text, ["ai portfolio", "gemini", "fastapi", "next.js", "vercel", "render"]):
        return reply_portfolio_project()

    if has_any(text, ["coca", "tableau", "kpi"]):
        return reply_coca_project()
    
    if has_any(text, ["football", "real madrid", "la liga", "python", "power bi"]):
        return reply_football_project()

    return (
        "I’m early in my journey, but my portfolio shows the direction I’m building toward: practical AI, business analytics, dashboards, and digital systems."
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