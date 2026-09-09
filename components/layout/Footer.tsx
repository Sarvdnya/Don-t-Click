import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle">
      <Container className="flex flex-col items-center justify-between gap-3 py-8 sm:flex-row">
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted">
          Sarvdnya Purnale
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted">
          Portfolio — 2026
        </p>
        <a
          href="#top"
          className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted transition-colors duration-300 hover:text-accent"
        >
          Back to top ↑
        </a>
      </Container>
    </footer>
  );
}