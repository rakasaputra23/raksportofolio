"use client";

import { useSyncExternalStore } from "react";
import type { Lang } from "@/i18n";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-lang"] });
  return () => observer.disconnect();
}

const getSnapshot = (): Lang => (document.documentElement.dataset.lang === "id" ? "id" : "en");
const getServerSnapshot = (): Lang => "en";

function applyLang(lang: Lang) {
  document.documentElement.dataset.lang = lang;
  document.documentElement.lang = lang;
  try {
    localStorage.setItem("lang", lang);
  } catch {
    // localStorage bisa dinonaktifkan: pilihan tetap berlaku untuk sesi ini.
  }
}

const options: { lang: Lang; label: string; name: string }[] = [
  { lang: "en", label: "EN", name: "English" },
  { lang: "id", label: "ID", name: "Bahasa Indonesia" },
];

export default function LanguageSwitch() {
  const current = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <div
      role="group"
      aria-label="Language / Bahasa"
      className="flex items-center rounded-full border border-line p-0.5 font-mono text-xs"
    >
      {options.map((o) => (
        <button
          key={o.lang}
          type="button"
          data-lang-btn={o.lang}
          aria-pressed={current === o.lang}
          aria-label={o.name}
          title={o.name}
          onClick={() => applyLang(o.lang)}
          className="lang-btn"
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
