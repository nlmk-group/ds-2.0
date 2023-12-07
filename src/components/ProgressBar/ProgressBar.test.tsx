import React from 'react';

import { ProgressBar } from '@components/index';
import { render } from '@testing-library/react';

describe('<ProgressBar />', () => {
  it('renders correctly with given percentage', () => {
    const { getByRole, getByText } = render(<ProgressBar percentage={50} />);
    const progressBar = getByRole('progressBar');
    expect(progressBar).toBeInTheDocument();
    expect(getByText('50%')).toBeInTheDocument();
  });

  it('sets the correct width for progressBarFill based on percentage', () => {
    const { getByRole } = render(<ProgressBar percentage={75} />);
    const progressBarFill = getByRole('progressBar').firstChild;
    expect(progressBarFill).toHaveStyle('width: 75%');
  });

  it('displays the label when provided', () => {
    const { getByText } = render(<ProgressBar percentage={60} label="Loading..." />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('does not display the label when not provided', () => {
    const { queryByText } = render(<ProgressBar percentage={60} />);
    expect(queryByText('Loading...')).not.toBeInTheDocument();
  });
});
