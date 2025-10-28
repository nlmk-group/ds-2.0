import React from 'react';

import { SegmentButtonGroup } from '@components/index';
import { render, fireEvent, screen } from '@testing-library/react';

import { ESegmentButtonGroupSizes } from './enums';
import SegmentButton from './SegmentButton';

describe('SegmentButtonGroup Component', () => {
  const mockCallBack = jest.fn();
  const btnText = 'Click me';

  const TestComponent = () => (
    <SegmentButtonGroup>
      <SegmentButton buttonIndex={0} onClick={mockCallBack}>
        {btnText}
      </SegmentButton>
    </SegmentButtonGroup>
  );

  test('renders SegmentButtonGroup correctly', () => {
    render(<TestComponent />);
    const wrapper = screen.getByTestId('SEGMENT_BUTTON_WRAPPER');
    expect(wrapper).toBeInTheDocument();
  });

  test('renders a button inside SegmentButtonGroup', () => {
    render(<TestComponent />);
    const button = screen.getByTestId('SEGMENT_BUTTON');
    expect(button).toHaveTextContent(btnText);
  });

  test('adds custom class to SegmentButtonGroup', () => {
    const customClass = 'custom-class';
    render(
      <SegmentButtonGroup className={customClass}>
        <SegmentButton buttonIndex={0} onClick={mockCallBack}>
          {btnText}
        </SegmentButton>
      </SegmentButtonGroup>
    );
    const wrapper = screen.getByTestId('SEGMENT_BUTTON_WRAPPER');
    expect(wrapper.classList.contains(customClass)).toBe(true);
  });

  test('button click triggers onClick function', () => {
    render(<TestComponent />);
    const button = screen.getByTestId('SEGMENT_BUTTON');
    fireEvent.click(button);
    expect(mockCallBack).toHaveBeenCalledTimes(1);
  });

  test('button receives correct active state on click', () => {
    render(<TestComponent />);
    const button = screen.getByTestId('SEGMENT_BUTTON');
    fireEvent.click(button);
    expect(button.classList.contains('active')).toBe(true);
  });

  test('renders button with different sizes correctly', () => {
    render(
      <SegmentButtonGroup size={ESegmentButtonGroupSizes.s}>
        <SegmentButton buttonIndex={0}>{btnText}</SegmentButton>
      </SegmentButtonGroup>
    );
    const button = screen.getByTestId('SEGMENT_BUTTON');
    expect(button.classList.contains('segmentButton-s')).toBe(true);
  });
});
