const RadioInputs = ({ options }) => (
  <>
    {options.map((opt) => (
      <input key={opt} type="radio" id={opt} name="rock-paper-scissors" />
    ))}
  </>
);

export default RadioInputs;