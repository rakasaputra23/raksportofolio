import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/data/site";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "CV",
  description: "Curriculum Vitae of Mohammad Raka Saputra.",
};

export default function CvPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <Reveal>
        <p className="font-mono text-sm text-accent">{"// curriculum vitae"}</p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-5">
          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-6xl">
            My <span className="text-gradient">CV</span>
          </h1>
          <a
            href={site.cv}
            download="CV-Mohammad-Raka-Saputra.pdf"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white shadow-[0_0_30px_-8px_rgba(37,99,235,0.85)] transition hover:-translate-y-0.5 hover:bg-primary/90"
          >
            Download PDF
          </a>
        </div>
      </Reveal>

      {/* Ditampilkan langsung di halaman dengan bingkai yang sama seperti foto profil */}
      <Reveal delay={0.1}>
        <div className="relative mt-10">
          <div className="absolute -inset-3 rounded-[2.25rem] bg-gradient-to-br from-primary/50 via-accent/15 to-transparent blur-2xl" />
          <div className="relative rounded-[2rem] bg-gradient-to-br from-accent/50 via-primary/30 to-line p-px">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-white">
              <Image
                src="/images/cv-preview.png"
                alt="CV Mohammad Raka Saputra"
                width={1406}
                height={1988}
                priority
                sizes="(min-width: 768px) 720px, 100vw"
                className="h-auto w-full"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-white/10" />
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
