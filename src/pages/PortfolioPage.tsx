import { useState } from 'react';
import { CTASection } from '../components/CTASection';
import { Lightbox, PortfolioGrid } from '../components/PortfolioGrid';
import { SectionHeading } from '../components/SectionHeading';
import { galleryImages } from '../data/galleryImages';

export function PortfolioPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeLightbox = () => setActiveIndex(null);
  const showPrevious = () =>
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + galleryImages.length) % galleryImages.length,
    );
  const showNext = () =>
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % galleryImages.length,
    );

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <SectionHeading
            eyebrow="Portfolio"
            title="Work shown with the clean presentation it deserves"
            description="This gallery highlights real project photos from the Jackfinn Craftsman photo library. Tap or click any image for a larger view and a more immersive look at the finished details."
            centered
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <PortfolioGrid images={galleryImages} onSelect={setActiveIndex} />
        </div>
      </section>

      <CTASection
        title="Like what you see?"
        description="If the quality and finish style match what you want in your own home, reach out and start the conversation."
      />

      <Lightbox
        images={galleryImages}
        activeIndex={activeIndex}
        onClose={closeLightbox}
        onPrevious={showPrevious}
        onNext={showNext}
      />
    </>
  );
}
