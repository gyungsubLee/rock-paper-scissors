import React, { useState } from "react";
import "./App.css"; // 아래의 CSS를 복사해서 App.css로 저장하세요

const choices = ["rock", "paper", "scissors"];

export default function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");

  const getResult = (user, computer) => {
    if (user === computer) return "You Tied!";
    if (
      (user === "rock" && computer === "scissors") ||
      (user === "scissors" && computer === "paper") ||
      (user === "paper" && computer === "rock")
    ) {
      return "You Win!";
    }
    return "Computer Wins!";
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
  };

  return (
    <div className="game">
      <h1>Rock Paper Scissors</h1>

      <div className="hands">
        <Hand type={computerChoice} player="computer" />
        <Hand type={userChoice} player="user" />
      </div>

      <div className="choices">
        {choices.map((choice) => (
          <button key={choice} onClick={() => handleClick(choice)}>
            {choice === "rock" ? "\u270A" : choice === "paper" ? "\u270B" : "\u270C"}
          </button>
        ))}
      </div>

      <div className="result">
        <h2>{result}</h2>
        <div className="refresh-wrapper">
          <button
            onClick={reset}
            className={`refresh-btn ${result ? "visible" : ""}`}
          >
            Refresh Round
          </button>
        </div>
      </div>
    </div>
  );
}

function Hand({ type, player }) {
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