import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EventDetail.css';

const eventData = {
  'code-clash': {
    name: 'Code Clash',
    emoji: '⚡',
    description: 'Where Logic Meets Speed! Test your coding skills and challenge your logical thinking.',
    rules: [
      { id: 1, text: 'The contest is open to anyone with a knack for programming.' },
      { id: 2, text: 'It is a team contest with a maximum of two members from the same institution.' },
      { id: 3, text: 'Teams will be ranked based on the speed of completion.' },
      { id: 4, text: 'There will be three levels in the contest.' },
      { id: 5, text: 'Level 1 (C, Python) – Guess the Output. You\'ll get a small snippet code—can you predict what the output will be?' },
      { id: 6, text: 'Level 2 (C, Python) – Debugging Challenge. Fix the errors in a given code and make it run correctly!' },
      { id: 7, text: 'Level 3 (C, Python, Java) – Reverse Coding. You\'ll see an output—your task is to write the code that generates it!' },
      { id: 8, text: 'Participants must progress through each level to qualify for the next.' }
    ],
    facultyCoordinators: [
      { name: 'Mrs.G.M.Padmaja', phone: '+91 9490013299' }
    ],
    studentCoordinators: [
      { name: 'Gowri Sankar', phone: '+91 7997142263' },
      { name: 'Mohith Bhaskar', phone: '+91 9000795678' },
      { name: 'Jagadeeswari', phone: '+91 6305414789' },
      { name: 'Supraja', phone: '+91 7093036477' },
      { name: 'Thanushma', phone: '+91 7989828717' }
    ],
    color: '#ff6b6b'
  },
  'vision-speak': {
    name: 'Vision Speak',
    emoji: '🎤',
    description: 'Present Your Ideas, Inspire Minds! Showcase your research and knowledge.',
    rules: [
      { id: 1, text: 'Each team can have a maximum of 2 members.' },
      { id: 2, text: 'The presentation should not exceed 15 minutes.' },
      { id: 3, text: 'Topic must be a technical innovative idea or research in technical education and extension.' },
      { id: 4, text: 'Maximum PowerPoint presentation slides should not exceed 25.' },
      { id: 5, text: 'Paper should contain 70% graphic content and 30% text.' },
      { id: 6, text: 'Jury and audience may ask questions during the presentation.' },
      { id: 7, text: 'Presentation slides should be carried on an external device.' },
      { id: 8, text: 'The jury\'s decision regarding winners and prizes is final and binding.' }
    ],
    facultyCoordinators: [
      { name: 'Mrs. Ch. Pavani', phone: '+91 9177264782' }
    ],
    studentCoordinators: [
      { name: 'Chaitanya', phone: '+91 9912948489' },
      { name: 'Tarak', phone: '+91 7989610898' },
      { name: 'Ayesha', phone: '+91 8919859558' },
      { name: 'Aparna', phone: '+91 9550447445' }
    ],
    color: '#4ecdc4'
  },
  'pixel-pitch': {
    name: 'Pixel Pitch',
    emoji: '🎨',
    description: 'Design, Express, and Impress! Unleash your creativity through stunning posters.',
    objective: 'The objective of the poster-making competition is to bring out the creative expression of students and to gauge their knowledge of various trends in Computer Science & Engineering (CSE). This competition aims to trigger a thought process among students towards recent innovations in the field.',
    rules: [
      { id: 1, text: 'Topic must be a technical innovation or research idea in CSE.' },
      { id: 2, text: 'Poster dimensions should not exceed A2 size (25×18 in).' },
      { id: 3, text: 'The heading should have letters at least 35mm high for title, 30mm for author\'s name and institution.' },
      { id: 4, text: 'Lettering for text should be at least 15mm high for readability from 1m distance.' },
      { id: 5, text: 'Posters must have 70% graphic content and 30% text.' },
      { id: 6, text: 'Illustrations (graphs, pictures, figures) should be large and clear.' },
      { id: 7, text: 'Maximum presentation time is 10 minutes.' },
      { id: 8, text: 'Jury and audience may ask questions after presentations.' }
    ],
    importantNotes: [
      'The jury\'s decision regarding winners will be final.',
      'Posters must be mounted on a solid material like thermocol or a plastic frame.',
      'All participants must fill out the registration form before participating.'
    ],
    facultyCoordinators: [
      { name: 'Dr. P. Srinivas Kumar', phone: '+91 9533678910' }
    ],
    studentCoordinators: [
      { name: 'Uday', phone: '+91 7671039914' },
      { name: 'Deepika', phone: '+91 6303983631' },
      { name: 'Renuka', phone: '' },
      { name: 'Sri Latha', phone: '+91 9441468471' }
    ],
    color: '#95e1d3'
  },
  'brain-blitz': {
    name: 'Brain Blitz',
    emoji: '🧠',
    description: 'A Battle of Knowledge and Wit! Test your intellectual abilities in this thrilling quiz.',
    rules: [
      { id: 1, text: 'Teams can have a maximum of 3 members.' },
      { id: 2, text: 'There will be three rounds: General, Technical, and Rapid Fire.' },
      { id: 3, text: 'Quiz will be on C, Python & Basic Computer Science Concepts.' },
      { id: 4, text: 'Individual participation is allowed.' },
      { id: 5, text: 'Mode of quiz will be online.' },
      { id: 6, text: 'Duration of quiz will be one hour for all three rounds.' },
      { id: 7, text: 'All participants must enter their details carefully in the online application form.' },
      { id: 8, text: 'Responses must be submitted within the specified time; failure to do so will result in unrecorded answers.' },
      { id: 9, text: 'Students with the same score will be evaluated based on the least time of submission.' }
    ],
    facultyCoordinators: [
      { name: 'Mrs. D. Nalini Kumari', phone: '+91 8317536566' },
      { name: 'Mrs. R. Lakshmi', phone: '+91 9000281686' }
    ],
    studentCoordinators: [
      { name: 'Chakri', phone: '+91 9963361946' },
      { name: 'Rishi', phone: '+91 9381242168' },
      { name: 'Bala', phone: '+91 9652995358' },
      { name: 'Harshitha', phone: '+91 9573766974' }
    ],
    color: '#f38181'
  },
  '24-frames': {
    name: '24-Frames',
    emoji: '🎬',
    description: 'Create, Edit, and Showcase Your Creativity! Participate in the ultimate Reels competition.',
    rules: [
      { id: 1, text: 'Reels must be original and created by the participant.' },
      { id: 2, text: 'Duration must be between 15 to 60 seconds.' },
      { id: 3, text: 'No copyrighted music or content allowed.' }
    ],
    additionalInfo: '24Frames allows users to create and share engaging, 2-minute videos with any kind of music, effects, and interactive tools.',
    keyObjectives: [
      'Increase Engagement & Visibility 📈',
      'Brand Awareness & Marketing 🚀',
      'Entertainment & Trend Participation 🎭',
      'Educational & Informative Content 📚'
    ],
    prohibitedContent: [
      'Hate Speech & Bullying',
      'Violence & Harmful Content',
      'Nudity & Adult Content',
      'Misinformation & Fake News',
      'Any Betting App Promotions'
    ],
    participationCriteria: [
      'Anyone can participate, even from outside the institution.',
      'There is no limit to the number of people in a video.',
      'The video must be under 2 minutes.',
      'Presentations can be carried on any external device.'
    ],
    facultyCoordinators: [
      { name: 'Mr. K. Jairam', phone: '+91 9849160138' }
    ],
    studentCoordinators: [
      { name: 'Shanmukha Raja Gopal', phone: '+91 8977477443' },
      { name: 'Chaitanya Kumar', phone: '+91 9121452004' },
      { name: 'Poojitha', phone: '+91 8886422005' },
      { name: 'Mounika', phone: '+91 8008577854' }
    ],
    color: '#aa96da'
  },
  'webverse': {
    name: 'Webverse',
    emoji: '💻',
    description: 'Explore, Design, and Redefine the Internet! Show off your web designing skills.',
    rules: [
      { id: 1, text: 'Participants must design a responsive website.' },
      { id: 2, text: 'Use of external libraries should be minimal.' },
      { id: 3, text: 'Maximum 2 members per group.' },
      { id: 4, text: 'Students must complete the project within 2 hours, and the best-designed webpage will be judged.' }
    ],
    judgingCriteria: {
      content: [
        'Relevance of content',
        'Accuracy of content',
        'Correct spelling and grammar',
        'Good use of content chunking',
        'Adherence to copyright laws'
      ],
      aesthetics: [
        'Visual appeal and style',
        'Consistent look and feel',
        'Readability',
        'Minimalist design'
      ],
      design: [
        'Adherence to HTML standards',
        'Effective navigation and working links',
        'Effective use of multimedia content',
        'Browser compatibility'
      ]
    },
    standardsCompliance: 'Web pages must employ standards-based web design with well-formed HTML and CSS.',
    templates: [
      'From scratch',
      'By creating custom template files with editable and non-editable zones.'
    ],
    facultyCoordinators: [
      { name: 'Dr. K. Chaitanya', phone: '+91 9550474455' }
    ],
    studentCoordinators: [
      { name: 'Abhilash', phone: '+91 9182194127' },
      { name: 'Sanjay', phone: '+91 9030872887' },
      { name: 'Vasavi', phone: '+91 7386723844' },
      { name: 'Chandini', phone: '+91 6303855964' }
    ],
    color: '#fcbad3'
  }
};

const EventDetail = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const event = eventData[eventId];

  useEffect(() => {
    if (!event) {
      navigate('/events');
      return;
    }
    setIsVisible(true);
  }, [event, navigate]);

  if (!event) return null;

  return (
    <div className="event-detail-container" style={{ '--event-color': event.color }}>
      <div className="detail-background"></div>
      <div className={`detail-content ${isVisible ? 'fade-in' : ''}`}>
        <div className="detail-header">
          <div className="event-icon-large">{event.emoji}</div>
          <h1 className="detail-title">{event.name}</h1>
          <p className="detail-description">{event.description}</p>
        </div>

        <div className="detail-sections">
          {event.objective && (
            <section className="detail-section">
              <h2 className="section-title">📌 Objective</h2>
              <p className="section-text">{event.objective}</p>
            </section>
          )}

          <section className="detail-section">
            <h2 className="section-title">📜 Rules</h2>
            <div className="rules-list">
              {event.rules.map((rule) => (
                <div key={rule.id} className="rule-item">
                  <span className="rule-number">{rule.id}</span>
                  <span className="rule-text">{rule.text}</span>
                </div>
              ))}
            </div>
          </section>

          {event.importantNotes && (
            <section className="detail-section">
              <h2 className="section-title">📌 Important Notes</h2>
              <ul className="notes-list">
                {event.importantNotes.map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
            </section>
          )}

          {event.keyObjectives && (
            <section className="detail-section">
              <h2 className="section-title">🔥 Key Objectives</h2>
              <ul className="objectives-list">
                {event.keyObjectives.map((objective, index) => (
                  <li key={index}>{objective}</li>
                ))}
              </ul>
            </section>
          )}

          {event.prohibitedContent && (
            <section className="detail-section">
              <h2 className="section-title">⚠️ Prohibited Content</h2>
              <div className="prohibited-table">
                {event.prohibitedContent.map((content, index) => (
                  <div key={index} className="prohibited-item">{content}</div>
                ))}
              </div>
            </section>
          )}

          {event.participationCriteria && (
            <section className="detail-section">
              <h2 className="section-title">✅ Participation Criteria</h2>
              <ul className="criteria-list">
                {event.participationCriteria.map((criteria, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: criteria.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></li>
                ))}
              </ul>
            </section>
          )}

          {event.additionalInfo && (
            <section className="detail-section">
              <p className="section-text">{event.additionalInfo}</p>
            </section>
          )}

          {event.judgingCriteria && (
            <section className="detail-section">
              <h2 className="section-title">Judging Criteria</h2>
              <div className="judging-sections">
                <div className="judging-item">
                  <h3>Section 1: Content</h3>
                  <ul>
                    {event.judgingCriteria.content.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="judging-item">
                  <h3>Section 2: Aesthetics</h3>
                  <ul>
                    {event.judgingCriteria.aesthetics.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="judging-item">
                  <h3>Section 3: Design</h3>
                  <ul>
                    {event.judgingCriteria.design.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              {event.standardsCompliance && (
                <p className="standards-text"><strong>Standards Compliance:</strong> {event.standardsCompliance}</p>
              )}
              {event.templates && (
                <div className="templates-section">
                  <p><strong>Templates:</strong> Templates must be created using any of the following methods:</p>
                  <ul>
                    {event.templates.map((template, index) => (
                      <li key={index}>{template}</li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          )}

          <section className="detail-section">
            <h2 className="section-title">🎓 Faculty Coordinators</h2>
            <div className="coordinators-table">
              <div className="table-header">
                <div>Name</div>
                <div>Phone Number</div>
              </div>
              {event.facultyCoordinators.map((coordinator, index) => (
                <div key={index} className="table-row">
                  <div>{coordinator.name}</div>
                  <div><a href={`tel:${coordinator.phone}`}>{coordinator.phone}</a></div>
                </div>
              ))}
            </div>
          </section>

          <section className="detail-section">
            <h2 className="section-title">👨‍🎓 Student Coordinators</h2>
            <div className="coordinators-table">
              <div className="table-header">
                <div>Name</div>
                <div>Phone Number</div>
              </div>
              {event.studentCoordinators.map((coordinator, index) => (
                <div key={index} className="table-row">
                  <div>{coordinator.name}</div>
                  <div>{coordinator.phone ? <a href={`tel:${coordinator.phone}`}>{coordinator.phone}</a> : '-'}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="detail-actions">
          <button onClick={() => navigate('/events')} className="action-btn back-btn">
            ← Back to Events
          </button>
          <button onClick={() => navigate('/register')} className="action-btn register-btn">
            Register Here
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;

