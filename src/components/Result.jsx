// Result.jsx
import styled from "styled-components";

const Result = ({ result, reset }) => {
  return (
    <ResultWrapper>
      {result && (
        <>
          <ResultTitle>{result}</ResultTitle>
          <RefreshWrapper>
            <RefreshButton onClick={reset} $visible={!!result}>
              Refresh Round
            </RefreshButton>
          </RefreshWrapper>
        </>
      )}
    </ResultWrapper>
  );
};

export default Result;

const ResultWrapper = styled.div`
  height: 120px;
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ResultTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 10px;
`;

const RefreshWrapper = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RefreshButton = styled.button`
  visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
  margin: 0 5px;
  padding: 5px 10px;
  cursor: pointer;
  background: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-weight: normal;
  box-shadow: none;
  transition: all 0.2s;

  &:hover {
    font-weight: ${({ $visible }) => ($visible ? "600" : "normal")};
    box-shadow: ${({ $visible }) => ($visible ? "0 0 1px" : "none")};
  }
`;
