import { Link } from 'react-router-dom';
import logo from '../assets/JackfinnLogo.png';
import { businessInfo } from '../data/site';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={logo} alt="Jackfinn Craftsman logo" className="footer-logo" />
          <div>
            <h2>Jackfinn Craftsman</h2>
            <p>
              Skilled renovation and finish work shaped by careful execution, dependable
              communication, and pride in the final result.
            </p>
          </div>
        </div>

        <div>
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/work-shown">Work Shown</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul className="footer-links">
            <li>
              <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a>
            </li>
            <li>
              <a href={`tel:${businessInfo.phone}`}>{businessInfo.phoneDisplay}</a>
            </li>
            <li>
              <a href={businessInfo.facebook} target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>Copyright {new Date().getFullYear()} Jackfinn Craftsman. All rights reserved.</p>
      </div>
    </footer>
  );
}
