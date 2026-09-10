export default function ContactFinale() {
  return (
    <div className="ct-finale mt-[clamp(72px,10vw,130px)] flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-border-subtle pt-10 pb-[clamp(48px,7vw,88px)]">
      <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-muted/50">
        06 / 06
      </span>
      <span className="hidden font-mono text-[9px] uppercase tracking-[0.24em] text-muted/50 sm:block">
        END / BEGIN AGAIN
      </span>
      <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-accent/80">
        BUILD&nbsp;
        <span aria-hidden="true">→</span>&nbsp;ITERATE&nbsp;
        <span aria-hidden="true">→</span>&nbsp;SHIP
      </span>
    </div>
  );
}