import {useState} from 'react';
import './index.css';
import Counter from './Counter';

function CounterConstructor() {
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
  
  export default CounterConstructor;