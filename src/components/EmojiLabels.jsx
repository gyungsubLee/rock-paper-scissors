const EmojiLabels = ({ icons }) => (
  <div id="icons">
    {Object.entries(icons).map(([emoji, ids]) => (
      <div key={emoji}>
        {ids.map((id) => (
          <label key={id} htmlFor={id}>{emoji}</label>
        ))}
      </div>
    ))}
  </div>
);

export default EmojiLabels;