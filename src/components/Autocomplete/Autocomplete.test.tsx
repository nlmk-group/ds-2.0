import React from 'react';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { IAutocompleteValue } from './types';

import Autocomplete from '.';

const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null
});
window.IntersectionObserver = mockIntersectionObserver;

describe('src/components/Autocomplete', () => {
  const mockItems: IAutocompleteValue[] = [
    { id: 1, value: 'blast_furnace', label: 'Доменная печь' },
    { id: 2, value: 'converter', label: 'Конвертер' },
    { id: 3, value: 'rolling_mill', label: 'Прокатный стан', disabled: true }
  ];

  const setup = (props = {}) => {
    return render(
      <Autocomplete
        items={mockItems}
        nameGetter={(item: IAutocompleteValue): string => item.label || ''}
        onChange={jest.fn()}
        {...props}
      />
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    setup();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('displays items when input is clicked', async () => {
    setup();
    const input = screen.getByRole('textbox');

    await userEvent.click(input);

    await waitFor(() => {
      expect(screen.getByText('Доменная печь')).toBeInTheDocument();
      expect(screen.getByText('Конвертер')).toBeInTheDocument();
      expect(screen.getByText('Прокатный стан')).toBeInTheDocument();
    });
  });

  it('calls onChange when selecting an item', async () => {
    const onChangeMock = jest.fn();
    setup({ onChange: onChangeMock });

    const input = screen.getByRole('textbox');
    await userEvent.click(input);

    await waitFor(() => {
      expect(screen.getByText('Доменная печь')).toBeInTheDocument();
    });

    await userEvent.click(screen.getByText('Доменная печь'));
    expect(onChangeMock).toHaveBeenCalledWith(mockItems[0]);
  });

  it('shows helper text', () => {
    const helperText = 'Тестовый вспомогательный текст';
    setup({ helperText });
    expect(screen.getByText(helperText)).toBeInTheDocument();
  });

  it('disables the input when disabled prop is true', () => {
    setup({ disabled: true });
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('handles keyboard navigation', async () => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn();

    setup();
    const input = screen.getByTestId('AUTOCOMPLETE_INPUT');
    await userEvent.click(input);

    fireEvent.keyDown(input, { key: 'ArrowDown' });

    await waitFor(() => {
      const options = screen.getAllByRole('option');
      expect(options[0]).toHaveClass('highlighted');
    });
  });

  it('closes dropdown on Escape', async () => {
    setup();

    const input = screen.getByRole('textbox');
    await userEvent.click(input);

    await waitFor(() => {
      expect(screen.getByText('Доменная печь')).toBeInTheDocument();
    });

    fireEvent.keyDown(input, { key: 'Escape' });

    await waitFor(() => {
      expect(screen.queryByText('Доменная печь')).not.toBeInTheDocument();
    });
  });

  it('handles disabled options', async () => {
    const onChangeMock = jest.fn();
    setup({ onChange: onChangeMock });

    const input = screen.getByRole('textbox');
    await userEvent.click(input);

    await waitFor(() => {
      expect(screen.getByText('Прокатный стан')).toBeInTheDocument();
    });

    await userEvent.click(screen.getByText('Прокатный стан'));
    expect(onChangeMock).not.toHaveBeenCalled();
  });

  it('shows no results message', async () => {
    setup({
      items: [],
      noResultsText: 'Ничего не найдено'
    });

    const input = screen.getByRole('textbox');
    await userEvent.click(input);
    await userEvent.type(input, 'xyz');

    await waitFor(() => {
      expect(screen.getByText('Ничего не найдено')).toBeInTheDocument();
    });
  });

  it('handles load more functionality', async () => {
    const onLoadMoreMock = jest.fn();
    setup({ onLoadMore: onLoadMoreMock });

    const input = screen.getByRole('textbox');
    await userEvent.click(input);

    await waitFor(() => {
      expect(mockIntersectionObserver).toHaveBeenCalled();
    });
  });
});
