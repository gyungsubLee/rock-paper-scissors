import Hand from './components/Hand';
import RadioInputs from './components/RadioInputs';
import EmojiLabels from './components/EmojiLabels';
import './App.css';

const options = [
  "rock-rock", "rock-paper", "rock-scissors",
  "paper-rock", "paper-paper", "paper-scissors",
  "scissors-rock", "scissors-paper", "scissors-scissors"
];

const icons = {
  "✊": ["rock-rock", "paper-rock", "scissors-rock"],
  "🖐️": ["rock-paper", "paper-paper", "scissors-paper"],
  "✌": ["rock-scissors", "paper-scissors", "scissors-scissors"],
};

function App() {
  return (
    <div>
      <form>
        <h1>Rock Paper Scissors</h1>
        <RadioInputs options={options} />

        <div>
          <div id="hands">
            <Hand id="computer-hand" />
            <Hand id="user-hand" className="user" />
            <EmojiLabels icons={icons} />
          </div>
        </div>

        <div id="message">
          <h2></h2>
          <input type="reset" value="Refresh Round" />
        </div>
      </form>
    </div>
  );
}

export default App;