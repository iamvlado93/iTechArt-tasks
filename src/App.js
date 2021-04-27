import {useState} from 'react';
import './App.css';
import Counter from './components/counter-constructor/counter-constructor';

function App() {
  const [counters, setCounters] = useState([])
  const [sum, setSum] = useState(0)
  
  const createCounter = () => {
    setCounters([...counters, {name:`${counters.length + 1}`}])
    console.log(counters)
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
      <span>Кол-во пол.кликов: {sum}</span>
    </div>
  );
}

export default App;
