import './App.css';
import { Task1 } from './Task1';
import { Task2 } from './Task2';
import { Task3 } from './Task3';
import { Game } from './Game';

const counters = [
  { id: 1, initial: 6, min: -5, max: 10 },
  { id: 2, initial: 5 },
  { id: 3 },
];
const cards = [
  { id: 1, name: 'constructor Lego', price: 300 },
  { id: 2, name: 'Train Station', price: 200 },
  { id: 3, name: 'Hot Wheels Track', price: 150 },
];
function App() {
  return (
    <div className="App">
      <div>
        <Task1 initial='5' min='0' max='10' />
        <Task2 counters={counters} />
        <Task3 cards={cards} />
        <Game />
      </div>
    </div>
  );
}

export default App;
