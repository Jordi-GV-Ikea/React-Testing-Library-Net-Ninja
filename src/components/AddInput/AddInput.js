import React, { useState } from 'react'
import "./AddInput.css"
import { v4 } from "uuid"
import Form from '../Header/__test__/Form'
import CostInput from '../Header/__test__/Cost'

function AddInput({
    setTodos, todos
}) {

    const [todo, setTodo] = useState("")

    const addTodo = () => {
        if (!todo) return
        let updatedTodos = [
            ...todos,
            {
                id: v4(),
                task: todo,
                completed: false
            }
        ]
        setTodos(updatedTodos);
        setTodo("")
    }

    return (
        <>

            <div className="input-container">
                <input
                    className="input"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    placeholder="Add a new task here..."
                />
                <button
                    className="add-btn"
                    onClick={addTodo}
                >
                    Add
                </button>


            </div>
        </>
    )
}

export default AddInput
