import { prettyDOM, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from "../FollowersList";

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
    })
);
beforeEach(() => {
    fetch.mockClear();
});
const MockFollowersList = () => {
    // const container = await render(
    //     <BrowserRouter>
    //         <FollowersList />
    //     </BrowserRouter>
    // )
    return render(
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}

describe("<FollowersList/>", () => {
    test("Should render one follower item", async () => {
        render(<FollowersList />)
        //const container = await MockFollowersList()
        //console.log(prettyDOM(container))
        //screen.getByText(/hello/i)
    })

})

// const setup = () => {
//     const utils = render(<CostInput />);
//     const input = screen.getByLabelText("cost-input");
//     return {
//         input,
//         ...utils,
//     };
// };
