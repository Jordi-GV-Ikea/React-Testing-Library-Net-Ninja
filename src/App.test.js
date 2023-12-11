import { prettyDOM, render } from "@testing-library/react"
import App from "./App"
import { BrowserRouter } from "react-router-dom"

const MockAppComponent = () => {
    return <BrowserRouter>
        <App />
    </BrowserRouter>
}
test("Renders headings h1 with text Todo, h3 Hello and h3 goodby", () => {
    const { getByRole } = render(<MockAppComponent />)


    const heading1Element = getByRole('heading', { level: 1 }); // <h1>


    const h3HelloElement = getByRole('heading', { level: 3, name: /My Header/i })
    const h3GoodbyElement = getByRole('heading', { level: 3, name: /Goodby/i })

    expect(heading1Element).toBeVisible();
    expect(h3HelloElement.textContent).toBe("Hello")
    expect(h3GoodbyElement.textContent).toBe("Goodby")
})