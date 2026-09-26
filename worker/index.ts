// Точка входу Cloudflare Worker. Статичні сторінки з dist/ Cloudflare віддає сам;
// сюди потрапляють лише запити, для яких немає файлу, зокрема форма контактів.
import { handleContact, type ContactEnv } from './contact';

interface Env extends ContactEnv {
  ASSETS: { fetch(request: Request): Promise<Response> };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url);
    if (pathname === '/api/contact' || pathname === '/api/contact/') {
      if (request.method !== 'POST') return new Response('Method Not Allowed', { status: 405, headers: { allow: 'POST' } });
      return handleContact(request, env);
    }
    return env.ASSETS.fetch(request);
  },
};
