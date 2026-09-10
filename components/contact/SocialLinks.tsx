import { socialLinks } from "@/data/contact";

export default function SocialLinks() {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
        Elsewhere
      </p>

      <ul className="mt-5 flex flex-col gap-3.5">
        {socialLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
              className="ct-social group inline-flex items-baseline gap-3 font-mono text-[12px] uppercase tracking-[0.22em] text-muted transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-x-1.5 hover:text-accent"
            >
              {link.label}
              <span
                aria-hidden="true"
                className="inline-block text-[10px] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}