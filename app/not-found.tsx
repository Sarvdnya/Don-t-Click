import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[100svh] items-center">
      <Container>
        <div className="py-28">
          <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
            <span className="inline-block size-1.5 rounded-full bg-accent" />
            Error 404
          </p>

          <h1 className="mt-10 font-display">
            <span className="block text-[clamp(4rem,16vw,12rem)] font-semibold leading-none tracking-[-0.03em] text-outline">
              NOT FOUND
            </span>
            <span className="mt-2 block text-[clamp(1.6rem,4vw,3rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-accent">
              This page doesn&rsquo;t exist.
            </span>
          </h1>

          <p className="mt-8 max-w-md text-base leading-relaxed text-muted">
            The link may be broken, or the page may have moved. Head back to
            the index to explore the portfolio.
          </p>

          <Button href="/" className="mt-11">
            Back to index
          </Button>
        </div>
      </Container>
    </main>
  );
}