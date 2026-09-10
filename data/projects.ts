export type ProjectVisualType =
  | "ai-docs"
  | "landing-page"
  | "chrome-extension"
  | "portfolio";

export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  visualType: ProjectVisualType;
  href: string;
  align: "left" | "right";
};

export const projects: Project[] = [
  {
    id: "documotion-ai",
    number: "01",
    title: "DOCUMOTION\nAI",
    category: "AI / DOCUMENT INTELLIGENCE",
    description:
      "An AI-powered document-to-video experimentation platform that analyzes uploaded PDFs, extracts and understands their content, retrieves relevant context, and uses that information to generate structured video and story content. Video generation is currently experimental, not a finished feature.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Express",
      "OpenAI / Gemini",
      "Qdrant",
      "RAG",
    ],
    visualType: "ai-docs",
    href: "/projects/documotion-ai",
    align: "left",
  },
  {
    id: "product-web-experience",
    number: "02",
    title: "PRODUCT WEB\nEXPERIENCE",
    category: "FRONTEND / UI / WEB",
    description:
      "A conversion-focused product landing page built around clear visual hierarchy, responsive frontend implementation, interactive sections and polished UI details.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive UI", "SMTP / Email"],
    visualType: "landing-page",
    href: "/projects/product-web-experience",
    align: "right",
  },
  {
    id: "blog-automation-tool",
    number: "03",
    title: "BLOG AUTOMATION\nTOOL",
    category: "BROWSER / AUTOMATION",
    description:
      "A browser-based tool for working with blog content and streamlining blog-related workflows.",
    technologies: ["JavaScript", "Chrome Extension APIs", "Web scraping"],
    visualType: "chrome-extension",
    href: "/projects/blog-automation-tool",
    align: "left",
  },
  {
    id: "personal-portfolio",
    number: "04",
    title: "PERSONAL\nPORTFOLIO",
    category: "FRONTEND / INTERACTION",
    description:
      "The site you are exploring right now; a bespoke interactive portfolio built around large editorial typography, smooth scrolling, a custom cursor and handcrafted motion.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
      "Lenis",
    ],
    visualType: "portfolio",
    href: "/",
    align: "right",
  },
];