"use client";

import { useMemo, useState } from "react";
import SectionShell from "./section-shell";
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
    tags: ["real use", "workflows", "systems"],
  },
  prompting: {
    accent: "rgba(244,241,234,0.92)",
    soft: "rgba(244,241,234,0.12)",
    tags: ["language", "structure", "quality"],
  },
  "data-viz": {
    accent: "rgba(176,196,222,0.95)",
    soft: "rgba(176,196,222,0.16)",
    tags: ["clarity", "patterns", "reading"],
  },
  "product-thinking": {
    accent: "rgba(196,184,160,0.95)",
    soft: "rgba(196,184,160,0.16)",
    tags: ["experience", "systems", "design"],
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
      className="relative h-[260px] w-full overflow-hidden rounded-[26px] border border-white/10"
      style={{
        background: `radial-gradient(circle at 52% 46%, ${soft}, transparent 42%), rgba(255,255,255,0.02)`,
      }}
    >
      <svg
        viewBox="0 0 560 260"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <filter id="atlasGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <line x1="96" y1="58" x2="232" y2="132" stroke={accent} strokeOpacity="0.26" strokeWidth="1.5" />
        <line x1="232" y1="132" x2="394" y2="84" stroke={accent} strokeOpacity="0.26" strokeWidth="1.5" />
        <line x1="232" y1="132" x2="434" y2="188" stroke={accent} strokeOpacity="0.26" strokeWidth="1.5" />
        <line x1="96" y1="58" x2="154" y2="188" stroke={accent} strokeOpacity="0.22" strokeWidth="1.5" />
        <line x1="154" y1="188" x2="434" y2="188" stroke={accent} strokeOpacity="0.22" strokeWidth="1.5" />

        <circle cx="232" cy="132" r="34" fill="none" stroke={accent} strokeOpacity="0.18" strokeWidth="1.4" />
        <circle cx="232" cy="132" r="58" fill="none" stroke={accent} strokeOpacity="0.1" strokeWidth="1.1" />

        <circle cx="96" cy="58" r="7" fill={accent} filter="url(#atlasGlow)" />
        <circle cx="232" cy="132" r="12" fill={accent} filter="url(#atlasGlow)" />
        <circle cx="394" cy="84" r="6.5" fill={accent} filter="url(#atlasGlow)" />
        <circle cx="154" cy="188" r="6.5" fill={accent} filter="url(#atlasGlow)" />
        <circle cx="434" cy="188" r="8" fill={accent} filter="url(#atlasGlow)" />
      </svg>

      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
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
    <section id="learning-signals" className="py-20">
      <div className="container-shell">
        <Reveal>
          <div className="max-w-[760px]">
            <p className="eyebrow">{content.eyebrow}</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] tracking-[-0.05em] text-white">
              {content.title}
            </h2>
            <p className="mt-5 max-w-[58ch] text-[1rem] leading-[1.85] text-white/68">
              {content.description}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <Reveal>
            <div className="rounded-[28px] border border-white/10 bg-white/[0.02] p-3 backdrop-blur-xl">
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
                      className={`rounded-[22px] border px-4 py-4 text-left transition-all duration-300 ${
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
                          <span className="text-[1rem] leading-[1.35] text-white/92">
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
            <div className="rounded-[28px] border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">
                    {activeItem.label}
                  </p>
                  <h3 className="mt-3 text-[clamp(1.7rem,2.6vw,2.3rem)] leading-[1.05] tracking-[-0.05em] text-white">
                    Current focus
                  </h3>
                </div>

                <div className="hidden rounded-full border border-white/10 px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-white/42 sm:block">
                  live view
                </div>
              </div>

              <div className="mt-5">
                <FocusVisual accent={activeTheme.accent} soft={activeTheme.soft} />
              </div>

              <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
                <p className="max-w-[38ch] text-[1rem] leading-[1.9] text-white/78">
                  {activeItem.text}
                </p>

                <div className="flex flex-wrap gap-2 lg:justify-end">
                  {activeTheme.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-2 text-[12px] text-white/58"
                    >
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