import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
  size?: "md" | "sm";
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium uppercase tracking-[0.14em] transition-colors duration-300 focus-visible:outline-accent";

const variants = {
  primary:
    "bg-accent text-background hover:bg-[#ff7340] active:bg-[#e64f16]",
  ghost:
    "border border-border-subtle text-foreground hover:border-accent/60 hover:text-accent",
};

const sizes = {
  md: "px-7 py-3.5 text-[11px]",
  sm: "px-5 py-2.5 text-[10px]",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  type = "button",
  className,
  onClick,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}