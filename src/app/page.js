"use client";

import React, { useRef, useEffect } from 'react';
import Header from '../components/header'; 
import AboutUs from '../components/AboutUs';
import CalendarEvent from '../components/Calendar_Event'; // Note the underscore in import
import AboutMe from '../components/AboutMe';
import Footer from '../components/footer';
import '../components/index.css'; 
export default function Home() {
  const aboutUsRef = useRef(null);
  const calendarRef = useRef(null);
  const aboutMeRef = useRef(null);

  useEffect(() => {
    // Add a home section identifier to make scrollIntoView work
    const homeSection = document.getElementById('home-section');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Function to scroll to a section
  const scrollToSection = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App" id="home-section">
      <Header 
        scrollToAboutUs={() => scrollToSection(aboutUsRef)} 
        scrollToCalendar={() => scrollToSection(calendarRef)}
        scrollToAboutMe={() => scrollToSection(aboutMeRef)}
      />
      <div ref={aboutUsRef}>
        <AboutUs />
      </div>
      <div ref={calendarRef}>
        <CalendarEvent />
      </div>
      <div ref={aboutMeRef}>
        <AboutMe />
      </div>
      <Footer />
    </div>
  );
}