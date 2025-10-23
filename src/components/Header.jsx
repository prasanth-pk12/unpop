import { useState } from 'react'
import './Header.css'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId) || document.querySelector(`.${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1 className="logo-text">UNPOP.SHOP</h1>
          <span className="logo-tagline">Premium Products</span>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        
        <nav className={`nav-buttons ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <button onClick={() => scrollToSection('about')} className="nav-btn">About</button>
          <button onClick={() => scrollToSection('products')} className="nav-btn">Products</button>
          <button onClick={() => scrollToSection('contactForm')} className="nav-btn register-nav">Register</button>
        </nav>
      </div>
    </header>
  )
}

export default Header