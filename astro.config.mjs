// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Тимчасово тестовий домен. Коли купите справжній — замініть тут.
  site: 'https://senykphotography.glibbogd.workers.dev',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'uk'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'fr', locales: { fr: 'fr-FR', en: 'en-US', uk: 'uk-UA' } },
    }),
  ],
});
