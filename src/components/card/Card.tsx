import "./Card.css";

interface TechStackItem {
  name: string;
}

interface CardProps {
  image: string;
  title: string;
  description: string;
  techStack?: TechStackItem[];
  codeLink?: string;
  videoLink?: string;
  certificateLink?: string;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  techStack,
  codeLink,
  videoLink,
  certificateLink,
}) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card__content">
        <p className="card__title">{title}</p>
        <p className="card__description">{description}</p>
        <div className="tech-stack">
          {techStack &&
            techStack.map((tech, index) => <div key={index}>{tech.name}</div>)}
        </div>
        <div className="buttons">
          {techStack?.some((tech) => tech.name === "Certificates") ? (
            <a href={certificateLink} target="_blank">
              <button className="card__button">Certificate</button>
            </a>
          ) : (
            <div>
              <a href={videoLink} target="_blank">
                <button className="card__button">Video</button>
              </a>
              <a href={codeLink} target="_blank">
                <button className="card__button secondary">Source Code</button>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
