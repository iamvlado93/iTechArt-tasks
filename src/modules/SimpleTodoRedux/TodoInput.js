import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

const TodoInput = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');
  const handleChange = (event) => setNewTodo(event.target.value);
  const handleClick = () => dispatch({
    type: 'ADD_TODO',
    payload: {
      label: newTodo,
      id: Math.random(),
    }
  })
  return (
    <>
    <input value={newTodo} onChange={handleChange} type='text' />
    <button type='button' onClick={handleClick}>Add</button>
    </>
  )
};



export default TodoInput;