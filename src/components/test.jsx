import { useState } from 'react';

const hands = ["rock", "paper", "scissors"];

const getResult = (user, computer) => {
    if (user === computer) return "무승부!";
    if (
      (user === "rock" && computer === "scissors") ||
      (user === "scissors" && computer === "paper") ||
      (user === "paper" && computer === "rock")
    ) return "승리!";
    return "패배!";
  };

function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");

  const handleUserChoice = (choice) => {
    const random = hands[Math.floor(Math.random() * hands.length)];
    setUserChoice(choice);
    setComputerChoice(random);
    setResult(getResult(choice, random));
  };

  return (
    <div>
      <h1>가위 바위 보</h1>
      <div>
        {hands.map((hand) => (
          <button key={hand} onClick={() => handleUserChoice(hand)}>
            {hand === "rock" ? "✊" : hand === "paper" ? "🖐️" : "✌"}
          </button>
        ))}
      </div>
      <div>
        <p>유저: {userChoice ?? "선택 안함"}</p>
        <p>컴퓨터: {computerChoice ?? "대기 중"}</p>
        <h2>{result}</h2>
      </div>
    </div>
  );
}

export default App;