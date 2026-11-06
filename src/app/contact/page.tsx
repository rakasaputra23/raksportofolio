import type { Metadata } from "next";
import { site } from "@/data/site";
import CopyButton from "@/components/ui/CopyButton";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Mohammad Raka Saputra.",
};

const githubHandle = site.github.replace("https://github.com/", "@");

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
      <Reveal>
        <p className="font-mono text-sm text-accent">{"// contact"}</p>
        <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight sm:text-6xl">
          Let&apos;s <span className="text-gradient">talk</span>
        </h1>
        <p className="mt-5 max-w-2xl text-muted">
          Looking for a junior software engineer, have a project in mind, or just want to say
          hello? Email is the fastest way to reach me. I am happy to hear from you.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5">
        {/* Email */}
        <Reveal>
          <div className="card-glow flex flex-col gap-5 rounded-3xl border border-line bg-surface/60 p-6 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="font-mono text-xs text-accent">Email</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 block break-all font-heading text-xl font-semibold transition hover:text-accent sm:text-2xl"
              >
                {site.email}
              </a>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${site.email}`}
                className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-white shadow-[0_0_30px_-8px_rgba(37,99,235,0.85)] transition hover:bg-primary/90"
              >
                Send Email
              </a>
              <CopyButton value={site.email} label="Copy address" />
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          <Reveal delay={0.03}>
            <div className="card-glow flex h-full flex-col justify-between gap-4 rounded-3xl border border-line bg-surface/60 p-6 backdrop-blur-sm sm:p-8">
              <div>
                <p className="font-mono text-xs text-accent">Phone / WhatsApp</p>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="mt-2 block font-heading text-xl font-semibold transition hover:text-accent"
                >
                  {site.phone}
                </a>
              </div>
              <div>
                <CopyButton value={site.phone} label="Copy number" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="card-glow h-full rounded-3xl border border-line bg-surface/60 p-6 backdrop-blur-sm sm:p-8">
              <p className="font-mono text-xs text-accent">Location</p>
              <p className="mt-2 font-heading text-xl font-semibold">{site.location}</p>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Reveal delay={0.06}>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="card-glow group block h-full rounded-3xl border border-line bg-surface/60 p-6 backdrop-blur-sm sm:p-8"
            >
              <p className="font-mono text-xs text-accent">LinkedIn</p>
              <p className="mt-2 font-heading text-xl font-semibold">Mohammad Raka Saputra</p>
              <p className="mt-2 text-sm text-muted">Connect with me professionally.</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent">
                Open profile
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </span>
            </a>
          </Reveal>

          <Reveal delay={0.12}>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card-glow group block h-full rounded-3xl border border-line bg-surface/60 p-6 backdrop-blur-sm sm:p-8"
            >
              <p className="font-mono text-xs text-accent">GitHub</p>
              <p className="mt-2 font-heading text-xl font-semibold">{githubHandle}</p>
              <p className="mt-2 text-sm text-muted">Browse my repositories and code.</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent">
                Open profile
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <div className="card-glow flex flex-col gap-4 rounded-3xl border border-line bg-surface/60 p-6 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="font-mono text-xs text-accent">Curriculum Vitae</p>
              <p className="mt-2 text-muted">Download my CV for a full overview of my background.</p>
            </div>
            <a
              href={site.cv}
              download
              className="rounded-full border border-line px-6 py-3 text-center text-sm font-medium transition hover:border-accent/50 hover:bg-bg/60"
            >
              Download CV
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
