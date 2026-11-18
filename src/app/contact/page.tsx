import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";
import CopyButton from "@/components/ui/CopyButton";
import Reveal from "@/components/ui/Reveal";
import T from "@/components/ui/T";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Mohammad Raka Saputra.",
  alternates: { canonical: "/contact" },
};

const githubHandle = site.github.replace("https://github.com/", "@");

const primaryBtn =
  "rounded-full bg-primary px-6 py-3 text-center text-sm font-medium text-white shadow-[0_0_30px_-8px_rgba(37,99,235,0.85)] transition hover:bg-primary/90";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
      <Reveal>
        <p className="font-mono text-sm text-accent">{"// contact"}</p>
        <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight sm:text-6xl">
          <T
            en={
              <>
                Let&apos;s <span className="text-gradient">talk</span>
              </>
            }
            id={
              <>
                Mari <span className="text-gradient">ngobrol</span>
              </>
            }
          />
        </h1>
        <p className="mt-5 max-w-2xl text-muted">
          <T
            en="Looking for an IT graduate, a freelance web or mobile developer, or have a project in mind? Or just want to say hello? Email or WhatsApp are the fastest ways to reach me. I am happy to hear from you."
            id="Mencari lulusan TI, freelance developer web atau mobile, atau punya proyek? Atau sekadar ingin menyapa? Email atau WhatsApp adalah cara tercepat menghubungi saya. Saya senang mendengar dari Anda."
          />
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
              <a href={`mailto:${site.email}`} className={primaryBtn}>
                <T en="Send Email" id="Kirim Email" />
              </a>
              <CopyButton value={site.email} label={<T en="Copy address" id="Salin alamat" />} />
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {/* WhatsApp: nomor tidak ditampilkan, hanya tombol */}
          <Reveal delay={0.03}>
            <div className="card-glow flex h-full flex-col justify-between gap-5 rounded-3xl border border-line bg-surface/60 p-6 backdrop-blur-sm sm:p-8">
              <div>
                <p className="font-mono text-xs text-accent">WhatsApp</p>
                <p className="mt-2 font-heading text-xl font-semibold">
                  <T en="Chat with me directly" id="Chat langsung dengan saya" />
                </p>
                <p className="mt-2 text-sm text-muted">
                  <T
                    en="Good for quick questions and project inquiries."
                    id="Cocok untuk pertanyaan singkat dan tawaran proyek."
                  />
                </p>
              </div>
              <div>
                <T
                  en={
                    <a href={site.whatsapp.en} target="_blank" rel="noopener noreferrer" className={`${primaryBtn} inline-block`}>
                      Chat on WhatsApp ↗
                    </a>
                  }
                  id={
                    <a href={site.whatsapp.id} target="_blank" rel="noopener noreferrer" className={`${primaryBtn} inline-block`}>
                      Chat via WhatsApp ↗
                    </a>
                  }
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="card-glow h-full rounded-3xl border border-line bg-surface/60 p-6 backdrop-blur-sm sm:p-8">
              <p className="font-mono text-xs text-accent">
                <T en="Location" id="Lokasi" />
              </p>
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
              <p className="mt-2 text-sm text-muted">
                <T en="Connect with me professionally." id="Terhubung dengan saya secara profesional." />
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent">
                <T en="Open profile" id="Buka profil" />
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
              <p className="mt-2 text-sm text-muted">
                <T en="Browse my repositories and code." id="Jelajahi repositori dan kode saya." />
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent">
                <T en="Open profile" id="Buka profil" />
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
              <p className="mt-2 text-muted">
                <T
                  en="View my CV right here on the site, or download a copy for later."
                  id="Lihat CV saya langsung di situs ini, atau unduh salinannya untuk nanti."
                />
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={site.cvPage}
                className="rounded-full bg-primary px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-primary/90"
              >
                <T en="View CV" id="Lihat CV" />
              </Link>
              <a
                href={site.cv}
                download
                className="rounded-full border border-line px-6 py-3 text-center text-sm font-medium transition hover:border-accent/50 hover:bg-bg/60"
              >
                <T en="Download" id="Unduh" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
