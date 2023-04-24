import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ListComponent from '../List.jsx';

test('Toggle task status', () => {
  const mockSwitchTodo = jest.fn((id) => {
    const listItem = screen.getByText('Task 1');
    const isChecked = listItem.classList.contains('text-decoration-line-through');

    if (isChecked) {
      expect(listItem).toHaveClass('text-decoration-line-through');
      expect(listItem).toHaveClass('text-secondary');
    } else {
      expect(listItem).not.toHaveClass('text-decoration-line-through');
      expect(listItem).not.toHaveClass('text-secondary');
    }
  });

  render(
    <ListComponent
      todos={[
        {
          id: 1,
          text: 'Task 1',
          completed: false,
        },
      ]}
      switchTodo={mockSwitchTodo}
    />
  );

  const checkboxes = screen.getAllByRole('checkbox');
  fireEvent.click(checkboxes[0]);
  expect(mockSwitchTodo).toHaveBeenCalledTimes(1);

  fireEvent.click(checkboxes[0]);
  expect(mockSwitchTodo).toHaveBeenCalledTimes(2);
});
