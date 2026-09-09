"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { REDUCED_MOTION_QUERY } from "@/lib/animations";

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], [data-cursor], input, textarea, select, label';

function useCursorCapabilities(): boolean {
  return useSyncExternalStore(
    (callback) => {
      const fine = window.matchMedia("(pointer: fine)");
      const hover = window.matchMedia("(hover: hover)");
      const reduced = window.matchMedia(REDUCED_MOTION_QUERY);
      fine.addEventListener("change", callback);
      hover.addEventListener("change", callback);
      reduced.addEventListener("change", callback);
      return () => {
        fine.removeEventListener("change", callback);
        hover.removeEventListener("change", callback);
        reduced.removeEventListener("change", callback);
      };
    },
    () =>
      window.matchMedia("(pointer: fine)").matches &&
      window.matchMedia("(hover: hover)").matches &&
      !window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false
  );
}

export default function CustomCursor() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  const enabled = useCursorCapabilities();
  const [label, setLabel] = useState<string | null>(null);
  const [interactive, setInteractive] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("no-native-cursor");

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: target.x, y: target.y };
    const dot = { x: target.x, y: target.y };

    let raf = 0;
    let running = false;

    const step = () => {
      ring.x += (target.x - ring.x) * 0.16;
      ring.y += (target.y - ring.y) * 0.16;
      dot.x += (target.x - dot.x) * 0.5;
      dot.y += (target.y - dot.y) * 0.5;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dot.x}px, ${dot.y}px, 0)`;
      }

      const settled =
        Math.abs(target.x - ring.x) < 0.15 &&
        Math.abs(target.y - ring.y) < 0.15;

      if (settled) {
        running = false;
        return;
      }
      raf = requestAnimationFrame(step);
    };

    const start = () => {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(step);
      }
    };

    const onMove = (event: MouseEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
      if (rootRef.current) rootRef.current.style.opacity = "1";
      start();
    };

    const onOver = (event: MouseEvent) => {
      const el = (event.target as Element | null)?.closest?.(
        INTERACTIVE_SELECTOR
      ) as HTMLElement | null;
      setInteractive(Boolean(el));
      setLabel(el?.getAttribute("data-cursor") ?? null);
    };

    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    const onLeaveDocument = () => {
      if (rootRef.current) rootRef.current.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeaveDocument);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeaveDocument);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("no-native-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={rootRef}
      className="custom-cursor"
      aria-hidden="true"
      style={{ opacity: 0 }}
    >
      <div ref={dotRef} className="cursor-dot" />
      <div
        ref={ringRef}
        className={`cursor-ring ${interactive ? "is-interactive" : ""} ${
          pressed ? "is-pressed" : ""
        } ${interactive && label ? "is-labeled" : ""}`}
      >
        <span className="cursor-label">{label}</span>
      </div>
    </div>
  );
}