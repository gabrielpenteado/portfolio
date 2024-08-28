import "./Navbar.scss";

interface NavbarProps {
  selectedTech: string;
  onTechChange: (tech: string) => void;
  techOptions: string[];
}

const Navbar: React.FC<NavbarProps> = ({
  selectedTech,
  onTechChange,
  techOptions,
}) => {
  return (
    <div className="radio-button-container">
      {techOptions.map((tech, index) => (
        <div className={`radio-button ${tech}`} key={index}>
          <input
            className="radio-button__input"
            type="radio"
            id={index.toString()}
            name="radio-group"
            value={tech}
            checked={selectedTech === tech}
            onChange={() => onTechChange(tech)}
          />
          <label
            key={index}
            htmlFor={index.toString()}
            className="radio-button__label"
          >
            <span className="radio-button__custom"></span>
            <div className="techName">{tech}</div>
          </label>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
