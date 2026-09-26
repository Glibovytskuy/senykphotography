import type { Lang } from '../i18n/ui';

// Весілля в портфоліо. Фото лежать у src/content/weddings/<slug>/.
// slug = назва папки = адреса сторінки (/portfolio/<slug>/).
// photos задає порядок і alt-тексти. Файли з папки, яких тут немає,
// все одно з'являться в кінці галереї (з назвою весілля замість alt).
// Імена пар та історії — заглушки, замініть на справжні.
// Дати взято з метаданих фото (дата зйомки).

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
      uk: 'Весілля в особняку в Парижі',
    },
    location: { fr: 'Paris, 16e arrondissement', en: 'Paris, 16th arrondissement', uk: 'Париж, 16-й округ' },
    date: '2026-08',
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
      uk: [
        'Клер і Тома збиралися в залитому світлом номері неподалік Трокадеро, а потім зустрілися в саду особняка в 16-му окрузі.',
        'Затишний і елегантний день: мереживо, білі троянди й кілька спонтанних танцювальних кроків серед квітників.',
      ],
    },
    photos: [
      { file: 'SENYK92.jpg', alt: { fr: 'Mariée souriante mettant ses boucles d’oreilles dans sa suite d’hôtel à Paris', en: 'Smiling bride putting on her earrings in her Paris hotel suite', uk: 'Усміхнена наречена вдягає сережки в номері паризького готелю' } },
      { file: 'SENYK255.jpg', alt: { fr: 'Portrait noir et blanc de la mariée sous son voile avec un bouquet de roses blanches', en: 'Black and white portrait of the bride under her veil holding white roses', uk: 'Чорно-білий портрет нареченої під фатою з букетом білих троянд' } },
      { file: 'SENYK176-2.jpg', alt: { fr: 'Mariée à la fenêtre d’un hôtel parisien, longue traîne en dentelle', en: 'Bride by the window of a Paris hotel with a long lace train', uk: 'Наречена біля вікна паризького готелю, довгий мереживний шлейф' } },
      { file: 'SENYK1418-2.jpg', alt: { fr: 'Les mariés dans le jardin d’un hôtel particulier, la mariée fait virevolter sa robe', en: 'Bride and groom in a mansion garden, the bride swirling her gown', uk: 'Наречені в саду особняка, наречена кружляє в сукні' } },
    ],
  },
  {
    slug: 'mariage-chateau-ile-de-france',
    title: {
      fr: 'Mariage dans un château en Île-de-France',
      en: 'Château wedding near Paris',
      uk: 'Весілля в шато під Парижем',
    },
    location: { fr: 'Île-de-France', en: 'Île-de-France', uk: 'Іль-де-Франс' },
    date: '2026-07',
    cover: '1H9A1354.jpg',
    story: {
      fr: [
        'Maya et Julien ont réuni leurs deux familles dans un château à une heure de Paris, pour une journée qui mêlait les traditions de chacun.',
        'Une cérémonie dans le parc, une tenue brodée pour la soirée, et une piste de danse pleine jusqu’au bout de la nuit sous les lustres.',
      ],
      en: [
        'Maya and Julien brought their two families together at a château an hour from Paris, for a day that blended both of their traditions.',
        'A ceremony in the grounds, an embroidered outfit for the evening, and a dance floor that stayed full late into the night beneath the chandeliers.',
      ],
      uk: [
        'Мая і Жульєн зібрали дві родини в шато за годину від Парижа, і цей день поєднав традиції обох.',
        'Церемонія в парку, розшите вбрання на вечір і танцпол під люстрами, повний до самої ночі.',
      ],
    },
    photos: [
      { file: '1H9A1354.jpg', alt: { fr: 'Mariée riant dans le parc d’un château près de Paris', en: 'Bride laughing in the grounds of a château near Paris', uk: 'Наречена сміється в парку шато під Парижем' } },
      { file: '1H9A3524.jpg', alt: { fr: 'Portrait en lehenga brodé rose poudré', en: 'Portrait in an embroidered blush-pink lehenga', uk: 'Портрет у розшитій лехенґі пудрово-рожевого кольору' } },
      { file: '1H9A4107.jpg', alt: { fr: 'Première danse des mariés sous les lustres du château', en: 'First dance beneath the château chandeliers', uk: 'Перший танець наречених під люстрами шато' } },
    ],
  },
  {
    slug: 'seance-couple-chateau-de-chantilly',
    title: {
      fr: 'Séance couple au château de Chantilly',
      en: 'Couple session at the Château de Chantilly',
      uk: 'Фотосесія пари біля замку Шантійї',
    },
    location: { fr: 'Chantilly, Oise', en: 'Chantilly, near Paris', uk: 'Шантійї, під Парижем' },
    date: '2026-07',
    cover: '1H9A0087.jpg',
    story: {
      fr: [
        'À quarante minutes de Paris, le château de Chantilly et ses douves offrent l’un des plus beaux décors d’Île-de-France. Une séance en fin de journée, dans la lumière dorée, avec une voiture ancienne pour complice.',
      ],
      en: [
        'Forty minutes from Paris, the Château de Chantilly and its moat make one of the most beautiful backdrops around the capital. A late-afternoon session in golden light, with a vintage car along for the ride.',
      ],
      uk: [
        'За сорок хвилин від Парижа замок Шантійї з його ровами — одна з найгарніших локацій довкола столиці. Фотосесія наприкінці дня в золотому світлі та з ретроавтомобілем.',
      ],
    },
    photos: [
      { file: '1H9A0087.jpg', alt: { fr: 'Couple et voiture ancienne devant le château de Chantilly', en: 'Couple with a vintage car in front of the Château de Chantilly', uk: 'Пара й ретроавтомобіль перед замком Шантійї' } },
    ],
  },
  {
    slug: 'seance-mariee-pont-de-bir-hakeim',
    title: {
      fr: 'Séance mariée au pont de Bir-Hakeim',
      en: 'Bridal session at the Bir-Hakeim bridge',
      uk: 'Фотосесія нареченої на мосту Бір-Акейм',
    },
    location: { fr: 'Paris, 15e arrondissement', en: 'Paris, 15th arrondissement', uk: 'Париж, 15-й округ' },
    date: '2026-06',
    cover: 'SENYK47.jpg',
    story: {
      fr: [
        'Rendez-vous à sept heures du matin, avant les passants, sous les arches de fer du pont de Bir-Hakeim. Une robe fluide, la lumière douce de l’aube et Paris encore endormi.',
      ],
      en: [
        'We met at seven in the morning, before the crowds, beneath the iron arches of the Bir-Hakeim bridge. A flowing gown, soft dawn light and Paris still asleep.',
      ],
      uk: [
        'Зустрілися о сьомій ранку, поки не було перехожих, під залізними арками мосту Бір-Акейм. Легка сукня, м’яке світанкове світло й Париж, що ще спить.',
      ],
    },
    photos: [
      { file: 'SENYK47.jpg', alt: { fr: 'Mariée en robe fluide marchant sous le pont de Bir-Hakeim à Paris', en: 'Bride in a flowing gown walking under the Bir-Hakeim bridge in Paris', uk: 'Наречена в легкій сукні йде під мостом Бір-Акейм у Парижі' } },
      { file: 'SENYK43.jpg', alt: { fr: 'Portrait noir et blanc de la mariée sous le pont de Bir-Hakeim', en: 'Black and white bridal portrait under the Bir-Hakeim bridge', uk: 'Чорно-білий портрет нареченої під мостом Бір-Акейм' } },
    ],
  },
  {
    slug: 'mariage-lac-de-come',
    title: {
      fr: 'Mariage au lac de Côme',
      en: 'Lake Como wedding',
      uk: 'Весілля на озері Комо',
    },
    location: { fr: 'Lac de Côme, Italie', en: 'Lake Como, Italy', uk: 'Озеро Комо, Італія' },
    date: '2026-06',
    cover: '1H9A4940.jpg',
    story: {
      fr: [
        'Anna et Marco ont choisi une villa sur les rives du lac de Côme pour un mariage à l’italienne : terrasses à colonnades, lumière dorée et montagnes à perte de vue.',
        'Après la cérémonie, une échappée en bateau Riva au coucher du soleil, cheveux au vent et drapeau italien en poupe.',
      ],
      en: [
        'Anna and Marco chose a villa on the shores of Lake Como for an Italian-style wedding: colonnaded terraces, golden light and mountains as far as the eye can see.',
        'After the ceremony came a sunset ride on a Riva boat, hair in the wind and the Italian flag at the stern.',
      ],
      uk: [
        'Анна й Марко обрали віллу на березі озера Комо для весілля в італійському стилі: тераси з колонадами, золоте світло й гори до самого горизонту.',
        'Після церемонії — прогулянка на катері Riva на заході сонця: вітер у волоссі й італійський прапор на кормі.',
      ],
    },
    photos: [
      { file: '1H9A3908.jpg', alt: { fr: 'Le marié en smoking à la fenêtre de la villa, vue sur le lac de Côme', en: 'Groom in a tuxedo at the villa window overlooking Lake Como', uk: 'Наречений у смокінгу біля вікна вілли з видом на озеро Комо' } },
      { file: '1H9A4444.jpg', alt: { fr: 'La mariée sur une terrasse à colonnades au-dessus du lac de Côme', en: 'Bride on a colonnaded terrace above Lake Como', uk: 'Наречена на терасі з колонадою над озером Комо' } },
      { file: '1H9A4940.jpg', alt: { fr: 'Baiser des mariés entre deux lanternes au bord du lac de Côme', en: 'Couple kissing between two lanterns on the shore of Lake Como', uk: 'Поцілунок наречених між двома ліхтарями на березі озера Комо' } },
      { file: '1H9A5585.jpg', alt: { fr: 'Les mariés à bord d’un bateau en bois verni sur le lac de Côme', en: 'Bride and groom aboard a varnished wooden boat on Lake Como', uk: 'Наречені на лакованому дерев’яному катері на озері Комо' } },
      { file: '1H9A5788.jpg', alt: { fr: 'La mariée lève le bras de joie sur le bateau lancé sur le lac', en: 'Bride raising her arm in joy as the boat speeds across the lake', uk: 'Наречена радісно здіймає руку на катері, що мчить озером' } },
      { file: '1H9A5918.jpg', alt: { fr: 'Portrait de la mariée à l’arrière du bateau, sillage sur le lac de Côme', en: 'Portrait of the bride at the back of the boat, wake on Lake Como', uk: 'Портрет нареченої на кормі катера, слід на воді озера Комо' } },
    ],
  },
  {
    slug: 'mariage-suisse-lac-de-thoune',
    title: {
      fr: 'Mariage dans un château au bord du lac de Thoune',
      en: 'Castle wedding on Lake Thun, Switzerland',
      uk: 'Весілля в замку на озері Тун',
    },
    location: { fr: 'Thoune, Suisse', en: 'Thun, Switzerland', uk: 'Тун, Швейцарія' },
    date: '2026-06',
    cover: 'AL59708.jpg',
    story: {
      fr: [
        'Alice et Léo se sont mariés dans un château néo-gothique au bord du lac de Thoune, entre tourelles, boiseries et escaliers sculptés.',
        'Des préparatifs entourés de leurs proches, une balade sur le lac sous le drapeau suisse, puis une soirée dansante jusque tard dans les salons du château.',
      ],
      en: [
        'Alice and Léo married at a neo-Gothic castle on the shores of Lake Thun, among turrets, carved wood panelling and sculpted staircases.',
        'Getting ready surrounded by family, a boat ride on the lake beneath the Swiss flag, then dancing late into the night in the castle’s salons.',
      ],
      uk: [
        'Аліса й Лео одружилися в неоготичному замку на березі озера Тун, серед башточок, дерев’яних панелей і різьблених сходів.',
        'Збори в колі рідних, прогулянка озером під швейцарським прапором, а потім танці до пізньої ночі в залах замку.',
      ],
    },
    photos: [
      { file: 'AL59519.jpg', alt: { fr: 'Préparatifs de la mariée entourée de sa famille dans une chambre du château', en: 'Bride getting ready with her family in a castle bedroom', uk: 'Наречена збирається в колі родини в кімнаті замку' } },
      { file: 'AL59536.jpg', alt: { fr: 'Portrait noir et blanc de la mariée souriante près d’une fenêtre', en: 'Black and white portrait of the smiling bride by a window', uk: 'Чорно-білий портрет усміхненої нареченої біля вікна' } },
      { file: 'AL59557.jpg', alt: { fr: 'La mariée de dos dans un escalier néo-gothique, long voile sur le tapis rouge', en: 'Bride seen from behind on a neo-Gothic staircase, long veil over the red carpet', uk: 'Наречена зі спини на неоготичних сходах, довга фата на червоному килимі' } },
      { file: 'AL59646.jpg', alt: { fr: 'Silhouette de la mariée sous son voile, contre-jour noir et blanc', en: 'Backlit black and white silhouette of the bride under her veil', uk: 'Силует нареченої під фатою в контровому світлі, чорно-біле фото' } },
      { file: 'AL59708.jpg', alt: { fr: 'Les mariés s’embrassent sur la pelouse devant le château au bord du lac de Thoune', en: 'Couple kissing on the lawn in front of the castle on Lake Thun', uk: 'Поцілунок наречених на галявині перед замком на озері Тун' } },
      { file: 'AL59778.jpg', alt: { fr: 'Portrait en robe brodée sous le drapeau suisse, sur le pont d’un bateau', en: 'Portrait in an embroidered gown beneath the Swiss flag on a boat deck', uk: 'Портрет у розшитій сукні під швейцарським прапором на палубі' } },
      { file: 'AL59992.jpg', alt: { fr: 'Première danse des mariés dans un salon boisé du château', en: 'First dance in a wood-panelled castle salon', uk: 'Перший танець наречених у залі замку з дерев’яними панелями' } },
    ],
  },
];
