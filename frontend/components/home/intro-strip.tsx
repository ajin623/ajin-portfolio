type IntroStripProps = {
  content: {
    items: string[];
  };
};

export default function IntroStrip({ content }: IntroStripProps) {
  return (
    <section className="pb-10">
      <div className="container-shell">
        <div className="glass-panel rounded-[24px] px-5 py-4">
          <div className="flex flex-wrap gap-3 text-sm text-white/68">
            {content.items.map((item) => (
              <span key={item} className="rounded-full border border-white/8 px-4 py-2">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}