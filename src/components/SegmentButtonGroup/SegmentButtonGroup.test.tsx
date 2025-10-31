import React from 'react';

import { SegmentButtonGroup } from '@components/index';
import { fireEvent, render, screen } from '@testing-library/react';

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

  test('button with active prop is active on initial render', () => {
    render(
      <SegmentButtonGroup>
        <SegmentButton buttonIndex={0} active>{btnText}</SegmentButton>
        <SegmentButton buttonIndex={1}>Button 2</SegmentButton>
      </SegmentButtonGroup>
    );
    const buttons = screen.getAllByTestId('SEGMENT_BUTTON');
    expect(buttons[0].classList.contains('active')).toBe(true);
    expect(buttons[1].classList.contains('active')).toBe(false);
  });

  test('only first button is active when multiple buttons have active prop', () => {
    render(
      <SegmentButtonGroup>
        <SegmentButton buttonIndex={0} active>{btnText}</SegmentButton>
        <SegmentButton buttonIndex={1} active>Button 2</SegmentButton>
        <SegmentButton buttonIndex={2} active>Button 3</SegmentButton>
      </SegmentButtonGroup>
    );
    const buttons = screen.getAllByTestId('SEGMENT_BUTTON');
    expect(buttons[0].classList.contains('active')).toBe(true);
    expect(buttons[1].classList.contains('active')).toBe(false);
    expect(buttons[2].classList.contains('active')).toBe(false);
  });

  test('can toggle active state from initially active button', () => {
    render(
      <SegmentButtonGroup>
        <SegmentButton buttonIndex={0} active>{btnText}</SegmentButton>
        <SegmentButton buttonIndex={1}>Button 2</SegmentButton>
      </SegmentButtonGroup>
    );
    const buttons = screen.getAllByTestId('SEGMENT_BUTTON');
    
    // Initially first button is active
    expect(buttons[0].classList.contains('active')).toBe(true);
    
    // Click on second button
    fireEvent.click(buttons[1]);
    expect(buttons[0].classList.contains('active')).toBe(false);
    expect(buttons[1].classList.contains('active')).toBe(true);
    
    // Click back on first button
    fireEvent.click(buttons[0]);
    expect(buttons[0].classList.contains('active')).toBe(true);
    expect(buttons[1].classList.contains('active')).toBe(false);
  });

  test('clicking on initially active button deactivates it', () => {
    render(
      <SegmentButtonGroup>
        <SegmentButton buttonIndex={0} active>{btnText}</SegmentButton>
      </SegmentButtonGroup>
    );
    const button = screen.getByTestId('SEGMENT_BUTTON');
    
    // Initially active
    expect(button.classList.contains('active')).toBe(true);
    
    // Click to deactivate
    fireEvent.click(button);
    expect(button.classList.contains('active')).toBe(false);
    
    // Click again to activate
    fireEvent.click(button);
    expect(button.classList.contains('active')).toBe(true);
  });

  test('active prop changes from parent trigger re-render', () => {
    const { rerender } = render(
      <SegmentButtonGroup>
        <SegmentButton buttonIndex={0} active>{btnText}</SegmentButton>
        <SegmentButton buttonIndex={1}>Button 2</SegmentButton>
      </SegmentButtonGroup>
    );
    const buttons = screen.getAllByTestId('SEGMENT_BUTTON');
    
    // Initially first button is active
    expect(buttons[0].classList.contains('active')).toBe(true);
    expect(buttons[1].classList.contains('active')).toBe(false);
    
    // Parent changes active to second button
    rerender(
      <SegmentButtonGroup>
        <SegmentButton buttonIndex={0}>{btnText}</SegmentButton>
        <SegmentButton buttonIndex={1} active>Button 2</SegmentButton>
      </SegmentButtonGroup>
    );
    
    const updatedButtons = screen.getAllByTestId('SEGMENT_BUTTON');
    expect(updatedButtons[0].classList.contains('active')).toBe(false);
    expect(updatedButtons[1].classList.contains('active')).toBe(true);
  });

  test('removing active prop deactivates button', () => {
    const { rerender } = render(
      <SegmentButtonGroup>
        <SegmentButton buttonIndex={0} active>{btnText}</SegmentButton>
      </SegmentButtonGroup>
    );
    const button = screen.getByTestId('SEGMENT_BUTTON');
    
    // Initially active
    expect(button.classList.contains('active')).toBe(true);
    
    // Parent removes active prop
    rerender(
      <SegmentButtonGroup>
        <SegmentButton buttonIndex={0}>{btnText}</SegmentButton>
      </SegmentButtonGroup>
    );
    
    const updatedButton = screen.getByTestId('SEGMENT_BUTTON');
    expect(updatedButton.classList.contains('active')).toBe(false);
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

  test('disables all buttons when group is disabled', () => {
    render(
      <SegmentButtonGroup disabled>
        <SegmentButton buttonIndex={0}>{btnText}</SegmentButton>
        <SegmentButton buttonIndex={1}>Button 2</SegmentButton>
      </SegmentButtonGroup>
    );
    const buttons = screen.getAllByTestId('SEGMENT_BUTTON');
    buttons.forEach(button => {
      expect(button).toBeDisabled();
    });
  });

  test('disables individual button when disabled prop is set', () => {
    render(
      <SegmentButtonGroup>
        <SegmentButton buttonIndex={0}>{btnText}</SegmentButton>
        <SegmentButton buttonIndex={1} disabled>Button 2</SegmentButton>
      </SegmentButtonGroup>
    );
    const buttons = screen.getAllByTestId('SEGMENT_BUTTON');
    expect(buttons[0]).not.toBeDisabled();
    expect(buttons[1]).toBeDisabled();
  });

  test('disabled button does not trigger onClick', () => {
    const mockDisabledClick = jest.fn();
    render(
      <SegmentButtonGroup>
        <SegmentButton buttonIndex={0} disabled onClick={mockDisabledClick}>
          {btnText}
        </SegmentButton>
      </SegmentButtonGroup>
    );
    const button = screen.getByTestId('SEGMENT_BUTTON');
    fireEvent.click(button);
    expect(mockDisabledClick).not.toHaveBeenCalled();
  });

  test('group disabled has priority over individual button enabled state', () => {
    render(
      <SegmentButtonGroup disabled>
        <SegmentButton buttonIndex={0} disabled={false}>{btnText}</SegmentButton>
      </SegmentButtonGroup>
    );
    const button = screen.getByTestId('SEGMENT_BUTTON');
    expect(button).toBeDisabled();
  });

  test('individual disabled works independently from group', () => {
    render(
      <SegmentButtonGroup disabled={false}>
        <SegmentButton buttonIndex={0} disabled>{btnText}</SegmentButton>
      </SegmentButtonGroup>
    );
    const button = screen.getByTestId('SEGMENT_BUTTON');
    expect(button).toBeDisabled();
  });
});
