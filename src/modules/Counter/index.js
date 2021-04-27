import React, { useState } from 'react';
import './index.css';

function Counter () {

    const [count, setCount] = useState(0);

    return (
        <div className='counter'>
            <button onClick={() => setCount(count + 1)} className='button'>+</button>
                {count}
            <button onClick={() => setCount(count - 1)} className='button'>-</button>
        </div>
    );
}
    
export default Counter;