import Circle from "../UI_components/Circle";

const Game = ({
  score,
  circles,
  stopHandler,
  handleCircle,
  currentNumber,
  highScore,
}) => {
  return (
    <>
      <div className="title-scores-container">
        <div className="scores">
          <p className="game-score">
            Score: <span className="score">{score}</span>
          </p>
          <p className="high-score">
            High Score: <span id="high-score">{highScore}</span>
          </p>
          <h3 id="alert-message"></h3>
        </div>
      </div>
      <div className="circles-buttons-container">
        <div className="circle-container">
          {circles.map((_, i) => (
            <Circle
              key={i}
              id={i}
              handleCircle={handleCircle}
              currentNumber={currentNumber === i}
            />
          ))}
        </div>

        <div className="button-container">
          <button onClick={stopHandler}>Stop Game</button>
        </div>
      </div>
    </>
  );
};
export default Game;
