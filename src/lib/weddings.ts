import { weddings, type Wedding } from '../data/weddings';
import { routes, type Lang } from '../i18n/ui';

const files = import.meta.glob<{ default: ImageMetadata }>(
  '../content/weddings/*/*.{jpg,jpeg,png,webp,JPG,JPEG}',
  { eager: true },
);

export interface WeddingPhoto {
  file: string;
  src: ImageMetadata;
  alt: Record<Lang, string>;
}

export interface LoadedWedding extends Omit<Wedding, 'photos'> {
  photos: WeddingPhoto[];
  coverPhoto: WeddingPhoto;
}

function photosIn(slug: string) {
  const prefix = `../content/weddings/${slug}/`;
  return new Map(
    Object.entries(files)
      .filter(([path]) => path.startsWith(prefix))
      .map(([path, mod]) => [path.slice(prefix.length), mod.default]),
  );
}

function load(w: Wedding): LoadedWedding {
  const available = photosIn(w.slug);
  const listed = w.photos
    .filter((p) => available.has(p.file))
    .map((p) => ({ ...p, src: available.get(p.file)! }));
  const listedNames = new Set(listed.map((p) => p.file));
  const extra = [...available.keys()]
    .filter((file) => !listedNames.has(file))
    .sort()
    .map((file) => ({ file, src: available.get(file)!, alt: w.title }));
  const photos = [...listed, ...extra];
  if (photos.length === 0) throw new Error(`No photos found in src/content/weddings/${w.slug}/`);
  const coverPhoto = photos.find((p) => p.file === w.cover) ?? photos[0];
  return { ...w, photos, coverPhoto };
}

/** Усі весілля з фото, найновіші першими */
export const allWeddings: LoadedWedding[] = weddings
  .map(load)
  .sort((a, b) => b.date.localeCompare(a.date));

export function getWedding(slug: string) {
  return allWeddings.find((w) => w.slug === slug);
}

export function weddingPath(lang: Lang, slug: string) {
  return `${routes.portfolio[lang]}${slug}/`;
}

export function formatDate(lang: Lang, date: string) {
  const [y, m] = date.split('-').map(Number);
  return new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'en-GB', { month: 'long', year: 'numeric', timeZone: 'UTC' })
    .format(new Date(Date.UTC(y, (m ?? 1) - 1, 1)));
}
