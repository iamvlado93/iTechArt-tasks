import './App.css';
import Counter from './modules/Counter';
import CounterConstructor from './modules/CounterConstructor';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {

  return (
    <Router>
      <nav className='navigation'>
        <Link to='/Counter'><button>Counter</button></Link>
        <Link to='/CounterConstructor'><button>Counter Constructor</button></Link>
      </nav>
      <main className='main'>
        <Switch>
          <Route exact path="/Counter">
            <SimpleCounter />
          </Route>
          <Route path="/CounterConstructor">
            <CreateCounter />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

function SimpleCounter() {
  return (
      <Counter />
  )};

function CreateCounter() {
  return (
      <CounterConstructor />
  )};
