"use client";

import { useMemo, useState } from "react";

export default function AIAssistant({ locale }: { locale: string }) {
  const introMessage =
    locale === "de"
      ? "Hallo, ich bin Ajins Assistant. Du kannst mich zu meinem Studium, meinen Projekten, meinen Interessen oder dem, was ich gerade lerne, fragen."
      : "Hi, I’m Ajin’s assistant. You can ask about my studies, projects, interests, or what I’m learning right now.";

  const apiBaseUrl = useMemo(() => {
    const envUrl = process.env.NEXT_PUBLIC_API_URL?.trim();
    if (envUrl) {
      return envUrl.replace(/\/+$/, "");
    }
    return "http://127.0.0.1:8000";
  }, []);

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<
    { role: "assistant" | "user"; text: string }[]
  >([{ role: "assistant", text: introMessage }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    const userMessage = input.trim();
    if (!userMessage) return;

    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${apiBaseUrl}/ask`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            text:
              locale === "de"
                ? `Fehler: ${res.status} ${errorText}`
                : `Error: ${res.status} ${errorText}`,
          },
        ]);
        setLoading(false);
        return;
      }

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            data.answer ||
            (locale === "de"
              ? "Etwas ist schiefgelaufen."
              : "Something went wrong."),
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            locale === "de"
              ? `Netzwerkfehler: ${String(error)}`
              : `Network error: ${String(error)}`,
        },
      ]);
    }

    setLoading(false);
  }

  function clearChat() {
    setMessages([{ role: "assistant", text: introMessage }]);
  }

  return (
    <>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-[100] rounded-full border border-white/10 bg-black/75 px-5 py-3 text-sm text-white/85 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 hover:bg-black/85"
      >
        {locale === "de" ? "Ajins Assistant" : "Ajin’s Assistant"}
      </button>

      {open && (
        <div className="fixed bottom-20 right-6 z-[100] w-[420px] max-w-[92vw] rounded-[26px] border border-white/10 bg-black/88 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
          <div className="mb-4 flex items-start justify-between gap-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--accent)]">
                {locale === "de" ? "Ajins Assistant" : "Ajin’s Assistant"}
              </p>
              <p className="mt-1 text-sm text-white/55">
                {locale === "de"
                  ? "Frag mich zu meinem Studium, meinen Projekten und Interessen"
                  : "Ask about my studies, projects, and interests"}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={clearChat}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/45 transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                {locale === "de" ? "Zurücksetzen" : "Reset"}
              </button>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/10 px-3 py-1 text-sm text-white/45 transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                ×
              </button>
            </div>
          </div>

          <div className="max-h-[360px] space-y-3 overflow-y-auto pr-1">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`rounded-[18px] px-4 py-3 text-[0.95rem] leading-[1.7] ${
                  msg.role === "user"
                    ? "ml-8 border border-white/10 bg-white/[0.06] text-white"
                    : "mr-8 border border-white/8 bg-white/[0.03] text-white/76"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="mr-8 rounded-[18px] border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white/50">
                {locale === "de" ? "denke nach..." : "thinking..."}
              </div>
            )}
          </div>

          <div className="mt-4 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              placeholder={locale === "de" ? "Frag etwas..." : "Ask something..."}
              className="flex-1 rounded-full border border-white/10 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-white/30"
            />

            <button
              onClick={sendMessage}
              className="rounded-full border border-white/10 px-4 py-3 text-sm text-white/85 transition-all duration-300 hover:bg-white/10"
            >
              →
            </button>
          </div>
        </div>
      )}
    </>
  );
}