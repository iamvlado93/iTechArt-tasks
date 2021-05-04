import { useState } from 'react';

import Counter from './Counter';

import './index.css';

function CounterConstructor() {
  const [counters, setCounters] = useState([]);
  const [sum, setSum] = useState(0);

  const createCounter = () => {
    setCounters([...counters, { name: `${counters.length + 1}` }]);
  };

  const getCounterValue = (value) => {
    setSum(sum + value);
  };

  return (
    <div className="wrap">
      <button type="button" onClick={createCounter}>
        Create
      </button>
      {counters.map((counter) => (
        <Counter getCounterValue={getCounterValue} key={counter.name} />
      ))}
      <span>Кол-во пол.кликов: {sum}</span>
    </div>
  );
}

export default CounterConstructor;
