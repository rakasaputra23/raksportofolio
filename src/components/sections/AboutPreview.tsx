import Link from "next/link";
import type { Bi } from "@/i18n";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import T, { B } from "@/components/ui/T";

const facts: { label: Bi; value: Bi; sub: Bi }[] = [
  {
    label: { en: "Education", id: "Pendidikan" },
    value: { en: "D3 Information Technology", id: "D3 Teknologi Informasi" },
    sub: {
      en: "Politeknik Negeri Madiun · 2023 — 2026 · GPA 3.28",
      id: "Politeknik Negeri Madiun · 2023 — 2026 · IPK 3,28",
    },
  },
  {
    label: { en: "Focus", id: "Fokus" },
    value: { en: "Software Development & IT Support", id: "Pengembangan Perangkat Lunak & Dukungan TI" },
    sub: { en: "Laravel · React · Kotlin · Networking", id: "Laravel · React · Kotlin · Jaringan" },
  },
  {
    label: { en: "Now", id: "Saat ini" },
    value: { en: "Freelance Full-Stack Developer", id: "Freelance Full-Stack Developer" },
    sub: {
      en: "Open to full-time roles and freelance work",
      id: "Terbuka untuk posisi full-time dan pekerjaan freelance",
    },
  },
  {
    label: { en: "Organization", id: "Organisasi" },
    value: { en: "HIMATIF", id: "HIMATIF" },
    sub: { en: "PSDM coordinator · 2024 — 2025", id: "Koordinator PSDM · 2024 — 2025" },
  },
];

export default function AboutPreview() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="// about"
            title={
              <T
                en="An IT graduate who cares about the details"
                id="Lulusan TI yang peduli pada detail"
              />
            }
          />
          <p className="mt-6 leading-relaxed text-muted">
            <T
              en="I am a D3 Information Technology graduate and software development enthusiast who enjoys turning real problems into working solutions. As a freelance developer I build web applications with Laravel and React, and mobile apps with Kotlin and Jetpack Compose."
              id="Saya lulusan D3 Teknologi Informasi dan peminat pengembangan perangkat lunak yang senang mengubah masalah nyata menjadi solusi yang berfungsi. Sebagai freelance developer saya membangun aplikasi web dengan Laravel dan React, serta aplikasi mobile dengan Kotlin dan Jetpack Compose."
            />
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            <T
              en="Beyond code, I am comfortable with IT support, computer networking, and database management. I care about clean structure, practical features, and systems that people can rely on, from the database all the way to the screen."
              id="Selain kode, saya nyaman dengan dukungan TI, jaringan komputer, dan manajemen database. Saya peduli pada struktur yang rapi, fitur yang praktis, dan sistem yang bisa diandalkan orang, dari database sampai ke layar."
            />
          </p>
          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent transition hover:text-white"
          >
            <T en="More about me" id="Selengkapnya tentang saya" />
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>

        <div className="grid gap-4">
          {facts.map((fact, i) => (
            <Reveal key={fact.label.en} delay={i * 0.08}>
              <div className="card-glow rounded-2xl border border-line bg-surface/60 p-5 backdrop-blur-sm">
                <p className="font-mono text-xs text-accent">
                  <B v={fact.label} />
                </p>
                <p className="mt-1.5 font-heading text-lg font-semibold">
                  <B v={fact.value} />
                </p>
                <p className="text-sm text-muted">
                  <B v={fact.sub} />
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
