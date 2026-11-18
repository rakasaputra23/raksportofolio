"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import T from "@/components/ui/T";

type Props = {
  value: string;
  label?: ReactNode;
};

export default function CopyButton({ value, label = "Copy" }: Props) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard tidak tersedia: abaikan, link mailto tetap berfungsi.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className="rounded-full border border-line bg-bg/60 px-4 py-2 font-mono text-xs text-fg/85 transition hover:border-accent/50 hover:text-accent"
    >
      {copied ? <T en="Copied ✓" id="Tersalin ✓" /> : label}
    </button>
  );
}
