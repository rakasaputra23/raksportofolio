import type { Metadata } from "next";
import Link from "next/link";
import { certifications, education, experience, highSchool, languages, training } from "@/data/experience";
import { techStack } from "@/data/techStack";
import { site } from "@/data/site";
import { zip, type Bi } from "@/i18n";
import ProfilePhoto from "@/components/ui/ProfilePhoto";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import T, { B } from "@/components/ui/T";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Mohammad Raka Saputra, an Information Technology graduate working across software development, IT support, and networking.",
  alternates: { canonical: "/about" },
};

// Prinsip kerja yang diambil dari keputusan nyata di proyek-proyek saya.
const principles: { title: Bi; text: Bi; slug: string }[] = [
  {
    slug: "customer-complaint",
    title: {
      en: "Design the exit, not just the happy path",
      id: "Rancang jalan keluarnya, bukan hanya alur idealnya",
    },
    text: {
      en: "In the Customer Complaint System, a rejected resolution opens a linked revision case that closes through a bounded path, so the approve/reject cycle can never loop forever.",
      id: "Di Customer Complaint System, solusi yang ditolak membuka kasus revisi yang terhubung dan ditutup lewat jalur terbatas, sehingga siklus setuju/tolak tidak bisa berputar tanpa akhir.",
    },
  },
  {
    slug: "stj-tracker",
    title: {
      en: "Use the right store for each kind of data",
      id: "Pakai penyimpanan yang tepat untuk tiap jenis data",
    },
    text: {
      en: "STJ Tracker keeps live location and occupancy in Firebase Realtime Database and master data in MySQL behind a Laravel API, with an average sync latency of 1.58 seconds.",
      id: "STJ Tracker menyimpan lokasi dan okupansi langsung di Firebase Realtime Database dan data master di MySQL di balik API Laravel, dengan rata-rata latensi sinkronisasi 1,58 detik.",
    },
  },
  {
    slug: "kasbon-online",
    title: {
      en: "Model the real process, not the described one",
      id: "Modelkan proses yang sebenarnya, bukan yang diceritakan",
    },
    text: {
      en: "The real approval flow of Kasbon Online was far more complex than first described, so I built dynamic 5–6 level routing and validated it in a month of user acceptance testing.",
      id: "Alur persetujuan Kasbon Online yang sebenarnya jauh lebih kompleks dari penjelasan awal, jadi saya membangun routing dinamis 5–6 level dan memvalidasinya lewat user acceptance testing selama sebulan.",
    },
  },
];

const himatif = experience.find((e) => e.key === "himatif");

const card = "card-glow h-full rounded-3xl border border-line bg-surface/60 p-6 backdrop-blur-sm";
const chip = "rounded-lg border border-line bg-bg/60 px-2.5 py-1.5 font-mono text-xs text-fg/85";

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
            <T
              en={
                <>
                  Hi, I&apos;m <span className="text-gradient">Raka</span>.
                </>
              }
              id={
                <>
                  Halo, saya <span className="text-gradient">Raka</span>.
                </>
              }
            />
          </h1>
          <div className="mt-6 space-y-4 leading-relaxed text-muted">
            <p>
              <T
                en="I am a D3 Information Technology graduate from Politeknik Negeri Madiun and a software development enthusiast who enjoys turning real-world needs into working software. As a freelance developer I build web applications with PHP, Laravel, and React, and mobile apps with Kotlin and Jetpack Compose."
                id="Saya lulusan D3 Teknologi Informasi Politeknik Negeri Madiun dan peminat pengembangan perangkat lunak yang senang mengubah kebutuhan dunia nyata menjadi perangkat lunak yang berfungsi. Sebagai freelance developer saya membangun aplikasi web dengan PHP, Laravel, dan React, serta aplikasi mobile dengan Kotlin dan Jetpack Compose."
              />
            </p>
            <p>
              <T
                en="For my final project I built STJ Tracker, a real-time bus monitoring system with Android apps and an admin dashboard. As a software development intern at PT INKA Multi Solusi I built Kasbon Online, and as an independent freelancer I built a Customer Complaint System with multi-department approval and QR-verified PDF reports."
                id="Untuk tugas akhir, saya membangun STJ Tracker, sistem pemantauan bus real-time dengan aplikasi Android dan dashboard admin. Sebagai software development intern di PT INKA Multi Solusi saya membangun Kasbon Online, dan sebagai freelancer mandiri saya membangun Customer Complaint System dengan persetujuan multi-departemen dan laporan PDF terverifikasi QR."
              />
            </p>
            <p>
              <T
                en="My interests also cover the wider IT field: IT support, computer networking, and database management. During my internship I handled IT technical support and data management alongside development work."
                id="Minat saya juga mencakup bidang TI yang lebih luas: dukungan TI, jaringan komputer, dan manajemen database. Selama magang saya menangani dukungan teknis TI dan pengelolaan data di samping pekerjaan pengembangan."
              />
            </p>
            <p>
              <T
                en="I was also active in HIMATIF as PSDM division coordinator and event chair for the study program orientation, which taught me how to plan, coordinate, and deliver together. I am open to full-time opportunities and freelance collaborations."
                id="Saya juga aktif di HIMATIF sebagai koordinator divisi PSDM dan ketua pelaksana orientasi program studi, yang mengajarkan saya cara merencanakan, berkoordinasi, dan menyelesaikan pekerjaan bersama. Saya terbuka untuk kesempatan full-time dan kolaborasi freelance."
              />
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={site.cvPage}
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-white shadow-[0_0_30px_-8px_rgba(37,99,235,0.85)] transition hover:-translate-y-0.5 hover:bg-primary/90"
            >
              <T en="View CV" id="Lihat CV" />
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-line px-6 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:border-accent/50 hover:bg-surface"
            >
              <T en="Get in touch" id="Hubungi saya" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* How I work */}
      <section className="mt-24">
        <Reveal>
          <SectionHeading
            eyebrow="// principles"
            title={<T en="How I work, in practice" id="Cara kerja saya, dalam praktik" />}
            description={
              <T
                en="Principles I took from real decisions on real projects."
                id="Prinsip yang saya ambil dari keputusan nyata di proyek nyata."
              />
            }
          />
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <Link href={`/projects/${p.slug}`} className={`${card} group flex flex-col`}>
                <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-heading text-lg font-semibold">
                  <B v={p.title} />
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  <B v={p.text} />
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent">
                  <T en="Read the case study" id="Baca studi kasusnya" />
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Education & organization */}
      <section className="mt-24">
        <Reveal>
          <SectionHeading
            eyebrow="// background"
            title={<T en="Education & organization" id="Pendidikan & organisasi" />}
          />
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className={card}>
              <p className="font-mono text-xs text-accent">
                <T en="Education" id="Pendidikan" />
              </p>
              <h3 className="mt-3 font-heading text-xl font-semibold">
                <B v={education.program} />
              </h3>
              <p className="text-muted">{education.school}</p>
              <p className="mt-1 font-mono text-xs text-muted">
                {education.period} · <T en="GPA" id="IPK" /> {education.gpa}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                <B v={education.note} />
              </p>
              <p className="mt-4 border-t border-line pt-4 text-sm text-muted">
                <span className="text-fg">{highSchool.school}</span> · <B v={highSchool.program} /> ·{" "}
                <span className="font-mono text-xs">{highSchool.period}</span>
              </p>
            </div>
          </Reveal>
          {himatif && (
            <Reveal delay={0.08}>
              <div className={card}>
                <p className="font-mono text-xs text-accent">
                  <T en="Organization" id="Organisasi" /> · <B v={himatif.period} />
                </p>
                <h3 className="mt-3 font-heading text-xl font-semibold">
                  <B v={himatif.org} />
                </h3>
                <p className="text-muted">
                  <B v={himatif.role} />
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                  {zip(himatif.points).map((p) => (
                    <li key={p.en} className="flex gap-3">
                      <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <B v={p} />
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
            title={<T en="Skills & tools" id="Skill & tools" />}
            description={
              <T
                en="The technologies I use most often across web, backend, and mobile."
                id="Teknologi yang paling sering saya pakai di web, backend, dan mobile."
              />
            }
          />
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {techStack.map((group, i) => (
            <Reveal key={group.label} delay={(i % 2) * 0.08}>
              <div className={card}>
                <h3 className="font-heading text-lg font-semibold">{group.label}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className={chip}>
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
          <SectionHeading
            eyebrow="// credentials"
            title={<T en="Training, languages & certifications" id="Pelatihan, bahasa & sertifikasi" />}
          />
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <Reveal>
            <div className={card}>
              <h3 className="font-heading text-lg font-semibold">
                <T en="Training" id="Pelatihan" />
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {zip(training).map((t) => (
                  <li key={t.en} className={chip}>
                    <B v={t} />
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className={card}>
              <h3 className="font-heading text-lg font-semibold">
                <T en="Languages" id="Bahasa" />
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                {languages.map((l) => (
                  <li key={l.name.en} className="flex items-center justify-between gap-3">
                    <span className="text-fg">
                      <B v={l.name} />
                    </span>
                    <span className="font-mono text-xs text-accent">
                      <B v={l.level} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className={card}>
              <h3 className="font-heading text-lg font-semibold">
                <T en="Certifications" id="Sertifikasi" />
              </h3>
              <ul className="mt-4 space-y-4 text-sm">
                {certifications.map((c) => (
                  <li key={c.title.en}>
                    <p className="text-fg">
                      <B v={c.title} />
                    </p>
                    <p className="text-muted">
                      <B v={c.issuer} />
                    </p>
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
