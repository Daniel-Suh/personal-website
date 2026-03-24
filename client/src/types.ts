export interface Achievement {
  icon: string;
  title: string;
  meta: string;
  description: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Profile {
  name: string;
  tagline: string;
  sub: string;
  about: string;
  email: string;
  linkedin: string;
}

export interface PortfolioData {
  profile: Profile;
  achievements: Achievement[];
  skills: SkillGroup[];
}
