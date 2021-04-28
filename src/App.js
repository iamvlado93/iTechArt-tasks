import React from 'react';
import './App.css';
import RegistrationForm from './modules/RegistrationForm/index';
import Profile from './modules/RegistrationForm/profile';
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
          <Route exact path='/profile'>
            <Profile/>
          </Route> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
