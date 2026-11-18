// Dukungan dua bahasa (EN / ID).
// Kedua bahasa dirender ke HTML; bahasa yang tidak aktif disembunyikan lewat CSS
// berdasarkan atribut <html data-lang="...">. Lihat <T /> dan globals.css.

export type Lang = "en" | "id";

export type Bi<T = string> = { en: T; id: T };

/** Ubah {en: string[], id: string[]} menjadi array of {en, id}. Jika ID kurang, pakai EN. */
export function zip<T>(b: Bi<T[]>): Bi<T>[] {
  return b.en.map((en, i) => ({ en, id: b.id[i] ?? en }));
}
