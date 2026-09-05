import { render, screen } from '@testing-library/react';
import App from './App';
import { Sum } from './Sum';

test('Other renders input element', () => {
  render(<App />);
  //always used to test input element is getByRole('textbox')
  const inputTextElement = screen.getByRole('textbox');
  const placeholderCheck = screen.getByPlaceholderText(/Enter your name/i);
  expect(inputTextElement).toBeInTheDocument();
  expect(placeholderCheck).toBeInTheDocument();
  expect(inputTextElement).toHaveAttribute('name', 'username');
  expect(inputTextElement).toHaveAttribute('id', 'name');
  expect(inputTextElement).toHaveAttribute('type', 'text');

 // expect(inputTextElement).toHaveAttribute('value', 'username4');
});

describe("UI  grouping of test cases", () => {
  test('Other renders input element 1', () => {
    render(<App />);
    //always used to test input element is getByRole('textbox')
    const inputTextElement = screen.getByRole('textbox');
    const placeholderCheck = screen.getByPlaceholderText(/Enter your name/i);
    expect(inputTextElement).toBeInTheDocument();
    expect(placeholderCheck).toBeInTheDocument();

  });
  test('Other renders input element 2', () => {
    render(<App />);
    //always used to test input element is getByRole('textbox')
    const inputTextElement = screen.getByRole('textbox');
    const placeholderCheck = screen.getByPlaceholderText(/Enter your name/i);
    expect(inputTextElement).toBeInTheDocument();
    expect(placeholderCheck).toBeInTheDocument();

  });
  test('Other renders input element 3', () => {
    render(<App />);
    //always used to test input element is getByRole('textbox')
    const inputTextElement = screen.getByRole('textbox');
    const placeholderCheck = screen.getByPlaceholderText(/Enter your name/i);
    expect(inputTextElement).toBeInTheDocument();
    expect(placeholderCheck).toBeInTheDocument();

  });

});
describe("API  grouping of test cases", () => {
  test('api test case 1', () => {
    render(<App />);
    //always used to test input element is getByRole('textbox')
    const inputTextElement = screen.getByRole('textbox');
    const placeholderCheck = screen.getByPlaceholderText(/Enter your name/i);
    expect(inputTextElement).toBeInTheDocument();
    expect(placeholderCheck).toBeInTheDocument();

  });
  describe.only("inner est case",()=>{
    render(<Sum/>)
  test("get sum two no",()=>{
    expect(Sum(7,9)).toBe(16);
  })
  })
  test('api test case 2', () => {
    render(<App />);
    //always used to test input element is getByRole('textbox')
    const inputTextElement = screen.getByRole('textbox');
    const placeholderCheck = screen.getByPlaceholderText(/Enter your name/i);
    expect(inputTextElement).toBeInTheDocument();
    expect(placeholderCheck).toBeInTheDocument();

  });
  test('api test case 3', () => {
    render(<App />);
    //always used to test input element is getByRole('textbox')
    const inputTextElement = screen.getByRole('textbox');
    const placeholderCheck = screen.getByPlaceholderText(/Enter your name/i);
    expect(inputTextElement).toBeInTheDocument();
    expect(placeholderCheck).toBeInTheDocument();

  });

})