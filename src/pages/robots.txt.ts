import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const indexable = import.meta.env.PUBLIC_INDEXABLE === 'true';
  const body = indexable
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site)}\n`
    : `User-agent: *\nAllow: /\n`; // тестова версія закрита через meta noindex
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
