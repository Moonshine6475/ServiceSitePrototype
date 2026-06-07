import React from 'react';
import './BookingFlow.css';
import logo from './assets/nailpolishicon.png';

const ServicesPage = ({ toggleMenu, onNext }) => {
  const services = ['Manicure', 'Pedicure', 'Extensions', 'Nail Art'];

  return (
    <div className="mobile-container booking-flow">
      {/* Header */}
      <header className="app-header">
        <div className="logo-container" onClick={() => onNext('home')}>
          <img src={logo} alt="NailSpa Logo" className="logo-image" />
        </div>
        <div className= "name-logo">NailSpa</div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      {/* Hero Banner with Background */}
      <section className="booking-hero">
        <div className="hero-overlay-text">
        </div>
        <div className="section-badge">Services</div>
      </section>

      {/* Service Selection List */}
      <main className="services-list-container">
        {services.map((service, index) => (
          <button 
            key={index} 
            className="service-selection-btn"
            onClick={() => onNext('datetime', { service })} // Transitions to next screen
          >
            {service}
          </button>
        ))}
      </main>
      <footer className="contacts-footer-banner">
        <p>Contact us: 123-456-7890 | Email: info@nailspa.com</p>
        <p>Follow us on social media! @nailspa</p>
        <p>© 2026: Designed by Emilee Wang.</p>
      </footer>
    </div>
  );
};

export default ServicesPage;