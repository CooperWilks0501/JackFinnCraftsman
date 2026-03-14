import { useState } from 'react';
import { businessInfo } from '../data/site';
import { SectionHeading } from './SectionHeading';

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="section">
      <div className="container contact-layout">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Start the conversation about your next renovation project"
            description="Reach out by phone, email, or Facebook to discuss your project goals. The form below is ready for future backend wiring, but already provides a clean, professional contact experience."
          />

          <div className="contact-cards">
            <a className="contact-card" href={`mailto:${businessInfo.email}`}>
              <span>Email</span>
              <strong>{businessInfo.email}</strong>
            </a>
            <a className="contact-card" href={`tel:${businessInfo.phone}`}>
              <span>Phone</span>
              <strong>{businessInfo.phoneDisplay}</strong>
            </a>
            <a className="contact-card" href={businessInfo.facebook} target="_blank" rel="noreferrer">
              <span>Facebook</span>
              <strong>Connect on Facebook</strong>
            </a>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" />
          </label>
          <label>
            Phone
            <input type="tel" name="phone" placeholder="(555) 555-5555" />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows={6}
              placeholder="Tell us a little about the work you have in mind."
            />
          </label>
          <button type="submit" className="button button-primary">
            Send Inquiry
          </button>
          {submitted ? (
            <p className="form-note">
              Thanks for reaching out. This form is set up as a frontend placeholder and is
              ready to be connected to email or form handling later.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
