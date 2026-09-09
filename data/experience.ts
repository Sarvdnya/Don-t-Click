export type ExperienceItem = {
  id: string;
  number: string;
  role: string;
  organization: string;
  context: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "software-development-internship",
    number: "01",
    role: "Software Development Intern",
    organization: "Software Development Internship",
    context: "TECH EXPERIENCE",
    description:
      "Worked on frontend interfaces, product pages, website testing, UI improvements and internal web tooling during a software development internship.",
    responsibilities: [
      "Website testing and bug identification",
      "Frontend and UI improvements",
      "Landing page and product interface work",
      "Browser-based tooling",
      "AI and product-related experiments",
      "Technical problem solving",
    ],
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "React",
      "REST APIs",
      "Chrome Extensions",
      "UI/UX",
    ],
  },
];

export const focusAreas = [
  "FRONTEND",
  "INTERFACES",
  "AI TOOLS",
  "WEB EXPERIENCES",
  "EXPERIMENTS",
];

export interface ToolkitItem {
  name: string;
  category: string;
}

export const currentToolkit: ToolkitItem[] = [
  { name: "HTML", category: "Core" },
  { name: "CSS", category: "Core" },
  { name: "JavaScript", category: "Core" },
  { name: "TypeScript", category: "Core" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Express", category: "Backend" },
  { name: "REST APIs", category: "Integration" },
  { name: "Chrome Extensions", category: "Tooling" },
  { name: "RAG", category: "AI" },
  { name: "Qdrant", category: "AI" },
];