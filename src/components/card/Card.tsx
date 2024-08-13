import "./Card.css";
// import github from "../../assets/github-brands-solid.svg";
// import play from "../../assets/play-solid.svg";

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
      <div className="gradient"></div>
      <h2 className="card-title">{title}</h2>

      <p className="card-description">{description}</p>

      <div className="card-techs">
        {techStack &&
          techStack.map((tech, index) => <div key={index}>{tech.name}</div>)}
      </div>

      <div className="card-buttons">
        <a href={codeLink} target="_blank">
          <button className="button-code">
            {/* <img className="github" src={github} alt="github" /> */}
            Source Code
          </button>
        </a>
        <a href={videoLink} target="_blank">
          <button className="button-video">
            {/* <img className="video" src={play} alt="video" /> */}
            Video
          </button>
        </a>
      </div>
    </div>
  );
};

export default Card;
