import Link from "next/link";

type ProjectCardProps = {
  title: string;
  intro: string;
  slug: string;
  locale: string;
};

export default function ProjectCard({
  title,
  intro,
  slug,
  locale,
}: ProjectCardProps) {
  return (
    <article className="surface-card surface-card--interactive project-card-shell">
      <div className="project-card-content">
        <div>
          <h3 className="project-card-title">{title}</h3>
          <p className="project-card-copy">{intro}</p>
        </div>

        <div className="project-card-action">
          <Link
            href={`/${locale}/projects/${slug}`}
            className="secondary-button"
          >
            <span>Open case study</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </article>
  );
}