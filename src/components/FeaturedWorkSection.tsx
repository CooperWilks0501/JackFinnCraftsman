import { Link } from 'react-router-dom';
import { featuredGalleryImages } from '../data/galleryImages';
import { PortfolioGrid } from './PortfolioGrid';
import { SectionHeading } from './SectionHeading';

export function FeaturedWorkSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Work Shown"
          title="A closer look at completed renovation and finish work"
          description="Browse a curated preview of recent project photos, then head to the full gallery to explore more of the craftsmanship."
        />

        <PortfolioGrid images={featuredGalleryImages} />

        <div className="section-actions">
          <Link className="button button-secondary" to="/work-shown">
            See the Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
