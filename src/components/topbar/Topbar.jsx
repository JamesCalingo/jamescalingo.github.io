import NameCard from "./namecard/NameCard";
import { useMediaQuery } from "react-responsive";
import "./topbar.css";

function Topbar() {
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1000px)",
  });

  return (
    <div id="sidebar" className={isSmallScreen ? "small-screen" : ""}>
      {isSmallScreen && <a href="/"><NameCard /></a>}
      <ul className={isSmallScreen ? "dropdown-content" : ""}>
        <li>
          <a href="/">
          <NameCard />
          </a>
        </li>
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
          <a href="#contact">Contact</a>
        </li>
        <li className="link">
          <a href="https://overclocked-overthoughts.netlify.app/">Blog</a>
        </li>
        <li className="link">
          <a
            href="https://jamescalingo.dev/resume/JamesCalingo.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Topbar;
