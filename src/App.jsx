// gameSetHandler, clickHandler, nextCircle, startHandler, stopHandler, closeHandler

import { useState } from "react";
import NewGame from "./components/NewGame";
import { levels } from "./levels";
import Circle from "./UI_components/Circle";
import Game from "./components/Game";

function App() {
  const [player, setPlayer] = useState({});
  const [circles, setCircles] = useState([]);
  const [score, setScore] = useState(0);

  const gameSetHandler = (difficulty, name) => {
    const difficultyIndex = levels.findIndex((el) => el.level === difficulty);
    const levelAmount = levels[difficultyIndex].amount;
    const circlesArray = Array.from({ length: levelAmount }, (x, i) => i);

    setCircles(circlesArray);

    setPlayer({
      difficulty,
      name,
    });
  };

  const stopHandler = () => {
    console.log("stop");
  };

  return (
    <div className="app">
      <h1>Pick the Mushrooms</h1>
      {circles.length === 0 && <NewGame onclick={gameSetHandler} />}
      {circles.length !== 0 && (
        <Game score={score} circles={circles} stopHandler={stopHandler} />
      )}
    </div>
  );
}

export default App;
