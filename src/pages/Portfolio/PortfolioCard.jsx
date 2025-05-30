/* eslint-disable react/prop-types */
import githubLogo from "../../assets/images/GitHub-Mark-120px-plus.png";

function PortfolioCard(props) {
  return (
    <div className="portfolio-card">
      <div className="portfolio-card-header">
        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          className="app-link"
        >
          <h3>{props.title}</h3>
        </a>
      </div>
      <div className="portfolio-card-body card-body">
        {props.github && <a href={props.github} target="_blank" rel="noopener noreferrer">
          <img
            src={githubLogo}
            className="portfolio-logo"
            alt="View on GitHub"
          />
        </a> }
      </div>
        <img src={props.image} alt={props.alt} />
        <p className="description">{props.description}</p>
        {/* <h3>Technologies used:</h3>
        <p className="technologies">{props.technologies}</p> */}
    </div>
  );
}

export default PortfolioCard;
