import Link from "next/link";
import { site } from "@/data/site";
import ProfilePhoto from "@/components/ui/ProfilePhoto";
import Reveal from "@/components/ui/Reveal";

const roles = [
  "Software Development Enthusiast",
  "Freelance Web & Mobile Developer",
  "IT Support & Networking",
];

const floating = [
  { label: "Laravel", className: "-left-4 top-10 sm:-left-10", delay: "0s" },
  { label: "Kotlin", className: "-right-3 top-1/3 sm:-right-8", delay: "1.2s" },
  { label: "React", className: "-left-2 bottom-16 sm:-left-8", delay: "2.1s" },
];

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.15fr_0.85fr]">
      <div>
        <Reveal>
          <div className="inline-flex max-w-full items-center gap-3 rounded-2xl border border-line bg-surface/60 px-4 py-2.5 backdrop-blur">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <ul className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-accent">
              {roles.map((r, i) => (
                <li key={r} className="flex items-center gap-3">
                  {i > 0 && <span aria-hidden className="h-3 w-px bg-line" />}
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-6 font-heading text-5xl font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-gradient">{site.name}</span>
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-5 max-w-xl font-heading text-xl text-fg sm:text-2xl">{site.tagline}</p>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">{site.description}</p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-white shadow-[0_0_34px_-6px_rgba(37,99,235,0.85)] transition hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Explore Projects
            </Link>
            <Link
              href={site.cvPage}
              className="rounded-full border border-line bg-surface/40 px-7 py-3.5 text-sm font-medium text-fg backdrop-blur transition hover:-translate-y-0.5 hover:border-accent/50 hover:bg-surface"
            >
              View CV
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <p className="mt-10 font-mono text-xs text-muted">
            Laravel <span className="text-accent">/</span> React{" "}
            <span className="text-accent">/</span> Next.js <span className="text-accent">/</span>{" "}
            Kotlin
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.2} className="mx-auto w-full max-w-sm lg:max-w-none">
        <div className="relative mx-auto w-full max-w-[22rem]">
          <div className="absolute -inset-3 rounded-[2.25rem] bg-gradient-to-br from-primary/60 via-accent/20 to-transparent blur-2xl" />
          <div className="relative rounded-[2rem] bg-gradient-to-br from-accent/50 via-primary/30 to-line p-px">
            <ProfilePhoto />
          </div>

          {floating.map((chip) => (
            <span
              key={chip.label}
              style={{ animationDelay: chip.delay }}
              className={`animate-float absolute rounded-full border border-line bg-bg/80 px-3.5 py-1.5 font-mono text-xs text-accent shadow-lg backdrop-blur ${chip.className}`}
            >
              {chip.label}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
