import React from 'react';
import {} from './counter.css'

class CounterComponent extends React.Component {
    state = {
        count: 0
    }

    plus = () => {
        this.setState({ count: this.state.count + 1 });
    }

    minus = () => {
        this.setState({ count: this.state.count - 1 });
    }
    
    render() {
        return (
            <div className='counter'>
                <button onClick={this.plus} className='button'>+</button>
                {this.state.count}
                <button onClick={this.minus} className='button'>-</button>
            </div>
        )
    }
}

export default CounterComponent;