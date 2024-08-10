import React, { useState } from "react";
import Card from ".//components/card/Card";
import Navbar from "./components/navbar/Navbar";
import { cards } from "./cardData";
import "./App.css";

// Define os tipos para as opções de tech stack
const techOptions: string[] = [
  "All",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Certificates",
];

const App: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string>("All");

  const handleTechChange = (tech: string) => {
    setSelectedTech(tech);
  };

  // Filtra os cards com base na tech stack selecionada
  const filteredCards =
    selectedTech === "All"
      ? cards
      : cards.filter((card) =>
          card.techStack!.some((tech) => tech.name === selectedTech)
        );

  return (
    <div className="app">
      <Navbar
        selectedTech={selectedTech}
        onTechChange={handleTechChange}
        techOptions={techOptions}
      />
      <div className="container">
        {filteredCards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            techStack={card.techStack}
            codeLink={card.codeLink}
            videoLink={card.videoLink}
            certificateLink={card.certificateLink}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
