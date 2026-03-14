import { Link } from 'react-router-dom';
import logo from '../assets/JackfinnLogo.png';

export function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Premium Renovation & Craftsmanship</span>
          <h1>Home improvements finished with precision, pride, and lasting quality.</h1>
          <p>
            Jackfinn Craftsman delivers clean, dependable renovation work for homeowners who
            want honest service, refined details, and results that feel built to last.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/contact">
              Start Your Project
            </Link>
            <Link className="button button-secondary" to="/work-shown">
              View Work Shown
            </Link>
          </div>
        </div>

        <div className="hero-card">
          <img src={logo} alt="Jackfinn Craftsman logo" className="hero-logo" />
          <div className="hero-card-copy">
            <h2>Jackfinn Craftsman</h2>
            <p>
              Renovation, finish work, and detail-oriented project care tailored for homes
              that deserve a polished, professional result.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
