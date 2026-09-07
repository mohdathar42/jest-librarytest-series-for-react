import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';


// test("testing onchange event for input element", () => {
//   render(<App />);
//   const input = screen.getByRole("textbox");
//   expect(input).toBeInTheDocument();
//   fireEvent.change(input, { target: { value: "a" } });
//   expect(input.value).toBe("a");
// });

beforeAll(()=>{
  console.log("before all test cases");
  
});
afterAll(()=>{
  console.log("after all test cases");
})
beforeEach(()=>{
  console.log("before each test cases");
})
afterEach(()=>{
  console.log("after each test cases");
})    
test("testing click event with button",()=>{
  render(<App/>);
  const btn=screen.getByRole("button");
  expect(btn).toBeInTheDocument();
  fireEvent.click(btn);
  expect(screen.getByText("updated data")).toBeInTheDocument();
});
test("testing click event with button 2",()=>{
  render(<App/>);
  const btn=screen.getByRole("button");
  expect(btn).toBeInTheDocument();
  fireEvent.click(btn);
  expect(screen.getByText("updated data")).toBeInTheDocument();
});
test("testing click event with button 3",()=>{
  render(<App/>);
  const btn=screen.getByRole("button");
  expect(btn).toBeInTheDocument();
  fireEvent.click(btn);
  expect(screen.getByText("updated data")).toBeInTheDocument();
});
test("testing click event with button 4",()=>{
  render(<App/>);
  const btn=screen.getByRole("button");
  expect(btn).toBeInTheDocument();
  fireEvent.click(btn);
  expect(screen.getByText("updated data")).toBeInTheDocument();
});