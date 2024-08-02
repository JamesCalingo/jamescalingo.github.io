import NameCard from "./namecard/NameCard";
import { useMediaQuery } from "react-responsive";
import "./topbar.css";


function Topbar() {
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1000px)",
  });

  return (
    <div id="sidebar" className={isSmallScreen ? "small-screen" : ""}>
      <NameCard />
    
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
        <li className="nav-item">
          <a href="#contact">Contact Me</a>
        </li>
        <li>
          <a href="https://overclocked-overthoughts.netlify.app/">Blog</a>
        </li>
        <li>
          <a href="https://docs.google.com/document/d/1zhiBpyUl72zrpHTCSXKhumHRyLPJkCxTnOkwBbY1aK0/edit?usp=sharing">
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Topbar;
