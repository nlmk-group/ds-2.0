import React from 'react';

import { Stepper } from '@components/index';
import { fireEvent, render, screen } from '@testing-library/react';

import { EStepState } from './subcomponents/Step/enums';

describe('Stepper Component', () => {
  const defaultProps = {
    state: EStepState.notFilled,
    stepName: 'Step 1',
    showStep: true,
    index: 0,
    currentStep: 0,
    onClick: jest.fn()
  };

  it('renders the step name', () => {
    render(<Stepper {...defaultProps} />);
    const stepNameElement = screen.getByText(defaultProps.stepName);
    expect(stepNameElement).toBeInTheDocument();
  });

  it('renders the step number inside badge', () => {
    render(<Stepper {...defaultProps} />);
    const badgeElement = screen.getByText(defaultProps.index + 1);
    expect(badgeElement).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    render(<Stepper {...defaultProps} />);
    const stepElement = screen.getByText(defaultProps.stepName);
    fireEvent.click(stepElement);
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
    expect(defaultProps.onClick).toHaveBeenCalledWith({ state: defaultProps.state, index: defaultProps.index });
  });

  it('applies the "disabled" class when state is "disabled"', () => {
    const { container } = render(<Stepper {...defaultProps} state={EStepState.disabled} />);
    const stepElement = container.firstChild;
    expect(stepElement).toHaveClass('disabled');
  });

  it('does not render the divider when showStep is false', () => {
    render(<Stepper {...defaultProps} showStep={false} />);
    const dividerElement = screen.queryByTestId('divider-line');
    expect(dividerElement).toBeNull();
  });

  it('renders filled state when index is less than or equal to currentStep', () => {
    const { rerender } = render(<Stepper {...defaultProps} currentStep={2} index={1} />);
    expect(screen.getByText('2')).toBeInTheDocument();

    rerender(<Stepper {...defaultProps} currentStep={1} index={2} />);
    expect(screen.getByText('3')).toBeInTheDocument();
  });
});
