import { render, screen } from "@testing-library/react"
import TodoFooter from "../TodoFooter"
import { MemoryRouter } from "react-router-dom";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => <MemoryRouter>
    <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
</MemoryRouter>


describe("<TodoFooter />", () => {

    test("Todo: should render the correct amount of incomplete tasks", () => {
        render(<MockTodoFooter numberOfIncompleteTasks={3} />)

        const counterElement = screen.getByText(/3 tasks left/i)
        expect(counterElement).toBeVisible()
    })
    test("Todo: should render 'task' when the number of incomplete tasks is 1", () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1} />)

        const counterElement = screen.getByText(/1 task left/i)
    })
    test("Todo: should have a 'p' tag", () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1} />)

        const counterElement = screen.getByText(/1 task left/i)
        expect(counterElement).toContainHTML('p')
        expect(counterElement).toHaveTextContent(/task left/i)
    })
})