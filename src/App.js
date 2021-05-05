import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import RegistrationForm from './modules/RegistrationForm';
import Profile from './modules/RegistrationForm/Profile';
import Counter from './modules/Counter';
import CounterConstructor from './modules/CounterConstructor';
import TodoForm from './modules/ToDoApp';
import CounterRedux from './modules/CounterRedux';
import StyledComponents from './modules/StyledComponents';

import ROUTES from './const';

import './App.css';

export default function App() {
  return (
    <Router>
      <nav className="navigation">
        <Link to="/counter">
          <button type="button">Counter</button>
        </Link>
        <Link to="/counter-constructor">
          <button type="button">Counter Constructor</button>
        </Link>
        <Link to="/registration-form">
          <button type="button">Registration Form</button>
        </Link>
        <Link to="/todo-app">
          <button type="button">To do App</button>
        </Link>
        <Link to="/counter-redux">
          <button type="button">Counter Redux</button>
        </Link>
        <Link to="/styled-components">
          <button type="button">Styled Components</button>
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
      </Switch>
    </Router>
  );
}
