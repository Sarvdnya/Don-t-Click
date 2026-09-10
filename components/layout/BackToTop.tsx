"use client";

import { useEffect, useState } from "react";
import Magnetic from "@/components/animations/Magnetic";
import { cn } from "@/lib/utils";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-40 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      )}
    >
      <Magnetic strength={7}>
        <a
          href="#top"
          aria-label="Back to top"
          className="group flex size-11 items-center justify-center rounded-full border border-border-subtle bg-background/70 text-muted backdrop-blur-md transition-colors duration-300 hover:border-accent/60 hover:text-accent focus-visible:outline-accent"
        >
          <span
            aria-hidden="true"
            className="inline-block text-sm transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1"
          >
            ↑
          </span>
        </a>
      </Magnetic>
    </div>
  );
}