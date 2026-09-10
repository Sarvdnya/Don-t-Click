"use client";

import { useEffect } from "react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="relative flex min-h-[100svh] items-center">
      <Container>
        <div className="py-28">
          <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
            <span className="inline-block size-1.5 rounded-full bg-accent" />
            Runtime error
          </p>

          <h1 className="mt-10 font-display text-[clamp(2.6rem,7vw,6rem)] font-semibold leading-[0.98] tracking-[-0.02em]">
            <span className="text-accent">Something went wrong.</span>
          </h1>

          <p className="mt-8 max-w-md text-base leading-relaxed text-muted">
            An unexpected error interrupted the page. Try reloading to get
            back to the portfolio.
          </p>

          <div className="mt-11 flex flex-wrap items-center gap-4">
            <Button href="/">Back to index</Button>
            <Button onClick={() => reset()} variant="ghost">
              Try again
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}