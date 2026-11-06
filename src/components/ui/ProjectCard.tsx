import Link from "next/link";
import type { Project } from "@/data/projects";
import CoverImage from "@/components/ui/CoverImage";

type Props = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="card-glow group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface/60 backdrop-blur-sm"
    >
      {/* Cover: screenshot 1 jika ada, jika tidak tampil visual gradient */}
      <div className="relative h-44 overflow-hidden border-b border-line bg-gradient-to-br from-primary/25 via-surface to-bg">
        <div className="bg-grid absolute inset-0 opacity-70" />
        <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl transition-transform duration-500 group-hover:scale-125" />
        <CoverImage
          src={`/images/projects/${project.slug}/1.png`}
          alt={`${project.title} preview`}
          sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/85 via-bg/10 to-transparent" />
        <span className="absolute left-5 top-4 rounded-full bg-bg/70 px-2.5 py-1 font-mono text-xs text-accent backdrop-blur">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="absolute bottom-4 left-5 font-heading text-2xl font-semibold tracking-tight">
          {project.title}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-xs text-accent">{project.category}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-line bg-bg/60 px-3 py-1 font-mono text-xs text-fg/80"
            >
              {tech}
            </li>
          ))}
        </ul>

        <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
          View project
          <span aria-hidden className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
