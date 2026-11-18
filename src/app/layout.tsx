import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { site } from "@/data/site";

// Self-hosted variable fonts (no network call at build time)
const spaceGrotesk = localFont({
  src: "./fonts/space-grotesk-latin-wght-normal.woff2",
  variable: "--font-space-grotesk",
  weight: "300 700",
  display: "swap",
});

const inter = localFont({
  src: "./fonts/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: "./fonts/jetbrains-mono-latin-wght-normal.woff2",
  variable: "--font-jetbrains-mono",
  weight: "100 800",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "Mohammad Raka Saputra",
    "Full-Stack Developer",
    "Android Developer",
    "Laravel",
    "React",
    "Kotlin",
    "Jetpack Compose",
    "Freelance Developer",
    "Information Technology Graduate",
    "IT Support",
    "Computer Networking",
    "Sidoarjo",
    "Portfolio",
  ],
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.headline,
    siteName: site.name,
    locale: "en_US",
    alternateLocale: ["id_ID"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.headline,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#080d19",
};

// Menentukan bahasa awal sebelum halaman tampil (tanpa kedip): pilihan tersimpan,
// atau bahasa browser (Indonesia -> ID, lainnya -> EN).
const langScript = `(function(){try{var s=localStorage.getItem("lang");var l=(s==="id"||s==="en")?s:((navigator.language||"").toLowerCase().indexOf("id")===0?"id":"en");var d=document.documentElement;d.setAttribute("data-lang",l);d.setAttribute("lang",l);}catch(e){}})();`;

// Structured data untuk mesin pencari
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: site.role,
  description: site.description,
  alumniOf: { "@type": "CollegeOrUniversity", name: "Politeknik Negeri Madiun" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sidoarjo",
    addressRegion: "East Java",
    addressCountry: "ID",
  },
  sameAs: [site.github, site.linkedin],
  knowsAbout: [
    "Laravel",
    "PHP",
    "React",
    "Kotlin",
    "Jetpack Compose",
    "Firebase",
    "MySQL",
    "IT Support",
    "Computer Networking",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col bg-bg text-fg">
        <Script id="lang-init" strategy="beforeInteractive">
          {langScript}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
        />
        {/* Background layers: grid + blue glow */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="bg-grid absolute inset-0" />
          <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/25 blur-[140px]" />
          <div className="absolute top-1/3 -right-40 h-[360px] w-[360px] rounded-full bg-accent/10 blur-[120px]" />
        </div>

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
