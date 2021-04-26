import './App.css';
import SignUpFormComponent from './components/registration-form';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className='wrap'>
      <SignUpFormComponent/>
    </div>
  );
}

export default App;
