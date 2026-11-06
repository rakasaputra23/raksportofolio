import Link from "next/link";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  action?: { href: string; label: string };
};

export default function SectionHeading({ eyebrow, title, description, action }: Props) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        <p className="font-mono text-sm text-accent">{eyebrow}</p>
        <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        {description && <p className="mt-3 text-muted">{description}</p>}
      </div>
      {action && (
        <Link
          href={action.href}
          className="group inline-flex items-center gap-2 text-sm font-medium text-accent transition hover:text-white"
        >
          {action.label}
          <span aria-hidden className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      )}
    </div>
  );
}
