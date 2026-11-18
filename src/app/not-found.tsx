import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import T from "@/components/ui/T";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-5 py-24 text-center sm:px-8">
      <Reveal>
        <p className="font-mono text-sm text-accent">{"// error 404"}</p>
        <h1 className="mt-4 font-heading text-7xl font-bold tracking-tight sm:text-9xl">
          <span className="text-gradient">404</span>
        </h1>
        <h2 className="mt-4 font-heading text-2xl font-semibold sm:text-3xl">
          <T en="This page could not be found" id="Halaman ini tidak ditemukan" />
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted">
          <T
            en="The link may be broken, or the page may have been moved. Let's get you back on track."
            id="Tautannya mungkin rusak, atau halamannya sudah dipindahkan. Yuk kembali ke jalur yang benar."
          />
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-white shadow-[0_0_34px_-6px_rgba(37,99,235,0.85)] transition hover:-translate-y-0.5 hover:bg-primary/90"
          >
            <T en="Back to home" id="Kembali ke beranda" />
          </Link>
          <Link
            href="/projects"
            className="rounded-full border border-line bg-bg/40 px-7 py-3.5 text-sm font-medium transition hover:-translate-y-0.5 hover:border-accent/50"
          >
            <T en="See my projects" id="Lihat proyek saya" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
