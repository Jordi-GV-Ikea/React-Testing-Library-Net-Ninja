import { render } from "@testing-library/react";
import FetchApi from "../fetchAPi";

test('fetch data properly', async () => {
    const { findByText, getByText } = render(<FetchApi />);
    const placeholder = getByText(/waiting.../i)
    console.log(prettyDOM(placeholder))
    const todo = await (findByText("delectus aut autem"))
    console.log(prettyDOM(todo))
})