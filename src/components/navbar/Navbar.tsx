import "./Navbar.css";

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
    <div className="wrapper">
      {techOptions.map((tech, index) => (
        <label key={index} className={`option ${tech}`}>
          <input
            className="input"
            type="radio"
            name="btn"
            value={tech}
            checked={selectedTech === tech}
            onChange={() => onTechChange(tech)}
          />
          <span className="radio-button__custom"></span>
          <div className="btn">
            <span className="span">{tech}</span>
          </div>
        </label>
      ))}
    </div>
  );
};

export default Navbar;
