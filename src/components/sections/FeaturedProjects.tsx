import { featuredProjects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import T from "@/components/ui/T";

export default function FeaturedProjects() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="// featured projects"
          title={<T en="Selected work" id="Karya pilihan" />}
          description={
            <T
              en="Real applications built for real users, from mobile tracking to internal business systems."
              id="Aplikasi nyata untuk pengguna nyata, dari pelacakan mobile sampai sistem bisnis internal."
            />
          }
          action={{ href: "/projects", label: <T en="All projects" id="Semua proyek" /> }}
        />
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.08}>
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
