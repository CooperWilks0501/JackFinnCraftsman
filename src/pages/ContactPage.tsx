import { ContactSection } from '../components/ContactSection';
import { SectionHeading } from '../components/SectionHeading';

export function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <SectionHeading
            eyebrow="Get in Touch"
            title="Reach out for dependable renovation and craftsmanship"
            description="Whether you are planning a full room update or looking for a skilled hand to tackle finish work and home improvements, Jackfin Craftsman is ready to help."
            centered
          />
        </div>
      </section>
      <ContactSection />
    </>
  );
}
