import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const facts = [
  { label: "Education", value: "D3 Information Technology", sub: "Politeknik Negeri Madiun · 2023 — 2026 · GPA 3.28" },
  { label: "Focus", value: "Web & Mobile Development", sub: "Laravel · React · Kotlin · Jetpack Compose" },
  { label: "Now", value: "Freelance Full-Stack Developer", sub: "Open to full-time roles and freelance work" },
  { label: "Organization", value: "HIMATIF", sub: "PSDM coordinator · 2024 — 2025" },
];

export default function AboutPreview() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <Reveal>
          <SectionHeading eyebrow="// about" title="A developer who cares about the details" />
          <p className="mt-6 leading-relaxed text-muted">
            I am an Information Technology graduate and full-stack web and Android developer who enjoys turning
            real-world needs into working software. I build web applications with Laravel and React, and
            Android apps with Kotlin and Jetpack Compose.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            I care about clean structure, practical features, and interfaces that people
            actually enjoy using, from the database all the way to the screen.
          </p>
          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent transition hover:text-white"
          >
            More about me
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>

        <div className="grid gap-4">
          {facts.map((fact, i) => (
            <Reveal key={fact.label} delay={i * 0.08}>
              <div className="card-glow rounded-2xl border border-line bg-surface/60 p-5 backdrop-blur-sm">
                <p className="font-mono text-xs text-accent">{fact.label}</p>
                <p className="mt-1.5 font-heading text-lg font-semibold">{fact.value}</p>
                <p className="text-sm text-muted">{fact.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
