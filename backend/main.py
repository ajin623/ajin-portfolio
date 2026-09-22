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
allowed_origins = [origin.strip() for origin in allowed_origins_raw.split(",") if origin.strip()]

if not allowed_origins:
    allowed_origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
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

Your tone must be:
- natural
- simple
- warm
- human
- clear
- grounded

Do not:
- exaggerate
- sound corporate
- pretend I have senior-level experience
- use buzzwords
- make answers too long

Context about me:

My name is Ajin Babu.
I am based in Berlin.
I am studying M.Sc. AI in Business.
I have completed my first semester.
My second semester is starting this week.
I am still early in my journey and learning through projects, coursework, and experimentation.

What I am starting to explore more in my second semester:
- AI for Operations and Supply Chain Management
- Business Strategy and Digital Transformation
- Large Language Models, Prompting, and Agentic AI
- AI lab work with tools, programming, and data analysis
- AI ethics, legal aspects, and governance

My interests:
- AI in practice
- prompting
- data visualization
- product thinking
- digital systems
- UI/UX curiosity

My projects:
1. BerlinMitte Chatbot
- a small restaurant chatbot
- built around simple user interactions
- helped me see how AI can be useful in everyday situations

2. Coca-Cola Dashboard
- a Tableau and analytics project
- focused on operational visibility and KPIs
- helped me enjoy the connection between data and decision-making

3. Urban-Cycle
- a circular economy concept
- focused on repair, reuse, and longer product life
- pushed me to think more in systems and long-term value

4. Nike Sense
- an innovation concept around wearables and sports experience
- connected technology with movement and something more personal

My personality:
- curious
- calm
- genuine
- still learning
- interested in useful and thoughtful digital products

If someone asks a broad question, give a short but meaningful summary.
If someone asks something unknown, answer honestly and simply.
"""


def normalize(text: str) -> str:
    text = text.lower().strip()
    text = re.sub(r"\s+", " ", text)
    return text


def has_any(text: str, words: list[str]) -> bool:
    return any(word in text for word in words)


def reply_studies() -> str:
    return (
        "I’m studying M.Sc. AI in Business in Berlin. I’ve completed my first semester, "
        "and my second semester is starting this week."
    )


def reply_beginner() -> str:
    return (
        "Yes, I’m still early in my journey. Right now I’m learning through coursework, projects, and experimentation."
    )


def reply_projects() -> str:
    return (
        "So far, I’ve worked on a few projects that helped me learn from different angles. "
        "I built a restaurant chatbot called BerlinMitte, worked on a Coca-Cola dashboard in Tableau, "
        "explored a circular-economy concept called Urban-Cycle, and developed a wearable sports concept called Nike Sense."
    )


def reply_learning() -> str:
    return (
        "Right now I’m focusing more on AI in real systems, LLMs and prompting, data and analysis, "
        "business strategy, and AI ethics. My second semester is starting to shape that direction more clearly."
    )


def reply_interests() -> str:
    return (
        "I’m especially interested in AI, data, product thinking, digital systems, and UI/UX. "
        "Outside that, music, football, travel, and visual design matter a lot to me too."
    )


def reply_location() -> str:
    return "I’m based in Berlin right now."


def reply_everything() -> str:
    return (
        "I’m Ajin Babu, a beginner AI student based in Berlin. I’m studying M.Sc. AI in Business, "
        "and I’ve just completed my first semester. My second semester is starting this week, so I’m beginning to explore "
        "areas like AI in operations, LLMs and prompting, business strategy, data analysis, and AI ethics more seriously. "
        "So far, I’ve worked on projects like a restaurant chatbot, a Coca-Cola dashboard, a circular-economy concept, and a wearable sports concept. "
        "I’m still early in my journey, but I’m trying to build a strong foundation in useful and thoughtful digital work."
    )


def reply_berlinmitte() -> str:
    return (
        "BerlinMitte was one of my early chatbot projects. I built it around simple restaurant interactions, "
        "and it helped me understand how AI can be useful in everyday situations."
    )


def reply_dashboard() -> str:
    return (
        "My Coca-Cola dashboard project was focused on operational visibility and KPIs. "
        "It helped me enjoy the connection between data, structure, and decision-making."
    )


def reply_urban_cycle() -> str:
    return (
        "Urban-Cycle was a circular-economy concept. It made me think more about systems, incentives, and long-term value."
    )


def reply_nike_sense() -> str:
    return (
        "Nike Sense was a concept around wearables and sports experience. "
        "I liked it because it connected technology with movement and something more personal."
    )


def fallback_answer(message: str) -> str:
    text = normalize(message)

    if text in ["hi", "hello", "hey", "hii", "hey there", "yo"]:
        return "Hi, I’m Ajin. You can ask me about my studies, projects, interests, or what I’m learning right now."

    if has_any(
        text,
        [
            "tell me everything",
            "tell me about yourself",
            "introduce yourself",
            "who are you",
            "about you",
            "overview",
            "summary",
            "what should i know",
            "start with you",
        ],
    ):
        return reply_everything()

    if has_any(text, ["study", "studies", "studying", "education", "student", "degree", "master", "msc", "semester"]):
        return reply_studies()

    if has_any(text, ["beginner", "experience", "level", "junior", "senior"]):
        return reply_beginner()

    if has_any(text, ["projects", "project", "work", "portfolio", "built"]):
        return reply_projects()

    if has_any(text, ["learning", "learn", "current focus", "focus", "right now", "currently", "semester 2", "second semester", "llm", "prompting", "ethics", "strategy", "supply chain"]):
        return reply_learning()

    if has_any(text, ["interests", "interest", "like", "hobbies", "music", "football", "travel", "design"]):
        return reply_interests()

    if has_any(text, ["where", "berlin", "based", "location", "live"]):
        return reply_location()

    if has_any(text, ["berlinmitte", "chatbot", "restaurant bot"]):
        return reply_berlinmitte()

    if has_any(text, ["coca", "dashboard", "tableau", "kpi"]):
        return reply_dashboard()

    if has_any(text, ["urban-cycle", "urban cycle", "circular", "reuse", "repair"]):
        return reply_urban_cycle()

    if has_any(text, ["nike", "sense", "wearable", "sports"]):
        return reply_nike_sense()

    return (
        "I’m still early in my journey, but this portfolio brings together what I’m learning, "
        "what I’ve built so far, and the kind of AI and digital product work I want to keep growing into."
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