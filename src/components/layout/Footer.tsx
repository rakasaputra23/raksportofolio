import Link from "next/link";
import { navLinks, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-heading text-lg font-semibold">{site.name}</p>
          <p className="mt-1 font-mono text-xs text-muted">{site.role}</p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition hover:text-white">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex gap-4 text-sm">
          <li>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition hover:text-accent"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition hover:text-accent"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href={`mailto:${site.email}`} className="text-muted transition hover:text-accent">
              Email
            </a>
          </li>
        </ul>
      </div>
      <p className="border-t border-line py-5 text-center font-mono text-xs text-muted">
        © {site.name}. Built with Next.js.
      </p>
    </footer>
  );
}
