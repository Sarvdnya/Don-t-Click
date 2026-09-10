export default function ContactStatus() {
  return (
    <div className="lg:col-span-6">
      <p className="ct-status-label font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
        Current focus
      </p>
      <p className="ct-status mt-4 font-mono text-[12px] uppercase tracking-[0.18em] text-foreground/80">
        Frontend / AI / Interaction
      </p>
      <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
        Building interfaces and learning intelligent systems &mdash; one
        experiment at a time.
      </p>
    </div>
  );
}