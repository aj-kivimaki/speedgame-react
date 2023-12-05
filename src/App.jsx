// gameSetHandler, clickHandler, nextCircle, startHandler, stopHandler, closeHandler

import { useState, useRef } from "react";
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
  const [currentNumber, setCurrentNumber] = useState(0);

  const timeoutIdRef = useRef(null);

  let pace = 1000;
  let levelsAmount = 0;
  let mushroomId = 0;

  const gameSetHandler = (difficulty, name) => {
    // find the element
    const { amount } = levels.find((el) => el.level === difficulty);
    levelsAmount = amount;

    // create array of numbers, starting from 0
    const circlesArray = Array.from({ length: amount }, (_, i) => i);
    setCircles(circlesArray);

    setPlayer({
      difficulty,
      name,
      score,
    });

    setGameLaunch((prevLaunch) => !prevLaunch);
    setGameOn((prevOn) => !prevOn);
    const newNumber = getNewNumber(currentNumber);

    // mushroomId = displayRandomMushroom(newNumber, currentNumber);

    // in case of poisonous mushroom
    // balances the unclicked poisonous mushroom
    // if (mushroomId === levelsAmount) rounds--;
  };

  const stopHandler = () => {
    setGameOn((prevOn) => !prevOn);
    setGameOver((prevOver) => !prevOver);
    // clearTimeout(timer); /* USE useRef instead */
    clearTimeout(timeoutIdRef.current);
    timeoutIdRef.current = null;
  };

  const handleClose = () => {
    setGameOver((prevOver) => !prevOver);
    setGameLaunch((prevLaunch) => !prevLaunch);
    setScore(0);
  };

  // generates a random number
  const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min)) + min;

  // generates new random number, which is different from the one before
  const getNewNumber = (currentNumber) => {
    let newNumber = getRandomNumber(0, levelsAmount); // circles.length DOES NOT work, use global variable
    newNumber === currentNumber ? getNewNumber(currentNumber) : newNumber;
    console.log(`random number: ${newNumber}`);

    setCurrentNumber(newNumber);
    timeoutIdRef.current = setTimeout(getNewNumber, pace);
    pace -= 8;
  };

  const handleCircle = (id) => {
    id !== currentNumber && stopHandler();
    setScore((prevScore) => prevScore + 2);
    /*
    if (mushroomId === 3) {
      score -= 5;
      displayScore();
      badFx.play();
      displayAlertMessage();
      setTimeout(removeAlertMessage, 1500);
      return;
    } */
    // getRandomSound();
    // rounds--;
  };

  return (
    <>
      <main className="app">
        {!gameOver && <h1>Pick the Mushroom</h1>}
        {gameLaunch && <NewGame onclick={gameSetHandler} />}
        {gameOn && (
          <Game
            score={score}
            circles={circles}
            stopHandler={stopHandler}
            handleCircle={handleCircle}
            currentNumber={currentNumber}
          />
        )}
        {gameOver && (
          <GameOver player={player} handleClose={handleClose} score={score} />
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
