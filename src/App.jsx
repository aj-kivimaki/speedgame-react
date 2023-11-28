// gameSetHandler, clickHandler, nextCircle, startHandler, stopHandler, closeHandler
import NewGame from "./components/NewGame";

const gameSetHandler = (difficulty) => {
  console.log(difficulty);
};

function App() {
  return (
    <div className="app">
      <h1>Speedgame</h1>
      <NewGame onclick={gameSetHandler} />
    </div>
  );
}

export default App;
