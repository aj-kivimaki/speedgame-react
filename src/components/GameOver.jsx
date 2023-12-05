// modal with player name, final score, conditional message, close modal button

const GameOver = ({ player, handleClose, score }) => {
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
        <p id="game-result">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          exercitationem, omnis doloribus laudantium, molestiae numquam nam
          vitae et velit ullam, id magnam. Provident labore blanditiis quibusdam
          atque perferendis adipisci! Incidunt.
        </p>
      </div>
    </div>
  );
};
export default GameOver;
