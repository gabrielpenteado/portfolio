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
    <nav>
      <div className="wrapper">
        {techOptions.map((tech, index) => (
          <label key={index} className="option">
            <input
              className="input"
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
    </nav>
  );
};

export default Navbar;
