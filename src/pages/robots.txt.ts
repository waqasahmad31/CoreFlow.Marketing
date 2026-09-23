import type { APIRoute } from 'astro';

// Generated rather than static so the sitemap URL always matches the site the
// build is actually deployed to. See the `site` note in astro.config.mjs.
export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = new URL('sitemap-index.xml', site ?? 'http://localhost:4321');

  return new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl.href}\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
};
