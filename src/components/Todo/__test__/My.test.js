import { prettyDOM, render, screen, fireEvent } from "@testing-library/react"
import Todo from "../Todo"
import { BrowserRouter } from "react-router-dom"


const setup = () => {
    const container = render(
        <BrowserRouter>
            <Todo />
        </BrowserRouter>);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const addButtonElement = screen.getByRole('button');
    const addTodo = (todos) => {
        todos.forEach(todo => {
            fireEvent.change(inputElement, { target: { value: todo } });
            fireEvent.click(addButtonElement)
        });
    }
    return { inputElement, addButtonElement, addTodo, ...container }
}

describe("<Todo />", () => {

    test("Add item to the list when is entered", () => {
        const { inputElement, addButtonElement, addTodo } = setup()
        addTodo(['coding', 'studing'])
        const divElement = screen.getByText(/coding/i)
        const divElements = screen.getAllByTestId(/todo-item/i)
        expect(divElement).toBeVisible()
    })
})
