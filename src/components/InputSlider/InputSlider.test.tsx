import React from 'react';

import { InputSlider } from '@components/index';
import { fireEvent, render } from '@testing-library/react';

describe('src/components/InputSlider', () => {
  const defaultProps = {
    min: 5,
    max: 100,
    step: 1,
    value: 10,
    onChange: jest.fn()
  };

  test('Render InputSlider component', () => {
    const { getByDisplayValue } = render(<InputSlider {...defaultProps} />);
    expect(getByDisplayValue('10')).toBeInTheDocument();
  });

  test('Changes value', () => {
    const { getByDisplayValue } = render(<InputSlider {...defaultProps} />);
    const input = getByDisplayValue('10');
    fireEvent.change(input, { target: { value: '20' } });
    expect(defaultProps.onChange).toHaveBeenCalledWith(20);
  });

  test('Min value does not exceed max', () => {
    const { getByDisplayValue } = render(<InputSlider {...defaultProps} />);
    const input = getByDisplayValue('10');
    fireEvent.change(input, { target: { value: '120' } });
    expect(defaultProps.onChange).toHaveBeenCalledWith(100);
  });

  test('Max value is not less than min', () => {
    const { getByDisplayValue } = render(<InputSlider {...defaultProps} />);
    const input = getByDisplayValue('10');
    fireEvent.change(input, { target: { value: '1' } });
    expect(defaultProps.onChange).toHaveBeenCalledWith(5);
  });

  test('Renders in disabled state', () => {
    const { container } = render(<InputSlider {...defaultProps} disabled />);
    const inputs = container.querySelectorAll('input');
    inputs.forEach(input => {
      expect(input).toBeDisabled();
    });
  });

  test('Renders without crashing when no onChange provided for min', () => {
    const { getByDisplayValue } = render(
      <InputSlider {...defaultProps} onChange={undefined} />
    );
    const minInput = getByDisplayValue('10');
    fireEvent.change(minInput, { target: { value: '20' } });
    expect(getByDisplayValue('20')).toBeInTheDocument();
  });

  test('Renders without crashing when no onChange provided for max', () => {
    const { getByDisplayValue } = render(
      <InputSlider {...defaultProps} onChange={undefined} />
    );
    const maxInput = getByDisplayValue('10');
    fireEvent.change(maxInput, { target: { value: '80' } });
    expect(getByDisplayValue('80')).toBeInTheDocument();
  });
});
