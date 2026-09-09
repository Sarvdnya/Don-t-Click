export type ExperienceItem = {
  role: string;
  organization: string;
  period: string;
  description?: string;
  tags?: string[];
};

export const experience: ExperienceItem[] = [];