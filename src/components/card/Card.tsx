import "./Card.scss";
// import github from "../../assets/github-brands-solid.svg";
// import play from "../../assets/play-solid.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

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
  const getTechClass = (techList: TechStackItem[]): string => {
    // Determine a classe da borda com base no array techStack usando switch
    switch (true) {
      case techList.some((tech) => tech.name.includes("react")):
        return "react-class";
      case techList.some((tech) => tech.name.includes("vue")):
        return "vue-class";
      case techList.some((tech) => tech.name.includes("angular")):
        return "angular-class";
      case techList.some((tech) => tech.name.includes("next")):
        return "next-class";
      case techList.some((tech) => tech.name === "java"):
        return "java-class";
      case techList.some((tech) => tech.name.includes("node")):
        return "node-class";
      case techList.some((tech) => tech.name.includes("csharp")):
        return "csharp-class";
      default:
        return ""; // Classe padrão
    }
  };

  return (
    <div className={`card ${getTechClass(techStack)}`}>
      {/* <div className="gradient"></div> */}
      <div className="card-text">
        <div className="card-title">{title}</div>

        <p className="card-description">{description}</p>

        <div className="card-techs">
          {techStack &&
            techStack.map((tech, index) => <div key={index}>{tech.name}</div>)}
        </div>
      </div>

      <div className="card-buttons">
        {codeLink && (
          <a href={codeLink} target="_blank">
            <button className="button codebtn">
              {/* <img className="github" src={github} alt="github" /> */}
              <FontAwesomeIcon icon={faCode} />
            </button>
          </a>
        )}
        {videoLink && (
          <a href={videoLink} target="_blank">
            <button className="button">
              {/* <img className="video" src={play} alt="video" /> */}
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
