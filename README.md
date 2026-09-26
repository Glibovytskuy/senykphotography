# Senyk Photography

Сайт-портфоліо весільного фотографа в Парижі. Astro, статична збірка, FR (основна) + EN + UK (/uk/).

## Запуск

    npm install
    npm run dev      # http://localhost:4321
    npm run build    # збірка в dist/

Потрібен Node.js 22.12+.

## Де що міняти

- `src/config.ts` — назва бренду, email, телефон, WhatsApp, Instagram
- `src/components/HomePage.astro` (угорі файлу) — яке фото стоїть у великому банері на головній
- `src/content/weddings/<назва>/` — фото весілля; назва папки = адреса сторінки `/portfolio/<назва>/`
- `src/data/weddings.ts` — назва, локація, дата, історія, обкладинка, порядок і alt-тексти фото кожного весілля
- `src/data/homeGallery.ts` — які фото з весіль показати на головній

### Як додати нове весілля

1. Створіть папку `src/content/weddings/mariage-<локація>/` і покладіть туди JPG (sRGB, довга сторона ~2500 px).
2. Додайте запис у `src/data/weddings.ts` з тим самим `slug`, що й назва папки.
   Фото, не перелічені в `photos`, теж з'являться — в кінці галереї.
- `src/components/HomePage.astro` — тексти головної (FR/EN), title і description
- `src/i18n/ui.ts` — підписи меню та URL сторінок для кожної мови
- `src/styles/global.css` — кольори та шрифти

## Індексація

Поки змінна `PUBLIC_INDEXABLE` не дорівнює `true`, кожна сторінка має `noindex`.
На продакшн-домені додайте `PUBLIC_INDEXABLE=true` у налаштуваннях Cloudflare Pages
і змініть `site` в `astro.config.mjs` на справжній домен.

## Форма контактів → Telegram

Форма на `/contact/` надсилає заявку на `/api/contact` (файл `functions/api/contact.ts`,
Cloudflare Pages Function), а та пересилає її в Telegram через бота.

У Cloudflare Pages → Settings → Variables and Secrets додайте:

- `TELEGRAM_BOT_TOKEN` — токен бота від @BotFather (тип **Secret**)
- `TELEGRAM_CHAT_ID` — id чату, куди падатимуть заявки

Після зміни змінних зробіть новий деплой (Deployments → Retry deployment).

Локальна перевірка форми: створіть `.dev.vars` з цими двома змінними, потім

    npm run build
    npx wrangler pages dev dist   # http://localhost:8788

(`npm run dev` форму не надсилає — там немає Cloudflare Functions.)
