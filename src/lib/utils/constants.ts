export const SITE_CONFIG = {
  name: 'Bishnu Dahal',
  title: 'Bishnu Dahal - Social Activist & Entrepreneur',
  description: 'Dedicated to driving positive social change through leadership, service, and community empowerment.',
  email: 'hello@bishnudahal.com',
  phone: '+977 980 000 0000',
  location: 'Kathmandu, Nepal',
  url: 'https://bishnudahal.com',
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/timeline', label: 'Timeline' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
] as const;

export const SOCIAL_LINKS = [
  { name: 'Facebook', href: '#', icon: 'Facebook' },
  { name: 'Twitter', href: '#', icon: 'Twitter' },
  { name: 'LinkedIn', href: '#', icon: 'Linkedin' },
  { name: 'Instagram', href: '#', icon: 'Instagram' },
] as const;

export const FOCUS_AREAS = [
  'Youth Empowerment',
  'Education & Literacy',
  'Community Development',
  'Rotary Service',
  'Social Entrepreneurship',
] as const;