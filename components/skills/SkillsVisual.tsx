type Node = {
  label: string;
  x: string;
  y: string;
  core?: boolean;
};

const NODES: Node[] = [
  { label: "UI", x: "13.3%", y: "17.3%" },
  { label: "API", x: "86.7%", y: "17.3%" },
  { label: "RAG", x: "13.3%", y: "82.7%" },
  { label: "VEC·DB", x: "86.7%", y: "82.7%" },
  { label: "CORE", x: "50%", y: "50%", core: true },
];

const LINES = [
  "M 40 45 L 150 130",
  "M 260 45 L 150 130",
  "M 40 215 L 150 130",
  "M 260 215 L 150 130",
  "M 40 45 L 40 215",
  "M 260 45 L 260 215",
];

export default function SkillsVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative aspect-[300/260] w-full overflow-hidden rounded-xl border border-border-subtle bg-[linear-gradient(160deg,#151517,#0e0e10)]"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(236,234,230,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(236,234,230,0.045) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_85%_-10%,rgba(255,90,31,0.1),transparent_60%)]" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 300 260"
        preserveAspectRatio="none"
        fill="none"
      >
        <g stroke="rgba(236, 234, 230, 0.1)" strokeWidth="1">
          {LINES.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
        <path
          className="vis-flow"
          d="M 260 45 L 150 130"
        />
        <circle className="vis-ring" cx="150" cy="130" r="16" />
      </svg>

      {NODES.map((node) => (
        <span
          key={node.label}
          className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
          style={{ left: node.x, top: node.y }}
        >
          <span
            className={
              node.core
                ? "status-dot block rounded-full bg-accent"
                : "block size-[7px] rounded-full border border-accent/50 bg-surface/80"
            }
            style={node.core ? { width: 9, height: 9 } : undefined}
          />
          <span className="whitespace-nowrap font-mono text-[8px] uppercase tracking-[0.2em] text-muted/70">
            {node.label}
          </span>
        </span>
      ))}

      <span className="absolute left-3 top-3 font-mono text-[8px] tracking-[0.2em] text-muted/50">
        NODE / GRID — 05
      </span>
      <span className="absolute bottom-3 right-3 font-mono text-[8px] tracking-[0.2em] text-accent/80">
        SYSTEM VIEW
      </span>
    </div>
  );
}