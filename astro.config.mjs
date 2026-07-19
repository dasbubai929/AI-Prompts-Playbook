import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [sitemap()],
  output: 'server',
  site: 'https://ai-prompts-playbook.dasbubai929.workers.dev',
  adapter: cloudflare(),
  image: { service: { entrypoint: "astro/assets/services/sharp" } },
  vite: {
    plugins: [
      tailwindcss()
    ]
  }
});