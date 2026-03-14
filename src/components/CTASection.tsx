import { Link } from 'react-router-dom';

interface CTASectionProps {
  title?: string;
  description?: string;
}

export function CTASection({
  title = 'Ready to talk about your home project?',
  description = 'Reach out to discuss your renovation goals, ask questions, and get the conversation started with Jackfinn Craftsman.',
}: CTASectionProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-banner">
          <div>
            <span className="eyebrow">Get in Touch</span>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>

          <div className="cta-actions">
            <Link className="button button-primary" to="/contact">
              Contact Jackfinn Craftsman
            </Link>
            <Link className="button button-secondary" to="/work-shown">
              Explore Recent Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
