import React from "react";
import NameCard from "./namecard/NameCard";
import Logobar from "./Logobar/Logobar"
import { useMediaQuery } from "react-responsive";
import "./sidebar.css";


function Sidebar() {
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1000px)",
  });

  return (
    <div id="sidebar" className={isSmallScreen ? "small-screen" : ""}>
      <NameCard />
      <Logobar />
      <ul className={isSmallScreen ? "dropdown-content" : ""}>
        <li className="nav-item">
          <a href="#about">About</a>
        </li>
        <li className="nav-item">
          <a href="#technologies">Knowledge Base</a>
        </li>

        <li className="nav-item">
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li className="nav-item">
          <a href="#contact">Contact Me</a>
        </li> */}
        <li className="nav-item">
          <a href="https://overclocked-overthoughts.netlify.app/">Blog</a>
        </li>
        <li className="nav-item">
          <a href="https://docs.google.com/document/d/1zhiBpyUl72zrpHTCSXKhumHRyLPJkCxTnOkwBbY1aK0/edit?usp=sharing">
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
