<<<<<<< HEAD
import React, { useState } from 'react';
import {} from './counter-constructor.css';

const Counter = ({getCounterValue}) => {
    const [count, setCount] = useState(0);

=======
import React, {useState} from 'react';
import {} from './counter-constructor.css';


const Counter = ({getCounterValue}) => {
    const [count, setCount] = useState(0);
>>>>>>> 34ce0a925224795a5a194df3c024481e9cd685b2
    const countPlus = () => {
        setCount(count + 1)
        getCounterValue(1)
    }
<<<<<<< HEAD
    
    const countMinus = () => {
        setCount(count - 1)
        getCounterValue(1)
=======
    const countMinus = () => {
        setCount(count - 1)
        getCounterValue(-1)
>>>>>>> 34ce0a925224795a5a194df3c024481e9cd685b2
    }

    return (
        <div className='counter'>
            <button onClick={countPlus} className='button'>+</button>
<<<<<<< HEAD
                {count}
=======
            {count}
>>>>>>> 34ce0a925224795a5a194df3c024481e9cd685b2
            <button onClick={countMinus} className='button'>-</button>
        </div>
    );
}
<<<<<<< HEAD

export default Counter; 
=======
    
export default Counter;
>>>>>>> 34ce0a925224795a5a194df3c024481e9cd685b2
