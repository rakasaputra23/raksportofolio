import type { Metadata } from "next";
import Link from "next/link";
import { certifications, education, experience, languages, training } from "@/data/experience";
import { techStack } from "@/data/techStack";
import { site } from "@/data/site";
import ProfilePhoto from "@/components/ui/ProfilePhoto";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description: "About Mohammad Raka Saputra, a junior software engineer building web and mobile applications.",
};

const values = [
  {
    title: "Clean structure",
    text: "Readable code and a sensible architecture, so a project stays easy to extend long after the first release.",
  },
  {
    title: "Practical features",
    text: "I start from the real problem users have, then build only what actually helps them solve it.",
  },
  {
    title: "Teamwork and problem solving",
    text: "I work well with teams, coordinate clearly, and focus on solving problems in real projects, from client work to production deployments.",
  },
];

const himatif = experience.find((e) => e.org === "HIMATIF");

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      {/* Intro */}
      <section className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="mx-auto w-full max-w-xs lg:max-w-sm">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2.25rem] bg-gradient-to-br from-primary/50 via-accent/15 to-transparent blur-2xl" />
            <div className="relative rounded-[2rem] bg-gradient-to-br from-accent/50 via-primary/30 to-line p-px">
              <ProfilePhoto />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="font-mono text-sm text-accent">{"// about"}</p>
          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Hi, I&apos;m <span className="text-gradient">Raka</span>.
          </h1>
          <div className="mt-6 space-y-4 leading-relaxed text-muted">
            <p>
              I am a D3 Information Technology graduate and junior software engineer. I build web
              applications with PHP, Laravel, React, and Next.js, and mobile apps with Kotlin,
              Jetpack Compose, and Flutter.
            </p>
            <p>
              My work ranges from a real-time bus tracking system built as my final project (Android
              and GPS) and projects for real clients, to internal business tools built during my
              internship. I enjoy the full journey of a product: shaping the database,
              building the interface, and deploying it for people to use.
            </p>
            <p>
              Outside of code, I have led teams and events in my campus organization, which taught
              me how to plan, coordinate, and deliver together.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.cv}
              download
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-white shadow-[0_0_30px_-8px_rgba(37,99,235,0.85)] transition hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Download CV
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-line px-6 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:border-accent/50 hover:bg-surface"
            >
              Get in touch
            </Link>
          </div>
        </Reveal>
      </section>

      {/* How I work */}
      <section className="mt-24">
        <Reveal>
          <SectionHeading eyebrow="// principles" title="How I work" />
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="card-glow h-full rounded-3xl border border-line bg-surface/60 p-6 backdrop-blur-sm">
                <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-heading text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Education & organization */}
      <section className="mt-24">
        <Reveal>
          <SectionHeading eyebrow="// background" title="Education & organization" />
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="card-glow h-full rounded-3xl border border-line bg-surface/60 p-6 backdrop-blur-sm">
              <p className="font-mono text-xs text-accent">Education</p>
              <h3 className="mt-3 font-heading text-xl font-semibold">{education.program}</h3>
              <p className="text-muted">{education.school}</p>
              <p className="mt-1 font-mono text-xs text-muted">
                {education.period} · GPA {education.gpa}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{education.note}</p>
            </div>
          </Reveal>
          {himatif && (
            <Reveal delay={0.08}>
              <div className="card-glow h-full rounded-3xl border border-line bg-surface/60 p-6 backdrop-blur-sm">
                <p className="font-mono text-xs text-accent">
                  Organization · {himatif.period}
                </p>
                <h3 className="mt-3 font-heading text-xl font-semibold">{himatif.org}</h3>
                <p className="text-muted">{himatif.role}</p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                  {himatif.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Skills */}
      <section className="mt-24">
        <Reveal>
          <SectionHeading
            eyebrow="// skills"
            title="Skills & tools"
            description="The technologies I use most often across web, backend, and mobile."
          />
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {techStack.map((group, i) => (
            <Reveal key={group.label} delay={(i % 2) * 0.08}>
              <div className="card-glow h-full rounded-3xl border border-line bg-surface/60 p-6 backdrop-blur-sm">
                <h3 className="font-heading text-lg font-semibold">{group.label}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-line bg-bg/60 px-2.5 py-1.5 font-mono text-xs text-fg/85"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Training, languages & certifications */}
      <section className="mt-24">
        <Reveal>
          <SectionHeading eyebrow="// credentials" title="Training, languages & certifications" />
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <Reveal>
            <div className="card-glow h-full rounded-3xl border border-line bg-surface/60 p-6 backdrop-blur-sm">
              <h3 className="font-heading text-lg font-semibold">Training</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {training.map((t) => (
                  <li
                    key={t}
                    className="rounded-lg border border-line bg-bg/60 px-2.5 py-1.5 font-mono text-xs text-fg/85"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="card-glow h-full rounded-3xl border border-line bg-surface/60 p-6 backdrop-blur-sm">
              <h3 className="font-heading text-lg font-semibold">Languages</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                {languages.map((l) => (
                  <li key={l.name} className="flex items-center justify-between gap-3">
                    <span className="text-fg">{l.name}</span>
                    <span className="font-mono text-xs text-accent">{l.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="card-glow h-full rounded-3xl border border-line bg-surface/60 p-6 backdrop-blur-sm">
              <h3 className="font-heading text-lg font-semibold">Certifications</h3>
              <ul className="mt-4 space-y-4 text-sm">
                {certifications.map((c) => (
                  <li key={c.title}>
                    <p className="text-fg">{c.title}</p>
                    <p className="text-muted">{c.issuer}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
