import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
const logo = '/assets/logo-img.png';
const banner = '/assets/banner.jpg';

const Home = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleExploreClick = () => {
    navigate('/events');
  };

  return (
    <div className="home-container">
      <div className="animated-background"></div>
      <div className={`home-content ${isVisible ? 'fade-in' : ''}`}>
        <div className="logo-container">
          <img src={logo} alt="SRK Institute of Technology Logo" className="logo" />
        </div>
        <div className="banner-container">
          <img src={banner} alt="Department of CSE Banner" className="banner" />
        </div>
        <div className="title-section">
          <h1 className="main-title">
            <span className="title-letter">A</span>
            <span className="title-letter">U</span>
            <span className="title-letter">R</span>
            <span className="title-letter">A</span>
            <span className="title-year">'25</span>
          </h1>
          <p className="subtitle">Technical Fest 2025</p>
        </div>
        <button className="explore-btn" onClick={handleExploreClick}>
          <span>Explore Events</span>
          <svg className="arrow-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <footer className="footer">
        <p className="footer-text">
          For any queries Contact: <a href="tel:9533678910">9533678910</a> or 
          <a href="mailto:srkcsefest@gmail.com"> srkcsefest@gmail.com</a>
        </p>
        <p className="copyright">&copy; 2025 SRK Institute of Technology</p>
      </footer>
    </div>
  );
};

export default Home;

