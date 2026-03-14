import { services } from '../data/site';
import { SectionHeading } from './SectionHeading';

export function ServicesSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          title="Craftsmanship for the spaces homeowners use every day"
          description="From refined finish carpentry to practical renovation upgrades, each service is handled with a focus on durability, fit, and visual polish."
        />

        <div className="card-grid">
          {services.map((service) => (
            <article className="info-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
