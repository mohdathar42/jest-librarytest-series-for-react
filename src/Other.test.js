import { render, screen } from '@testing-library/react';
import App from './App';

 
test('Other renders input element', () => {
  render(<App />);
  //always used to test input element is getByRole('textbox')
  const inputTextElement=screen.getByRole('textbox');
  const placeholderCheck=screen.getByPlaceholderText(/Enter your name/i);
  expect(inputTextElement).toBeInTheDocument();
  expect(placeholderCheck).toBeInTheDocument();
  expect(inputTextElement).toHaveAttribute('name','username');
  expect(inputTextElement).toHaveAttribute('id','name');
  expect(inputTextElement).toHaveAttribute('type','text');

  expect(inputTextElement).toHaveAttribute('value','username4');
});
