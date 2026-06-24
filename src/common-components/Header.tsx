import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "../style/home.css";

type NavLink = { label: string; href: string; icon: keyof typeof icons };

const navLinks: NavLink[] = [
  { label: "Home", href: "/", icon: "home" },
  { label: "Experience", href: "/#experience", icon: "experience" },
  { label: "Education", href: "/#education", icon: "education" },
  { label: "Projects", href: "/projects", icon: "projects" },
  { label: "Contact", href: "/#contact", icon: "contact" },
];

const icons = {
  home: (
    <svg width="30" height="30" viewBox="0 0 48 48">
      <defs>
        <radialGradient id="tileH" cx="50%" cy="42%" r="62%">
          <stop offset="0%" stopColor="#3a342b" />
          <stop offset="100%" stopColor="#15110c" />
        </radialGradient>
        <linearGradient id="roofH" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8a7a5c" />
          <stop offset="100%" stopColor="#4a3e2c" />
        </linearGradient>
        <linearGradient id="wallH" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#6a5d49" />
          <stop offset="100%" stopColor="#3a3024" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="7" fill="url(#tileH)" stroke="#000" strokeWidth="1.2" />
      <polygon points="13,40 13,23 24,14 35,23 35,40" fill="url(#wallH)" />
      <polygon points="10,24 24,13 38,24 24,20" fill="url(#roofH)" />
      <rect x="21" y="30" width="6" height="10" rx="1" fill="#d99a3c" opacity="0.85" />
      <rect x="2" y="2" width="44" height="44" rx="7" fill="none" stroke="#6b5f4a" strokeWidth="0.6" opacity="0.3" />
    </svg>
  ),
  experience: (
    <svg width="30" height="30" viewBox="0 0 48 48">
      <defs>
        <radialGradient id="tileX" cx="50%" cy="42%" r="62%">
          <stop offset="0%" stopColor="#3a342b" />
          <stop offset="100%" stopColor="#15110c" />
        </radialGradient>
        <linearGradient id="chestX" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7a5440" />
          <stop offset="100%" stopColor="#3d2819" />
        </linearGradient>
        <linearGradient id="lidX" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8a6248" />
          <stop offset="100%" stopColor="#523728" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="7" fill="url(#tileX)" stroke="#000" strokeWidth="1.2" />
      <path d="M11 20 q13 -7 26 0 v4 h-26 z" fill="url(#lidX)" />
      <rect x="11" y="23" width="26" height="15" rx="2" fill="url(#chestX)" />
      <rect x="10" y="20" width="28" height="4" rx="1" fill="#9a7a32" />
      <rect x="10" y="36" width="28" height="3" rx="1" fill="#9a7a32" />
      <rect x="21" y="25" width="6" height="9" rx="1" fill="#d9b15a" stroke="#3a2c10" strokeWidth="0.7" />
      <circle cx="24" cy="29" r="1.4" fill="#3a2c10" />
      <rect x="2" y="2" width="44" height="44" rx="7" fill="none" stroke="#6b5f4a" strokeWidth="0.6" opacity="0.3" />
    </svg>
  ),
  education: (
    <svg width="30" height="30" viewBox="0 0 48 48">
      <defs>
        <radialGradient id="tileE" cx="50%" cy="42%" r="62%">
          <stop offset="0%" stopColor="#3a342b" />
          <stop offset="100%" stopColor="#15110c" />
        </radialGradient>
        <linearGradient id="capE" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5a3f2c" />
          <stop offset="100%" stopColor="#2c1d14" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="7" fill="url(#tileE)" stroke="#000" strokeWidth="1.2" />
      <path d="M14 27 v7 q10 6 20 0 v-7" fill="url(#capE)" />
      <polygon points="24,13 43,21 24,29 5,21" fill="#6e4a36" />
      <polygon points="24,14 40,21 24,27 8,21" fill="#8a6248" />
      <polygon points="24,17 35,21 24,25 13,21" fill="#caa24a" opacity="0.5" />
      <line x1="43" y1="21" x2="43" y2="33" stroke="#d9b15a" strokeWidth="1.3" />
      <circle cx="43" cy="34" r="2.2" fill="#d99a3c" />
      <rect x="2" y="2" width="44" height="44" rx="7" fill="none" stroke="#6b5f4a" strokeWidth="0.6" opacity="0.3" />
    </svg>
  ),
  projects: (
    <svg width="30" height="30" viewBox="0 0 48 48">
      <defs>
        <radialGradient id="tileP" cx="50%" cy="42%" r="62%">
          <stop offset="0%" stopColor="#3a342b" />
          <stop offset="100%" stopColor="#15110c" />
        </radialGradient>
        <linearGradient id="bookP" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6e4a36" />
          <stop offset="100%" stopColor="#2c1d14" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="7" fill="url(#tileP)" stroke="#000" strokeWidth="1.2" />
      <rect x="12" y="9" width="5" height="30" fill="#d8c79e" opacity="0.85" />
      <rect x="15" y="9" width="21" height="30" rx="2" fill="url(#bookP)" />
      <rect x="15" y="9" width="5" height="30" fill="#7a5440" />
      <circle cx="28" cy="24" r="6.5" fill="none" stroke="#d9b15a" strokeWidth="1" />
      <polygon points="28,19 32,23 30,28 26,28 24,23" fill="none" stroke="#d9b15a" strokeWidth="0.9" />
      <circle cx="28" cy="24" r="1.5" fill="#f0b75a" />
      <rect x="2" y="2" width="44" height="44" rx="7" fill="none" stroke="#6b5f4a" strokeWidth="0.6" opacity="0.3" />
    </svg>
  ),
  contact: (
    <svg width="30" height="30" viewBox="0 0 48 48">
      <defs>
        <radialGradient id="tileC" cx="50%" cy="42%" r="62%">
          <stop offset="0%" stopColor="#3a342b" />
          <stop offset="100%" stopColor="#15110c" />
        </radialGradient>
        <linearGradient id="envC" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7a5440" />
          <stop offset="100%" stopColor="#33231a" />
        </linearGradient>
        <linearGradient id="flapC" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8a6248" />
          <stop offset="100%" stopColor="#4e3525" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="7" fill="url(#tileC)" stroke="#000" strokeWidth="1.2" />
      <rect x="8" y="13" width="32" height="23" rx="3" fill="url(#envC)" />
      <polygon points="8,14 24,27 40,14 40,16 24,29 8,16" fill="url(#flapC)" />
      <circle cx="24" cy="24" r="7.5" fill="#9a7a32" stroke="#3a2c10" strokeWidth="1.1" />
      <circle cx="22" cy="22" r="3" fill="#f0d68a" opacity="0.4" />
      <circle cx="24" cy="24" r="2" fill="#f0b75a" opacity="0.7" />
      <rect x="2" y="2" width="44" height="44" rx="7" fill="none" stroke="#6b5f4a" strokeWidth="0.6" opacity="0.3" />
    </svg>
  ),
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        {/* Logo / wordmark */}
        <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-bar" />
          <span className="brand-text">ABDUR&nbsp;SUJON</span>
        </Link>

        {/* Desktop nav links */}
        <div className="desktop-nav">
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href} className="nav-item">
              {icons[link.icon]}
              <span className="nav-label">{link.label.toUpperCase()}</span>
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
          className="mobile-toggle"
        >
          {menuOpen ? <X color="#d8c8a4" size={26} /> : <Menu color="#d8c8a4" size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="mobile-item"
              onClick={() => setMenuOpen(false)}
            >
              {icons[link.icon]}
              <span className="nav-label">{link.label.toUpperCase()}</span>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}