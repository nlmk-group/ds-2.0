import React from 'react';

import ClickAwayListener from '@components/ClickAwayListener/index';
import { fireEvent, render } from '@testing-library/react';

describe('src/components/ClickAwayListener', () => {
  let onClickAway: jest.Mock;

  beforeEach(() => {
    onClickAway = jest.fn();
  });

  test('calls onClickAway when clicked outside', () => {
    render(
      <div>
        <ClickAwayListener onClickAway={onClickAway}>
          <button>Inside</button>
        </ClickAwayListener>
        <button>Outside</button>
      </div>
    );

    fireEvent.mouseDown(document.querySelector('button:nth-child(2)')!);
    expect(onClickAway).toHaveBeenCalled();
  });

  test('does not call onClickAway when clicked inside', () => {
    render(
      <ClickAwayListener onClickAway={onClickAway}>
        <button>Inside</button>
      </ClickAwayListener>
    );

    fireEvent.mouseDown(document.querySelector('button')!);
    expect(onClickAway).not.toHaveBeenCalled();
  });
});
