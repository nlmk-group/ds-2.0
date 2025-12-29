import React from 'react';
import ClickAwayListener from '@components/ClickAwayListener/index';
import { render, fireEvent } from '@testing-library/react';

describe('src/components/ClickAwayListener', () => {
  let onClickAway: jest.Mock;

  beforeEach(() => {
    onClickAway = jest.fn();
  });

  test('calls onClickAway when clicked outside', () => {
    const { getByText } = render(
      <div>
        <ClickAwayListener onClickAway={onClickAway}>
          <button>Inside</button>
        </ClickAwayListener>
        <button>Outside</button>
      </div>
    );

    fireEvent.mouseUp(getByText('Outside')); // Используем mouseUp вместо mouseDown
    expect(onClickAway).toHaveBeenCalled();
  });

  test('does not call onClickAway when clicked inside', () => {
    const { getByText } = render(
      <ClickAwayListener onClickAway={onClickAway}>
        <button>Inside</button>
      </ClickAwayListener>
    );

    fireEvent.mouseUp(getByText('Inside')); // Используем mouseUp вместо mouseDown
    expect(onClickAway).not.toHaveBeenCalled();
  });
});
