import React, { ButtonHTMLAttributes, ClassAttributes, ReactNode } from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import Dropdown from './index';

jest.mock(
  '@components/Button',
  () => {
    const MockButton = (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLButtonElement> & ButtonHTMLAttributes<HTMLButtonElement>) =>
      <button {...props} />;
    MockButton.displayName = 'MockButton';
    return MockButton;
  }
);

jest.mock('@components/ClickAwayListener', () => {
  const MockClickAwayListener = (props: { onClickAway: () => void; children: ReactNode }) => {
    const { onClickAway, children } = props;
    return (
      <div onClick={onClickAway} data-testid="click-away">
        {children}
      </div>
    );
  };
  MockClickAwayListener.displayName = 'MockClickAwayListener';
  return MockClickAwayListener;
});

describe('src/components/Dropdown', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  test('should open and close menu on button click', () => {
    render(
      <Dropdown disabled={false} buttonChildren="Dropdown Button">
        <div>Menu Item</div>
      </Dropdown>
    );

    const buttonElement = screen.getByText(/Dropdown Button/i);
    fireEvent.click(buttonElement);

    expect(screen.getByText(/Menu Item/i)).toBeInTheDocument();

    fireEvent.click(buttonElement);

    expect(screen.queryByText(/Menu Item/i)).not.toBeInTheDocument();
  });

  test('should close menu when clicking away', () => {
    render(
      <Dropdown disabled={false} buttonChildren="Dropdown Button">
        <div>Menu Item</div>
      </Dropdown>
    );

    const buttonElement = screen.getByText(/Dropdown Button/i);
    fireEvent.click(buttonElement);

    expect(screen.getByText(/Menu Item/i)).toBeInTheDocument();

    const clickAwayElement = screen.getByTestId('click-away');
    fireEvent.click(clickAwayElement);

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.queryByText(/Menu Item/i)).not.toBeInTheDocument();
  });

  test('should close menu when menu item is clicked', () => {
    render(
      <Dropdown disabled={false} buttonChildren="Dropdown Button">
        <div>Menu Item</div>
      </Dropdown>
    );

    const buttonElement = screen.getByText(/Dropdown Button/i);
    fireEvent.click(buttonElement);

    expect(screen.getByText(/Menu Item/i)).toBeInTheDocument();

    const menuItemElement = screen.getByText(/Menu Item/i);
    fireEvent.click(menuItemElement);

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.queryByText(/Menu Item/i)).not.toBeInTheDocument();
  });

  afterEach(() => {
    jest.useRealTimers();
  });
});
