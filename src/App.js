import {useState} from 'react';
import './App.css';
import Counter from './components/counter-constructor/counter-constructor';
<<<<<<< HEAD
import React, {useState} from 'react';
=======
>>>>>>> 34ce0a925224795a5a194df3c024481e9cd685b2

function App() {
  const [counters, setCounters] = useState([])
  const [sum, setSum] = useState(0)
<<<<<<< HEAD
  
  const createCounter = () => {
    setCounters([...counters, {name:`${counters.length + 1}`}])
    console.log(counters)
  }

  const getCounterValue = (value) => {
    setSum(sum + value)
  }

  return (
  <div className='wrap'>
=======
  const createCounter = () => {
    setCounters([...counters, {name: `Counter ${counters.length + 1}`}])
  }
  const getCounterValue = (value) => {
    setSum(sum + value)
  }
  return (
    <div className='wrap'>
>>>>>>> 34ce0a925224795a5a194df3c024481e9cd685b2
      <button onClick={createCounter}>Create</button>
      {counters.map((counter) => (
        <Counter getCounterValue={getCounterValue} key={counter.name}/> 
      ))}
<<<<<<< HEAD
      <span>Кол-во пол.кликов: {sum}</span>
=======
      <span>{sum}</span>
>>>>>>> 34ce0a925224795a5a194df3c024481e9cd685b2
    </div>
  );
}

export default App;
