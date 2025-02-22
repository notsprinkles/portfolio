import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(getInitialMode());

  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    return savedMode || false;
  }

  return (
    <div className={darkMode ? 'container dark-mode' : 'container light-mode'}>
      <div className="toggle-container">
        <span style={{ color: darkMode ? 'grey' : 'yellow', marginRight: '0.5rem' }}>☀︎</span>
        <input
          checked={darkMode}
          onChange={() => setDarkMode(prevMode => !prevMode)}
          type="checkbox"
          className="toggle-input"
          id="toggle"
        />
        <label htmlFor="toggle" className="toggle-label" />
        <span style={{ color: darkMode ? 'slateblue' : 'grey', marginLeft: '0.5rem' }}>☾</span>
      </div>

      {/* Headings */}
      <h1>{darkMode ? 'hi, i am jea' : 'hi, i am jea.'}</h1>
      <h3>{darkMode ? 'I like coffee.' : 'Fusing creativity with technical skills.'}</h3>

      <div className={darkMode ? 'content content-dark-mode' : 'content content-light-mode'}>
        {/* Light mode: updated content */}
        <div className="thing-container">
          <div className="thing">
            <h2>{darkMode ? 'Front End Libraries' : 'Brand Identity'}</h2>
            <p>{darkMode ? 'React, Bootstrap, Sass, Redux, jQuery' : 'Elements, tone, style guide for cohesive design'}</p>
          </div>
          <div className="thing">
            <h2>{darkMode ? 'Responsive Web Design' : 'Market Research'}</h2>
            <p>{darkMode ? 'HTML, CSS, JavaScript' : 'Competitive analysis, audience targeting, trend forecasting'}</p>
          </div>
          <div className="thing">
            <h2>{darkMode ? 'React' : 'Project Management'}</h2>
            <p>{darkMode ? 'React, Redux, Hooks, Context API, React Router' : 'Kanban boards, roadmaps, strategic planning'}</p>
          </div>
        </div>

        {/* External link */}
        <section>
          <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/circumoral-pallor/pens/public">
            Explore my projects on codepen
          </a> <br></br>
            <a target="_blank" rel="noopener noreferrer" href="https://replit.com/@icantstanduccuzu">
            Explore my projects on replit
          </a>
        </section>
      </div>
    </div>
  );
}

export default App;

