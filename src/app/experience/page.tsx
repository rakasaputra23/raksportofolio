import type { Metadata } from "next";
import Link from "next/link";
import { certifications, education, experience, highSchool } from "@/data/experience";
import { zip } from "@/i18n";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import T, { B } from "@/components/ui/T";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Freelance work, final project, internship, organization, education, and certifications of Mohammad Raka Saputra.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
      <Reveal>
        <p className="font-mono text-sm text-accent">{"// experience"}</p>
        <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight sm:text-6xl">
          <span className="text-gradient">
            <T en="Experience" id="Pengalaman" />
          </span>
        </h1>
        <p className="mt-5 max-w-2xl text-muted">
          <T
            en="Freelance work, my final project, my internship, and leadership roles in my campus organization."
            id="Pekerjaan freelance, tugas akhir, magang, dan peran kepemimpinan di organisasi kampus saya."
          />
        </p>
      </Reveal>

      <ol className="relative mt-14 space-y-8 border-l border-line pl-6 sm:pl-9">
        {experience.map((item, i) => (
          <li key={item.key} className="relative">
            <span className="absolute -left-[1.95rem] top-8 h-3 w-3 rounded-full bg-accent ring-4 ring-bg sm:-left-[2.7rem]" />
            <Reveal delay={i * 0.06}>
              <div className="card-glow rounded-3xl border border-line bg-surface/60 p-6 backdrop-blur-sm sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-mono text-xs text-accent">
                    <B v={item.period} />
                  </p>
                  <span className="rounded-full border border-line bg-bg/60 px-3 py-1 font-mono text-xs text-muted">
                    <B v={item.type} />
                  </span>
                </div>
                <h2 className="mt-4 font-heading text-2xl font-semibold tracking-tight">
                  <B v={item.role} />
                </h2>
                <p className="text-muted">
                  <B v={item.org} />
                </p>

                <ul className="mt-5 space-y-3 leading-relaxed text-muted">
                  {zip(item.points).map((point) => (
                    <li key={point.en} className="flex gap-3">
                      <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <B v={point} />
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
          <SectionHeading eyebrow="// education" title={<T en="Education" id="Pendidikan" />} />
        </Reveal>
        <Reveal delay={0.08}>
          <div className="card-glow mt-8 rounded-3xl border border-line bg-surface/60 p-6 backdrop-blur-sm sm:p-8">
            <h3 className="font-heading text-xl font-semibold">
              <B v={education.program} />
            </h3>
            <p className="text-muted">{education.school}</p>
            <p className="mt-1 font-mono text-xs text-accent">
              {education.period} · <T en="GPA" id="IPK" /> {education.gpa}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              <B v={education.note} />
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="card-glow mt-5 rounded-3xl border border-line bg-surface/60 p-6 backdrop-blur-sm sm:p-8">
            <h3 className="font-heading text-xl font-semibold">{highSchool.school}</h3>
            <p className="text-muted">
              <B v={highSchool.program} />
            </p>
            <p className="mt-1 font-mono text-xs text-accent">{highSchool.period}</p>
          </div>
        </Reveal>
      </section>

      <section className="mt-20">
        <Reveal>
          <SectionHeading
            eyebrow="// certifications"
            title={<T en="Certifications" id="Sertifikasi" />}
          />
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal key={c.title.en} delay={i * 0.08}>
              <div className="card-glow h-full rounded-3xl border border-line bg-surface/60 p-6 backdrop-blur-sm">
                <h3 className="font-heading text-lg font-semibold">
                  <B v={c.title} />
                </h3>
                <p className="mt-1 text-muted">
                  <B v={c.issuer} />
                </p>
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
            <T en="See what I built" id="Lihat yang sudah saya bangun" />
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
