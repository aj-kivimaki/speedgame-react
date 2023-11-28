// modal with player name, final score, conditional message, close modal button

const GameOver = () => {
  return (
    <div id="overlay">
      <div className="game-results-screen">
        <p id="high-score-message"></p>
        <p id="game-result"></p>
        <div id="close-overlay">X</div>
      </div>
    </div>
  );
};
export default GameOver;
