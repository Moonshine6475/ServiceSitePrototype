import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/nailpic1.webp'
import './App.css'
import Sidebar from './Sidebar.jsx'
import ServicesPage from './ServicePage.jsx';
import DatetimePage from './DateTime.jsx';
import ThankYouPage from './ThankYou.jsx';
import ArtistsPage from './Artists.jsx';
import GalleryPage from './Gallery.jsx';
import ContactPage from './ContactPage.jsx';
import logo from './assets/nailpolishicon.png';

const MainPage = ({ toggleMenu, navigateTo }) => {
  return (
    <div className="mobile-container">
      {/* Header Section */}
      <header className="app-header">
        <div className="logo-container">
          <div className="logo-icon" onClick={() => navigateTo('home')}></div>
            <img src={logo} alt="NailSpa Logo" className="logo-image" onClick={() => navigateTo('home')} />
        </div>
        <div className="hamburger-menu" onClick={toggleMenu} role="button" tabIndex={0}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      {/* Hero / Banner Section */}
      <section className="hero-section">
        <div className="location-badge">50 Rideau St, Ottawa</div>
        <img src={heroImg} alt="Hero Image" className="image-placeholder" />
      </section>

      {/* Content Section */}
      <main className="content-section">
        <h2 className="about-title">NailSpa</h2>
        <div className="about-content">
          <p className = "about-text">Welcome to our nail salon! We're committed to providing high quality nail care and exceptional service.</p>
        </div>
        {/* Call to Action */}
        <button className="book-now-btn" onClick={(e) => { e.preventDefault(); navigateTo('book'); }}>Book Now</button>
      </main>
    </div>
  );
};




function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home');
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedArtist, setSelectedArtist] = useState('');
  const [galleryArtist, setGalleryArtist] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateTo = (viewName, payload = {}) => {
    if (viewName === 'datetime' && payload.service) {
      setSelectedService(payload.service);
    }

    if (viewName === 'thankyou') {
      if (payload.date) {
        setSelectedDate(payload.date);
      }
      if (payload.time) {
        setSelectedTime(payload.time);
      }
      if (payload.artist) {
        setSelectedArtist(payload.artist);
      }
    }

    if (viewName === 'gallery' && payload.artist) {
      setGalleryArtist(payload.artist);
    }

    setCurrentView(viewName);
    setIsMenuOpen(false); // Closes the sidebar automatically after clicking
  };

  return (
    <div className="app-layout">
      <Sidebar isOpen={isMenuOpen} toggleMenu={toggleMenu} navigateTo={navigateTo} />
      {currentView === 'home' && <MainPage toggleMenu={toggleMenu} navigateTo={navigateTo} />}
      {currentView === 'artists' && <ArtistsPage toggleMenu={toggleMenu} onNext={navigateTo} />}
      {currentView === 'book' && <ServicesPage toggleMenu={toggleMenu} onNext={navigateTo} />}
      {currentView === 'datetime' && <DatetimePage toggleMenu={toggleMenu} onNext={navigateTo} />}
      {currentView === 'thankyou' && (
        <ThankYouPage
          toggleMenu={toggleMenu}
          onHome={() => navigateTo('home')}
          service={selectedService}
          date={selectedDate}
          time={selectedTime}
          artist={selectedArtist}
        />
      )}
      {currentView === 'gallery' && (
        <GalleryPage
          toggleMenu={toggleMenu}
          artist={galleryArtist}
          onHome={() => navigateTo('home')}
        />
      )}
      {currentView === 'contact' && (
        <ContactPage toggleMenu={toggleMenu} onHome={() => navigateTo('home')} />
      )}
    </div>
);}

export default App
