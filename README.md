# Senyk Photography

Сайт-портфоліо весільного фотографа в Парижі. Astro, статична збірка, FR (основна) + EN.

## Запуск

    npm install
    npm run dev      # http://localhost:4321
    npm run build    # збірка в dist/

Потрібен Node.js 22.12+.

## Де що міняти

- `src/config.ts` — назва бренду, email, телефон, WhatsApp, Instagram
- `src/assets/hero.jpg` — головне фото
- `src/assets/home/` + `src/data/homeGallery.ts` — фото на головній та їхні alt-тексти
- `src/components/HomePage.astro` — тексти головної (FR/EN), title і description
- `src/i18n/ui.ts` — підписи меню та URL сторінок для кожної мови
- `src/styles/global.css` — кольори та шрифти

## Індексація

Поки змінна `PUBLIC_INDEXABLE` не дорівнює `true`, кожна сторінка має `noindex`.
На продакшн-домені додайте `PUBLIC_INDEXABLE=true` у налаштуваннях Cloudflare Pages
і змініть `site` в `astro.config.mjs` на справжній домен.
