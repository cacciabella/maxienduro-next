
"use client";

import React, { useState } from 'react';
import { Calendar, ChevronRight, ChevronLeft, Info, MapPin, Users, Clock } from 'lucide-react';
import '../components/Calendar.css';
const CalendarioCorsi = React.forwardRef((props, ref) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const itemsPerPage = 5;

  const courses = [
    {
      id: 1,
      date: "17 Maggio '25",
      time: "09:00 - 18:00",
      type: "Corso Base",
      instructor: "Giuseppe Gallino",
      location: "Masserano (BI)",
      people: "Max 6 Persone",
      info: "per chi vuole partire da zero nella guida in fuoristrada con esercizi tecnici mirati."
    },
    {
      id: 2,
      date: "18 Maggio '25",
      time: "09:00 - 18:00",
      type: "Corso Avanzato",
      instructor: "Giuseppe Gallino",
      location: "Masserano (BI)",
      people: "Max 6 Persone",
      info: "per chi ha già una minima esperienza di guida in fuoristrada e voglia perfezionare la tecnica."
    },
    {
      id: 3,
      date: "24 Maggio '25",
      time: "09:00 - 18:00",
      type: "Corso Base",
      instructor: "Giuseppe Gallino",
      location: "Masserano (BI)",
      people: "Max 6 Persone",
      info: "per chi vuole partire da zero nella guida in fuoristrada con esercizi tecnici mirati."
    },
    {
      id: 4,
      date: "25 Maggio '25",
      time: "09:00 - 18:00",
      type: "Corso Avanzato",
      instructor: "Giuseppe Gallino",
      location: "Masserano (BI)",
      people: "Max 6 Persone",
      info: "per chi ha già una minima esperienza di guida in fuoristrada e voglia perfezionare la tecnica."
    },
    {
      id: 5,
      date: "14 Giugno '25",
      time: "09:00 - 18:00",
      type: "Corso Base",
      instructor: "Giuseppe Gallino",
      location: "Masserano (BI)",
      people: "Max 6 Persone",
      info: "per chi vuole partire da zero nella guida in fuoristrada con esercizi tecnici mirati."
    },
    {
      id: 6,
      date: "15 Giugno '25",
      time: "09:00 - 18:00",
      type: "Corso Avanzato",
      instructor: "Giuseppe Gallino",
      location: "Masserano (BI)",
      people: "Max 6 Persone",
      info: "per chi ha già una minima esperienza di guida in fuoristrada e voglia perfezionare la tecnica."
    },
    {
      id: 7,
      date: "12 Luglio '25",
      time: "09:00 - 18:00",
      type: "Corso Base",
      instructor: "Giuseppe Gallino",
      location: "Masserano (BI)",
      people: "Max 6 Persone",
      info: "per chi vuole partire da zero nella guida in fuoristrada con esercizi tecnici mirati."
    },
    {
      id: 8,
      date: "13 Luglio '25",
      time: "09:00 - 18:00",
      type: "Corso Avanzato",
      instructor: "Giuseppe Gallino",
      location: "Masserano (BI)",
      people: "Max 6 Persone",
      info: "per chi ha già una minima esperienza di guida in fuoristrada e voglia perfezionare la tecnica."
    },
    {
      id: 9,
      date: "19 Luglio '25",
      time: "09:00 - 18:00",
      type: "Corso Base",
      instructor: "Giuseppe Gallino",
      location: "Masserano (BI)",
      people: "Max 6 Persone",
      info: "per chi vuole partire da zero nella guida in fuoristrada con esercizi tecnici mirati."
    },
    {
      id: 10,
      date: "20 Luglio '25",
      time: "09:00 - 18:00",
      type: "Corso Avanzato",
      instructor: "Giuseppe Gallino",
      location: "Masserano (BI)",
      people: "Max 6 Persone",
      info: "per chi ha già una minima esperienza di guida in fuoristrada e voglia perfezionare la tecnica."
    }
  ];
  
  // Calcola il numero totale di pagine
  const totalPages = Math.ceil(courses.length / itemsPerPage);
  
  // Ottieni i corsi per la pagina corrente
  const getCurrentPageCourses = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return courses.slice(startIndex, startIndex + itemsPerPage);
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };
  
  const toggleExpand = (id) => {
    if (expandedCourse === id) {
      setExpandedCourse(null);
    } else {
      setExpandedCourse(id);
    }
  };
  
  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };
  
  const handleEventAction = () => {
    window.open("https://www.messenger.com/t/100002404468546", "_blank");
  };

  return (
    <div className="calendar-container" id="calendarEvent" ref={ref}>
      <div className="calendar-header">
        <div className="header-title">
          <Calendar className="calendar-icon" size={20} />
          <h2>Calendario Corsi</h2>
        </div>
        <Info 
          className="info-icon" 
          size={18}
          onClick={toggleInfo}
        />
      </div>
      
      {showInfo && (
        <div className="info-banner">
          <h3>Importante</h3>
          <p>
            È richiesta la tessera AICS MOTOALLENA FUORISTADA che può essere richiesta anche al momento dell&apos;iscrizione
          </p>
        </div>
      )}
      
      <div className="courses-container">
        <div className="courses-list">
          {getCurrentPageCourses().map(course => (
            <div key={course.id} className="course-item">
              <div 
                className="course-header"
                onClick={() => toggleExpand(course.id)}
              >
                <div className="course-main-info">
                  <div className="course-dot"></div>
                  <div>
                    <div className="course-date-time">
                      <span className="course-date">{course.date}</span>
                      <span className="course-time">{course.time}</span>
                    </div>
                    <div className="course-type-container">
                      <span className="course-type">{course.type}</span>
                      {course.type === "Corso Base" ? 
                        <span className="course-badge course-badge-base">Base</span> :
                        <span className="course-badge course-badge-advanced">Avanzato</span>
                      }
                    </div>
                  </div>
                </div>
                <ChevronRight 
                  className={`chevron-icon ${expandedCourse === course.id ? 'chevron-expanded' : ''}`} 
                  size={18} 
                />
              </div>
              
              {expandedCourse === course.id && (
                <div className="course-details">
                  <div className="detail-row">
                    <span className="detail-label">Istruttore:</span>
                    <span>{course.instructor}</span>
                  </div>
                  <div className="detail-row">
                    <MapPin size={16} className="detail-icon" />
                    <span className="detail-label">Luogo:</span>
                    <span>{course.location}</span>
                  </div>
                  <div className="detail-row">
                    <Users size={16} className="detail-icon" />
                    <span className="detail-label">Persone:</span>
                    <span>{course.people}</span>
                  </div>
                  <div className="detail-row">
                    <Clock size={16} className="detail-icon" /> 
                    <span className="detail-label">Orario:</span>
                    <span>{course.time}</span>
                  </div>
                  <div className="detail-row info-row">
                    <span className="detail-label">Info:</span>
                    <span className="course-info-text">{course.info}</span>
                  </div>
                  <button 
                    onClick={handleEventAction}
                    className="details-button"
                  >
                    Dettagli
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="calendar-footer">
        <button 
          onClick={handlePrevPage}
          className="pagination-button"
          disabled={currentPage === 1}
        >
          <ChevronLeft size={16} className="pagination-icon" />
          Precedente
        </button>
        <span className="pagination-info">Pagina {currentPage} di {totalPages}</span>
        <button 
          onClick={handleNextPage}
          className="pagination-button"
          disabled={currentPage === totalPages}
        >
          Successiva
          <ChevronRight size={16} className="pagination-icon" />
        </button>
      </div>
    </div>
  );
});

// Add display name
CalendarioCorsi.displayName = 'CalendarioCorsi';

export default CalendarioCorsi;