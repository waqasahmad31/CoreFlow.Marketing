// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Netlify sets URL to the site's primary address at build time, so renaming the
// site — or attaching a custom domain later — keeps canonical tags, OG tags and
// the sitemap correct with no code change. The fallback is only for local builds.
const site = process.env.URL ?? 'http://localhost:4321';

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [sitemap()],
});
