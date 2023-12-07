import React from 'react';

import { InputRange } from '@components/index';
import { fireEvent, render } from '@testing-library/react';

describe('src/components/InputRange', () => {
  const defaultProps = {
    min: 0,
    max: 100,
    step: 1,
    value: { min: 10, max: 90 },
    onChange: jest.fn()
  };

  test('Render InputRange component', () => {
    const { getByDisplayValue } = render(<InputRange {...defaultProps} />);
    expect(getByDisplayValue('10')).toBeInTheDocument();
    expect(getByDisplayValue('90')).toBeInTheDocument();
  });

  test('Changes min value', () => {
    const { getByDisplayValue } = render(<InputRange {...defaultProps} />);
    const input = getByDisplayValue('10');
    fireEvent.change(input, { target: { value: '20' } });
    expect(defaultProps.onChange).toHaveBeenCalledWith({ min: 20, max: 90 });
  });

  test('Changes max value', () => {
    const { getByDisplayValue } = render(<InputRange {...defaultProps} />);
    const input = getByDisplayValue('90');
    fireEvent.change(input, { target: { value: '80' } });
    expect(defaultProps.onChange).toHaveBeenCalledWith({ min: 10, max: 80 });
  });

  test('Min value does not exceed max value', () => {
    const { getByDisplayValue } = render(<InputRange {...defaultProps} />);
    const input = getByDisplayValue('10');
    fireEvent.change(input, { target: { value: '95' } });
    expect(defaultProps.onChange).toHaveBeenCalledWith({ min: 89, max: 90 });
  });

  test('Max value is not less than min value', () => {
    const { getByDisplayValue } = render(<InputRange {...defaultProps} />);
    const input = getByDisplayValue('90');
    fireEvent.change(input, { target: { value: '5' } });
    expect(defaultProps.onChange).toHaveBeenCalledWith({ min: 10, max: 11 });
  });

  test('Renders in disabled state', () => {
    const { container } = render(<InputRange {...defaultProps} disabled />);
    const inputs = container.querySelectorAll('input');
    inputs.forEach(input => {
      expect(input).toBeDisabled();
    });
  });

  test('Renders without crashing when no onChange provided for min', () => {
    const { getByDisplayValue } = render(
      <InputRange {...defaultProps} onChange={undefined} />
    );
    const minInput = getByDisplayValue('10');
    fireEvent.change(minInput, { target: { value: '20' } });
    expect(getByDisplayValue('20')).toBeInTheDocument();
  });

  test('Renders without crashing when no onChange provided for max', () => {
    const { getByDisplayValue } = render(
      <InputRange {...defaultProps} onChange={undefined} />
    );
    const maxInput = getByDisplayValue('90');
    fireEvent.change(maxInput, { target: { value: '80' } });
    expect(getByDisplayValue('80')).toBeInTheDocument();
  });
});
