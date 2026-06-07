import React, { useState } from 'react';
import './BookingFlow.css';
import './Gallery.css';
import blue from './assets/blue.jpg';
import flower from './assets/flower.webp';
import mini from './assets/mini.png';
import glitter from './assets/glitter.webp';
import ombre from './assets/ombre.webp';
import chrome from './assets/chrome.webp';
import gel from './assets/gel.webp';
import natural from './assets/nat.jpeg';
import nude from './assets/nude.webp';
import soft from './assets/soft.webp';
import wellness from './assets/welln.png';
import oil from './assets/oil.jpg';
import summer from './assets/summer.webp';
import ballet from './assets/ballet.webp';
import cute from './assets/cute.webp';
import logo from './assets/nailpolishicon.png';
  
const GalleryPage = ({ toggleMenu, artist, onHome }) => {
  const artistGalleries = {
    Ava: [
      { id: 1, title: 'Blue Gradient', image: blue },
      { id: 2, title: 'Floral Design', image: flower },
      { id: 3, title: 'Minimalist', image: mini },
      { id: 4, title: 'Glitter', image: glitter },
      { id: 5, title: 'Ombré', image: ombre },
    ],
    Mia: [
      { id: 1, title: 'Gel Extensions', image: gel },
      { id: 2, title: 'Natural Finish', image: natural },
      { id: 3, title: 'Chrome Nails', image: chrome },
      { id: 4, title: 'Nude Tones', image: nude },
      { id: 5, title: 'Soft Gels', image: soft },
    ],
    Noor: [
      { id: 1, title: 'Wellness Focus', image: wellness },
      { id: 2, title: 'Nail Health' , image: oil },
      { id: 3, title: 'summer', image: summer },
      { id: 4, title: 'ballet', image: ballet },
      { id: 5, title: 'cute', image: cute },
    ],
  };

  const allArtists = [
    { name: "Ava", displayName: "Ava's", gallery: artistGalleries.Ava },
    { name: "Mia", displayName: "Mia's", gallery: artistGalleries.Mia },
    { name: "Noor", displayName: "Noor's", gallery: artistGalleries.Noor },
  ];

  const [currentArtistIndex, setCurrentArtistIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const isAllArtistsMode = !artist;
  const displayArtist = isAllArtistsMode ? allArtists[currentArtistIndex] : allArtists.find(a => a.name === artist);
  const currentGallery = displayArtist?.gallery || [];

  const handlePrevArtist = () => {
    setCurrentArtistIndex((prev) => (prev === 0 ? allArtists.length - 1 : prev - 1));
    setCurrentImageIndex(0);
  };

  const handleNextArtist = () => {
    setCurrentArtistIndex((prev) => (prev === allArtists.length - 1 ? 0 : prev + 1));
    setCurrentImageIndex(0);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? currentGallery.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === currentGallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="mobile-container booking-flow">
      {/* Header */}
      <header className="app-header">
        <div className="logo-container" onClick={onHome}>
          <img src={logo} alt="NailSpa Logo" className="logo-image" />
        </div>
        <div className="name-logo">NailSpa</div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      {/* Main Carousel */}
      <main className="gallery-container">
        {isAllArtistsMode && (
          <div className="artist-carousel-header">
            <button className="carousel-nav-btn prev" onClick={handlePrevArtist}>
              ←
            </button>
            <h2 className="current-artist-name">{displayArtist?.displayName} Gallery</h2>
            <button className="carousel-nav-btn next" onClick={handleNextArtist}>
              →
            </button>
          </div>
        )}

        {!isAllArtistsMode && (
          <h2 className="gallery-title">{displayArtist?.displayName} Gallery</h2>
        )}

        {/* Image Carousel */}
        <div className="image-carousel">
          <button className="carousel-nav-btn large prev" onClick={handlePrevImage}>
            ‹
          </button>

          <div className="carousel-image-container">
            <div className="carousel-image-placeholder">
              {currentGallery[currentImageIndex]?.image ? (
                <img src={currentGallery[currentImageIndex].image} alt={currentGallery[currentImageIndex]?.title} className="carousel-image" />
              ) : (
                <span>💅</span>
              )}
            </div>
            {currentGallery.length > 0 && (
              <p className="image-title">{currentGallery[currentImageIndex]?.title}</p>
            )}
          </div>

          <button className="carousel-nav-btn large next" onClick={handleNextImage}>
            ›
          </button>
        </div>

        {/* Image Counter */}
        <div className="carousel-counter">
          {currentImageIndex + 1} / {currentGallery.length}
        </div>

        {/* Dots Indicator */}
        <div className="carousel-dots">
          {currentGallery.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="contacts-footer-banner">
        <p>Contact us: 123-456-7890 | Email: info@nailspa.com</p>
      </footer>
    </div>
  );
};

export default GalleryPage;
