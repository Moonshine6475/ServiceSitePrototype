import React, { useState } from 'react';
import './BookingFlow.css';

const DatetimePage = ({ toggleMenu, onNext }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedArtist, setSelectedArtist] = useState('');

  const dates = ['Wed 12', 'Thu 13', 'Fri 14', 'Sat 15', 'Sun 16', 'Mon 17', 'Tue 18'];
  const times = ['10:00 AM', '11:30 AM', '1:00 PM', '2:30 PM', '4:00 PM', '5:30 PM', '7:00 PM'];
  const artists = ['Ava', 'Mia', 'Noor'];

  return (
    <div className="mobile-container booking-flow">
      {/* Header */}
      <header className="app-header">
        <div className="logo-container"><div className="logo-icon"></div></div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      {/* Title Badge */}
      <section className="center-badge-container">
        <div className="section-badge">Date</div>
      </section>

      {/* Two Column Split Layout */}
      <main className="split-columns-container">
        {/* Left Column: Dates */}
        <div className="split-column left-peach-col">
          <div className="radio-group">
            {dates.map((date) => (
              <label key={date} className={`radio-card ${selectedDate === date ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="selectedDate"
                  value={date}
                  checked={selectedDate === date}
                  onChange={() => setSelectedDate(date)}
                />
                <span>{date}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Right Column: Artist / Slots */}
        <div className="split-column right-blue-col">
          <div className="radio-group">
            {times.map((time) => (
              <label key={time} className={`radio-card ${selectedTime === time ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="selectedTime"
                  value={time}
                  checked={selectedTime === time}
                  onChange={() => setSelectedTime(time)}
                />
                <span>{time}</span>
              </label>
            ))}
          </div>
        </div>
      </main>

      <section className="artist-selection-section">
        <h3>Select Artist</h3>
        <div className="artist-selection-grid">
          {artists.map((artist) => (
            <label key={artist} className={`radio-card ${selectedArtist === artist ? 'selected' : ''}`}>
              <input
                type="radio"
                name="selectedArtist"
                value={artist}
                checked={selectedArtist === artist}
                onChange={() => setSelectedArtist(artist)}
              />
              <span>{artist}</span>
            </label>
          ))}
        </div>
      </section>

      <footer className="footer-action-container">
        <button
          className="flow-back-btn"
          onClick={() => onNext('book')}
        >
          back
        </button>
        <button
          className="flow-next-btn"
          disabled={!selectedDate || !selectedTime || !selectedArtist}
          onClick={() => onNext('thankyou', { date: selectedDate, time: selectedTime, artist: selectedArtist })}
        >
          next
        </button>
      </footer>
    </div>
  );
};

export default DatetimePage;