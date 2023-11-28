// input for name and difficulty levels
import { useState } from "react";

const NewGame = ({ onclick }) => {
  const [name, setName] = useState("");

  const inputHandler = (e) => setName(e.target.value);

  return (
    <div className="new-game">
      <h2>Start a game by giving a name</h2>
      <div className="input">
        <input
          onChange={inputHandler}
          type="text"
          name="name"
          placeholder="name"
          required
        />
      </div>
      <h2>and choosing the difficulty level</h2>

      <button onClick={() => onclick("easy", name)}>Easy</button>
      <button onClick={() => onclick("intermediate", name)}>
        Intermediate
      </button>
      <button onClick={() => onclick("hard", name)}>Hard</button>
    </div>
  );
};

export default NewGame;
