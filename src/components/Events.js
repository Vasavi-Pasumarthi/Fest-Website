import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Events.css';

const events = [
  {
    id: 'code-clash',
    name: 'Code Clash',
    emoji: '⚡',
    description: 'Where Logic Meets Speed!',
    category: 'Coding',
    color: '#ff6b6b'
  },
  {
    id: 'vision-speak',
    name: 'Vision Speak',
    emoji: '🎤',
    description: 'Present Your Ideas, Inspire Minds!',
    category: 'Paper Presentation',
    color: '#4ecdc4'
  },
  {
    id: 'pixel-pitch',
    name: 'Pixel Pitch',
    emoji: '🎨',
    description: 'Design, Express, and Impress!',
    category: 'Poster Presentation',
    color: '#95e1d3'
  },
  {
    id: 'brain-blitz',
    name: 'Brain Blitz',
    emoji: '🧠',
    description: 'A Battle of Knowledge and Wit!',
    category: 'Quiz',
    color: '#f38181'
  },
  {
    id: '24-frames',
    name: '24-Frames',
    emoji: '🎬',
    description: 'Create, Edit, and Showcase Your Creativity!',
    category: 'Reels',
    color: '#aa96da'
  },
  {
    id: 'webverse',
    name: 'Webverse',
    emoji: '💻',
    description: 'Explore, Design, and Redefine the Internet!',
    category: 'Web Designing',
    color: '#fcbad3'
  }
];

const Events = () => {
  const navigate = useNavigate();
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      events.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards(prev => [...prev, index]);
        }, index * 100);
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleEventClick = (eventId) => {
    navigate(`/event/${eventId}`);
  };

  return (
    <div className="events-container">
      <div className="events-header">
        <h1 className="events-title">
          <span className="title-icon">🎉</span>
          Events
          <span className="title-icon">🎉</span>
        </h1>
        <p className="events-subtitle">Click on any event to learn more</p>
      </div>
      <div className="events-grid">
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`event-card ${visibleCards.includes(index) ? 'visible' : ''}`}
            onClick={() => handleEventClick(event.id)}
            style={{ '--card-color': event.color }}
          >
            <div className="card-glow"></div>
            <div className="card-content">
              <div className="event-emoji">{event.emoji}</div>
              <h2 className="event-name">{event.name}</h2>
              <p className="event-description">{event.description}</p>
              <span className="event-category">{event.category}</span>
            </div>
            <div className="card-hover-effect"></div>
          </div>
        ))}
      </div>
      <div className="back-home">
        <button onClick={() => navigate('/')} className="back-btn">
          ← Back to Home
        </button>
      </div>
    </div>
  );
};

export default Events;

