import React, { useState } from 'react';

import { customInputColors } from '@components/declaration';
import { fireEvent, render, screen } from '@testing-library/react';

import { IInputAdditionalProps } from './types';

import Input from '.';
import { IconMock } from './mock/IconMock';
import { userEvent } from '@storybook/testing-library';

const inputColorClassNames: IInputAdditionalProps['color'][] = [
  customInputColors.default,
  customInputColors.error,
  customInputColors.warning,
  customInputColors.success
];

const TestInputComponent = () => {
  const [value, setValue] = useState('');

  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setValue(e.target.value);
  };

  const handleReset = () => {
    setValue('');
  };

  return (
    <Input
      value={value}
      onChange={handleChange}
      onReset={handleReset}
      reset
    />
  );
};

describe('src/components/Input', () => {
  test('It should render an input', () => {
    const { container } = render(<Input />);
    const input = container.getElementsByTagName('input')[0];
    expect(input).toBeInTheDocument();
  });

  test('It should render an input with label', () => {
    const labelText = 'Label';
    const { container, getByLabelText } = render(<Input label={labelText} />);
    const label = container.getElementsByTagName('label')[0];
    const text = getByLabelText(labelText);
    expect(label).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });

  test('It should render an input with text icon', () => {
    const weight = 'кг';
    const { getByText } = render(<Input icon={<IconMock weight={weight} />} />);
    const iconText = getByText(weight);
    expect(iconText).toBeInTheDocument();
  });

  // тесты для разных состояний input по className и pseudo-class
  test('It should render a disabled input', () => {
    const { container } = render(<Input disabled />);
    const input = container.getElementsByTagName('input')[0];
    expect(input).toBeDisabled();
    expect(input).toHaveAttribute('disabled');
  });

  test('It should render a compact input', () => {
    const { container } = render(<Input size={'s' as any} />);
    const compactInput = container.getElementsByClassName('compact')[0];
    expect(compactInput).toBeInTheDocument();
  });

  // тесты для разных состояний input по пропсу color
  test('It should render different input color states', () => {
    inputColorClassNames.map(color => {
      const { container } = render(<Input color={color} />);
      const className = container.getElementsByClassName(color as string)[0];
      expect(className).toBeInTheDocument();
    });
  });

  test('It should render a pseudo input', () => {
    const { container } = render(<Input pseudo />);
    const pseudo = container.getElementsByTagName('span')[0];
    expect(pseudo).toBeInTheDocument();
  });

  // тесты для разных состояний pseudo input по пропсу color
  test('It should render different pseudo input color states', () => {
    inputColorClassNames.map(color => {
      const { container } = render(<Input pseudo color={color} />);
      const className = container.getElementsByClassName(color as string)[0];
      expect(className).toBeInTheDocument();
    });
  });

  test('It should render a textarea', () => {
    const { container } = render(<Input multiline />);
    const textarea = container.getElementsByTagName('textarea')[0];
    expect(textarea).toBeInTheDocument();
  });

  // тесты для разных состояний textarea по пропсу color
  test('It should render different textarea color states', () => {
    inputColorClassNames.map(color => {
      const { container } = render(<Input multiline color={color} />);
      const className = container.getElementsByClassName(color as string)[0];
      expect(className).toBeInTheDocument();
    });
  });

  test('It should call change event', () => {
    const mockCallBack = jest.fn();
    const newValue = 'new value';
    const { container } = render(<Input onChange={mockCallBack} />);
    const input = container.getElementsByTagName('input')[0];
    fireEvent.change(input, { target: { value: newValue } });
    expect(mockCallBack).toHaveBeenCalled();
  });

  test('It should be resettable', async () => {
    render(<TestInputComponent />);

    const inputElement = screen.getByRole('textbox');
    await userEvent.type(inputElement, 'Testing');
    expect(inputElement).toHaveValue('Testing');

    const resetIcon = screen.getByTestId('CLOSE_ICON');
    fireEvent.click(resetIcon);
    expect(inputElement).toHaveValue('');
  });
});
