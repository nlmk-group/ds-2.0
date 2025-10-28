import React from 'react';

import { Alert } from '@components/index';
import { render, fireEvent, screen } from '@testing-library/react';

import styles from './Alert.module.scss';

import { EAlertSeverity } from './enums';

describe('src/components/Alert', () => {
  const TITLE = 'Hello World'!;

  test('It should render an Alert', () => {
    const { container } = render(<Alert title="Aloha" />);
    const alertComponent = container.getElementsByTagName('div')[0];
    expect(alertComponent).toBeInTheDocument();
  });

  test('It should render correct title', () => {
    render(<Alert title={TITLE} />);
    expect(screen.getByTestId('ALERT_TITLE')).toHaveTextContent(TITLE);
  });

  test.each([
    ['success', EAlertSeverity.success],
    ['error', EAlertSeverity.error],
    ['warning', EAlertSeverity.warning],
    ['info', EAlertSeverity.info]
  ])('It should render %s alert', (severityName, severity) => {
    render(<Alert title={TITLE} severity={severity} />);
    expect(screen.getByTestId('ALERT_WRAPPER').classList.contains(`wrapper-${severityName}`)).toBe(true);
  });

  test('It should render alert with custom styles', () => {
    render(<Alert title={TITLE} className={styles['test-custom-style']} />);
    expect(screen.getByTestId('ALERT_WRAPPER').classList.contains('test-custom-style')).toBe(true);
  });

  test('It should render alert with children', () => {
    const content = 'just some content';
    render(
      <Alert title={TITLE}>
        <div data-testid={'ALERT_CHILDREN'}>{content}</div>
      </Alert>
    );
    expect(screen.getByTestId('ALERT_CHILDREN')).toBeInTheDocument();
    expect(screen.getByTestId('ALERT_CHILDREN')).toHaveTextContent(content);
  });

  describe('While rendering alert with close button', () => {
    const mockCallBack = jest.fn();

    test('It should render alert with close button', () => {
      render(<Alert title={TITLE} close={mockCallBack} />);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    test('It should call function on click close button', () => {
      render(<Alert title={TITLE} close={mockCallBack} />);
      const button = screen.getByRole('button');
      fireEvent.click(button);
      expect(mockCallBack).toHaveBeenCalledTimes(1);
    });
  });

  test('It should render alert with action', () => {
    const actionText = 'Action';
    render(<Alert title={TITLE} action={<button>{actionText}</button>} />);
    expect(screen.getByText(actionText)).toBeInTheDocument();
  });
});
