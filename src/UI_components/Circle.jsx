const Circle = ({ handleCircle, id, currentNumber }) => {
  return (
    <div
      className={`circle ${currentNumber ? "active" : ""}`}
      onClick={() => handleCircle(id)}
    ></div>
  );
};

export default Circle;
