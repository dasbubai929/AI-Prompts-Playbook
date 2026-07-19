import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  integrations: [sitemap()],
  output: 'server',
  site: 'https://ai-prompts-playbook.dasbubai929.workers.dev',
  adapter: cloudflare(),
  image: { service: { entrypoint: "astro/assets/services/sharp" } },
  style: {
    postcss: {
      plugins: [
        tailwindcss({ config: './tailwind.config.cjs' }),
        autoprefixer()
      ]
    }
  }
});