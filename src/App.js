import React from 'react';
import './App.css';
import RegistrationForm from './modules/RegistrationForm/index';
import Profile from './modules/RegistrationForm/Profile';
import Counter from './modules/Counter';
import CounterConstructor from './modules/CounterConstructor';
import StyledComponents from './modules/StyledComponents';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

export default function App() {

  return (
    <Router>
      <nav className='navigation'>
        <Link to='/counter'><button>Counter</button></Link>
        <Link to='/counter-constructor'><button>Counter Constructor</button></Link>
        <Link to='/registration-form'><button>Registration Form</button></Link>
        <Link to='/styled-components'><button>Styled Components</button></Link>
      </nav>

      <main className='main'>
        <Switch>
          <Route path="/counter">
            <Counter />
          </Route>

          <Route path="/counter-constructor">
            <CounterConstructor />
          </Route>

          <Route path="/registration-form">
            <RegistrationForm/>
          </Route>
            <Route path="/profile">
              <Profile/>
            </Route>
          <Route path="/styled-components">
            <StyledComponents />  
          </Route> 
        </Switch>
      </main>

    </Router>
  );
}
