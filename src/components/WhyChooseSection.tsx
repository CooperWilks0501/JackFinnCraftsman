import { craftsmanshipPoints } from '../data/site';
import { SectionHeading } from './SectionHeading';

export function WhyChooseSection() {
  return (
    <section className="section craftsmanship-section">
      <div className="container">
        <SectionHeading
          eyebrow="Why Homeowners Choose Us"
          title="A craftsman approach that values process as much as the final look"
          description="Strong work comes from strong habits: careful planning, measured execution, and a genuine respect for the home being improved."
        />

        <div className="feature-grid">
          {craftsmanshipPoints.map((item) => (
            <article className="feature-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
