const Circle = ({ handleCircle, id, currentNumber }) => {
  return (
    <div
      className={`circle ${currentNumber ? "circle" : ""}`}
      onClick={() => handleCircle(id)}
    >
      {id}
    </div>
  );
};

export default Circle;
