import {useState} from 'react';
import './App.css';
import Counter from './components/counter-constructor/counter-constructor';

function App() {
  const [counters, setCounters] = useState([])
  const [sum, setSum] = useState(0)
  const createCounter = () => {
    setCounters([...counters, {name: `Counter ${counters.length + 1}`}])
  }
  const getCounterValue = (value) => {
    setSum(sum + value)
  }
  return (
    <div className='wrap'>
      <button onClick={createCounter}>Create</button>
      {counters.map((counter) => (
        <Counter getCounterValue={getCounterValue} key={counter.name}/> 
      ))}
      <span>{sum}</span>
    </div>
  );
}

export default App;
