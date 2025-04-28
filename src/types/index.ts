export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  model: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
}