// Hand.jsx
const Hand = ({ id, className }) => (
  <div className={`hand ${className}`} id={id}>
    <div className="fist"></div>
    <div className="finger finger-1"></div>
    <div className="finger finger-2"></div>
    <div className="finger finger-3"></div>
    <div className="finger finger-4"></div>
    <div className="thumb"></div>
    <div className="arm"></div>
  </div>
)

export default Hand;