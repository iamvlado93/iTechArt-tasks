import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement } from './actions';

function CounterRedux() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter {counter}</h1>
      <button type="button" onClick={() => dispatch(increment())}>
        +
      </button>
      <button type="button" onClick={() => dispatch(decrement())}>
        -
      </button>
    </div>
  );
}

export default CounterRedux;
