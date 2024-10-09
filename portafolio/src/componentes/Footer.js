import React from 'react';
import '../stylesheets/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Mi Nombre</h3>
        <p>Información de contacto: info@miemail.com</p>
        <ul className="social-links">
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
