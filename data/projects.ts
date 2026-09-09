export type Project = {
  title: string;
  description: string;
  tags: string[];
  year: number;
  url?: string;
};

export const projects: Project[] = [];