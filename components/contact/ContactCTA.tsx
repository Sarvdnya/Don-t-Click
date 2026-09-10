import { contactData } from "@/data/contact";
import Magnetic from "@/components/animations/Magnetic";
import EmailCopyButton from "@/components/contact/EmailCopyButton";

export default function ContactCTA() {
  const { email } = contactData;

  if (!email) return null;

  return (
    <div className="ct-cta-wrap">
      <div className="border-t border-border-subtle" />

      <div className="flex flex-col gap-10 pt-[clamp(64px,9vw,120px)] lg:flex-row lg:items-end lg:justify-between">
        <Magnetic strength={6}>
          <a
            href={`mailto:${email}`}
            data-cursor="email"
            className="ct-cta group inline-flex flex-col items-start gap-4"
          >
            <span className="inline-flex items-center gap-6 font-display text-[clamp(2.4rem,6.4vw,6rem)] font-semibold leading-none tracking-[-0.02em] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2">
              GET IN TOUCH
              <span
                aria-hidden="true"
                className="inline-block text-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-3"
              >
                →
              </span>
            </span>
            <span className="inline-flex items-center gap-4">
              <span
                aria-hidden="true"
                className="h-px w-10 bg-accent transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-20"
              />
              <span className="font-mono text-sm tracking-[0.08em] text-muted transition-colors duration-300 group-hover:text-accent [overflow-wrap:anywhere]">
                {email}
              </span>
            </span>
          </a>
        </Magnetic>

        <EmailCopyButton email={email} />
      </div>
    </div>
  );
}