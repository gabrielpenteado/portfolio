import React, { useState } from "react";
import "./Card.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faVideo, faInfo } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface TechStackItem {
  name: string;
}

interface CardProps {
  image: string;
  title: string;
  description: string;
  techStack: TechStackItem[];
  codeLink: string;
  videoLink?: string;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  techStack,
  codeLink,
  videoLink,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className={`card ${showDetails ? "show-details" : ""}`}>
      <img src={image} alt={title} />
      <div className="card-details">
        <h2>{title}</h2>
        <div className="tech-stack">
          {techStack.map((tech, index) => (
            <div key={index} className="tech-stack-item">
              {tech.name}
            </div>
          ))}
        </div>
        <p>{description}</p>
      </div>

      <div className="buttons">
        <div className="info-button">
          <button className="btn info-btn" onClick={toggleDetails}>
            <FontAwesomeIcon icon={faInfo} />
          </button>
        </div>
        <div className="code-video-btt">
          {codeLink && (
            <Link to={codeLink} target="_blank" className="btn">
              <FontAwesomeIcon icon={faCode} />
            </Link>
          )}
          {videoLink && (
            <Link to={videoLink} target="_blank" className="btn">
              <FontAwesomeIcon icon={faVideo} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
