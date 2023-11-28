// input for name and difficulty levels

const NewGame = ({ onclick }) => {
  return (
    <div className="new-game">
      <h2>Start a game</h2>
      <div className="name-input">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" />
      </div>
      <button onClick={() => onclick("easy")}>Easy</button>
      <button onClick={() => onclick("intermediate")}>Intermediate</button>
      <button onClick={() => onclick("hard")}>Hard</button>
    </div>
  );
};

export default NewGame;
