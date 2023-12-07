import React from 'react';

import { Select } from '@components/index';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

describe('Select Component', () => {
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' }
  ];

  test('renders Select component and opens options on focus', async () => {
    render(<Select options={options} label="Select Label" />);

    const selectInput = screen.getByTestId('select-input');
    expect(selectInput).toBeInTheDocument();

    fireEvent.focus(selectInput);

    await waitFor(() => {
      options.forEach(option => {
        expect(screen.getByText(option.label)).toBeInTheDocument();
      });
    });
  });

  test('closes the options list when an option is clicked', async () => {
    render(<Select options={options} label="Select Label" />);

    fireEvent.focus(screen.getByTestId('select-input'));

    await waitFor(() => {
      fireEvent.click(screen.getByText('Option 1'));
    });

    expect(screen.queryByText('Option 2')).not.toBeInTheDocument();
  });

  test('displays no options message when options are empty', () => {
    render(<Select options={[]} label="Select Label" />);

    fireEvent.focus(screen.getByTestId('select-input'));

    expect(screen.getByText('Ничего не найдено')).toBeInTheDocument();
  });
});
