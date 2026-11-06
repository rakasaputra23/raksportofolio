type Props = {
  eyebrow: string;
  title: string;
  note: string;
};

// Temporary page shell used until each page is built in later stages.
export default function PlaceholderPage({ eyebrow, title, note }: Props) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <p className="font-mono text-sm text-accent">{eyebrow}</p>
      <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
      <div className="mt-8 rounded-2xl border border-line bg-surface/60 p-6 text-muted">
        {note}
      </div>
    </section>
  );
}
