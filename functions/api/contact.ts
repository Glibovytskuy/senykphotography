// Cloudflare Pages Function: приймає заявку з форми й надсилає її в Telegram.
// Адреса: POST /api/contact
// Потрібні змінні середовища в Cloudflare Pages (Settings → Variables and Secrets):
//   TELEGRAM_BOT_TOKEN — токен бота від @BotFather (тип Secret)
//   TELEGRAM_CHAT_ID   — id чату, куди надсилати заявки
// Локально їх можна покласти у файл .dev.vars (він у .gitignore).

interface Env {
  TELEGRAM_BOT_TOKEN?: string;
  TELEGRAM_CHAT_ID?: string;
}

interface Context {
  request: Request;
  env: Env;
}

const FIELDS = {
  email: { label: 'Email', max: 200 },
  names: { label: 'Імена', max: 200 },
  date: { label: 'Дата весілля', max: 100 },
  location: { label: 'Локація', max: 300 },
  message: { label: 'Про весілля', max: 5000 },
} as const;
type Field = keyof typeof FIELDS;

const CONTACT_PAGES: Record<string, string> = { fr: '/contact/', en: '/en/contact/', uk: '/uk/kontakty/' };
const LANG_NAMES: Record<string, string> = { fr: '🇫🇷 FR', en: '🇬🇧 EN', uk: '🇺🇦 UA' };

const escapeHtml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

async function readBody(request: Request): Promise<Record<string, string>> {
  const type = request.headers.get('content-type') ?? '';
  if (type.includes('application/json')) {
    const json = await request.json().catch(() => ({}));
    return Object.fromEntries(Object.entries(json ?? {}).map(([k, v]) => [k, String(v ?? '')]));
  }
  const form = await request.formData();
  return Object.fromEntries([...form.entries()].map(([k, v]) => [k, typeof v === 'string' ? v : '']));
}

export async function onRequestPost({ request, env }: Context): Promise<Response> {
  const wantsJson = (request.headers.get('accept') ?? '').includes('application/json');
  const body = await readBody(request);
  const lang = Object.hasOwn(CONTACT_PAGES, body.lang ?? '') ? body.lang : 'fr';

  const reply = (ok: boolean, status: number, error?: string) => {
    if (wantsJson) return Response.json({ ok, error }, { status });
    // Без JavaScript: повертаємо людину на сторінку контактів з результатом
    const url = new URL(CONTACT_PAGES[lang], request.url);
    url.searchParams.set(ok ? 'sent' : 'error', '1');
    return Response.redirect(url.href, 303);
  };

  // Приховане поле-пастка: люди його не бачать, спам-боти заповнюють
  if (body.website) return reply(true, 200);

  const values = {} as Record<Field, string>;
  for (const key of Object.keys(FIELDS) as Field[]) {
    const value = (body[key] ?? '').trim();
    if (!value || value.length > FIELDS[key].max) return reply(false, 400, `invalid:${key}`);
    values[key] = value;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) return reply(false, 400, 'invalid:email');

  if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) {
    console.error('TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not set');
    return reply(false, 500, 'not_configured');
  }

  const text = [
    `<b>💌 Нова заявка з сайту</b> · ${LANG_NAMES[lang]}`,
    '',
    ...(Object.keys(FIELDS) as Field[]).map((key) =>
      key === 'message'
        ? `\n<b>${FIELDS[key].label}:</b>\n${escapeHtml(values[key])}`
        : `<b>${FIELDS[key].label}:</b> ${escapeHtml(values[key])}`,
    ),
  ].join('\n');

  const telegram = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ chat_id: env.TELEGRAM_CHAT_ID, text, parse_mode: 'HTML', disable_web_page_preview: true }),
  }).catch((e) => {
    console.error('Telegram request failed', e);
    return undefined;
  });

  if (!telegram?.ok) {
    console.error('Telegram error', telegram?.status, await telegram?.text());
    return reply(false, 502, 'telegram_failed');
  }
  return reply(true, 200);
}
