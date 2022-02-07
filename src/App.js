import React, { useEffect, useState } from "react";

export const App = () => {
  const [currentColorArrangement, setCurrentColorArrangement] = useState([]);

  const width = 8; // eight squares width
  const colors = ["blue", "green", "orange", "purple", "red", "yellow"];

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
  }, []);

  console.log(currentColorArrangement);

  return (
    <>
      <p>asdasd</p>
    </>
  );
};
