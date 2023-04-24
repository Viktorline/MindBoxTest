import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../App';
import FooterComponent from '../Footer.jsx';

const mockTodos = [
  {
    id: 1,
    text: 'Task 1',
    completed: false,
  },
  {
    id: 2,
    text: 'Task 2',
    completed: true,
  },
  {
    id: 3,
    text: 'Task 3',
    completed: false,
  },
];

test('Active tasks counter', () => {
  render(<FooterComponent todos={mockTodos} filter={'all'} />);

  expect(screen.getByText(/2 items left/)).toBeInTheDocument();
});

test('Filtering tasks', () => {
  render(<App />);

  const input = screen.getByPlaceholderText('What needs to be done?');
  const tasks = ['Task 1', 'Task 2', 'Task 3'];
  tasks.forEach((task) => {
    fireEvent.change(input, { target: { value: task } });
    fireEvent.submit(screen.getByRole('form'));
  });

  const checkboxes = screen.getAllByRole('checkbox');
  fireEvent.click(checkboxes[1]);

  fireEvent.click(screen.getByText('Active'));
  expect(screen.getByText('Task 1')).toBeInTheDocument();
  expect(screen.getByText('Task 3')).toBeInTheDocument();
  expect(screen.queryByText('Task 2')).not.toBeInTheDocument();

  fireEvent.click(screen.getByText('Completed'));
  expect(screen.getByText('Task 2')).toBeInTheDocument();
  expect(screen.queryByText('Task 1')).not.toBeInTheDocument();
  expect(screen.queryByText('Task 3')).not.toBeInTheDocument();

  fireEvent.click(screen.getByText('All'));
  tasks.forEach((task) => {
    expect(screen.getByText(task)).toBeInTheDocument();
  });
});

test('Clear completed tasks', () => {
  render(<App />);

  const input = screen.getByPlaceholderText('What needs to be done?');
  const tasks = ['Task 1', 'Task 2', 'Task 3'];
  tasks.forEach((task) => {
    fireEvent.change(input, { target: { value: task } });
    fireEvent.submit(screen.getByRole('form'));
  });

  const checkboxes = screen.getAllByRole('checkbox');
  fireEvent.click(checkboxes[1]);

  fireEvent.click(screen.getByText('Clear Completed'));

  expect(screen.getByText('Task 1')).toBeInTheDocument();
  expect(screen.getByText('Task 3')).toBeInTheDocument();
  expect(screen.queryByText('Task 2')).not.toBeInTheDocument();
});
