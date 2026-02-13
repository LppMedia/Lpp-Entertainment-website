export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  author: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

export interface NavItem {
  label: string;
  href: string;
}