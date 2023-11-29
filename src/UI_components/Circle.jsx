const Circle = ({ handleCircle, id }) => {
  return (
    <div className="circle" onClick={() => handleCircle(id)}>
      {id}
    </div>
  );
};

export default Circle;
