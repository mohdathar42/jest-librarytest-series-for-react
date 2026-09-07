import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';


// test("testing onchange event for input element", () => {
//   render(<App />);
//   const input = screen.getByRole("textbox");
//   expect(input).toBeInTheDocument();
//   fireEvent.change(input, { target: { value: "a" } });
//   expect(input.value).toBe("a");
// });

test("testing click event with button",()=>{
  render(<App/>);
  const btn=screen.getByRole("button");
  expect(btn).toBeInTheDocument();
  fireEvent.click(btn);
  expect(screen.getByText("updated data")).toBeInTheDocument();
});