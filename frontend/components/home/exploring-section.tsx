import SectionShell from "./section-shell";
import Reveal from "@/components/motion/reveal";

type ExploringSectionProps = {
  content: {
    eyebrow: string;
    title: string;
    description: string;
    items: {
      title: string;
      text: string;
    }[];
  };
};

export default function ExploringSection({ content }: ExploringSectionProps) {
  return (
    <SectionShell
      id="exploring"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    >
      <div className="grid gap-5 md:grid-cols-2">
        {content.items.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.06}>
            <div className="glass-panel rounded-[24px] p-6 h-full">
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/72">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}