import React from 'react';

import { customInputColors, sizesMappingInput } from '@components/declaration';
import { MultiSelect, OptionItem, Typography } from '@components/index';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

describe('MultiSelect Component', () => {
  const options = [
    { value: 'steel', label: 'High-Strength Low-Alloy Steel' },
    { value: 'aluminum', label: 'Aluminum' },
    { value: 'copper', label: 'Copper' },
    { value: 'nickel', label: 'Nickel' }
  ];

  test('renders MultiSelect component', () => {
    render(
      <MultiSelect value={[]} onChange={jest.fn()} label="Test MultiSelect">
        {options.map(({ value, label }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </MultiSelect>
    );

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  test('opens options on focus', async () => {
    render(
      <MultiSelect value={[]} onChange={jest.fn()} label="Test MultiSelect">
        {options.map(({ value, label }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </MultiSelect>
    );

    const input = screen.getByRole('textbox');
    fireEvent.focus(input);

    await waitFor(() => {
      options.forEach(option => {
        expect(screen.getByText(option.label)).toBeInTheDocument();
      });
    });
  });

  test('selects multiple options', async () => {
    const handleChange = jest.fn();
    render(
      <MultiSelect value={[]} onChange={handleChange} label="Test MultiSelect">
        {options.map(({ value, label }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </MultiSelect>
    );

    const input = screen.getByRole('textbox');
    fireEvent.focus(input);

    await waitFor(() => {
      const firstOption = screen.getByText(options[0].label);
      fireEvent.click(firstOption);
    });

    expect(handleChange).toHaveBeenCalledWith([options[0].value]);

    await waitFor(() => {
      const secondOption = screen.getByText(options[1].label);
      fireEvent.click(secondOption);
    });

    expect(handleChange).toHaveBeenCalledWith([options[1].value]);
  });

  test('displays selected values in input', () => {
    render(
      <MultiSelect value={['steel', 'aluminum']} onChange={jest.fn()} label="Test MultiSelect">
        {options.map(({ value, label }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </MultiSelect>
    );

    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toContain('High-Strength Low-Alloy Steel');
    expect(input.value).toContain('Aluminum');
  });

  test('shows reset button when values are selected', () => {
    const handleChange = jest.fn();
    render(
      <MultiSelect value={['steel']} onChange={handleChange} label="Test MultiSelect" reset>
        {options.map(({ value, label }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </MultiSelect>
    );

    const resetButton = screen.getByTestId('RESET_ICON');
    expect(resetButton).toBeInTheDocument();

    fireEvent.click(resetButton);
    expect(handleChange).toHaveBeenCalledWith([]);
  });

  test('handles custom onReset callback', () => {
    const handleChange = jest.fn();
    const handleReset = jest.fn();
    render(
      <MultiSelect value={['steel']} onChange={handleChange} onReset={handleReset} label="Test MultiSelect" reset>
        {options.map(({ value, label }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </MultiSelect>
    );

    const resetButton = screen.getByTestId('RESET_ICON');
    fireEvent.click(resetButton);

    expect(handleReset).toHaveBeenCalled();
    expect(handleChange).toHaveBeenCalledWith([]);
  });

  test('renders disabled MultiSelect', () => {
    render(
      <MultiSelect value={[]} onChange={jest.fn()} label="Test MultiSelect" disabled>
        {options.map(({ value, label }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </MultiSelect>
    );

    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });

  test('displays no options message when options are empty', async () => {
    render(
      <MultiSelect value={[]} onChange={jest.fn()} label="Test MultiSelect">
        {/* No options */}
      </MultiSelect>
    );

    const input = screen.getByRole('textbox');
    fireEvent.focus(input);

    await waitFor(() => {
      expect(screen.getByText('Ничего не найдено')).toBeInTheDocument();
    });
  });

  test('filters options when searchable and search term is entered', async () => {
    render(
      <MultiSelect value={[]} onChange={jest.fn()} label="Test MultiSelect" searchable>
        {options.map(({ value, label }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </MultiSelect>
    );

    const input = screen.getByRole('textbox');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'steel' } });

    await waitFor(() => {
      expect(screen.getByText('High-Strength Low-Alloy Steel')).toBeInTheDocument();
      expect(screen.queryByText('Aluminum')).not.toBeInTheDocument();
    });
  });

  test('clears search term when clearSearchOnSelect is true', async () => {
    render(
      <MultiSelect value={[]} onChange={jest.fn()} label="Test MultiSelect" searchable clearSearchOnSelect>
        {options.map(({ value, label }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </MultiSelect>
    );

    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'steel' } });

    await waitFor(() => {
      const firstOption = screen.getByText('High-Strength Low-Alloy Steel');
      fireEvent.click(firstOption);
    });

    // After selection, input should be cleared
    expect(input.value).not.toContain('steel');
  });

  test('renders with different colors', () => {
    const { rerender } = render(
      <MultiSelect value={[]} onChange={jest.fn()} label="Test MultiSelect" color={customInputColors.success}>
        {options.map(({ value, label }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </MultiSelect>
    );

    expect(screen.getByRole('textbox')).toBeInTheDocument();

    rerender(
      <MultiSelect value={[]} onChange={jest.fn()} label="Test MultiSelect" color={customInputColors.error}>
        {options.map(({ value, label }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </MultiSelect>
    );

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('renders with different sizes', () => {
    Object.values(sizesMappingInput).forEach(size => {
      const { unmount } = render(
        <MultiSelect value={[]} onChange={jest.fn()} label="Test MultiSelect" size={size}>
          {options.map(({ value, label }) => (
            <OptionItem key={value} value={value} label={label}>
              <Typography variant="Body1-Medium">{label}</Typography>
            </OptionItem>
          ))}
        </MultiSelect>
      );

      expect(screen.getByRole('textbox')).toBeInTheDocument();
      unmount();
    });
  });

  test('displays "Все" when all options are selected', () => {
    render(
      <MultiSelect
        value={['steel', 'aluminum', 'copper', 'nickel']}
        onChange={jest.fn()}
        label="Test MultiSelect"
        allSelectedText="Все"
      >
        {options.map(({ value, label }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </MultiSelect>
    );

    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('Все');
  });

  test('uses custom valueSeparator', () => {
    render(
      <MultiSelect value={['steel', 'aluminum']} onChange={jest.fn()} label="Test MultiSelect" valueSeparator=" | ">
        {options.map(({ value, label }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </MultiSelect>
    );

    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toContain('|');
  });

  test('shows helper text', () => {
    const helperText = 'This is helper text';
    render(
      <MultiSelect value={[]} onChange={jest.fn()} label="Test MultiSelect" helperText={helperText}>
        {options.map(({ value, label }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </MultiSelect>
    );

    expect(screen.getByText(helperText)).toBeInTheDocument();
  });

  test('handles scrollingItems prop', async () => {
    render(
      <MultiSelect value={[]} onChange={jest.fn()} label="Test MultiSelect" scrollingItems={2}>
        {options.map(({ value, label }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </MultiSelect>
    );

    const input = screen.getByRole('textbox');
    fireEvent.focus(input);

    await waitFor(() => {
      expect(screen.getByText(options[0].label)).toBeInTheDocument();
    });
  });
});
