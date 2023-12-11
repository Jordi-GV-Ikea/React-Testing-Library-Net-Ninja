import Form from "./Form";
import { prettyDOM, render, screen, getByLabelText, getByRole, fireEvent } from "@testing-library/react";

test("Form renders input for First Name", () => {
    render(<Form />);
    screen.getByLabelText(/First name:/i);
    const firstNameInput = screen.getByLabelText(/First Name/i);
    fireEvent.change(firstNameInput, {
        target: {
            value: "23333"
        }
    });
    expect(firstNameInput.value).toBe("23333");

});
test("renders submit on the screen", () => {
    render(<Form />)

    const submitElement = screen.getByRole('button', { htmlFor: "sub" })
    expect(submitElement).toBeVisible()
})
