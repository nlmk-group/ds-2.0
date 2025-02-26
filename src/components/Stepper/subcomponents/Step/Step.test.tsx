import React from 'react';

import { render, screen } from '@testing-library/react';

import { EStepState } from './enums';
import { Step } from './index';

describe('Step Component', () => {
  const defaultProps = {
    stepName: 'Step 1',
    index: 0,
    state: EStepState.notFilled
  };

  it('renders the step name', () => {
    render(<Step {...defaultProps} />);
    const stepNameElement = screen.getByText(defaultProps.stepName);
    expect(stepNameElement).toBeInTheDocument();
  });

  it('renders the step number inside badge', () => {
    render(<Step {...defaultProps} />);
    const badgeElement = screen.getByText(defaultProps.index + 1);
    expect(badgeElement).toBeInTheDocument();
  });

  it('applies the correct class for the step button', () => {
    const { container } = render(<Step {...defaultProps} />);
    const stepButton = container.querySelector('.step-button');
    expect(stepButton).toBeInTheDocument();
  });
});
