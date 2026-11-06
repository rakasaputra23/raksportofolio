import { techStack } from "@/data/techStack";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function TechStack() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="// tech stack"
          title="Tools I build with"
          description="A focused toolkit across web, backend, and Android development."
        />
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {techStack.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.07}>
            <div className="card-glow h-full rounded-3xl border border-line bg-surface/60 p-6 backdrop-blur-sm">
              <h3 className="font-heading text-lg font-semibold">{group.label}</h3>
              <p className="mt-1 text-sm text-muted">{group.hint}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-line bg-bg/60 px-2.5 py-1.5 font-mono text-xs text-fg/85 transition hover:border-accent/40 hover:text-accent"
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
  );
}
