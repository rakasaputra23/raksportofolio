import { experience } from "@/data/experience";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ExperiencePreview() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="// experience"
          title="Where I have worked and led"
          action={{ href: "/experience", label: "Full experience" }}
        />
      </Reveal>

      <ol className="relative mt-10 space-y-6 border-l border-line pl-6 sm:pl-8">
        {experience.map((item, i) => (
          <li key={`${item.org}-${item.period}`} className="relative">
            <span className="absolute -left-[1.95rem] top-7 h-3 w-3 rounded-full bg-accent ring-4 ring-bg sm:-left-[2.45rem]" />
            <Reveal delay={i * 0.08}>
              <div className="card-glow rounded-3xl border border-line bg-surface/60 p-6 backdrop-blur-sm sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-mono text-xs text-accent">{item.period}</p>
                  <span className="rounded-full border border-line bg-bg/60 px-3 py-1 font-mono text-xs text-muted">
                    {item.type}
                  </span>
                </div>
                <h3 className="mt-3 font-heading text-xl font-semibold">{item.role}</h3>
                <p className="text-muted">{item.org}</p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
