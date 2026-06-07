import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleMenu, navigateTo }) => {
  return (
    <>
      {/* Sidebar Container */}
      <div className={`sidebar-menu ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <button className="menu-close-btn" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li className="nav-item" onClick={(e) => { e.preventDefault(); navigateTo('home'); }}>
              <span className="nav-icon icon-home">🏠</span>
              <a href="#home" className="nav-link">home</a>
            </li>
            
            <li className="nav-item"onClick={(e) => { e.preventDefault(); navigateTo('artists'); }}>
              <span className="nav-icon icon-artists">👤</span>
              <a href="#artists"  className="nav-link">our artists</a>
            </li>
            
            <li className="nav-item"onClick={(e) => { e.preventDefault(); navigateTo('book'); }}>
              <span className="nav-icon icon-book">📅</span>
              <a href="#book"  className="nav-link">book now</a>
            </li>
            
            <li className="nav-item"onClick={(e) => { e.preventDefault(); navigateTo('contact'); }}>
              <span className="nav-icon icon-contact">✉️</span>
              <a href="#contact"  className="nav-link">contact</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Optional Overlay to darken main content when sidebar is open */}
      {isOpen && <div className="sidebar-overlay" onClick={toggleMenu}></div>}
    </>
  );
};

export default Sidebar;