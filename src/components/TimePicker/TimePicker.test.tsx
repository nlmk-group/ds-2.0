import React from 'react';

import { TimePicker } from '@components/index';
import { render, screen } from '@testing-library/react';

jest.mock('react-popper', () => ({
  usePopper: () => ({
    styles: { popper: { position: 'absolute' } },
    attributes: { popper: {} }
  })
}));

describe('TimePicker Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the TimePicker component with default props', () => {
    render(<TimePicker />);
    const pickerContainer = screen.getByRole('textbox');
    expect(pickerContainer).toBeInTheDocument();
  });

  it('renders pseudo mode with the correct label', () => {
    render(<TimePicker pseudo label="Custom Label" />);

    expect(screen.getByText('Custom Label')).toBeInTheDocument();
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
  });
});
