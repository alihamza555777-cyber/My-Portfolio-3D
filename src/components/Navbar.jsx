import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav id="navbar" className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#hero" className="navbar-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="/assets/hamzadev-logo.png" alt="HamzaDev Logo" style={{ width: '40px', height: '40px', borderRadius: '8px' }} />
          <span>HamzaDev</span>
        </a>

        <div
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`navbar-links${menuOpen ? ' open' : ''}`}>
          <a href="#about" onClick={handleLinkClick}>About</a>
          <a href="#projects" onClick={handleLinkClick}>Projects</a>
          <a href="#certificates" onClick={handleLinkClick}>Certificates</a>
          <a href="#contact" onClick={handleLinkClick}>Contact</a>
          <a href="#contact" className="nav-cta" onClick={handleLinkClick}>
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
}
