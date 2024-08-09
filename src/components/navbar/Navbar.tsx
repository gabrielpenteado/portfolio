import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

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
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      {/* Navbar tradicional para telas maiores */}
      <div className="navbar-menu desktop">
        {techOptions.map((tech, index) => (
          <label key={index} className="navbar-item">
            <input
              type="radio"
              name="tech-stack"
              value={tech}
              checked={selectedTech === tech}
              onChange={() => onTechChange(tech)}
            />
            {tech}
          </label>
        ))}
      </div>

      {/* Ícone de Hambúrguer para telas menores */}
      <div className="hamburger-icon mobile" onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </div>

      {/* Menu para telas menores */}
      <div className={`navbar-menu mobile ${menuOpen ? "open" : ""}`}>
        {techOptions.map((tech, index) => (
          <label key={index} className="navbar-item">
            <input
              type="radio"
              name="tech-stack"
              value={tech}
              checked={selectedTech === tech}
              onChange={() => {
                onTechChange(tech);
                toggleMenu(); // Fechar o menu após seleção
              }}
            />
            {tech}
          </label>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
