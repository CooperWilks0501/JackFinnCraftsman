import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/JackfinnLogo.png';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/work-shown', label: 'Work Shown' },
  { to: '/contact', label: 'Contact' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link className="brand-mark" to="/" aria-label="Jackfinn Craftsman Home">
          <img src={logo} alt="Jackfinn Craftsman logo" className="brand-logo" />
          <div>
            <span className="brand-name">Jackfinn Craftsman</span>
            <span className="brand-tag">Home Renovation & Fine Finish Work</span>
          </div>
        </Link>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="primary-navigation"
          className={`site-nav ${menuOpen ? 'is-open' : ''}`}
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <Link className="button nav-cta" to="/contact" onClick={() => setMenuOpen(false)}>
            Request an Estimate
          </Link>
        </nav>
      </div>
    </header>
  );
}
