import type { Lang } from '../i18n/ui';

// Весілля в портфоліо. Фото лежать у src/content/weddings/<slug>/.
// slug = назва папки = адреса сторінки (/portfolio/<slug>/).
// photos задає порядок і alt-тексти. Файли з папки, яких тут немає,
// все одно з'являться в кінці галереї (з назвою весілля замість alt).
// Тексти нижче — заглушки, замініть на справжні.

type Localized<T = string> = Record<Lang, T>;

export interface Wedding {
  slug: string;
  title: Localized;
  location: Localized;
  /** Рік і місяць, напр. '2025-06' */
  date: string;
  /** Файл обкладинки для картки в портфоліо */
  cover: string;
  story: Localized<string[]>;
  photos: { file: string; alt: Localized }[];
}

export const weddings: Wedding[] = [
  {
    slug: 'mariage-paris-hotel-particulier',
    title: {
      fr: 'Mariage dans un hôtel particulier à Paris',
      en: 'Wedding at a private mansion in Paris',
    },
    location: { fr: 'Paris, 16e arrondissement', en: 'Paris, 16th arrondissement' },
    date: '2025-06',
    cover: 'SENYK176-2.jpg',
    story: {
      fr: [
        'Claire et Thomas se sont préparés dans une suite baignée de lumière, à deux pas du Trocadéro, avant de se retrouver dans le jardin d’un hôtel particulier du 16e.',
        'Une journée intime et élégante, entre dentelle, roses blanches et quelques pas de danse improvisés au milieu des massifs.',
      ],
      en: [
        'Claire and Thomas got ready in a light-filled suite near the Trocadéro, then met in the garden of a private mansion in the 16th arrondissement.',
        'An intimate, elegant day of lace, white roses and a few improvised dance steps among the flower beds.',
      ],
    },
    photos: [
      { file: 'SENYK92.jpg', alt: { fr: 'Mariée souriante mettant ses boucles d’oreilles dans sa suite d’hôtel à Paris', en: 'Smiling bride putting on her earrings in her Paris hotel suite' } },
      { file: 'SENYK255.jpg', alt: { fr: 'Portrait noir et blanc de la mariée sous son voile avec un bouquet de roses blanches', en: 'Black and white portrait of the bride under her veil holding white roses' } },
      { file: 'SENYK176-2.jpg', alt: { fr: 'Mariée à la fenêtre d’un hôtel parisien, longue traîne en dentelle', en: 'Bride by the window of a Paris hotel with a long lace train' } },
      { file: 'SENYK1418-2.jpg', alt: { fr: 'Les mariés dans le jardin d’un hôtel particulier, la mariée fait virevolter sa robe', en: 'Bride and groom in a mansion garden, the bride swirling her gown' } },
      { file: 'SENYK47.jpg', alt: { fr: 'Mariée en robe fluide marchant sous le pont de Bir-Hakeim à Paris', en: 'Bride in a flowing gown walking under the Bir-Hakeim bridge in Paris' } },
      { file: 'SENYK43.jpg', alt: { fr: 'Portrait noir et blanc de la mariée sous le pont de Bir-Hakeim', en: 'Black and white bridal portrait under the Bir-Hakeim bridge' } },
    ],
  },
  {
    slug: 'mariage-lac-de-come',
    title: {
      fr: 'Mariage au lac de Côme',
      en: 'Lake Como wedding',
    },
    location: { fr: 'Lac de Côme, Italie', en: 'Lake Como, Italy' },
    date: '2025-09',
    cover: '1H9A4940.jpg',
    story: {
      fr: [
        'Anna et Marco ont choisi une villa sur les rives du lac de Côme pour un mariage à l’italienne : terrasses à colonnades, lumière dorée et montagnes à perte de vue.',
        'Après la cérémonie, une échappée en bateau Riva au coucher du soleil, avant un dîner et une première danse sous les lustres.',
      ],
      en: [
        'Anna and Marco chose a villa on the shores of Lake Como for an Italian-style wedding: colonnaded terraces, golden light and mountains as far as the eye can see.',
        'After the ceremony came a sunset ride on a Riva boat, followed by dinner and a first dance beneath the chandeliers.',
      ],
    },
    photos: [
      { file: '1H9A3908.jpg', alt: { fr: 'Le marié en smoking à la fenêtre de la villa, vue sur le lac de Côme', en: 'Groom in a tuxedo at the villa window overlooking Lake Como' } },
      { file: '1H9A4444.jpg', alt: { fr: 'La mariée sur une terrasse à colonnades au-dessus du lac de Côme', en: 'Bride on a colonnaded terrace above Lake Como' } },
      { file: '1H9A4940.jpg', alt: { fr: 'Baiser des mariés entre deux lanternes au bord du lac de Côme', en: 'Couple kissing between two lanterns on the shore of Lake Como' } },
      { file: '1H9A5585.jpg', alt: { fr: 'Les mariés à bord d’un bateau en bois verni sur le lac de Côme', en: 'Bride and groom aboard a varnished wooden boat on Lake Como' } },
      { file: '1H9A5788.jpg', alt: { fr: 'La mariée lève le bras de joie sur le bateau lancé sur le lac', en: 'Bride raising her arm in joy as the boat speeds across the lake' } },
      { file: '1H9A5918.jpg', alt: { fr: 'Portrait de la mariée à l’arrière du bateau, sillage sur le lac de Côme', en: 'Portrait of the bride at the back of the boat, wake on Lake Como' } },
      { file: '1H9A0087.jpg', alt: { fr: 'Couple et voiture ancienne devant le château de Chantilly', en: 'Couple with a vintage car in front of the Château de Chantilly' } },
      { file: '1H9A1354.jpg', alt: { fr: 'Mariée riant dans le parc d’un château', en: 'Bride laughing in the grounds of a château' } },
      { file: '1H9A4107.jpg', alt: { fr: 'Première danse des mariés sous les lustres', en: 'First dance beneath the chandeliers' } },
      { file: '1H9A3524.jpg', alt: { fr: 'Portrait de la mariée en lehenga brodé rose poudré', en: 'Portrait of the bride in an embroidered blush-pink lehenga' } },
    ],
  },
];
