"use client";

import { useEffect, useRef, useState } from "react";

async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    /* clipboard API unavailable or blocked */
  }

  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    document.body.removeChild(textarea);
    return copied;
  } catch {
    return false;
  }
}

type EmailCopyButtonProps = {
  email: string;
};

export default function EmailCopyButton({ email }: EmailCopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const onCopy = async () => {
    if (!email) return;
    const ok = await copyText(email);
    if (!ok) return;
    setCopied(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label="Copy email address to clipboard"
      className="group inline-flex items-center gap-3 self-start rounded-full border border-border-subtle px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted transition-colors duration-300 hover:border-accent/50 hover:text-accent focus-visible:outline-accent lg:self-end"
    >
      <span aria-hidden="true" className="text-accent/80 transition-transform duration-300 group-hover:-translate-y-0.5">
        ⌘
      </span>
      <span role="status" aria-live="polite">
        {copied ? "COPIED ✓" : "COPY EMAIL"}
      </span>
    </button>
  );
}