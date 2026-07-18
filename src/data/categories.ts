export interface Category {
  id: string;
  name: string;
  description: string;
  slug: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: 'hr-recruiting',
    name: 'HR & Recruiting',
    description: 'AI prompts for human resources, talent acquisition, and employee management',
    slug: 'hr-recruiting',
    icon: '👥',
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    description: 'AI prompts for marketing campaigns, social media, and brand strategy',
    slug: 'digital-marketing',
    icon: '📱',
  },
  {
    id: 'course-creators',
    name: 'Course Creators',
    description: 'AI prompts for instructional design, curriculum development, and e-learning',
    slug: 'course-creators',
    icon: '📚',
  },
  {
    id: 'seo-content',
    name: 'SEO & Content',
    description: 'AI prompts for search engine optimization and content strategy',
    slug: 'seo-content',
    icon: '🔍',
  },
  {
    id: 'saas-dev',
    name: 'SaaS & Dev',
    description: 'AI prompts for software development, DevOps, and SaaS product management',
    slug: 'saas-dev',
    icon: '💻',
  },
];
