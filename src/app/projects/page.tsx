import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected web and mobile projects by Mohammad Raka Saputra.",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <Reveal>
        <p className="font-mono text-sm text-accent">{"// projects"}</p>
        <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight sm:text-6xl">
          <span className="text-gradient">Things I have built</span>
        </h1>
        <p className="mt-5 max-w-2xl text-muted">
          A collection of web and mobile applications, from real-time tracking systems to internal
          business tools. Open a project to see the problem, features, and my role.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 2) * 0.08}>
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
