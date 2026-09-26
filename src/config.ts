// Усі дані бренду в одному місці. Замініть заглушки на реальні.
export const SITE = {
  brand: 'Senyk Photography',
  wordmark: 'Senyk',
  tagline: 'photography',
  email: 'hello@senyk-photography.com',
  phoneDisplay: '+33 6 00 00 00 00',
  phoneHref: '+33600000000',
  whatsapp: '33600000000', // номер без "+" для wa.me
  instagram: 'https://www.instagram.com/senyk.photography/',
  city: 'Paris',
  region: 'Île-de-France',
  country: 'FR',
  priceRange: '€€€',
};

// true лише на продакшн-домені (змінна в Cloudflare Pages)
export const INDEXABLE = import.meta.env.PUBLIC_INDEXABLE === 'true';
