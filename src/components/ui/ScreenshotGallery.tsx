"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  slug: string;
  title: string;
  count: number;
  captions?: string[];
};

export default function ScreenshotGallery({ slug, title, count, captions = [] }: Props) {
  const [failed, setFailed] = useState<Record<number, boolean>>({});
  const [active, setActive] = useState<number | null>(null);

  const items = Array.from({ length: count }, (_, i) => ({
    n: i + 1,
    src: `/images/projects/${slug}/${i + 1}.png`,
    caption: captions[i] ?? `Screenshot ${i + 1}`,
  }));

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((v) => (v === null ? v : (v % count) + 1));
      if (e.key === "ArrowLeft") setActive((v) => (v === null ? v : v === 1 ? count : v - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, count]);

  const current = items.find((it) => it.n === active);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((it) => (
          <figure key={it.n} className="group">
            <button
              type="button"
              disabled={failed[it.n]}
              onClick={() => setActive(it.n)}
              aria-label={`Enlarge: ${it.caption}`}
              className="card-glow relative block aspect-[16/10] w-full overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-primary/15 via-surface to-bg enabled:cursor-zoom-in"
            >
              {failed[it.n] ? (
                <span className="absolute inset-0 grid place-items-center font-mono text-xs text-muted">
                  Screenshot coming soon
                </span>
              ) : (
                <Image
                  src={it.src}
                  alt={`${title} — ${it.caption}`}
                  fill
                  sizes="(min-width: 1024px) 420px, (min-width: 640px) 45vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  onError={() => setFailed((f) => ({ ...f, [it.n]: true }))}
                />
              )}
            </button>
            <figcaption className="mt-2 px-1 font-mono text-xs text-muted">{it.caption}</figcaption>
          </figure>
        ))}
      </div>

      <AnimatePresence>
        {current && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={current.caption}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] grid place-items-center bg-bg/90 p-4 backdrop-blur-md"
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-lg transition hover:border-accent/50"
            >
              ×
            </button>
            <div className="relative h-[80vh] w-[92vw] max-w-5xl" onClick={(e) => e.stopPropagation()}>
              <Image
                src={current.src}
                alt={`${title} — ${current.caption}`}
                fill
                sizes="92vw"
                className="object-contain"
              />
            </div>
            <p className="absolute bottom-5 font-mono text-xs text-muted">
              {current.caption} · {current.n}/{count}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
