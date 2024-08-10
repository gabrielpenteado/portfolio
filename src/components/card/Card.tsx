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
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card__content">
        <p className="card__title">{title}</p>
        <p className="card__description">{description}</p>
        <div className="tech-stack">
          {techStack.map((tech, index) => (
            <div key={index}>{tech.name}</div>
          ))}
        </div>

        <a href={videoLink}>
          <button className="card__button">Video</button>
        </a>
        <a href={codeLink}>
          <button className="card__button secondary">Source Code</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
