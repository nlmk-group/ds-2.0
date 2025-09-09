import React from 'react';

import { Select } from '@components/index';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { sizesMappingInput } from '@components/declaration';

describe('Select Component', () => {
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' }
  ];

  const optionWithIcon = [
    { value: '1', label: 'Option 1', iconRight: <div>Right</div>, iconLeft: <div>Left</div> }
  ];

  test('renders Select component and opens options on focus', async () => {
    render(
      <Select
        options={options}
        label="Select Label"
        selected={[]}
        onSelectionChange={jest.fn()}
      />
    );

    const selectInput = screen.getByTestId('select-input');
    expect(selectInput).toBeInTheDocument();

    fireEvent.focus(selectInput);

    await waitFor(() => {
      options.forEach(option => {
        expect(screen.getByText(option.label)).toBeInTheDocument();
      });
    });
  });

  test('shows reset button when reset prop is true and value is selected', async () => {
    const mockOnSelectionChange = jest.fn();
    render(
      <Select
        options={options}
        label="Select Label"
        selected="1"
        onSelectionChange={mockOnSelectionChange}
        reset={true}
      />
    );

    const resetIcon = screen.getByTestId('RESET_ICON');
    expect(resetIcon).toBeInTheDocument();

    fireEvent.click(resetIcon);
    expect(mockOnSelectionChange).toHaveBeenCalledWith('');
  });

  test('resets multiple selection when reset button is clicked', async () => {
    const mockOnSelectionChange = jest.fn();
    render(
      <Select
        options={options}
        label="Select Label"
        selected={['1', '2']}
        onSelectionChange={mockOnSelectionChange}
        multiple={true}
        reset={true}
      />
    );

    const resetIcon = screen.getByTestId('RESET_ICON');
    expect(resetIcon).toBeInTheDocument();

    fireEvent.click(resetIcon);
    expect(mockOnSelectionChange).toHaveBeenCalledWith([]);
  });

  test('closes the options list when an option is clicked', async () => {
    render(
      <Select
        options={options}
        label="Select Label"
        selected={[]}
        onSelectionChange={jest.fn()}
      />
    );

    fireEvent.focus(screen.getByTestId('select-input'));

    await waitFor(() => {
      fireEvent.click(screen.getByText('Option 1'));
    });

    expect(screen.queryByText('Option 2')).not.toBeInTheDocument();
  });

  test('displays no options message when options are empty', () => {
    render(
      <Select
        options={[]}
        label="Select Label"
        selected={[]}
        onSelectionChange={jest.fn()}
      />
    );

    fireEvent.focus(screen.getByTestId('select-input'));

    expect(screen.getByText('Ничего не найдено')).toBeInTheDocument();
  });

  test('It should render an option with left icon', () => {
    const optionWithIcon = [
      { value: '1', label: 'Option 1', iconLeft: <div>Left</div> }
    ];
    render(
      <Select
        options={optionWithIcon}
        selected={''}
        onSelectionChange={jest.fn()}
      />
    );
    const selectInput = screen.getByTestId('select-input');

    fireEvent.focus(selectInput);

    const leftIcon = screen.getByTestId('left-icon');
    expect(leftIcon).toBeInTheDocument();
  });

  test('It should render an option with right icon', () => {
    render(
      <Select
        options={optionWithIcon}
        selected={''}
        onSelectionChange={jest.fn()}
      />
    );
    const selectInput = screen.getByTestId('select-input');

    fireEvent.focus(selectInput);

    const leftIcon = screen.getByTestId('right-icon');
    expect(leftIcon).toBeInTheDocument();
  });


  describe('While rendering stealthy select', () => {
    test('It should render an stealthy select', () => {
      render(
        <Select
          options={optionWithIcon}
          stealthy
          selected={''}
          onSelectionChange={jest.fn()}
        />
      );
      const selectInconspicuous = screen.getByTestId('select-inconspicuous');
      expect(selectInconspicuous).toBeInTheDocument();
    });

    Object.values(sizesMappingInput).forEach((size: sizesMappingInput) => {
      test(`It should render an stealthy select with ${size} size`, () => {
        render(
          <Select
            options={optionWithIcon}
            stealthy
            size={size}
            selected={''}
            onSelectionChange={jest.fn()}
          />
        );
        const selectInconspicuous = screen.getByTestId('select-inconspicuous');
        expect(selectInconspicuous.classList.contains(`inconspicuous-${size}`)).toBe(true);
      });
    });

    test('It should render an stealthy select with label', () => {
      const testLabel = 'Hello World'
      render(
        <Select
          options={optionWithIcon}
          stealthy
          label={testLabel}
          selected={''}
          onSelectionChange={jest.fn()}
        />
      );
      const selectInconspicuous = screen.getByTestId('select-inconspicuous');
      expect(selectInconspicuous).toHaveTextContent(testLabel);
    });

    test('It should render an stealthy select with chosen option', () => {
      const testLabel = 'Hello World';
      const testVal = 'test'
      const testOptions = [
        { value: testVal, label: testLabel }
      ]
      render(
        <Select
          options={testOptions}
          stealthy
          selected={testVal}
          onSelectionChange={jest.fn()}
        />
      );
      const selectInconspicuous = screen.getByTestId('select-inconspicuous');
      expect(selectInconspicuous).toHaveTextContent(testLabel);
    });

    test('It should render an stealthy select with chosen option multiple', () => {
      const testLabelOne = 'Hello World'
      const testLabelTwo = 'Aloha World'
      const testOptions = [
        { value: 'test1', label: testLabelOne },
        { value: 'test2', label: testLabelTwo }
      ]
      render(
        <Select
          options={testOptions}
          stealthy
          selected={['test1', 'test2']}
          onSelectionChange={jest.fn()}
          multiple
        />
      );
      const selectInconspicuous = screen.getByTestId('select-inconspicuous');
      expect(selectInconspicuous).toHaveTextContent(`${testLabelOne}, ${testLabelTwo}`);
    });

    test('It should render an stealthy select with chosen option and it\'s icons', () => {
      render(
        <Select
          options={optionWithIcon}
          stealthy
          selected={optionWithIcon[0].value}
          onSelectionChange={jest.fn()}
        />
      );
      expect(screen.getByTestId('inconspicuous-left-icon')).toBeInTheDocument();
      expect(screen.getByTestId('inconspicuous-right-icon')).toBeInTheDocument();
    });
  });

  test('It should render disabled stealthy select', () => {
    render(
      <Select
        options={optionWithIcon}
        stealthy
        selected={optionWithIcon[0].value}
        onSelectionChange={jest.fn()}
        disabled
      />
    );

    const selectInconspicuous = screen.getByTestId('select-inconspicuous');
    expect(selectInconspicuous.classList.contains('inconspicuous-disabled')).toBe(true);
  });

  test('It should render selected option with icon highlightSelected', () => {
    render(
      <Select
        options={optionWithIcon}
        selected={optionWithIcon[0].value}
        onSelectionChange={jest.fn()}
        highlightSelected
      />
    );

    const selectInput = screen.getByTestId('select-input');

    fireEvent.focus(selectInput);

    expect(screen.getByTestId('highlight-icon')).toBeInTheDocument();
  });

  test('It should render multiple Select with option to select all', () => {
    render(
      <Select
        options={optionWithIcon}
        multiple
        selected={optionWithIcon[0].value}
        onSelectionChange={jest.fn()}
      />
    );

    const selectInput = screen.getByTestId('select-input');

    fireEvent.focus(selectInput);

    const checkbox = screen.getAllByTestId('checkbox');

    expect(checkbox).toHaveLength(2);
  });

  test('It should render multiple Select without option to select all', () => {
    render(
      <Select
        options={optionWithIcon}
        multiple
        selected={optionWithIcon[0].value}
        onSelectionChange={jest.fn()}
        isAllSelectView={false}
      />
    );

    const selectInput = screen.getByTestId('select-input');

    fireEvent.focus(selectInput);

    const checkbox = screen.getAllByTestId('checkbox');

    expect(checkbox).toHaveLength(1);
  });

  test('It should render multiple Select without checkboxes', () => {
    render(
      <Select
        options={optionWithIcon}
        multiple
        selected={optionWithIcon[0].value}
        onSelectionChange={jest.fn()}
        withoutCheckbox
      />
    );

    const selectInput = screen.getByTestId('select-input');

    fireEvent.focus(selectInput);

    expect(screen.queryByTestId('checkbox')).toBe(null);
  });

  test('It should render with badge amount', () => {
    const testLabelOne = 'Hello World';
    const testLabelTwo = 'Aloha World';
    const testOptions = [
      { value: 'test1', label: testLabelOne },
      { value: 'test2', label: testLabelTwo }
    ];
    const selectedArr = ['test1', 'test2']
    render(
      <Select
        options={testOptions}
        selected={selectedArr}
        onSelectionChange={jest.fn()}
        multiple
        badgeAmount={selectedArr.length}
      />
    );
    const badgeAmount = screen.getByTestId('badge-amount');
    expect(badgeAmount).toHaveTextContent(`${selectedArr.length}`);
  });

  test('It should render with badge amount', () => {
    const testLabel = 'Hello World';
    const testOptions = [
      { value: 'test1', label: 'Test', subLabel: testLabel }
    ];
    render(
      <Select
        selected={''}
        onSelectionChange={jest.fn()}
        options={testOptions}
        multiple
      />
    );
    const selectInput = screen.getByTestId('select-input');

    fireEvent.focus(selectInput);
    const subLabel = screen.getByTestId('sub-label');
    expect(subLabel).toHaveTextContent(testLabel);
  });
});

