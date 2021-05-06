import React from 'react';
import { useSelector } from 'react-redux';

const Todos = () => {
  const todos = useSelector(state => state.todos);
  if(!todos || !todos.length) {
    return <p>No todos</p>
  }
  return (
    <ul>
      {todos.map(todo => <li>{todo.label}</li>)}
    </ul>
  )
};

export default Todos;