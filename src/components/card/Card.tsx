import React from "react";
import "./Card.css";

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
      <div className="content">
        <h2 className="title">{title}</h2>
        <div className="tech-stack">
          {techStack.map((tech, index) => (
            <div key={index} className="tech-stack-item">
              {tech.name}
            </div>
          ))}
        </div>
      </div>
      <div className="card-details">
        <p>{description}</p>
      </div>
      <div className="buttons">
        <button className="btn">Botão 1</button>
        <button className="btn">Botão 2</button>
      </div>
    </div>
  );
};

export default Card;
