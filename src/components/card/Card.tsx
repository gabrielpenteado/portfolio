import React from "react";
import "./Card.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faVideo } from "@fortawesome/free-solid-svg-icons";
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
  return (
    <div className="card">
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
  );
};

export default Card;
