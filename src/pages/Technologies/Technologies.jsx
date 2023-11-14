import React, { useState } from "react";
import "./technologies.css";

function Technologies() {
  const [isActive, setActive] = useState(false);

  function toggleActive() {
    setActive(!isActive);
  }

  return (
    <div id="technologies" className="">
      <div className="card">
        <div className="card-header">
          <h1>MY KNOWLEDGE BASE</h1>
        </div>
        <div className="card-body">
          <p className="card-intro">These are some of the things I've worked with in the past. However, with how much the world of technology changes from year to year, I'm always on the lookout for new things to add to this list.</p>
          <div className="panels">
            <div
              id="languages"
              onClick={toggleActive}
              className={isActive ? "active panel" : "panel"}
            >
              <h3 className="list-header">Languages</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>SQL</li>
                <li>Python</li>
                <li>TypeScript</li>
                <li>Go</li>
              </ul>
            </div>
            <div
              id="frameworks"
              onClick={toggleActive}
              className={isActive ? "active panel" : "panel"}
            >
              <h3 className="list-header">Frameworks/Libraries</h3>
              <ul>
                <li>React</li>
                <li>React Native</li>
                <li>Bootstrap</li>
                <li>JQuery</li>
           
              </ul>
            </div>
            <div
              id="other"
              onClick={toggleActive}
              className={isActive ? "active panel" : "panel"}
            >
              <h3 className="list-header">Other Important Things</h3>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>Heroku</li>
                <li>Netlify</li>
           
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
