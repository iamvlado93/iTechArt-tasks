import './App.css';
import Counter from './modules/Counter';
import CounterConstructor from './modules/CounterConstructor';

function App() {

  return (
    <div className='wrap'>
      <Counter/> 
      <CounterConstructor />
    </div>
  );
}

export default App;
