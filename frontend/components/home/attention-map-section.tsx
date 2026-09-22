"use client";

import { useMemo, useState } from "react";
import SectionShell from "./section-shell";

type AttentionMapSectionProps = {
  content: {
    eyebrow: string;
    title: string;
    description: string;
    items: {
      id: string;
      label: string;
      text: string;
      x: string;
      y: string;
    }[];
  };
};

export default function AttentionMapSection({ content }: AttentionMapSectionProps) {
  const [activeId, setActiveId] = useState(content.items[0]?.id ?? "");

  const activeItem = useMemo(() => {
    return content.items.find((item) => item.id === activeId) ?? content.items[0];
  }, [activeId, content.items]);

  const lines = [
    { x1: "18%", y1: "25%", x2: "52%", y2: "18%" },
    { x1: "52%", y1: "18%", x2: "74%", y2: "42%" },
    { x1: "18%", y1: "25%", x2: "28%", y2: "68%" },
    { x1: "28%", y1: "68%", x2: "62%", y2: "76%" },
    { x1: "74%", y1: "42%", x2: "62%", y2: "76%" },
  ];

  return (
    <SectionShell
      id="attention"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    >
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="attention-map-panel rounded-[30px] p-5 md:p-6">
          <div className="relative min-h-[380px] overflow-hidden rounded-[24px] border border-white/6 bg-black/10">
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {lines.map((line, index) => (
                <line
                  key={index}
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="rgba(212,180,131,0.18)"
                  strokeWidth="0.35"
                />
              ))}
            </svg>

            {content.items.map((item) => {
              const isActive = item.id === activeItem.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onMouseEnter={() => setActiveId(item.id)}
                  onFocus={() => setActiveId(item.id)}
                  onClick={() => setActiveId(item.id)}
                  className={`attention-node ${isActive ? "attention-node--active" : ""}`}
                  style={{ left: item.x, top: item.y }}
                >
                  <span className="attention-node__dot" />
                  <span className="attention-node__label">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="glass-panel rounded-[30px] p-6 md:p-7">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--accent)]">
            {activeItem.label}
          </p>
          <p className="mt-4 text-[15px] leading-8 text-white/78">{activeItem.text}</p>
        </div>
      </div>
    </SectionShell>
  );
}