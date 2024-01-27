import React, { useState } from "react";
import "./App.css";
import { getRandomGlagolCardData } from "./utils";

function App() {
  const [cardData, setCardData] = useState(getRandomGlagolCardData());
  const [isFading, setIsFading] = useState(false);

  const handleClick = () => {
    setIsFading(true);
    setTimeout(() => {
      const newCardData = getRandomGlagolCardData();
      setCardData(newCardData);
      setIsFading(false);
    }, 300);
  };

  return (
    <div className="app">
      <div className="cards">
        <div className="minus" onClick={handleClick}>
          N
        </div>
        <div className={`flip-card ${isFading ? "fade" : ""}`}>
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h1>{cardData.pitanje}</h1>
            </div>
            <div class="flip-card-back">
              <h1>{cardData.odgovor}</h1>
            </div>
          </div>
        </div>
        <div className="plus" onClick={handleClick}>
          Y
        </div>
      </div>
    </div>
  );
}

export default App;
