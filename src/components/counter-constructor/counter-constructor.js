import React from 'react';
import {} from './counter-constructor.css';

class CounterConstructorComponent extends React.Component {
    state = {
        count: 0,
        counters: []
    }

    addCounter() {
        this.setState({ counters: [...this.state.counters, '']})
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
                {this.state.counters.map(( index ) => {
                    return (
                        <div key={index}>
                            <div className='counter'>
                                <button onClick={this.plus} className='button button__plus'>+</button>
                                {this.state.count}
                                <button onClick={this.minus} className='button button__minus'>-</button>
                            </div>
                        </div>
                    )
                })}
                <button onClick={(e) => this.addCounter(e)} className='button button__add'>Add Counter</button>
            </div>
        )
    }
}

export default CounterConstructorComponent;