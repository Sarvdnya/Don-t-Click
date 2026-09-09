import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: React.ReactNode;
  index?: string | number;
  className?: string;
};

export default function SectionLabel({
  children,
  index,
  className,
}: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-muted",
        className
      )}
    >
      <span className="inline-block size-1.5 rounded-full bg-accent" />
      {index !== undefined && (
        <span className="text-accent">
          {String(index).padStart(2, "0")}
          {" — "}
        </span>
      )}
      {children}
    </span>
  );
}