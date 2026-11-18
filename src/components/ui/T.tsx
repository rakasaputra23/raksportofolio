import type { ReactNode } from "react";
import type { Bi } from "@/i18n";

// Menampilkan teks dua bahasa. Yang tampil ditentukan oleh <html data-lang>.
export default function T({ en, id }: { en: ReactNode; id: ReactNode }) {
  return (
    <>
      <span data-l="en">{en}</span>
      <span data-l="id">{id}</span>
    </>
  );
}

// Versi singkat untuk nilai berpasangan { en, id }.
export function B({ v }: { v: Bi<ReactNode> }) {
  return <T en={v.en} id={v.id} />;
}
