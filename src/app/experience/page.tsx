import type { Metadata } from "next";
import Link from "next/link";
import { certifications, education, experience } from "@/data/experience";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Experience",
  description: "Internship, organization, education, and certifications of Mohammad Raka Saputra.",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
      <Reveal>
        <p className="font-mono text-sm text-accent">{"// experience"}</p>
        <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight sm:text-6xl">
          <span className="text-gradient">Experience</span>
        </h1>
        <p className="mt-5 max-w-2xl text-muted">
          Professional experience from my internship and leadership roles in my campus
          organization.
        </p>
      </Reveal>

      <ol className="relative mt-14 space-y-8 border-l border-line pl-6 sm:pl-9">
        {experience.map((item, i) => (
          <li key={`${item.org}-${item.period}`} className="relative">
            <span className="absolute -left-[1.95rem] top-8 h-3 w-3 rounded-full bg-accent ring-4 ring-bg sm:-left-[2.7rem]" />
            <Reveal delay={i * 0.06}>
              <div className="card-glow rounded-3xl border border-line bg-surface/60 p-6 backdrop-blur-sm sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-mono text-xs text-accent">{item.period}</p>
                  <span className="rounded-full border border-line bg-bg/60 px-3 py-1 font-mono text-xs text-muted">
                    {item.type}
                  </span>
                </div>
                <h2 className="mt-4 font-heading text-2xl font-semibold tracking-tight">
                  {item.role}
                </h2>
                <p className="text-muted">{item.org}</p>

                <ul className="mt-5 space-y-3 leading-relaxed text-muted">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>

                {item.tags && (
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-line bg-bg/60 px-3 py-1 font-mono text-xs text-fg/80"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <section className="mt-20">
        <Reveal>
          <SectionHeading eyebrow="// education" title="Education" />
        </Reveal>
        <Reveal delay={0.08}>
          <div className="card-glow mt-8 rounded-3xl border border-line bg-surface/60 p-6 backdrop-blur-sm sm:p-8">
            <h3 className="font-heading text-xl font-semibold">{education.program}</h3>
            <p className="text-muted">{education.school}</p>
            <p className="mt-1 font-mono text-xs text-accent">
              {education.period} · GPA {education.gpa}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{education.note}</p>
          </div>
        </Reveal>
      </section>

      <section className="mt-20">
        <Reveal>
          <SectionHeading eyebrow="// certifications" title="Certifications" />
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="card-glow h-full rounded-3xl border border-line bg-surface/60 p-6 backdrop-blur-sm">
                <h3 className="font-heading text-lg font-semibold">{c.title}</h3>
                <p className="mt-1 text-muted">{c.issuer}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <div className="mt-16 text-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-accent transition hover:text-white"
          >
            See what I built
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
