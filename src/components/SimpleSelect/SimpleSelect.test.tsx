import React from 'react';

import { customInputColors, sizesMappingInput } from '@components/declaration';
import { OptionItem, SimpleSelect, Typography } from '@components/index';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';

describe('SimpleSelect Component', () => {
  const options = [
    { value: 'steel', label: 'High-Strength Low-Alloy Steel' },
    { value: 'aluminum', label: 'Aluminum' },
    { value: 'copper', label: 'Copper' },
    { value: 'nickel', label: 'Nickel' }
  ];

  test('renders SimpleSelect component', () => {
    render(
      <SimpleSelect value="" onChange={jest.fn()} label="Test SimpleSelect">
        {options.map(({ value, label }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </SimpleSelect>
    );

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  test('opens options on focus', async () => {
    render(
      <SimpleSelect value="" onChange={jest.fn()} label="Test SimpleSelect">
        {options.map(({ value, label }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </SimpleSelect>
    );

    const input = screen.getByRole('textbox');
    fireEvent.focus(input);

    await waitFor(() => {
      options.forEach(option => {
        expect(screen.getByText(option.label)).toBeInTheDocument();
      });
    });
  });

  test('selects single option and closes dropdown', async () => {
    const handleChange = jest.fn();
    render(
      <SimpleSelect value="" onChange={handleChange} label="Test SimpleSelect">
        {options.map(({ value, label }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </SimpleSelect>
    );

    const input = screen.getByRole('textbox');
    fireEvent.focus(input);

    await waitFor(() => {
      const firstOption = screen.getByText(options[0].label);
      fireEvent.click(firstOption);
    });

    expect(handleChange).toHaveBeenCalledWith(options[0].value);
  });

  test('displays selected value in input', () => {
    render(
      <SimpleSelect value="steel" onChange={jest.fn()} label="Test SimpleSelect">
        {options.map(({ value, label }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </SimpleSelect>
    );

    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('High-Strength Low-Alloy Steel');
  });

  test('shows reset button when value is selected', async () => {
    const handleChange = jest.fn();
    render(
      <SimpleSelect value="steel" onChange={handleChange} label="Test SimpleSelect" reset>
        {options.map(({ value, label }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </SimpleSelect>
    );

    await waitFor(() => {
      const resetButton = screen.queryByTestId('RESET_ICON');
      expect(resetButton).toBeInTheDocument();
    });

    const resetButton = screen.getByTestId('RESET_ICON');
    fireEvent.click(resetButton);

    await waitFor(() => {
      expect(handleChange).toHaveBeenCalledWith('');
    });
  });

  test('handles custom onReset callback', async () => {
    const handleChange = jest.fn();
    const handleReset = jest.fn();
    render(
      <SimpleSelect value="steel" onChange={handleChange} onReset={handleReset} label="Test SimpleSelect" reset>
        {options.map(({ value, label }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </SimpleSelect>
    );

    await waitFor(() => {
      const resetButton = screen.queryByTestId('RESET_ICON');
      expect(resetButton).toBeInTheDocument();
    });

    const resetButton = screen.getByTestId('RESET_ICON');
    fireEvent.click(resetButton);

    await waitFor(() => {
      expect(handleReset).toHaveBeenCalled();
      expect(handleChange).toHaveBeenCalledWith('');
    });
  });

  test('renders disabled SimpleSelect', () => {
    render(
      <SimpleSelect value="" onChange={jest.fn()} label="Test SimpleSelect" disabled>
        {options.map(({ value, label }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </SimpleSelect>
    );

    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });

  test('displays no options message when options are empty', async () => {
    render(
      <SimpleSelect value="" onChange={jest.fn()} label="Test SimpleSelect">
        {/* No options */}
      </SimpleSelect>
    );

    const input = screen.getByRole('textbox');
    fireEvent.focus(input);

    await waitFor(() => {
      expect(screen.getByText('Ничего не найдено')).toBeInTheDocument();
    });
  });

  test('filters options when searchable and search term is entered', async () => {
    render(
      <SimpleSelect value="" onChange={jest.fn()} label="Test SimpleSelect" searchable>
        {options.map(({ value, label }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </SimpleSelect>
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
      <SimpleSelect value="" onChange={jest.fn()} label="Test SimpleSelect" searchable clearSearchOnSelect>
        {options.map(({ value, label }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </SimpleSelect>
    );

    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'steel' } });

    await waitFor(() => {
      const firstOption = screen.getByText('High-Strength Low-Alloy Steel');
      fireEvent.click(firstOption);
    });

    expect(input.value).toBe('High-Strength Low-Alloy Steel');
  });

  test('renders with different colors', () => {
    const { rerender } = render(
      <SimpleSelect value="" onChange={jest.fn()} label="Test SimpleSelect" color={customInputColors.success}>
        {options.map(({ value, label }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </SimpleSelect>
    );

    expect(screen.getByRole('textbox')).toBeInTheDocument();

    rerender(
      <SimpleSelect value="" onChange={jest.fn()} label="Test SimpleSelect" color={customInputColors.error}>
        {options.map(({ value, label }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </SimpleSelect>
    );

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('renders with different sizes', () => {
    Object.values(sizesMappingInput).forEach(size => {
      const { unmount } = render(
        <SimpleSelect value="" onChange={jest.fn()} label="Test SimpleSelect" size={size}>
          {options.map(({ value, label }) => (
            <OptionItem key={value} value={value} label={label}>
              <Typography variant="Body1-Medium">{label}</Typography>
            </OptionItem>
          ))}
        </SimpleSelect>
      );

      expect(screen.getByRole('textbox')).toBeInTheDocument();
      unmount();
    });
  });

  test('shows helper text', () => {
    const helperText = 'This is helper text';
    render(
      <SimpleSelect value="" onChange={jest.fn()} label="Test SimpleSelect" helperText={helperText}>
        {options.map(({ value, label }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </SimpleSelect>
    );

    expect(screen.getByText(helperText)).toBeInTheDocument();
  });

  test('handles scrollingItems prop', async () => {
    render(
      <SimpleSelect value="" onChange={jest.fn()} label="Test SimpleSelect" scrollingItems={2}>
        {options.map(({ value, label }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </SimpleSelect>
    );

    const input = screen.getByRole('textbox');
    fireEvent.focus(input);

    await waitFor(() => {
      expect(screen.getByText(options[0].label)).toBeInTheDocument();
    });
  });

  test('renders placeholder when no value is selected', () => {
    const placeholder = 'Select an option';
    render(
      <SimpleSelect value="" onChange={jest.fn()} label="Test SimpleSelect" placeholder={placeholder}>
        {options.map(({ value, label }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </SimpleSelect>
    );

    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.placeholder).toBe(placeholder);
  });

  test('changes selection when different option is clicked', async () => {
    const handleChange = jest.fn();
    const { rerender } = render(
      <SimpleSelect value="steel" onChange={handleChange} label="Test SimpleSelect">
        {options.map(({ value, label }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </SimpleSelect>
    );

    let input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('High-Strength Low-Alloy Steel');

    fireEvent.focus(input);

    await waitFor(() => {
      const secondOption = screen.getByText(options[1].label);
      fireEvent.click(secondOption);
    });

    expect(handleChange).toHaveBeenCalledWith(options[1].value);

    // Rerender with new value
    rerender(
      <SimpleSelect value="aluminum" onChange={handleChange} label="Test SimpleSelect">
        {options.map(({ value, label }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </SimpleSelect>
    );

    input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('Aluminum');
  });

  test('opens dropdown when arrow button is clicked', async () => {
    render(
      <SimpleSelect value="" onChange={jest.fn()} label="Test SimpleSelect">
        {options.map(({ value, label }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </SimpleSelect>
    );

    const arrowButton = screen.getByTestId('ARROW_BUTTON');

    // Open dropdown
    fireEvent.mouseDown(arrowButton);

    await waitFor(() => {
      expect(screen.getByText(options[0].label)).toBeInTheDocument();
    });
  });

  test('renders with custom className', () => {
    const customClass = 'custom-select-class';
    render(
      <SimpleSelect value="" onChange={jest.fn()} label="Test SimpleSelect" className={customClass}>
        {options.map(({ value, label }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </SimpleSelect>
    );

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  test('applies readonly attribute', () => {
    render(
      <SimpleSelect value="steel" onChange={jest.fn()} label="Test SimpleSelect" readOnly>
        {options.map(({ value, label }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </SimpleSelect>
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('readonly');
  });
});
