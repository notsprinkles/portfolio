import React, { useState, useEffect } from "react";
import "./styles.css";

function App() {
  const [darkMode, setDarkMode] = useState(getInitialMode());

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    return savedMode || false;
  }

  return (
    <div className={darkMode ? "container dark-mode" : "container light-mode"}>
      <div className="toggle-container">
        <span
          style={{ color: darkMode ? "grey" : "yellow", marginRight: "0.5rem" }}
        >
          ☀︎
        </span>
        <input
          checked={darkMode}
          onChange={() => setDarkMode((prevMode) => !prevMode)}
          type="checkbox"
          className="toggle-input"
          id="toggle"
        />
        <label htmlFor="toggle" className="toggle-label" />
        <span
          style={{
            color: darkMode ? "slateblue" : "grey",
            marginLeft: "0.5rem",
          }}
        >
          ☾
        </span>
      </div>

      {/* Headings */}
      <h1>{darkMode ? "hi, i am jea" : "hi, i am jea."}</h1>
      <h3>
        {darkMode
          ? "I like coffee."
          : "Fusing creativity with technical skills."}
      </h3>

      <div
        className={
          darkMode ? "content content-dark-mode" : "content content-light-mode"
        }
      >
        {/* Updated content with links */}
        <div className="thing-container">
          <div className="thing">
            <h2>{darkMode ? "Front End Libraries" : "Brand Identity"}</h2>
            <p>
              {darkMode
                ? "React, Bootstrap, Sass, Redux, jQuery"
                : "Elements, tone, style guide for cohesive design"}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={
                darkMode
                  ? "https://codesandbox.io/dashboard/recent?workspace=ws_FFdxpMKc2sAafNgjGE4xmD"
                  : "https://governator.notion.site/Branding-ee75164a8b98457694c05ffced5b212a"
              }
            >
              Learn more
            </a>
          </div>
          <div className="thing">
            <h2>{darkMode ? "Responsive Web Design" : "Strategic Planning"}</h2>
            <p>
              {darkMode
                ? "HTML, CSS, JavaScript"
                : "Goal setting, action planning, and aligning efforts with measurable outcomes."}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={
                darkMode
                  ? "https://replit.com/@icantstanduccuzu"
                  : "https://forum.bankless.community/t/tlbank-tempcheck-for-consensus-and-implementation/5226"
              }
            >
              Learn more
            </a>
          </div>
          <div className="thing">
            <h2>{darkMode ? "React" : "Project Management"}</h2>
            <p>
              {darkMode
                ? "React, Redux, Hooks, Context API, React Router"
                : "Kanban boards, roadmaps, strategic planning"}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={
                darkMode
                  ? "https://github.com/notsprinkles?tab=repositories"
                  : "https://governator.notion.site/Governator-Project-Wiki-79eae545d0d04cddbf5c785ae187e53f"
              }
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
