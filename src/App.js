import React, { useEffect, useState } from "react";

export const App = () => {
  const [currentColorArrangement, setCurrentColorArrangement] = useState([]);

  const width = 8; // eight squares width
  const colors = ["blue", "green", "orange", "purple", "red", "yellow"];

  const checkForColumnOfThree = () => {
    for (let i = 0; i < 47; i++) {
      const columnOfThree = [i, i + width, i + width * 2];
      const decidedColor = currentColorArrangement[i];

      if (
        columnOfThree.every(
          (square) => currentColorArrangement[square] === decidedColor
        )
      ) {
        columnOfThree.forEach(
          (result) => (currentColorArrangement[result] = "")
        );
      }
    }
  };

  const createBoard = () => {
    // color between 0 and 5
    // const randomNumber0to5 = Math.floor(Math.random() * colors.length);
    //Array for colors randomly
    const randomColorArrangmented = [];
    for (let i = 0; i < width * width; i++) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      randomColorArrangmented.push(randomColor);
    }
    setCurrentColorArrangement(randomColorArrangmented);
  };

  useEffect(() => {
    createBoard();

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      checkForColumnOfThree();
      setCurrentColorArrangement([...currentColorArrangement]);
    }, 100);
    return () => clearInterval(timer);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkForColumnOfThree]);

  return (
    <div className="app">
      <div className="game">
        {currentColorArrangement.map((element, index) => (
          <img key={index} alt={element} style={{ backgroundColor: element }} />
        ))}
      </div>
    </div>
  );
};
