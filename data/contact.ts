export type SocialLink = {
  label: string;
  href: string;
};

export const contactData = {
  name: "Sarvdnya Purnale",
  email: "your-purnalesarvdnya@gmail.com",
  github: "https://github.com/Sarvdnya",
  // placeholder: add LinkedIn URL when available
  linkedin: "",
} as const;

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: contactData.github },
  { label: "LinkedIn", href: contactData.linkedin },
  { label: "Email", href: contactData.email ? `mailto:${contactData.email}` : "" },
].filter((link): link is SocialLink => Boolean(link.href));