// current code, listing the circles, end game button
import Circle from "../UI_components/Circle";

const Game = ({ score, circles, stopHandler }) => {
  return (
    <div>
      <p>{score}</p>
      <div>
        {circles.map((_, i) => (
          <Circle key={i} />
        ))}
      </div>
      <button onClick={stopHandler}>Stop Game</button>
    </div>
  );
};
export default Game;
