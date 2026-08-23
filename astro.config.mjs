// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO(owner): replace with the real production domain once one is registered.
  site: 'https://coreflow.example',
  integrations: [sitemap()],
});
