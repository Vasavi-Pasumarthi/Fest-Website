import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css';

const Registration = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="registration-container">
      <div className="registration-background"></div>
      <div className={`registration-content ${isVisible ? 'fade-in' : ''}`}>
        <div className="registration-header">
          <h1 className="registration-title">📝 Registration</h1>
          <p className="registration-subtitle">Fill out the form below to register for events</p>
        </div>
        <div className="form-container">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdz2sNMaSbqoVD4tvQFyPenEAlgKZJJ_evuHi_XzUJseeJApQ/viewform?embedded=true"
            width="100%"
            height="1527"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Registration Form"
            className="registration-iframe"
          >
            Loading…
          </iframe>
        </div>
        <div className="registration-actions">
          <button onClick={() => navigate('/events')} className="action-btn back-btn">
            ← Back to Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;

