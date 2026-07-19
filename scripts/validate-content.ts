import { prompts } from '../src/data/prompts-data';
import { categories } from '../src/data/categories';
import { blogPosts } from '../src/data/blog';

function checkDuplicates<T extends { id: string; slug: string }>(
  items: T[],
  type: string,
  key: 'slug' | 'id' = 'slug'
): string[] {
  const errors: string[] = [];
  const seen = new Map<string, string[]>();
  
  for (const item of items) {
    const value = item[key];
    if (!seen.has(value)) {
      seen.set(value, []);
    }
    seen.get(value)!.push(item.id);
  }
  
  for (const [value, ids] of seen) {
    if (ids.length > 1) {
      errors.push(`Duplicate ${key} '${value}' found in ${type}: [${ids.join(', ')}]`);
    }
  }
  
  return errors;
}

function checkRequiredFields<T extends Record<string, unknown>>(
  items: T[],
  type: string,
  requiredFields: string[]
): string[] {
  const errors: string[] = [];
  
  for (const item of items) {
    for (const field of requiredFields) {
      const value = item[field];
      if (value === undefined || value === null || value === '') {
        errors.push(`${type} '${item.id}' is missing required field '${field}' or has empty string`);
      }
    }
  }
  
  return errors;
}

function main() {
  const errors: string[] = [];
  
  // Check 1: Duplicate slugs in prompts
  errors.push(...checkDuplicates(prompts, 'prompts', 'slug'));
  
  // Check 2: Duplicate slugs in blog posts
  errors.push(...checkDuplicates(blogPosts, 'blog posts', 'slug'));
  
  // Check 3: Duplicate slugs or ids in categories
  errors.push(...checkDuplicates(categories, 'categories', 'slug'));
  errors.push(...checkDuplicates(categories, 'categories', 'id'));
  
  // Check 4: Prompt categoryId references existing category
  const categoryIds = new Set(categories.map(c => c.id));
  for (const prompt of prompts) {
    if (!categoryIds.has(prompt.category)) {
      errors.push(`Prompt '${prompt.id}' references invalid category '${prompt.category}'`);
    }
  }
  
  // Check 5: Missing required fields
  const promptRequiredFields = ['title', 'slug', 'description', 'promptText'];
  errors.push(...checkRequiredFields(prompts, 'Prompt', promptRequiredFields));
  
  const blogRequiredFields = ['title', 'slug', 'excerpt', 'content'];
  errors.push(...checkRequiredFields(blogPosts, 'Blog post', blogRequiredFields));
  
  const categoryRequiredFields = ['id', 'name', 'description', 'slug'];
  errors.push(...checkRequiredFields(categories, 'Category', categoryRequiredFields));
  
  if (errors.length > 0) {
    console.error('\n❌ VALIDATION FAILED:');
    for (const error of errors) {
      console.error(`  - ${error}`);
    }
    console.error('');
    process.exit(1);
  }
  
  console.log('\n✅ All validations passed!');
  process.exit(0);
}

main();
