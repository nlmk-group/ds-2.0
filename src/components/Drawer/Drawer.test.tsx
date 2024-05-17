import React from 'react';

import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { Drawer } from '..';

describe('Drawer Component', () => {
  it('renders when isOpen is true', () => {
    const { getByTestId } = render(<Drawer isOpen onClose={() => {}} children={<div>Content</div>} />);
    expect(getByTestId('DRAWER')).toBeInTheDocument();
  });

  it('does not render when isOpen is false', () => {
    const { queryByTestId } = render(<Drawer isOpen={false} onClose={() => {}} children={<div>Content</div>} />);
    expect(queryByTestId('DRAWER')).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', async () => {
    const onClose = jest.fn();
    render(<Drawer isOpen onClose={onClose} children={<div>Content</div>} />);
    fireEvent.click(screen.getByLabelText('Close'));
    await waitFor(() => {
      expect(onClose).toHaveBeenCalled();
    });
  });

  it('calls onClose when escape key is pressed', async () => {
    const onClose = jest.fn();
    render(<Drawer isOpen onClose={onClose} children={<div>Content</div>} />);
    fireEvent.keyDown(window, { key: 'Escape', code: 'Escape' });
    await waitFor(() => {
      expect(onClose).toHaveBeenCalled();
    });
  });

  it('does not close when clicked away if disableBackdropClick is true', () => {
    const onClose = jest.fn();
    render(<Drawer isOpen onClose={onClose} disableBackdropClick children={<div>Content</div>} />);
    fireEvent.mouseDown(document);
    expect(onClose).not.toHaveBeenCalled();
  });
});
