import React from 'react';
import './BookingFlow.css';
import nailsalonImg from './assets/nailsalon.jpg';
import logo from './assets/nailpolishicon.png';

const ThankYouPage = ({ onHome, service, date, time, artist, toggleMenu }) => {
  return (
    <div className="mobile-container booking-flow thank-you-bg">
      {/* Header */}
      <header className="app-header">
        <div className="logo-container" onClick={() => onHome()}>
          <div className="logo-icon">
            <img src={logo} alt="NailSpa Logo" />
          </div>
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      {/* Main Content Card */}
      <main className="thank-you-container">
        <h1 className="thank-you-title">Thank you for booking with us!</h1>
        <div className="thank-you-summary">
            <p> We hope you'll enjoy your {service || 'Not selected'} service!</p>
            <p>Your appointment is scheduled for {date || 'N/A'} at {time || 'N/A'} with {artist || 'N/A'}.</p>
        </div>

        <button className="home-badge-btn" onClick={onHome}>
          home
        </button>

        {/* Square Picture Frame */}
        <div className="square-picture-frame">
          <img src={nailsalonImg} alt="Thank You" className="thank-you-image" />
        </div>
      </main>

      {/* Contacts Banner Footer */}
      <footer className="contacts-footer-banner">
        <p>Contact us: 123-456-7890 | Email: info@nailspa.com</p>
        <p>Follow us on social media! @nailspa</p>
        <p>© 2026: Designed by Emilee Wang.</p>
      </footer>
    </div>
  );
};

export default ThankYouPage;