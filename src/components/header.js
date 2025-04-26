"use client";


import React, { useState } from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';
import '../components/header.css';
const Hero = React.forwardRef(({ scrollToAboutUs }, ref) => {
  const [showNav, setShowNav] = useState(false);
  
  const menuItems = [
    { name: 'Home', path: 'home' },
    { name: 'Chi Siamo', path: 'AboutUs' },
    { name: 'Chi Sono', path: 'AboutMe' },
    { name: 'Eventi', path: 'calendarEvent'},
    { name: 'Contatti', path: 'contatti' }
  ];
  
  return (
    <div className="hero" style={{ backgroundImage: `url(/img/foto_header.jpg)`}}>
      <div className="navbar-container">
        <nav className="navbar">
          <div className="navbar-top">
            <Image 
              src="/img/logo_sito.png" 
              width={150}
              height={50}
              style={{ height: 'auto' }}
              alt="Logo" 
            />
            
            <button
              className="navbar-toggler"
              onClick={() => setShowNav(!showNav)}
              aria-label={showNav ? 'Chiudi menu' : 'Apri menu'}
            >
              {showNav ? '✕' : '☰'}
            </button>
          </div>
        </nav>

        <div className={`menu-dropdown ${showNav ? 'open' : ''}`}>
          <ul className="navbar-nav">
            {menuItems.map((item, index) => (
              <li key={index} className="navbar-item">
                <Link 
                  to={item.path} 
                  className="navbar-link" 
                  onClick={() => setShowNav(false)}
                  smooth={true}
                  duration={500}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hero-mask" id="home">
        <div className="hero-content">
          <h1>CORSI MAXIENDURO</h1>
          <button className="hero-btn" onClick={scrollToAboutUs}>
            PER SAPERNE DI PIÚ
          </button>
        </div>
      </div>
    </div>
  );
});

// Add display name
Hero.displayName = 'Hero';

export default Hero;