import React, {useState} from 'react';
import {} from './counter-constructor.css';


const Counter = ({getCounterValue}) => {
    const [count, setCount] = useState(0);
    const countPlus = () => {
        setCount(count + 1)
        getCounterValue(1)
    }
    const countMinus = () => {
        setCount(count - 1)
        getCounterValue(-1)
    }

    return (
        <div className='counter'>
            <button onClick={countPlus} className='button'>+</button>
            {count}
            <button onClick={countMinus} className='button'>-</button>
        </div>
    );
}
    
export default Counter;