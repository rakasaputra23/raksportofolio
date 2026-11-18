import { site } from "@/data/site";
import Reveal from "@/components/ui/Reveal";
import T from "@/components/ui/T";

const outline =
  "rounded-full border border-line bg-bg/40 px-7 py-3.5 text-sm font-medium transition hover:-translate-y-0.5 hover:border-accent/50";

export default function ContactCTA() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-20 sm:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface/70 px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="bg-grid absolute inset-0 opacity-60" />
          <div className="absolute left-1/2 top-0 h-56 w-[28rem] -translate-x-1/2 rounded-full bg-primary/30 blur-[100px]" />

          <div className="relative">
            <p className="font-mono text-sm text-accent">{"// contact"}</p>
            <h2 className="mx-auto mt-3 max-w-2xl font-heading text-3xl font-bold tracking-tight sm:text-5xl">
              <T
                en={
                  <>
                    Let&apos;s build something <span className="text-gradient">great together</span>
                  </>
                }
                id={
                  <>
                    Mari bangun sesuatu yang <span className="text-gradient">hebat bersama</span>
                  </>
                }
              />
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              <T
                en="Open to full-time roles, projects, and collaborations. Reach me by email or WhatsApp."
                id="Terbuka untuk posisi full-time, proyek, dan kolaborasi. Hubungi saya lewat email atau WhatsApp."
              />
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${site.email}`}
                className="rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-white shadow-[0_0_34px_-6px_rgba(37,99,235,0.85)] transition hover:-translate-y-0.5 hover:bg-primary/90"
              >
                <T en="Say Hello" id="Sapa Saya" />
              </a>
              <T
                en={
                  <a href={site.whatsapp.en} target="_blank" rel="noopener noreferrer" className={outline}>
                    WhatsApp
                  </a>
                }
                id={
                  <a href={site.whatsapp.id} target="_blank" rel="noopener noreferrer" className={outline}>
                    WhatsApp
                  </a>
                }
              />
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={outline}>
                LinkedIn
              </a>
              <a href={site.github} target="_blank" rel="noopener noreferrer" className={outline}>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
