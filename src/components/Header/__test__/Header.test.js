const { render, screen, prettyDOM } = require("@testing-library/react");
import Header from "../Header";
import { MemoryRouter } from "react-router-dom";

describe("<Header />", () => {

    // Uncomment the comments placed in Header to allow all tests

    // GET BY 
    test("should render same text passed into title prop=>getByText", () => {
        const container = render(
            <MemoryRouter>
                <Header title='My Header' />
            </MemoryRouter>
        );

        const headingElement = container.getByText(/My header/i);
        const headingElement2 = container.getByRole('heading', { level: 1 });
        expect(headingElement).toBeInTheDocument();
    });
    // GET BY 
    test("Only exist one headline h1", () => {
        const container = render(
            <MemoryRouter>
                <Header title='My Header' />
            </MemoryRouter>
        );

        const headingElement = container.getByRole('heading', { level: 1 });
        const h3Element = container.getByRole('heading', { level: 3 });
        expect(headingElement).toBeInTheDocument();
    });
    test("should render same text passed into title", () => {
        const container = render(
            <MemoryRouter>
                <Header title='My Header' />
            </MemoryRouter>
        );
        const headingElement = container.getByRole(
            "heading", { name: /My Header/i, level: 1 })
        expect(headingElement).toBeInTheDocument();
    });
    test("should render same text passed into title prop -getByTitle", () => {
        const container = render(
            <MemoryRouter>
                <Header title='My header' />
            </MemoryRouter>
        );

        const headingElement = container.getByTitle("My Header")
        expect(headingElement).toBeInTheDocument();
    });
    test("should render same text passed into title prop - by testID", () => {
        const container = render(
            <MemoryRouter>
                <Header title='My header' />
            </MemoryRouter>
        );

        const headingElement = container.getByTestId("header-3")
        expect(headingElement).toBeInTheDocument();
    });

    //FIND BY
    test("should render same text passed into title prop - findByText", async () => {
        const container = render(
            <MemoryRouter>
                <Header title='My header' />
            </MemoryRouter>
        );

        const headingElement = await container.findByText(/My header/i)
        expect(headingElement).toBeInTheDocument();
    });

    //QUERY BY
    test("should render same text passed into title prop - queryByText", () => {
        const container = render(
            <MemoryRouter>
                <Header title='My header' />
            </MemoryRouter>
        );

        const headingElement = container.queryByText(/dog/i)
        expect(headingElement).toBe(null) /// queryByText  no match return null
        expect(headingElement).not.toBeInTheDocument();
    });

    //GET ALL BY
    test("should render same text passed into title prop - findByText", () => {
        const container = render(
            <MemoryRouter>
                <Header title='My header' />
            </MemoryRouter>
        );

        const headingElements = container.getAllByRole("heading") // return Array
        expect(headingElements.length).toBe(2)

    });

})