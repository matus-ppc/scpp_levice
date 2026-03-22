import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Eye, Type } from 'lucide-react';
import { motion } from 'framer-motion';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleHighContrast = () => {
    const isHighContrast = document.documentElement.getAttribute('data-high-contrast') === 'true';
    document.documentElement.setAttribute('data-high-contrast', !isHighContrast);
  };

  const toggleLargeText = () => {
    const isLargeText = document.documentElement.getAttribute('data-large-text') === 'true';
    document.documentElement.setAttribute('data-large-text', !isLargeText);
  };

  return (
    <header className="header">
      <div className="container header-content">
        <Link 
          to="/" 
          className="logo-wrapper"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsMenuOpen(false);
          }}
        >
          <motion.img 
            src="https://www.poradnalevice.sk/wp-content/uploads/2025/03/logo-poradna.png" 
            alt="Logo Poradňa Levice" 
            className="logo-img" 
            whileHover={{ 
              rotate: [0, -10, 10, -10, 0],
              transition: { duration: 0.5 } 
            }}
          />
          <div className="logo-text-group">
            <span className="logo-title">Poradňa Levice</span>
            <span className="logo-subtitle">Súkromné centrum poradenstva a prevencie</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/o-nas" className="nav-link" onClick={() => setIsMenuOpen(false)}>O nás</Link>
          <Link to="/nas-tim" className="nav-link" onClick={() => setIsMenuOpen(false)}>Náš tím</Link>
          <Link to="/co-ponukame" className="nav-link" onClick={() => setIsMenuOpen(false)}>Čo ponúkame</Link>
          <Link to="/pre-skoly" className="nav-link" onClick={() => setIsMenuOpen(false)}>Pre školy</Link>
          
          <div className="nav-actions">
            <button className="icon-btn" onClick={toggleHighContrast} title="Zvýšiť kontrast" aria-label="Zvýšiť kontrast">
              <Eye size={20} />
            </button>
            <button className="icon-btn" onClick={toggleLargeText} title="Zväčšiť písmo" aria-label="Zväčšiť písmo">
              <Type size={20} />
            </button>
            <a href="#kontakt" className="btn btn-pink btn-sm" onClick={() => setIsMenuOpen(false)}>
              Kontakt
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
}

export default Header;
