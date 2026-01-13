
import { PracticeArea, Testimonial, BlogPost } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#/' },
  { name: 'About', href: '#/about' },
  { name: 'Practice', href: '#/practice' },
  { name: 'Blog', href: '#/blog' },
  { name: 'Contact', href: '#/contact' },
];

export interface Lawyer {
  id: string;
  name: string;
  role: string;
  phone: string;
  imageUrl: string;
}

export const LAWYERS: Lawyer[] = [
  {
    id: '1',
    name: 'Emuobonuvie Udi',
    role: 'Partner',
    phone: '+234 818 050 0656',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '2',
    name: 'Favour Nwadibie',
    role: 'Partner',
    phone: '+234 806 493 6802',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '3',
    name: 'Gilbert Origbu',
    role: 'Managing Partner',
    phone: '+234 814 977 0303',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
  }
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: '1',
    title: 'Alternative Dispute Resolution',
    description: 'Expert mediation and arbitration services to resolve complex legal disputes outside the courtroom efficiently.',
    icon: 'Scale',
  },
  {
    id: '2',
    title: 'Banking & Finance',
    description: 'Comprehensive legal support for financial institutions and corporate borrowers on regulatory and transactional matters.',
    icon: 'Landmark',
  },
  {
    id: '3',
    title: 'Corporate & Commercial',
    description: 'Strategic counsel for businesses on governance, compliance, contracts, and commercial transactions.',
    icon: 'Briefcase',
  },
  {
    id: '4',
    title: 'Intellectual Property',
    description: 'Protecting trademarks, copyrights, and patents to secure the intangible assets of your business.',
    icon: 'Shield',
  },
  {
    id: '5',
    title: 'Real Estate & Probate',
    description: 'Navigating property transactions, zoning, and estate management with precision and foresight.',
    icon: 'Users',
  },
  {
    id: '6',
    title: 'Shipping & Maritime',
    description: 'Specialized legal expertise in maritime law, international shipping regulations, and logistics disputes.',
    icon: 'FileText',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Chief Joel Ihekwuaba',
    role: 'Abuja',
    content: 'Greyline Partners handled my tenancy matter with intelligence, promptness and professionalism. Their intervention produced immediate positive results, with tenants settling outstanding rent arrears and committing to timely payment. I commend the firm and wish them continued growth and success.',
  },
  {
    id: '2',
    name: 'Queen Temitope',
    role: 'CEO, Kavod Atelier',
    content: 'Greyline partners are legal advisors to Kavod atelier and we must commend their precision, meticulousness and attention to details, helping us negotiate better contract conditions.',
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Shift in Nigerian Maritime Regulations 2024',
    excerpt: 'How new amendments are affecting international shipping routes and local logistics providers.',
    date: 'Jan 10, 2025',
    author: 'Principal Partner',
    category: 'Maritime',
    imageUrl: 'https://images.unsplash.com/photo-1524522173746-f628baad3644?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'Intellectual Property Protection for Startups',
    excerpt: 'Why securing your trademarks early is the most critical step for your business scalability.',
    date: 'Feb 15, 2025',
    author: 'IP Specialist',
    category: 'Intellectual Property',
    imageUrl: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800',
  }
];
