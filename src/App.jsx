import { useState, useRef } from "react";
import Footer from "./UI_components/Footer";
import NewGame from "./components/NewGame";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
import Info from "./components/Info";
import { levels } from "./levels";

// generates a random number
const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

function App() {
  const [player, setPlayer] = useState({});
  const [circles, setCircles] = useState([]);
  const [score, setScore] = useState(0);
  const [currentNumber, setCurrentNumber] = useState(0);
  const [gameLaunch, setGameLaunch] = useState(true);
  const [gameOn, setGameOn] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);

  const timeoutIdRef = useRef(null);
  const roundsRef = useRef(0);
  const currentInst = useRef(0);

  let pace = 1000;
  let levelsAmount = 0;

  const gameSetHandler = (difficulty, name) => {
    // find the element
    const { amount } = levels.find((el) => el.level === difficulty);
    levelsAmount = amount;

    // create array of numbers, starting from 0
    const circlesArray = Array.from({ length: levelsAmount }, (_, i) => i);
    setCircles(circlesArray);

    setPlayer({
      difficulty,
      name,
      score,
    });

    setGameLaunch((prevLaunch) => !prevLaunch);
    gameStart();
  };

  const gameStart = () => {
    setGameOn((prevOn) => !prevOn);
    getNewNumber(currentNumber);
  };

  const stopHandler = () => {
    // clearTimeout(timer); /* USE useRef instead */
    clearTimeout(timeoutIdRef.current);
    timeoutIdRef.current = null;
    setGameOn((prevOn) => !prevOn);
    setGameOver((prevOver) => !prevOver);
    roundsRef.current = null;
    pace = 1000;
  };

  const handleClose = () => {
    setGameOver((prevOver) => !prevOver);
    setGameLaunch((prevLaunch) => !prevLaunch);
    setScore(0);
  };

  // generates new random number, which is different from the one before
  const getNewNumber = () => {
    // ends the game after three missed clicks
    if (roundsRef.current >= 3) return stopHandler();

    let newNumber;

    do {
      newNumber = getRandomNumber(0, levelsAmount);
    } while (newNumber === currentInst.current);

    setCurrentNumber(newNumber);
    currentInst.current = newNumber;
    roundsRef.current++;
    pace -= 8;
    timeoutIdRef.current = setTimeout(getNewNumber, pace);
  };

  const handleCircle = (id) => {
    id !== currentNumber && stopHandler();
    setScore((prevScore) => prevScore + 2);
    roundsRef.current--;
  };

  const clickHandler = () => {
    setOpenInfo(!openInfo);
  };

  return (
    <>
      <main className="app">
        {!gameOver && <h1>Pick the Mushroom</h1>}
        {gameLaunch && (
          <NewGame onclick={gameSetHandler} clickHandler={clickHandler} />
        )}
        {openInfo && <Info clickHandler={clickHandler} set />}
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
