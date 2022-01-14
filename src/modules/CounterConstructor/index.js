/* eslint-disable no-console */
import { useState } from 'react';

import Counter from './Counter';

import './index.css';

function CounterConstructor() {
  const [counters, setCounters] = useState([]);

  const createCounter = () => {
    setCounters([...counters, { name: Math.random() }]);
  };

  console.log(counters);

  const deleteCounters = (name) => {
    setCounters(counters.filter((counter) => counter.name !== name));
  };

  return (
    <div className="wrap">
      <button type="button" onClick={createCounter}>
        Create
      </button>
      {counters.map((counter) => (
        <Counter key={counter.name} deleteCounters={deleteCounters} counter={counter} />
      ))}
      {JSON.stringify(counters)}
    </div>
  );
}

export default CounterConstructor;
