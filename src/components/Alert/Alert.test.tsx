import React from 'react';

import { Alert } from '@components/index';
import { render, screen, fireEvent } from '@testing-library/react';
import { severityMapping } from './enums';
import styles from './Alert.module.scss'


describe('src/components/Alert', () => {
  const TITLE = 'Hello World'!;
  // Check render tab at DOM
  test('It should render an Alert', () => {
    const { container } = render(<Alert title="Aloha" />);
    const alertComponent = container.getElementsByTagName('div')[0];
    expect(alertComponent).toBeInTheDocument();
  });

  // Check render correct title
  test('It should render correct title', () => {
    render(<Alert title={TITLE} />);
    expect(screen.getByTestId('ALERT_TITLE')).toHaveTextContent(TITLE);
  });

  // Check success variants
  test('It should render success standard alert', () => {
    render(<Alert title={TITLE} />);
    expect(screen.getByTestId('ALERT_WRAPPER').classList.contains('standard-success')).toBe(true)
  });

  // Check error variants
  test('It should render error standard alert', () => {
    render(
      <Alert
        title={TITLE}
        severity={severityMapping.error}
      />
    );
    expect(screen.getByTestId('ALERT_WRAPPER').classList.contains('standard-error')).toBe(true)
  });

  // Check warning variants
  test('It should render warning standard alert', () => {
    render(
      <Alert
        title={TITLE}
        severity={severityMapping.warning}
      />
    );
    expect(screen.getByTestId('ALERT_WRAPPER').classList.contains('standard-warning')).toBe(true)
  });

  // Check info variants
  test('It should render info standard alert', () => {
    render(
      <Alert
        title={TITLE}
        severity={severityMapping.info}
      />
    );
    expect(screen.getByTestId('ALERT_WRAPPER').classList.contains('standard-info')).toBe(true)
  });

  // Check adding custom styles
  test('It should render alert with custom styles', () => {
    render(
      <Alert
        title={TITLE}
        className={styles['test-custom-style']}
      />
    );
    expect(screen.getByTestId('ALERT_WRAPPER').classList.contains('test-custom-style')).toBe(true)
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

  describe('While rendering alert with button', () => {
    const mockCallBack = jest.fn();
    const AlertWithButton = () => (
      <Alert
        title={TITLE}
        close={mockCallBack}
      />
    )
    test('It should render alert with close button', () => {
      const { container } = render(<AlertWithButton />);
      const button = container.getElementsByTagName('button')[0];
      expect(button).toBeInTheDocument();
    });

    test('It should call function on click action', () => {
      const { container } = render(<AlertWithButton />);
      const button = container.getElementsByTagName('button')[0];
      fireEvent.click(button)
      expect(mockCallBack).toHaveBeenCalledTimes(1);
    });
  });
});
