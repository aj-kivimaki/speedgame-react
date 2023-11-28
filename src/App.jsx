// gameSetHandler, clickHandler, nextCircle, startHandler, stopHandler, closeHandler

import { useState } from "react";
import Footer from "./UI_components/Footer";
import NewGame from "./components/NewGame";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
import { levels } from "./levels";

function App() {
  const [player, setPlayer] = useState({});
  const [circles, setCircles] = useState([]);
  const [score, setScore] = useState(0);
  const [gameLaunch, setGameLaunch] = useState(true);
  const [gameOn, setGameOn] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const gameSetHandler = (difficulty, name) => {
    const difficultyIndex = levels.findIndex((el) => el.level === difficulty);
    const levelAmount = levels[difficultyIndex].amount;
    const circlesArray = Array.from({ length: levelAmount }, (x, i) => i);

    setCircles(circlesArray);

    setPlayer({
      difficulty,
      name,
    });
    setGameLaunch(!gameLaunch);
    setGameOn(!gameOn);
  };

  const stopHandler = () => {
    setGameOn(!gameOn);
    setGameOver(!gameOver);
  };

  return (
    <>
      <main className="app">
        <h1>Pick the Mushroom</h1>
        {gameLaunch && <NewGame onclick={gameSetHandler} />}
        {gameOn && (
          <Game score={score} circles={circles} stopHandler={stopHandler} />
        )}
        {gameOver && <GameOver />}
      </main>
      <Footer />
    </>
  );
}

export default App;
