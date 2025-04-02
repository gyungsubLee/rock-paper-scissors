import React, { useState } from "react";
import styled from "styled-components";

import "./App.css";
import Hand from "./components/Hand";
import Result from "./components/Result";
import Choices from "./components/Choices";

const choices = ["rock", "paper", "scissors"];

export default function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [userWinCnt, setUserWinCnt] = useState(0);
  const [computerWinCnt, setComputerWinCnt] = useState(0);
  const [result, setResult] = useState("");

  const getResult = (user, computer) => {
    if (user === computer) {
      return "You Tied!";
    } else if (
      (user === "rock" && computer === "scissors") ||
      (user === "scissors" && computer === "paper") ||
      (user === "paper" && computer === "rock")
    ) {
      setUserWinCnt((count) => count + 1);
      return "You Win!";
    } else {
      setComputerWinCnt((count) => count + 1);
      return "Computer Wins!";
    }
  };

  const handleClick = (choice) => {
    const computer = choices[Math.floor(Math.random() * 3)];
    const outcome = getResult(choice, computer);
    setUserChoice(choice);
    setComputerChoice(computer);
    setResult(outcome);
  };

  const reset = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult("");
    setUserWinCnt(0);
    setComputerWinCnt(0);
  };

  return (
    <div className="game">
      <Title>Rock Paper Scissors</Title>

      <HandWrapper>
        <Hand type={computerChoice} count={computerWinCnt} player="computer" />
        <Hand type={userChoice} count={userWinCnt} player="user" />
      </HandWrapper>

      <Choices choices={choices} handleClick={handleClick} />

      <Result result={result} reset={reset} />
    </div>
  );
}

const Title = styled.h1`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;

const HandWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 20px;
`;
