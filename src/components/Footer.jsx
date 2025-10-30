import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">UNPOP.SHOP</h3>
            <p className="footer-subtitle">Premium homegrown and unbranded products</p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Contact Information</h4>
            <div className="contact-info">
              <a href="tel:+1234567890" className="contact-link">
                <span className="contact-icon">📞</span>
                <span>+91 9159198086</span>
              </a>
              <a href="mailto:info@unpop.shop" className="contact-link">
                <span className="contact-icon">✉️</span>
                <span>unpop.shop2025@gmail.com</span>
              </a>
              <a href="mailto:info@unpop.shop" className="contact-link">
                <span className="contact-icon">✉️</span>
                <span>partners@unpop.shop</span>
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-links">
              <a href="#products">Products</a>
              <a href="#brands">Brands</a>
              <a href="#about">About</a>
              <a href="#contactForm">Register</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 UNPOP.SHOP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;