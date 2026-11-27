import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Accordion from '.';

const items = [
  { id: '1', title: 'Item 1', content: 'Content 1' },
  { id: '2', title: 'Item 2', content: 'Content 2' },
  { id: '3', title: 'Item 3', content: 'Content 3' }
];

test('Accordion renders with default props', () => {
  render(<Accordion items={items} />);
  expect(screen.getByText('Item 1')).toBeInTheDocument();
  expect(screen.getByText('Item 2')).toBeInTheDocument();
});

test('Accordion expands/collapses items on click', () => {
  render(<Accordion items={items} />);
  fireEvent.click(screen.getByText('Item 1'));
  expect(screen.getByRole('button', { name: 'Item 1' })).toHaveAttribute('aria-expanded', 'true');
  fireEvent.click(screen.getByText('Item 1'));
  expect(screen.getByRole('button', { name: 'Item 1' })).toHaveAttribute('aria-expanded', 'false');
});

test('Accordion opens multiple items when multipleExpanded is true', () => {
  render(<Accordion items={items} multipleExpanded={true} />);

  fireEvent.click(screen.getByText('Item 1'));
  fireEvent.click(screen.getByText('Item 2'));
  fireEvent.click(screen.getByText('Item 3'));

  expect(screen.getByText('Content 1')).toBeInTheDocument();
  expect(screen.getByText('Content 2')).toBeInTheDocument();
  expect(screen.getByText('Content 3')).toBeInTheDocument();
});

test('keyboard toggles the panel and recreated items preserve expansion by id', async () => {
  const user = userEvent.setup();
  const { rerender } = render(<Accordion items={items} />);
  const trigger = screen.getByRole('button', { name: 'Item 1' });
  await user.tab();
  expect(trigger).toHaveFocus();
  await user.keyboard('{Enter}');
  rerender(<Accordion items={items.map(item => ({ ...item })).reverse()} />);
  expect(trigger).toHaveAttribute('aria-expanded', 'true');
  trigger.focus();
  await user.keyboard(' ');
  expect(trigger).toHaveAttribute('aria-expanded', 'false');
});
