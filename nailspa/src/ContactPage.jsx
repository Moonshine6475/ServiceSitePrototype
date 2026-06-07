import React from 'react';
import './ContactPage.css';
import logo from './assets/nailpolishicon.png';


const ContactPage = ({ toggleMenu, onHome }) => {
  return (
    <div className="mobile-container contact-page">
      <header className="app-header">
        <div className="logo-container" onClick={onHome} role="button" tabIndex={0}>
          <img src={logo} alt="NailSpa Logo" className="logo-image" />
        </div>
        <div className="name-logo">NailSpa</div>
        <div className="hamburger-menu" onClick={toggleMenu} role="button" tabIndex={0}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      <main className="contact-content">
        <h1 className="contact-title">Contact Us</h1>

        <section className="contact-map-section">
          <div className="map-frame">
            <iframe
              title="NailSpa location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.209427004272!2d-75.69298189999999!3d45.425279499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0501c732d409%3A0x356e49e081fd657f!2s50%20Rideau%20St%20%23237%2C%20Ottawa%2C%20ON%20K1N%209J7!5e0!3m2!1sen!2sca!4v1780857167331!5m2!1sen!2sca"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section className="hours-section">
          <h2>Hours of Operation</h2>
          <table className="hours-table">
            <tbody>
              <tr>
                <th>Day</th>
                <th>Hours</th>
              </tr>
              <tr>
                <td>Monday</td>
                <td>10:00 AM – 8:00 PM</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>10:00 AM – 8:00 PM</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>10:00 AM – 8:00 PM</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>10:00 AM – 8:00 PM</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>10:00 AM – 8:00 PM</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>9:00 AM – 8:00 PM</td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td>9:00 AM – 8:00 PM</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="contact-info-section">
          <h2>Contact Information</h2>
            <p><strong>Address</strong></p>
            <p>50 Rideau St, Ottawa, ON K1N 9J7</p>
            <p><strong>Phone</strong></p>
            <p>(123) 456-7890</p>
            <p><strong>Email</strong></p>
            <p>info@nailspa.com</p>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
