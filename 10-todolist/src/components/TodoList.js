import React from 'react';
import TodoListItem from './TodoListItem';
import '../scss/TodoTemplate.scss';

const TodoList = ({children}) => {
    return (
        <div className = 'TodoList'>
            <TodoListItem/>
            <TodoListItem/>
            <TodoListItem/>
        </div>
    )
}

export default TodoList
