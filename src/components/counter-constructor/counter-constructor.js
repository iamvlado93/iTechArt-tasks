import React from 'react';
import {} from './counter-constructor.css';

class CounterComponent extends React.Component {
    state = {
        count: 0,
        counters: [{index:'', value:''}]
    }

    addCounter = () => {
        let newCounter = this.counters;
        this.setState({ counters: this.state.counters.concat(newCounter)})
    }

    plus = () => {
        this.setState({ count: this.state.count + 1 });
    }

    minus = () => {
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        return (
            <div className='main'>
                {this.state.counters.map((index, value) => {
                    return (
                        <li key={index} className='counter'>
                            <button onClick={this.plus} className='button button__plus'>+</button>
                                {this.state.value}
                            <button onClick={this.minus} className='button button__minus'>-</button>
                        </li> 
                    )
                })}
                <button onClick={this.addCounter} className='button button__add'>Add Counter</button>
            </div>
        )
    }
}

export default CounterComponent; 

// class CounterConstructorComponent extends React.Component {
//     state = {
//         count: 0,
//         counters: [{index: 1, value: }]
//     }

//     addCounter = () => {
//         const newCounter = this.state.counters;
//         this.setState({ counters: this.state.counters.concat(newCounter) })
//     }

//     plus = () => {
//         this.setState({ count: this.state.count + 1 });
//     }
        
//     minus = () => {
//         this.setState({ count: this.state.count - 1 });
//     }
    
//     render() {
//         return (
//             <div className='main'>
//                 {this.state.counters.map((index, value) => {
//                     return (
//                         <li key={index} className='counter'>
//                             <button onClick={() => this.plus()} className='button button__plus'>+</button>
//                                 {value}
//                             <button onClick={() => this.minus()} className='button button__minus'>-</button>
//                         </li> 
//                     )
//                 })}
//                 <button onClick={this.addCounter} className='button button__add'>Add Counter</button>
//             </div>
//         )
//     }
// }

// export default CounterConstructorComponent;