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
    <nav className="navbar">
      <div className="navbar-menu desktop radio-inputs">
        {techOptions.map((tech, index) => (
          <label key={index} className="navbar-item radio">
            <input
              type="radio"
              name="tech-stack"
              value={tech}
              checked={selectedTech === tech}
              onChange={() => onTechChange(tech)}
            />
            <span className="name">{tech}</span>
          </label>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
