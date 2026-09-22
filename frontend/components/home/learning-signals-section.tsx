"use client";

import { useMemo, useState } from "react";
import Reveal from "@/components/motion/reveal";

type LearningSignalsSectionProps = {
  content: {
    eyebrow: string;
    title: string;
    description: string;
    items: {
      id: string;
      label: string;
      value: string;
      text: string;
    }[];
  };
};

type ThemeMap = {
  accent: string;
  soft: string;
  tags: string[];
};

const themeById: Record<string, ThemeMap> = {
  "ai-practice": {
    accent: "rgba(212,180,131,0.95)",
    soft: "rgba(212,180,131,0.16)",
    tags: ["systems", "operations", "real use"],
  },
  llm: {
    accent: "rgba(244,241,234,0.92)",
    soft: "rgba(244,241,234,0.12)",
    tags: ["prompting", "agents", "language"],
  },
  data: {
    accent: "rgba(176,196,222,0.95)",
    soft: "rgba(176,196,222,0.16)",
    tags: ["analysis", "tools", "data"],
  },
  strategy: {
    accent: "rgba(196,184,160,0.95)",
    soft: "rgba(196,184,160,0.16)",
    tags: ["business", "systems", "decision"],
  },
  ethics: {
    accent: "rgba(160,160,160,0.9)",
    soft: "rgba(160,160,160,0.14)",
    tags: ["ethics", "governance", "impact"],
  },
};

function FocusVisual({
  accent,
  soft,
}: {
  accent: string;
  soft: string;
}) {
  return (
    <div
      className="relative h-[210px] w-full overflow-hidden rounded-[20px] border border-white/10"
      style={{
        background: `radial-gradient(circle at 52% 46%, ${soft}, transparent 42%), rgba(255,255,255,0.02)`,
      }}
    >
      <svg
        viewBox="0 0 560 220"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <filter id="focusGlowCompact">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <line x1="96" y1="60" x2="232" y2="112" stroke={accent} strokeOpacity="0.24" strokeWidth="1.35" />
        <line x1="232" y1="112" x2="390" y2="82" stroke={accent} strokeOpacity="0.24" strokeWidth="1.35" />
        <line x1="232" y1="112" x2="430" y2="168" stroke={accent} strokeOpacity="0.24" strokeWidth="1.35" />
        <line x1="96" y1="60" x2="148" y2="168" stroke={accent} strokeOpacity="0.2" strokeWidth="1.35" />
        <line x1="148" y1="168" x2="430" y2="168" stroke={accent} strokeOpacity="0.2" strokeWidth="1.35" />

        <circle cx="232" cy="112" r="28" fill="none" stroke={accent} strokeOpacity="0.16" strokeWidth="1.1" />
        <circle cx="232" cy="112" r="50" fill="none" stroke={accent} strokeOpacity="0.09" strokeWidth="1" />

        <circle cx="96" cy="60" r="7" fill={accent} filter="url(#focusGlowCompact)" />
        <circle cx="232" cy="112" r="11" fill={accent} filter="url(#focusGlowCompact)" />
        <circle cx="390" cy="82" r="6.5" fill={accent} filter="url(#focusGlowCompact)" />
        <circle cx="148" cy="168" r="6.5" fill={accent} filter="url(#focusGlowCompact)" />
        <circle cx="430" cy="168" r="8" fill={accent} filter="url(#focusGlowCompact)" />
      </svg>

      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  );
}

export default function LearningSignalsSection({
  content,
}: LearningSignalsSectionProps) {
  const [activeId, setActiveId] = useState(content.items[0]?.id ?? "");

  const activeItem = useMemo(() => {
    return content.items.find((item) => item.id === activeId) ?? content.items[0];
  }, [activeId, content.items]);

  const activeTheme = themeById[activeItem.id] ?? themeById["ai-practice"];

  return (
    <section id="learning-signals" className="section-space">
      <div className="container-shell">
        <Reveal>
          <div className="section-head max-w-[720px]">
            <p className="eyebrow">{content.eyebrow}</p>
            <h2 className="section-title max-w-[13ch]">{content.title}</h2>
            <p className="section-copy max-w-[54ch]">{content.description}</p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <div className="surface-card p-3">
              <div className="grid gap-3">
                {content.items.map((item) => {
                  const isActive = item.id === activeId;
                  const itemTheme = themeById[item.id] ?? themeById["ai-practice"];

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onMouseEnter={() => setActiveId(item.id)}
                      onFocus={() => setActiveId(item.id)}
                      onClick={() => setActiveId(item.id)}
                      className={`rounded-[18px] border px-4 py-4 text-left transition-all duration-300 ${
                        isActive
                          ? "border-white/14 bg-white/[0.05]"
                          : "border-white/8 bg-white/[0.015] hover:border-white/12 hover:bg-white/[0.03]"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <span className="min-w-[28px] text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]">
                            {item.value}
                          </span>
                          <span className="text-[0.96rem] leading-[1.35] text-white/92">
                            {item.label}
                          </span>
                        </div>

                        <span
                          className="h-[10px] w-[10px] rounded-full transition-all duration-300"
                          style={{
                            background: itemTheme.accent,
                            boxShadow: isActive ? `0 0 18px ${itemTheme.soft}` : "none",
                            opacity: isActive ? 1 : 0.62,
                          }}
                        />
                      </div>

                      <div className="mt-4 h-px w-full bg-white/8">
                        <div
                          className="h-px transition-all duration-300"
                          style={{
                            width: isActive ? "54%" : "30%",
                            background: `linear-gradient(to right, ${itemTheme.accent}, rgba(244,241,234,0.06))`,
                          }}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="surface-card p-4 md:p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">
                    {activeItem.label}
                  </p>
                  <h3 className="mt-3 text-[clamp(1.45rem,2.4vw,1.9rem)] leading-[1.08] tracking-[-0.05em] text-white">
                    Current focus
                  </h3>
                </div>

                <div className="hidden rounded-full border border-white/10 px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-white/42 sm:block">
                  live view
                </div>
              </div>

              <div className="mt-4">
                <FocusVisual accent={activeTheme.accent} soft={activeTheme.soft} />
              </div>

              <div className="mt-4 grid gap-4 xl:grid-cols-[1fr_auto] xl:items-end">
                <p className="max-w-[40ch] text-[0.96rem] leading-[1.82] text-white/78">
                  {activeItem.text}
                </p>

                <div className="flex flex-wrap gap-2 xl:justify-end">
                  {activeTheme.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}