import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import RegistrationForm from './modules/RegistrationForm';
import Profile from './modules/RegistrationForm/profile';
import Counter from './modules/Counter';
import CounterConstructor from './modules/CounterConstructor';
import TodoForm from './modules/ToDoApp';
import CounterRedux from './modules/CounterRedux';
import StyledComponents from './modules/StyledComponents';
import SimpleTodoRedux from './modules/SimpleTodoRedux';

import ROUTES from './const';

import './App.css';


export default function App() {
  return (
    <Router>
      <nav className="navigation">
        <Link to={ROUTES.COUNTER}>
          <button type="button">Counter</button>
        </Link>
        <Link to={ROUTES.COUNTER_CONSTRUCTOR}>
          <button type="button">Counter Constructor</button>
        </Link>
        <Link to={ROUTES.REGISTRATION_FORM}>
          <button type="button">Registration Form</button>
        </Link>
        <Link to={ROUTES.TODO_APP}>
          <button type="button">To do App</button>
        </Link>
        <Link to={ROUTES.COUNTER_REDUX}>
          <button type="button">Counter Redux</button>
        </Link>
        <Link to={ROUTES.STYLED_COMPONENTS}>
          <button type="button">Styled Components</button>
        </Link>
        <Link to={ROUTES.SIMPLE_TODO_REDUX}>
          <button type="button">Simple Todo Redux</button>
        </Link>
      </nav>

      <Switch>
        <Route path={ROUTES.COUNTER}>
          <Counter />
        </Route>

        <Route path={ROUTES.COUNTER_CONSTRUCTOR}>
          <CounterConstructor />
        </Route>

        <Route path={ROUTES.REGISTRATION_FORM}>
          <RegistrationForm />
        </Route>

        <Route path={ROUTES.PROFILE}>
          <Profile />
        </Route>

        <Route path={ROUTES.TODO_APP}>
          <TodoForm />
        </Route>

        <Route path={ROUTES.COUNTER_REDUX}>
          <CounterRedux />
        </Route>

        <Route path={ROUTES.STYLED_COMPONENTS}>
          <StyledComponents />
        </Route>

        <Route path={ROUTES.SIMPLE_TODO_REDUX}>
          <SimpleTodoRedux />
        </Route>
      </Switch>
    </Router>
  );
}
