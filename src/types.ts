export interface PersonalInfo {
  fullName: string;
  professionalTitle: string;
  profileImage: string;
  introduction: string;
  careerObjective: string;
  location: string;
  birthday: string;
  birthplace: string;
  email: string;
  phone: string;
  githubUrl: string;
  linkedinUrl: string;
  facebookUrl?: string;
  instagramUrl?: string;
  twitterUrl?: string;
  careerInterests: string[];
}

export interface EducationItem {
  id: string;
  school: string;
  degree: string;
  period: string;
  yearLevel: string;
  honors?: string;
  description: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'soft';
  proficiency: number; // 0 - 100
  iconName?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  category: 'Full Stack' | 'Frontend' | 'Mobile/Web' | 'AI & Tools';
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Internship' | 'Freelance' | 'Leadership' | 'Academic Project';
  highlights: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  type: 'Certificate' | 'Award' | 'Competition' | 'Seminar' | 'Organization';
  credentialUrl?: string;
  description: string;
}

export interface CVData {
  personal: PersonalInfo;
  education: EducationItem[];
  skills: SkillItem[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  achievements: AchievementItem[];
}
