import React from 'react';
import './BookingFlow.css';
import './Artists.css';
import avaImg from './assets/person1.jpg';
import miaImg from './assets/person2.webp';
import noorImg from './assets/person3.webp';
import logo from './assets/nailpolishicon.png';


const ArtistsPage = ({ toggleMenu, onNext }) => {
  const artists = [
    {
      id: 'ava',
      name: 'Ava',
      about: "Hey, I'm Ava. I've been creating stunning nail art for over 8 years. I specialize in intricate designs and color blending.",
      image: avaImg
    },
    {
      id: 'mia',
      name: 'Mia',
      about: 'Mia brings creativity and precision to every service. Her specialty is gel extensions and natural finishes.',
      image: miaImg
    },
    {
      id: 'noor',
      name: 'Noor',
      about: 'Noor is passionate about nail health and themed 3D nail art. She offers personalized consultations for every client.',
      image: noorImg
    },
  ];

  return (
    <div className="mobile-container booking-flow">
      {/* Header */}
      <header className="app-header">
        <div className="logo-container" onClick={() => onNext('home')}>
          <div className="logo-icon">
            <img src={logo} alt="NailSpa Logo" />
          </div>
        </div>
        <div className="name-logo">NailSpa</div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="booking-hero">
        <div className="section-badge">Artists</div>
      </section>

      {/* Artist Cards Grid */}
      <main className="artists-container">
        {artists.map((artist) => (
          <div key={artist.id} className="artist-card">
            <div className="artist-image-placeholder">
              {artist.image ? (
                <img src={artist.image} alt={artist.name} className="artist-image" />
              ) : (
                <span>💅</span>
              )}
            </div>
            <h2 className="artist-name">{artist.name}</h2>
            <p className="artist-about">{artist.about}</p>
            <button
              className="artist-gallery-btn"
              onClick={() => onNext('gallery', { artist: artist.name })}
            >
              view gallery
            </button>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="contacts-footer-banner">
        <p>Contact us: 123-456-7890 | Email: info@nailspa.com</p>
        <p>Follow us on social media! @nailspa</p>
        <p>© 2026: Designed by Emilee Wang.</p>
      </footer>
    </div>
  );
};

export default ArtistsPage;
