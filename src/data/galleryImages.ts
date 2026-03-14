export interface GalleryImage {
  src: string;
  alt: string;
  title: string;
}

const galleryModules = import.meta.glob('../assets/Photos/*.{png,jpg,jpeg,JPG,JPEG,webp,avif}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

export const galleryImages: GalleryImage[] = Object.entries(galleryModules)
  .sort(([left], [right]) => left.localeCompare(right))
  .map(([, src], index) => ({
    src,
    title: `Project ${index + 1}`,
    alt: `Completed renovation work from Jackfin Craftsman project ${index + 1}`,
  }));

export const featuredGalleryImages = galleryImages.slice(0, 3);
