import SectionShell from "./section-shell";
import ProjectCard from "./project-card";
import { projectContent } from "@/content/project-content";

type WorkSectionProps = {
  locale: string;
  content: {
    eyebrow: string;
    title: string;
    description: string;
  };
};

export default function WorkSection({ locale, content }: WorkSectionProps) {
  const localizedProjects =
    projectContent[locale as "en" | "de"]?.projects ?? projectContent.en.projects;

  return (
    <SectionShell
      id="work"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    >
      <div className="project-grid">
        {localizedProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            locale={locale}
            slug={project.slug}
            title={project.title}
            intro={project.intro}
          />
        ))}
      </div>
    </SectionShell>
  );
}