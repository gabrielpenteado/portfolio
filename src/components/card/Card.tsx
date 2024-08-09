import React from "react";
import "./Card.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faVideo } from "@fortawesome/free-solid-svg-icons";

interface TechStackItem {
  name: string;
}

interface CardProps {
  image: string;
  title: string;
  description: string;
  techStack: TechStackItem[];
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  techStack,
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
        <button className="btn">
          <FontAwesomeIcon icon={faCode} />
        </button>
        <button className="btn">
          <FontAwesomeIcon icon={faVideo} />
        </button>
      </div>
    </div>
  );
};

export default Card;
