import React, { useState, useEffect } from 'react';
import Form from './Form';
import TodoList from './TodoList';
import './index.css';

const TodoForm = () => {

    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect (() => {
        getLocalTodos();
    }, [])

    useEffect(() => {
        filterHandler();
        saveLocalTodos();
    }, [todos, status]);

    const filterHandler = () => {
        switch(status) {
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed === true));
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => todo.completed === false));
                break;
            default: 
                setFilteredTodos(todos);
                break;
        }
    }

    const saveLocalTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    const getLocalTodos = () => {
        if(localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]));
        } else {
            let todoLocal = JSON.parse(localStorage.getItem('todos'));
            setTodos(todoLocal);
        }
    }

    return (
        <div className='todo'>
            <Form 
                todos={todos}
                setStatus={setStatus}
                setTodos={setTodos}
                inputText={inputText}
                setInputText={setInputText}
            />
            <TodoList 
                todos={todos} 
                setTodos={setTodos}
                filteredTodos={filteredTodos}
            />
        </div>
    )
}



export default TodoForm; 