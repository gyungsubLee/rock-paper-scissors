const Hand = ({ type, player }) => {
  return (
    <div className={`hand ${player} ${type || ""}`}>
      <div className="fist" />
      <div className="finger finger-1" />
      <div className="finger finger-2" />
      <div className="finger finger-3" />
      <div className="finger finger-4" />
      <div className="thumb" />
      <div className="arm" />
    </div>
  );
}

export default Hand;