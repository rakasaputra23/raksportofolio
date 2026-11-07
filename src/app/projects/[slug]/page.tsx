import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import {
  SCREENSHOT_COUNT,
  getAdjacentProjects,
  getProject,
  projects,
} from "@/data/projects";
import Reveal from "@/components/ui/Reveal";
import ScreenshotGallery from "@/components/ui/ScreenshotGallery";

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <section>
        <p className="font-mono text-xs text-accent">{eyebrow}</p>
        <h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        <div className="mt-5">{children}</div>
      </section>
    </Reveal>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-muted">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed">
          <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
          {item}
        </li>
      ))}
    </ul>
  );
}

// Membaca `params` di dalam komponen anak yang dibungkus <Suspense>,
// supaya shell halaman tidak terikat ke satu URL (lihat panduan Partial Prefetching Next.js).
export default function ProjectDetailPage({ params }: { params: Promise<Params> }) {
  return (
    <Suspense fallback={<ProjectDetailSkeleton />}>
      <ProjectDetails params={params} />
    </Suspense>
  );
}

function ProjectDetailSkeleton() {
  return (
    <div
      aria-hidden
      className="mx-auto max-w-6xl animate-pulse px-5 py-12 sm:px-8 sm:py-20"
    >
      <div className="h-4 w-24 rounded bg-surface" />
      <div className="mt-8 h-12 w-2/3 rounded-xl bg-surface" />
      <div className="mt-5 h-5 w-1/2 rounded bg-surface" />
      <div className="mt-14 grid gap-4 sm:grid-cols-2">
        <div className="aspect-[16/10] rounded-2xl bg-surface" />
        <div className="aspect-[16/10] rounded-2xl bg-surface" />
      </div>
    </div>
  );
}

async function ProjectDetails({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <article className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-20">
      <Link
        href="/projects"
        className="group inline-flex items-center gap-2 text-sm text-muted transition hover:text-white"
      >
        <span aria-hidden className="transition-transform group-hover:-translate-x-1">
          ←
        </span>
        All projects
      </Link>

      <Reveal>
        <header className="mt-8 max-w-3xl">
          <p className="font-mono text-sm text-accent">{project.category}</p>
          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight sm:text-6xl">
            <span className="text-gradient">{project.title}</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">{project.summary}</p>
        </header>
      </Reveal>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_300px]">
        <div className="space-y-14">
          <Reveal>
            <ScreenshotGallery
              slug={project.slug}
              title={project.title}
              count={SCREENSHOT_COUNT}
              captions={project.screenshotCaptions}
            />
          </Reveal>

          {project.overview && (
            <Section eyebrow="// overview" title="Overview">
              <p className="leading-relaxed text-muted">{project.overview}</p>
            </Section>
          )}

          {project.problem && (
            <Section eyebrow="// problem" title="The problem">
              <p className="leading-relaxed text-muted">{project.problem}</p>
            </Section>
          )}

          {project.features && project.features.length > 0 && (
            <Section eyebrow="// features" title="Key features">
              <div className="grid gap-4 sm:grid-cols-2">
                {project.features.map((f) => (
                  <div
                    key={f.title}
                    className="card-glow rounded-2xl border border-line bg-surface/60 p-5"
                  >
                    <h3 className="font-heading text-base font-semibold">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{f.description}</p>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {project.contributions && project.contributions.length > 0 && (
            <Section eyebrow="// contribution" title="My role & contributions">
              <BulletList items={project.contributions} />
            </Section>
          )}

          {((project.challenges && project.challenges.length > 0) ||
            (project.learnings && project.learnings.length > 0)) && (
            <Section eyebrow="// learning" title="Challenges & learnings">
              <div className="space-y-8">
                {project.challenges && project.challenges.length > 0 && (
                  <div>
                    <h3 className="mb-3 font-heading text-base font-semibold">Challenges</h3>
                    <BulletList items={project.challenges} />
                  </div>
                )}
                {project.learnings && project.learnings.length > 0 && (
                  <div>
                    <h3 className="mb-3 font-heading text-base font-semibold">What I learned</h3>
                    <BulletList items={project.learnings} />
                  </div>
                )}
              </div>
            </Section>
          )}
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-line bg-surface/60 p-6 backdrop-blur-sm">
              <dl className="space-y-5 text-sm">
                {project.role && (
                  <div>
                    <dt className="font-mono text-xs text-accent">Role</dt>
                    <dd className="mt-1 text-fg">{project.role}</dd>
                  </div>
                )}
                {project.timeline && (
                  <div>
                    <dt className="font-mono text-xs text-accent">Timeline</dt>
                    <dd className="mt-1 text-fg">{project.timeline}</dd>
                  </div>
                )}
                <div>
                  <dt className="font-mono text-xs text-accent">Tech stack</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-line bg-bg/60 px-3 py-1 font-mono text-xs text-fg/85"
                      >
                        {tech}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white shadow-[0_0_30px_-8px_rgba(37,99,235,0.85)] transition hover:bg-primary/90"
                >
                  {project.linkLabel ?? "Visit Project"}
                  <span aria-hidden>↗</span>
                </a>
              )}
            </div>
          </Reveal>
        </aside>
      </div>

      {/* Previous / next project */}
      <nav
        aria-label="Project navigation"
        className="mt-20 grid gap-4 border-t border-line pt-10 sm:grid-cols-2"
      >
        <Link
          href={`/projects/${prev.slug}`}
          className="card-glow group rounded-2xl border border-line bg-surface/60 p-5"
        >
          <p className="font-mono text-xs text-muted">← Previous</p>
          <p className="mt-1 font-heading text-lg font-semibold">{prev.title}</p>
        </Link>
        <Link
          href={`/projects/${next.slug}`}
          className="card-glow group rounded-2xl border border-line bg-surface/60 p-5 sm:text-right"
        >
          <p className="font-mono text-xs text-muted">Next →</p>
          <p className="mt-1 font-heading text-lg font-semibold">{next.title}</p>
        </Link>
      </nav>
    </article>
  );
}
