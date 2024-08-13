import React, { useState } from "react";
import Card from ".//components/card/Card";
import Navbar from "./components/navbar/Navbar";
import { cards } from "./cardData";
import "./App.css";

import { motion, AnimatePresence } from "framer-motion";

// Define os tipos para as opções de tech stack
const techOptions: string[] = [
  "all",
  "javaScript",
  "typeScript",
  "react",
  "vue",
  "angular",
];

const App: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string>("all");

  const handleTechChange = (tech: string) => {
    setSelectedTech(tech);
  };

  // Filtra os cards com base na tech stack selecionada
  const filteredCards =
    selectedTech === "all"
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
      <AnimatePresence>
        <div className="container">
          {filteredCards.map((card) => (
            <motion.div
              layout
              key={card.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card
                key={card.id}
                image={card.image}
                title={card.title}
                description={card.description}
                techStack={card.techStack}
                codeLink={card.codeLink}
                videoLink={card.videoLink}
              />
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default App;
