// components/Hand.js
import React from "react";
import styled, { css } from "styled-components";

const Hand = ({ type, count, player, isWinner }) => {
  return (
    <BoxWrapper>
      <HandWrapper player={player}>
        <Fist />
        <Finger1 type={type} />
        <Finger2 type={type} />
        <Finger3 type={type} />
        <Finger4 type={type} />
        <Thumb />
        <Arm />
      </HandWrapper>
      <PlayerName isWinner={isWinner}>
        {player}: {count}
      </PlayerName>
    </BoxWrapper>
  );
};

export default Hand;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 300px;
  margin: 0 30px;
`;

const PlayerName = styled.h3`
  font-size: 1.2rem;
  color: #333;
  font-color: ${({ isWinner }) => (isWinner ? "4px solid #4caf50" : "none")};
  text-shadow: ${({ isWinner }) =>
    isWinner ? "0 0 15px rgba(76, 175, 80, 0.7)" : "none"};
  transition: all 0.3s ease-in-out;
`;

const HandWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  animation: ${({ player }) =>
    player === "user" ? "handShake2 2s infinite" : "handShake 2s infinite"};
  transform: ${({ player }) =>
    player === "user" ? "rotateY(180deg)" : "none"};
  border-radius: 16px;

  & > div {
    position: absolute;
    box-sizing: border-box;
    background: ${({ isWinner }) => (isWinner ? "#ffe082" : "gold")};
  }

  @media (max-width: 600px) {
    width: 150px;
    height: 150px;
  }
`;

const Fist = styled.div`
  height: 55%;
  min-height: 90px;
  left: 20%;
  top: 25%;
  bottom: 25%;
  width: 45%;
  border-radius: 20px 0 0 20px;
  border: 2px solid black;
`;

const Finger = styled.div`
  width: 70px;
  height: 30px;
  left: 80px;
  border-radius: 20px;
  border: 2px solid black;
  transform-origin: 0 50%;
`;

const paperFingerStyle = css`
  left: 95px;
  width: 80px;
  border-left: 0;
  border-radius: 0 20px 20px 0;
`;

const scissorsFingerStyle = (rotateDeg) => css`
  width: 80%;
  max-width: 130px;
  transform: rotate(${rotateDeg}deg);
`;

const Finger1 = styled(Finger)`
  top: 25%;
  ${({ type }) => type === "scissors" && scissorsFingerStyle(-5)}
  ${({ type }) => type === "paper" && paperFingerStyle}
`;

const Finger2 = styled(Finger)`
  top: 39%;
  left: 84px;
  ${({ type }) => type === "scissors" && scissorsFingerStyle(5)}
  ${({ type }) => type === "paper" && paperFingerStyle}
`;

const Finger3 = styled(Finger)`
  top: 53%;
  ${({ type }) => type === "paper" && paperFingerStyle}
`;

const Finger4 = styled(Finger)`
  top: 67%;
  height: 26px;
  left: 76px;
  ${({ type }) => type === "paper" && paperFingerStyle}
`;

const Thumb = styled.div`
  width: 35px;
  height: 70px;
  border-radius: 0 20px 20px 20px;
  top: 25%;
  left: 80px;
  box-shadow: -17px 6px 0 -15px black;
  border: 2px solid black;
  border-left: 0;
`;

const Arm = styled.div`
  width: 22px;
  height: 70px;
  left: 20px;
  top: 32%;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
`;
