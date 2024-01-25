const Info = ({ clickHandler }) => {
  return (
    <div id="overlay2" className="hide">
      <div className="info">
        <h3>⭐️ RULES ⭐️</h3>
        <p>✅ Pick the mushrooms and get +2 points each.</p>
        <p>
          ❌ If you stab, you MUST hit a mushroom. Stab air and you will loose.
          BE FAST!
        </p>
        <div id="close-overlay2" onClick={clickHandler}>
          X
        </div>
      </div>
    </div>
  );
};
export default Info;
