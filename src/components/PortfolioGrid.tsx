import { useEffect } from 'react';
import type { GalleryImage } from '../data/galleryImages';

interface PortfolioGridProps {
  images: GalleryImage[];
  onSelect?: (index: number) => void;
}

export function PortfolioGrid({ images, onSelect }: PortfolioGridProps) {
  return (
    <div className="portfolio-grid">
      {images.map((image, index) => (
        onSelect ? (
          <button
            type="button"
            key={image.src}
            className="portfolio-card"
            onClick={() => onSelect(index)}
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
            <span className="portfolio-overlay">
              <strong>{image.title}</strong>
              <span>View larger image</span>
            </span>
          </button>
        ) : (
          <article key={image.src} className="portfolio-card is-static">
            <img src={image.src} alt={image.alt} loading="lazy" />
            <span className="portfolio-overlay">
              <strong>{image.title}</strong>
              <span>Craftsmanship preview</span>
            </span>
          </article>
        )
      ))}
    </div>
  );
}

interface LightboxProps {
  images: GalleryImage[];
  activeIndex: number | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export function Lightbox({
  images,
  activeIndex,
  onClose,
  onPrevious,
  onNext,
}: LightboxProps) {
  useEffect(() => {
    if (activeIndex === null) {
      return undefined;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
      if (event.key === 'ArrowLeft') {
        onPrevious();
      }
      if (event.key === 'ArrowRight') {
        onNext();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeIndex, onClose, onNext, onPrevious]);

  if (activeIndex === null) {
    return null;
  }

  const activeImage = images[activeIndex];

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Expanded project image">
      <button
        type="button"
        className="lightbox-backdrop"
        onClick={onClose}
        aria-label="Close image preview"
      />
      <div className="lightbox-panel">
        <button
          type="button"
          className="lightbox-close"
          onClick={onClose}
          aria-label="Close image preview"
        >
          Close
        </button>
        <button
          type="button"
          className="lightbox-nav left"
          onClick={onPrevious}
          aria-label="Previous image"
        >
          Prev
        </button>
        <img src={activeImage.src} alt={activeImage.alt} className="lightbox-image" />
        <button
          type="button"
          className="lightbox-nav right"
          onClick={onNext}
          aria-label="Next image"
        >
          Next
        </button>
      </div>
    </div>
  );
}
