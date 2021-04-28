import React from 'react';
import './App.css';
import RegistrationForm from './modules/RegistrationForm/index';
import Login from './modules/RegistrationForm/login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='wrap'>
        <Switch>
          <Route exact path='/registration'>
            <RegistrationForm/>
          </Route>
          <Route exact path='/login'>
            <Login/>
          </Route> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
