import React from "react";
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
    <nav className="radio-inputs">
      {techOptions.map((tech, index) => (
        <label key={index} className="radio">
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
    </nav>
  );
};

export default Navbar;
