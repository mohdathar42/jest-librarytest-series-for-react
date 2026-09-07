import { render} from '@testing-library/react';
import App from '../App';

test("testing of anapshots of code", () => {
  const {container} = render(<App />);
  expect(container).toMatchSnapshot();
})