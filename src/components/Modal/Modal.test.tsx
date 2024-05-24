import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import Modal from './index';

describe('src/components/Modal', () => {
  it('It should renders and closes on onClose', () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen onClose={handleClose}>
        <div>Test Content</div>
      </Modal>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Close' }));
    expect(handleClose).toHaveBeenCalled();
  });

  it('It should renders draggable element when isDraggable is true', () => {
    render(
      <Modal isOpen isDraggable onClose={() => {}}>
        <div>Draggable Content</div>
      </Modal>
    );

    expect(screen.getByText('Draggable Content')).toBeInTheDocument();
    // Дополнительные проверки для функциональности перетаскивания
  });

  it('It should applies resizable styles when isResizable is true', () => {
    const { container } = render(
      <Modal isOpen isResizable onClose={() => {}}>
        <div>Resizable Content</div>
      </Modal>
    );

    const modal = container.querySelector('.modal'); // Предполагается, что модальное окно имеет класс 'modal'
    expect(modal).toHaveClass('resizable');
  });

  it('It should calls onEscapeDown when Escape key is pressed', () => {
    const handleEscapeDown = jest.fn();
    render(
      <Modal isOpen onEscapeDown={handleEscapeDown} onClose={() => {}}>
        <div>Content</div>
      </Modal>
    );

    fireEvent.keyDown(window, { key: 'Escape', code: 'Escape' });
    expect(handleEscapeDown).toHaveBeenCalled();
  });

  it('It should applies custom className', () => {
    const { container } = render(
      <Modal isOpen className="custom-class" onClose={() => {}}>
        <div>Content</div>
      </Modal>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('It should closes on click away when ClickAwayListener is triggered', () => {
    const handleClose = jest.fn();
    render(
      <div>
        <Modal isOpen onClose={handleClose}>
          <div>Content</div>
        </Modal>
        <div data-testid="outside">Outside Modal</div>
      </div>
    );

    fireEvent.mouseUp(screen.getByTestId('outside')); // Убедитесь, что клик происходит вне модального окна
    expect(handleClose).toHaveBeenCalled();
  });

  it('It should not render when isOpen is false', () => {
    render(
      <Modal isOpen={false} onClose={() => {}}>
        <div>Test Content</div>
      </Modal>
    );

    expect(screen.queryByText('Test Content')).not.toBeInTheDocument();
  });
});
