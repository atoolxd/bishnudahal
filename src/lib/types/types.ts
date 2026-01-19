export interface NavLink {
  href: string;
  label: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: 'rotary' | 'business' | 'social';
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}