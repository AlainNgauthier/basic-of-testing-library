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

test('initial conditions for the checkbox', () => {
  render(<App />);

  //check that the button starts out enabled
  const button = screen.getByRole('button', {
    name: /change to blue/i
  });
  expect(button).toBeEnabled();

  //chech that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();

  //check if the checkbox disables the button
  userEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(button).not.toBeEnabled();
});