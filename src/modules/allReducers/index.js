import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import todoReducer from './todoReducer';

const allReducers = combineReducers({
  counter: counterReducer,
  todo: todoReducer
});

export default allReducers;
