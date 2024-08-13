import "./Card.css";

interface TechStackItem {
  name: string;
}

interface CardProps {
  image: string;
  title: string;
  description: string;
  techStack: TechStackItem[];
  codeLink?: string;
  videoLink?: string;
  certificateLink?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  techStack,
  codeLink,
  videoLink,
}) => {
  const getBorderClass = (techList: TechStackItem[]): string => {
    // Determine a classe da borda com base no array techStack usando switch
    switch (true) {
      case techList.some((tech) => tech.name.includes("react")):
        return "react-class";
      case techList.some((tech) => tech.name.includes("vue")):
        return "vue-class";
      case techList.some((tech) => tech.name.includes("angular")):
        return "angular-class";
      default:
        return ""; // Classe padrão
    }
  };

  return (
    <div className={`card ${getBorderClass(techStack)}`}>
      <h2 className="card-title">{title}</h2>

      <div className="card-body">
        {techStack &&
          techStack.map((tech, index) => <div key={index}>{tech.name}</div>)}
      </div>

      <p>{description}</p>

      <div className="card-buttons">
        <a href={videoLink} target="_blank">
          <button className="button-video">Video</button>
        </a>
        <a href={codeLink} target="_blank">
          <button className="button-code">Code</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
