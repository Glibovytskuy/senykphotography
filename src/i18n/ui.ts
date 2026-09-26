export const languages = { fr: 'Français', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'fr';

// Шляхи сторінок для кожної мови. Використовуються в меню і для hreflang.
export const routes = {
  home: { fr: '/', en: '/en/' },
  portfolio: { fr: '/portfolio/', en: '/en/portfolio/' },
  about: { fr: '/a-propos/', en: '/en/about/' },
  contact: { fr: '/contact/', en: '/en/contact/' },
  legal: { fr: '/mentions-legales/', en: '/en/legal-notice/' },
  privacy: { fr: '/confidentialite/', en: '/en/privacy/' },
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
  },
} as const;

export function t(lang: Lang, key: keyof (typeof ui)['fr']) {
  return ui[lang][key] ?? ui[defaultLang][key];
}

export function alternatesFor(key: RouteKey) {
  return routes[key];
}
