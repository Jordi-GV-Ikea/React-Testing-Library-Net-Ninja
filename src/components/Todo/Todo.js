import React, { useState } from 'react'
import AddInput from '../AddInput/AddInput'
import Header from '../Header/Header'
import TodoList from '../TodoList/TodoList'
import "./Todo.css"
import Fetch from '../fetch/fetch'

function Todo() {

    const [todos, setTodos] = useState([])

    return (
        <div className="todo">
            <Header title="Todo" />
            <AddInput
                setTodos={setTodos}
                todos={todos}
            />
            <TodoList
                todos={todos}
                setTodos={setTodos}
            />
            <hr />
            <Fetch url="https://randomuser.me/api/?results=5" />

        </div>
    )
}

export default Todo
