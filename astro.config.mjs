// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Netlify subdomain. Replace with the custom domain once one is registered,
  // and update public/robots.txt to match.
  site: 'https://coreflow.netlify.app',
  integrations: [sitemap()],
});
