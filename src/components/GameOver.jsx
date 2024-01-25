// modal with player name, final score, conditional message, close modal button
import looseSfx from "../assets/sound-effects/loose.wav";

const GameOver = ({ player, handleClose, score }) => {
  function loose() {
    new Audio(looseSfx).play();
  }

  // generates the result text depending on the score
  const getResultText = (score) => {
    if (score < 0) {
      loose();
      return `Wow! Minus points! ${score}p`;
    }
    if (score === 0) {
      loose();
      return "What's wrong with you? Have you even seen a mushroom before?!";
    }
    if (score < 20) return `You are so slow! You got only ${score} points.`;
    if (score < 40) return `Not bad, ${score}p.`;
    return `You are quite quick! You got ${score}p.`;
  };

  return (
    <div className="game-results-screen">
      <button onClick={handleClose} id="close-button">
        X
      </button>
      <h2>GAME OVER</h2>
      <p id="high-score-message"></p>
      <p className="points">{score}</p>
      <div className="player-container">
        <h3 className="player">{player.name}</h3>
        <h3 className="difficulty">{player.difficulty}</h3>
      </div>
      <div className="game-result-container">
        <p id="game-result">{getResultText(score)}</p>
      </div>
    </div>
  );
};
export default GameOver;
