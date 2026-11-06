"use client";

import Image from "next/image";
import { useState } from "react";

// Menampilkan foto dari /public/images/profile.jpg.
// Jika file belum ada, tampil monogram sebagai pengganti sementara.
export default function ProfilePhoto() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] bg-surface">
      {failed ? (
        <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-primary/30 via-surface to-bg">
          <span className="font-heading text-7xl font-bold text-gradient">MR</span>
        </div>
      ) : (
        <Image
          src="/images/profile.jpeg"
          alt="Portrait of Mohammad Raka Saputra"
          fill
          priority
          sizes="(min-width: 1024px) 380px, 80vw"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      )}
      <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-white/10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg/70 to-transparent" />
    </div>
  );
}
