import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('button has the correct initial color and turns blue', () => {
  render(<App />);
  const button = screen.getByRole('button', {
    name: /change to blue/i
  });
  expect(button).toHaveStyle({
    backgroundColor: 'red'
  });

  userEvent.click(button);
  expect(button).toHaveStyle({
    backgroundColor: 'blue'
  });
  expect(button.textContent).toBe('Change to red');
});

// test('button has the correct initial text', () => {
//   render(<App />);
//   screen.getByRole('button', {
//     name: /change to blue/i
//   });
// });

test('initial conditions for the checkbox', () => {
  render(<App />);

  //check that the button starts out enabled
  const button = screen.getByRole('button', {
    name: /change to blue/i
  });
  expect(button).toBeEnabled();
});