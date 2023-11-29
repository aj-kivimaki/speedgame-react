// current code, listing the circles, end game button
import Circle from "../UI_components/Circle";

const Game = ({ score, circles, stopHandler, handleCircle }) => {
  return (
    <>
      <div className="title-scores-container">
        <div className="scores">
          <p className="game-score">
            Score: <span className="score">{score}</span>
          </p>
          <p className="high-score">
            High Score: <span id="high-score">22</span>
          </p>
          <h3 id="alert-message"></h3>
        </div>
      </div>
      <div className="circles-buttons-container">
        <div className="circle-container">
          {circles.map((_, i) => (
            <Circle key={i} id={i} handleCircle={handleCircle} />
          ))}
        </div>

        <div className="button-container">
          <button onClick={stopHandler}>Stop Game</button>
        </div>
        <button id="js-info-button" className="info-button">
          Info
        </button>
      </div>
    </>
  );
};
export default Game;
