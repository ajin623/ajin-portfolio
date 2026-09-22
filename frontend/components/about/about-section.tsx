"use client";

import SectionShell from "@/components/home/section-shell";
import Reveal from "@/components/motion/reveal";

type AboutSectionProps = {
  content: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    stats: {
      label: string;
      value: string;
    }[];
  };
};

export default function AboutSection({ content }: AboutSectionProps) {
  return (
    <SectionShell id="about" eyebrow={content.eyebrow} title={content.title}>
      <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <div className="surface-card p-4 md:p-5">
            <div className="rounded-[20px] border border-white/8 bg-white/[0.015] p-5 md:p-6">
              <div className="flex items-center justify-between gap-4">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">
                  Personal context
                </p>

                <div className="hidden items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-white/42 sm:flex">
                  <span className="h-[7px] w-[7px] rounded-full bg-[var(--accent)] shadow-[0_0_14px_rgba(212,180,131,0.35)]" />
                  Ajin
                </div>
              </div>

              <div className="mt-6 grid gap-4">
                {content.paragraphs.map((paragraph, index) => (
                  <div key={paragraph} className="grid gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] uppercase tracking-[0.2em] text-white/28">
                        0{index + 1}
                      </span>
                      <span className="h-px flex-1 bg-white/8" />
                    </div>

                    <p className="max-w-[58ch] text-[0.96rem] leading-[1.8] text-white/76">
                      {paragraph}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="surface-card p-4">
            <div className="grid gap-3">
              {content.stats.map((item, index) => (
                <div
                  key={item.label}
                  className="rounded-[18px] border border-white/8 bg-white/[0.015] px-5 py-4 transition-all duration-300 hover:border-white/12 hover:bg-white/[0.03]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]">
                      0{index + 1}
                    </span>

                    <span className="h-[8px] w-[8px] rounded-full bg-white/18" />
                  </div>

                  <p className="mt-4 text-[13px] text-white/46">{item.label}</p>
                  <p className="mt-2 text-[1.12rem] leading-[1.24] tracking-[-0.03em] text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}