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
    <div className="input">
      {techOptions.map((tech, index) => (
        <label key={index} className={`value ${tech}`}>
          <input
            className="value-color"
            type="radio"
            name="btn"
            value={tech}
            checked={selectedTech === tech}
            onChange={() => onTechChange(tech)}
          />
          <div className="btn">
            <span className="span">{tech}</span>
          </div>
        </label>
      ))}
    </div>
  );
};

export default Navbar;
