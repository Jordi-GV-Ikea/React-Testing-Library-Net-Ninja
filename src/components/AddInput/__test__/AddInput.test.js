import { fireEvent, prettyDOM, render, screen } from "@testing-library/react"
import AddInput from "../AddInput"

const mockedSetTodos = jest.fn();

describe("<AddInput />", () => {

    test("render a input tag", () => {
        render(<AddInput todos={[]} setTodos={mockedSetTodos} />)
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    })
    test("should be able to type into input", () => {
        render(<AddInput todos={[]} setTodos={mockedSetTodos} />)
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
        fireEvent.change(inputElement, { target: { value: "Go grocery shopping" } })
        expect(inputElement.value).toBe("Go grocery shopping")
    })
    test("Should have empty when Add button is clicked", () => {
        render(<AddInput todos={[]} setTodos={mockedSetTodos} />)
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
        fireEvent.change(inputElement, { target: { value: "Go grocery shopping" } })

        const buttonElement = screen.getByRole("button", { name: /Add/i });
        fireEvent.click(buttonElement)
        expect(mockedSetTodos).toBeCalled()
        expect(inputElement.value).toBe("")
    })
})

