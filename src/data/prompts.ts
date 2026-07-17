export interface Prompt {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  content: string;
  trending?: boolean;
}

export const categories = [
  { id: 'hr-recruiting', name: 'HR & Recruiting', icon: 'users' },
  { id: 'digital-marketing', name: 'Digital Marketing', icon: 'trending-up' },
  { id: 'course-creators', name: 'Course Creators', icon: 'book-open' },
  { id: 'seo-content', name: 'SEO & Content', icon: 'search' },
  { id: 'saas-dev', name: 'SaaS & Dev', icon: 'code' },
];

export const prompts: Prompt[] = [
  {
    id: 'legally-compliant-job-description',
    title: 'Legally Compliant Job Description Prompt',
    description: 'Generate a comprehensive, non-discriminatory job description that complies with standard labor laws while attracting top talent.',
    category: 'hr-recruiting',
    tags: ['Hiring', 'Compliance', 'Job Description'],
    content: 'Act as an expert HR professional and legal consultant. Draft a job description for the role of [Job Title] at [Company Name], operating in [Location/State]. The job description must include: \n\n1. A compelling company overview.\n2. 5-7 clear responsibilities.\n3. Hard and soft skill requirements.\n4. Benefits and compensation range.\n5. An equal opportunity employer (EEO) statement.\n\nEnsure the language is inclusive, avoids discriminatory phrasing, and aligns with standard employment laws in the specified location.',
    trending: true,
  },
  {
    id: 'seo-optimized-blog-outline',
    title: 'SEO-Optimized Blog Outline Generator',
    description: 'Create a highly structured, SEO-driven outline for blog posts to rank higher on search engines.',
    category: 'seo-content',
    tags: ['SEO', 'Blogging', 'Content Strategy'],
    content: 'Act as a Senior SEO Strategist. Create a detailed blog post outline for the target keyword "[Target Keyword]". The outline should include:\n\n1. An engaging H1 title.\n2. A compelling introduction summarizing the search intent.\n3. At least 4-5 H2 headings containing secondary keywords ([Secondary Keyword 1], [Secondary Keyword 2]).\n4. H3 subheadings where necessary to break down complex topics.\n5. A conclusion with a strong Call-to-Action (CTA).\n6. Suggestions for internal and external links.\n\nPlease optimize for the featured snippet.',
    trending: true,
  },
  {
    id: 'saas-onboarding-email-sequence',
    title: 'SaaS Onboarding Email Sequence',
    description: 'Design a 5-day email onboarding sequence to activate new SaaS users and reduce churn.',
    category: 'digital-marketing',
    tags: ['Email Marketing', 'SaaS', 'Onboarding'],
    content: 'Act as a SaaS Email Copywriter. Write a 5-day email onboarding sequence for a new user who just signed up for a [SaaS Product Category] called [Product Name]. The goal is to drive activation and product adoption.\n\nStructure the sequence as follows:\n- Day 1: Welcome & The "Aha!" Moment.\n- Day 2: Core Feature Highlight (How to use [Feature 1]).\n- Day 3: Case Study / Social Proof.\n- Day 4: Pro-tip / Hidden Feature.\n- Day 5: Call to Action (Upgrade to paid / Book a call).\n\nKeep the tone [Tone: friendly/professional/witty] and include clear subject lines for each email.',
    trending: true,
  },
  {
    id: 'course-module-script-framework',
    title: 'Course Module Script Framework',
    description: 'Structure a high-retention video script for an online course module.',
    category: 'course-creators',
    tags: ['E-learning', 'Video Script', 'Instructional Design'],
    content: 'Act as an Expert Instructional Designer. Outline a video script for a course module titled "[Module Title]" within a broader course about "[Course Topic]". The script should follow this framework:\n\n1. Hook (Capture attention in the first 15 seconds).\n2. The Problem (What struggle does this module solve?).\n3. The Solution/Concept (Explain the core concept simply).\n4. Step-by-Step Implementation (Provide 3 actionable steps).\n5. Common Pitfalls (What to avoid).\n6. Action Item/Homework (What the student should do next).\n\nProvide the script in a 2-column format: Visual (what is on screen) and Audio (what is spoken).',
    trending: true,
  },
  {
    id: 'api-documentation-generator',
    title: 'REST API Endpoint Documentation Generator',
    description: 'Automatically generate clean, comprehensive documentation for a specific API endpoint.',
    category: 'saas-dev',
    tags: ['API', 'Documentation', 'Development'],
    content: 'Act as a Technical Writer. Write comprehensive API documentation for a REST endpoint that does the following: [Endpoint Description]. \n\nPlease include:\n- Endpoint URL and HTTP Method.\n- Description of what the endpoint does.\n- Authentication requirements.\n- Request parameters (Path, Query, Body) with data types and descriptions.\n- A sample cURL request.\n- A sample JSON response (Success 200 OK).\n- Potential Error Codes (e.g., 400, 401, 404, 500) and descriptions.',
    trending: true,
  },
  {
    id: 'interview-question-bank',
    title: 'Behavioral Interview Question Bank',
    description: 'Generate specific behavioral questions based on required competencies for a role.',
    category: 'hr-recruiting',
    tags: ['Interviewing', 'HR', 'Assessment'],
    content: 'Act as a Senior Technical Recruiter. Generate a list of 7 behavioral interview questions using the STAR (Situation, Task, Action, Result) method for a candidate applying for the [Job Title] role. \n\nThe questions should specifically assess the following competencies:\n1. [Competency 1, e.g., Leadership]\n2. [Competency 2, e.g., Conflict Resolution]\n3. [Competency 3, e.g., Adaptability]\n\nInclude a brief "What to look for in the answer" note for each question.',
    trending: false,
  }
];

export function getPromptsByCategory(categoryId: string) {
  return prompts.filter(prompt => prompt.category === categoryId);
}

export function getPromptById(id: string) {
  return prompts.find(prompt => prompt.id === id);
}

export function getTrendingPrompts() {
  return prompts.filter(prompt => prompt.trending).slice(0, 5);
}
