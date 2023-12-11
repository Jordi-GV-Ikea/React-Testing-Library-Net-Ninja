import { render, screen } from "@testing-library/react";

const Listas = ({ listas }) => {
  return (
    <>
      <ul>
        {listas.map((item, index) => (
          <li key={index}>
            {item}#{index}
          </li>
        ))}
      </ul>
    </>
  );
};
describe("<Listas />", () => {
  test("list has 4 items", () => {
    render(<Listas listas={["item", "item", "item", "el"]} />);
    const items = screen.getAllByRole("listitem");
    expect(items.length).toBe(4);
  });
  test("list has 3 elements with the text item", () => {
    render(<Listas listas={["item", "item", "item", "el"]} />);
    const items = screen.getAllByText(/item/i);
    expect(items.length).toBe(3);
  });
});
