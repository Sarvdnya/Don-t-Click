export type SkillCategoryId = "frontend" | "experience" | "ai" | "tools";

export type SkillGroup = {
  id: SkillCategoryId;
  number: string;
  title: string;
  meta: string;
  items: string[];
};

export type ExploringItem = {
  label: string;
  status: string;
  note: string;
};

export type SkillCategory = Record<SkillCategoryId, string[]>;

export const frontend: string[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
];

export const experience: string[] = [
  "Responsive Design",
  "Interactive Interfaces",
  "Animation",
  "Micro-interactions",
  "Component Design",
  "Visual Hierarchy",
];

export const ai: string[] = [
  "AI APIs",
  "RAG",
  "Embeddings",
  "Vector Search",
  "Document Processing",
  "Prompt Engineering",
];

export const tools: string[] = [
  "Git",
  "VS Code",
  "Chrome Extensions",
  "REST APIs",
  "Developer Tools",
  "Browser Automation",
];

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    number: "01",
    title: "FRONTEND",
    meta: "Interface / Logic",
    items: frontend,
  },
  {
    id: "experience",
    number: "02",
    title: "UI / EXPERIENCE",
    meta: "Interaction / Aesthetic",
    items: experience,
  },
  {
    id: "ai",
    number: "03",
    title: "AI / INTELLIGENT SYSTEMS",
    meta: "Intelligence / Experiment",
    items: ai,
  },
  {
    id: "tools",
    number: "04",
    title: "TOOLS / WORKFLOW",
    meta: "Workflow / Utility",
    items: tools,
  },
];

export const marqueeTechnologies: string[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Express",
  "REST APIs",
  "OpenAI",
  "Gemini",
  "Qdrant",
  "RAG",
  "Chrome Extensions",
  "Git",
];

export const exploring: ExploringItem[] = [
  {
    label: "AI-Powered Applications",
    status: "Learning",
    note: "Prototyping with AI APIs",
  },
  {
    label: "RAG Systems",
    status: "Working with",
    note: "Retrieval · Context · Grounding",
  },
  {
    label: "Document Intelligence",
    status: "Experimenting",
    note: "Parsing and understanding documents",
  },
  {
    label: "Generative AI",
    status: "Exploring",
    note: "Video and story generation",
  },
  {
    label: "Advanced Frontend Interactions",
    status: "Learning",
    note: "Motion · Scroll · Cursor-driven UI",
  },
  {
    label: "Creative Web Development",
    status: "Exploring",
    note: "Editorial design in the browser",
  },
];