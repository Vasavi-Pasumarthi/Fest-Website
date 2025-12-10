import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Events from './components/Events';
import EventDetail from './components/EventDetail';
import Registration from './components/Registration';
import './App.css';

function App() {
  const basename = process.env.PUBLIC_URL || '';
  
  return (
    <Router basename={basename}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event/:eventId" element={<EventDetail />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

