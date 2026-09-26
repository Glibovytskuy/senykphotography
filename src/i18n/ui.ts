export const languages = { fr: 'Français', en: 'English', uk: 'Українська' } as const;
/** Короткі підписи для перемикача мов */
export const langLabels: Record<keyof typeof languages, string> = { fr: 'FR', en: 'EN', uk: 'UA' };
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'fr';

// Шляхи сторінок для кожної мови. Використовуються в меню і для hreflang.
export const routes = {
  home: { fr: '/', en: '/en/', uk: '/uk/' },
  portfolio: { fr: '/portfolio/', en: '/en/portfolio/', uk: '/uk/portfolio/' },
  about: { fr: '/a-propos/', en: '/en/about/', uk: '/uk/pro-mene/' },
  contact: { fr: '/contact/', en: '/en/contact/', uk: '/uk/kontakty/' },
  legal: { fr: '/mentions-legales/', en: '/en/legal-notice/', uk: '/uk/pravova-informatsiia/' },
  privacy: { fr: '/confidentialite/', en: '/en/privacy/', uk: '/uk/konfidentsiinist/' },
} as const;
export type RouteKey = keyof typeof routes;

export const ui = {
  fr: {
    'nav.home': 'Accueil',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'footer.legal': 'Mentions légales',
    'footer.privacy': 'Confidentialité',
    'cta.contact': 'Parlons de votre mariage',
    'skip': 'Aller au contenu',
    'portfolio.back': 'Tous les mariages',
    'lightbox.close': 'Fermer',
    'lightbox.prev': 'Photo précédente',
    'lightbox.next': 'Photo suivante',
  },
  en: {
    'nav.home': 'Home',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'footer.legal': 'Legal notice',
    'footer.privacy': 'Privacy',
    'cta.contact': 'Tell me about your wedding',
    'skip': 'Skip to content',
    'portfolio.back': 'All weddings',
    'lightbox.close': 'Close',
    'lightbox.prev': 'Previous photo',
    'lightbox.next': 'Next photo',
  },
  uk: {
    'nav.home': 'Головна',
    'nav.portfolio': 'Портфоліо',
    'nav.about': 'Про мене',
    'nav.contact': 'Контакти',
    'nav.menu': 'Меню',
    'footer.legal': 'Правова інформація',
    'footer.privacy': 'Конфіденційність',
    'cta.contact': 'Розкажіть про ваше весілля',
    'skip': 'Перейти до змісту',
    'portfolio.back': 'Усі весілля',
    'lightbox.close': 'Закрити',
    'lightbox.prev': 'Попереднє фото',
    'lightbox.next': 'Наступне фото',
  },
} as const;

export function t(lang: Lang, key: keyof (typeof ui)['fr']) {
  return ui[lang][key] ?? ui[defaultLang][key];
}

export function alternatesFor(key: RouteKey) {
  return routes[key];
}
