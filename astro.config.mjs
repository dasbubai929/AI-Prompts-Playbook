import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  integrations: [tailwind(), sitemap()],
  output: 'static',
  site: 'https://ai-prompts-playbook.dasbubai929.workers.dev',
  adapter: cloudflare(),
  image: { service: "compile" }
});