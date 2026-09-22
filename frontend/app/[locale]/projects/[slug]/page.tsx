import Link from "next/link";
import { notFound } from "next/navigation";
import { projectContent } from "@/content/project-content";

const locales = ["en", "de"] as const;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    projectContent[locale].projects.map((project) => ({
      locale,
      slug: project.slug,
    }))
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  const content =
    projectContent[locale as "en" | "de"] ?? projectContent.en;

  const project = content.projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen py-20 md:py-24">
      <div className="container-shell max-w-5xl">
        <Link
          href={`/${locale}#work`}
          className="secondary-button"
        >
          <span aria-hidden="true">←</span>
          <span>{content.labels.backToWork}</span>
        </Link>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="eyebrow">{content.labels.caseStudy}</p>

            <h1 className="mt-4 text-[clamp(2.2rem,4vw,4rem)] leading-[1.02] tracking-[-0.06em] text-white max-w-[12ch]">
              {project.title}
            </h1>

            <p className="mt-5 max-w-[30ch] text-[1rem] leading-[1.85] text-white/68">
              {project.intro}
            </p>
          </div>

          <div className="surface-card p-5 md:p-6">
            <div className="grid gap-6">
              <div className="grid gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">
                    01
                  </span>
                  <span className="h-px flex-1 bg-white/8" />
                </div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-white/42">
                  {content.labels.context}
                </p>
                <p className="text-[0.98rem] leading-[1.85] text-white/78">
                  {project.context}
                </p>
              </div>

              <div className="grid gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">
                    02
                  </span>
                  <span className="h-px flex-1 bg-white/8" />
                </div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-white/42">
                  {content.labels.role}
                </p>
                <p className="text-[0.98rem] leading-[1.85] text-white/78">
                  {project.role}
                </p>
              </div>

              <div className="grid gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">
                    03
                  </span>
                  <span className="h-px flex-1 bg-white/8" />
                </div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-white/42">
                  {content.labels.reflection}
                </p>
                <p className="text-[0.98rem] leading-[1.85] text-white/78">
                  {project.reflection}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 surface-card p-5 md:p-6">
          <div className="grid gap-5">
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]">
                {content.labels.notes}
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {project.story.map((paragraph, index) => (
                <div
                  key={paragraph}
                  className="rounded-[18px] border border-white/8 bg-white/[0.015] px-4 py-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-white/28">
                      0{index + 1}
                    </span>
                    <span className="h-px flex-1 bg-white/8" />
                  </div>

                  <p className="mt-4 text-[0.95rem] leading-[1.8] text-white/74">
                    {paragraph}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}