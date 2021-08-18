import { render, screen } from '@testing-library/react';
import App from './App';

const sum = (a, b) => {
  return a + b;
};

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
  // render(<App />);
  // screen.debug();
});
