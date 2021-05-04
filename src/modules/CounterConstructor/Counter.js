import React, { useState } from 'react';

import './index.css';

const Counter = ({ getCounterValue }) => {
  const [count, setCount] = useState(0);

  const countPlus = () => {
    setCount(count + 1);
    getCounterValue(1);
  };

  const countMinus = () => {
    setCount(count - 1);
    getCounterValue(1);
  };

  return (
    <div className="counter">
      <button type="button" onClick={countPlus} className="button">
        +
      </button>
      {count}
      <button type="button" onClick={countMinus} className="button">
        -
      </button>
    </div>
  );
};

export default Counter;
