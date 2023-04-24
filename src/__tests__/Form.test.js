import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../App';
import FormComponent from '../Form.jsx';

test('Adding a task', () => {
  const mockAddTodo = jest.fn();

  render(<FormComponent addTodo={mockAddTodo} />);

  const input = screen.getByPlaceholderText('What needs to be done?');
  fireEvent.change(input, { target: { value: 'New task' } });
  fireEvent.submit(screen.getByRole('form'));

  expect(mockAddTodo).toHaveBeenCalledTimes(1);
  expect(mockAddTodo).toHaveBeenCalledWith(expect.objectContaining({ text: 'New task' }));
});

test('Displaying a task', () => {
  render(<App />);

  const input = screen.getByPlaceholderText('What needs to be done?');
  fireEvent.change(input, { target: { value: 'New task' } });
  fireEvent.submit(screen.getByRole('form'));

  expect(screen.getByText('New task')).toBeInTheDocument();
});
