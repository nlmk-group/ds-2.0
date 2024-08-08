import React from 'react';

import { variantsMapping } from '@components/declaration';
import { Snackbar } from '@components/index';
import { act, fireEvent, render, screen } from '@testing-library/react';

import { ESnackbarColors } from './enums';

describe('Snackbar component', () => {
  const testMessage = 'Test message';

  test('src/components/Snackbar', () => {
    render(<Snackbar>{testMessage}</Snackbar>);
    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });

  test.each(Object.values(ESnackbarColors))('renders Snackbar with %s color', color => {
    render(<Snackbar color={color}>{testMessage}</Snackbar>);
    expect(screen.getByTestId('SNACKBAR_WRAPPER')).toHaveClass(`snackbar-${color}`);
  });

  test.each(Object.values(variantsMapping))('renders Snackbar with %s variant', variant => {
    render(<Snackbar variant={variant}>{testMessage}</Snackbar>);
    expect(screen.getByTestId('SNACKBAR_WRAPPER')).toHaveClass(`snackbar-${variant}`);
  });

  test('renders action button with default text', () => {
    const actionMock = jest.fn();
    render(<Snackbar actionButton={actionMock}>{testMessage}</Snackbar>);
    const actionButton = screen.getByTestId('SNACKBAR_ACTION');
    expect(actionButton).toBeInTheDocument();
    expect(actionButton).toHaveTextContent('Посмотреть');
  });

  test('renders action button with custom text', () => {
    const actionMock = jest.fn();
    const actionText = 'Custom Action';
    render(
      <Snackbar actionButton={actionMock} actionText={actionText}>
        {testMessage}
      </Snackbar>
    );
    const actionButton = screen.getByTestId('SNACKBAR_ACTION');
    expect(actionButton).toHaveTextContent(actionText);
  });

  test('calls action function when action button is clicked', () => {
    const actionMock = jest.fn();
    render(<Snackbar actionButton={actionMock}>{testMessage}</Snackbar>);
    fireEvent.click(screen.getByTestId('SNACKBAR_ACTION'));
    expect(actionMock).toHaveBeenCalledTimes(1);
  });

  test('renders close button when close function is provided', () => {
    const closeMock = jest.fn();
    render(<Snackbar close={closeMock}>{testMessage}</Snackbar>);
    expect(screen.getByTestId('SNACKBAR_CLOSE')).toBeInTheDocument();
  });

  test('calls close function when close button is clicked', () => {
    const closeMock = jest.fn();
    render(<Snackbar close={closeMock}>{testMessage}</Snackbar>);
    fireEvent.click(screen.getByTestId('SNACKBAR_CLOSE'));
    expect(closeMock).toHaveBeenCalledTimes(1);
  });

  test('auto-hides after specified duration', () => {
    jest.useFakeTimers();
    const closeMock = jest.fn();
    render(
      <Snackbar close={closeMock} autoHideDuration={1000}>
        {testMessage}
      </Snackbar>
    );

    expect(screen.getByText(testMessage)).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(closeMock).toHaveBeenCalledTimes(1);
    jest.useRealTimers();
  });

  test('applies custom className', () => {
    const customClass = 'custom-class';
    render(<Snackbar className={customClass}>{testMessage}</Snackbar>);
    expect(screen.getByTestId('SNACKBAR_WRAPPER')).toHaveClass(customClass);
  });

  test('applies custom style', () => {
    const customStyle = { backgroundColor: 'red' };
    render(<Snackbar style={customStyle}>{testMessage}</Snackbar>);
    expect(screen.getByTestId('SNACKBAR_WRAPPER')).toHaveStyle(customStyle);
  });
});
