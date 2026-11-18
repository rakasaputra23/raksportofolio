import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import T from "@/components/ui/T";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected web and mobile projects by Mohammad Raka Saputra.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <Reveal>
        <p className="font-mono text-sm text-accent">{"// projects"}</p>
        <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight sm:text-6xl">
          <span className="text-gradient">
            <T en="Things I have built" id="Yang sudah saya bangun" />
          </span>
        </h1>
        <p className="mt-5 max-w-2xl text-muted">
          <T
            en="A collection of web and mobile applications, from real-time tracking systems to internal business tools. Open a project to see the problem, features, and my role."
            id="Kumpulan aplikasi web dan mobile, dari sistem pelacakan real-time sampai alat bisnis internal. Buka sebuah proyek untuk melihat masalah, fitur, dan peran saya."
          />
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
