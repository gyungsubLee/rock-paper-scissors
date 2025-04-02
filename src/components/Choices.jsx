import styled from "styled-components";

const Choices = ({ choices, handleClick }) => {
  return (
    <ChoicesWrapper>
      {choices.map((choice) => (
        <ChoiseButton key={choice} onClick={() => handleClick(choice)}>
          {choice === "rock"
            ? "\u270A"
            : choice === "paper"
            ? "\u270B"
            : "\u270C"}
        </ChoiseButton>
      ))}
    </ChoicesWrapper>
  );
};

export default Choices;

const ChoicesWrapper = styled.div`
  display: flex;
  justify-content: center;

  & button {
  }

  & button:hover {
    box-shadow: 0 0 5px;
  }
`;

const ChoiseButton = styled.button`
  font-size: 2rem;
  margin: 0 10px;
  padding: 10px;
  cursor: pointer;
  background: white;
  border: 1px solid #ccc;
  border-radius: 8px;
`;
