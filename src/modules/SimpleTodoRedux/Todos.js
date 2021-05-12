import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const handleClick = (id) =>
    dispatch({
      type: 'REMOVE_TODO',
      payload: id,
    });
  if (!todos || !todos.length) {
    return <p>NO TODOS</p>;
  }
  return (
    <ul>
      {todos.map((todo) => (
        <li>
          {todo.label}
          <button type="button" onClick={() => handleClick(todo.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Todos;
