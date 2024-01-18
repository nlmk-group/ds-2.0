import React, { FC } from 'react';

import { Icon, Switch } from '@components/index';
import { fireEvent, render, screen } from '@testing-library/react';

describe('src/components/Switch', () => {
  const mockCallBack = jest.fn();
  test('It should render a Switch', () => {
    const { container } = render(<Switch checked={false} onChange={mockCallBack} />);
    const headerComponent = container.getElementsByTagName('div')[0];
    expect(headerComponent).toBeInTheDocument();
  });

  describe('While Switch is inactive', () => {
    const InactiveSwitch = (): JSX.Element => <Switch checked={false} onChange={mockCallBack} />;

    test('It should render inactive track', () => {
      render(<InactiveSwitch />);
      expect(screen.getByTestId('TRACK').classList.contains('track-inactive')).toBe(true);
    });

    test('It should render inactive touch', () => {
      render(<InactiveSwitch />);
      expect(screen.getByTestId('TOUCH').classList.contains('inactive')).toBe(true);
    });

    test('It should render inactive focus', () => {
      render(<InactiveSwitch />);
      expect(screen.getByTestId('FOCUS').classList.contains('focus-inactive')).toBe(true);
    });
  });

  describe('While Switch is active', () => {
    const ActiveSwitch = (): JSX.Element => <Switch checked={true} onChange={mockCallBack} />;

    test('It should render active track', () => {
      render(<ActiveSwitch />);
      expect(screen.getByTestId('TRACK').classList.contains('track-active')).toBe(true);
    });

    test('It should render active touch', () => {
      render(<ActiveSwitch />);
      expect(screen.getByTestId('TOUCH').classList.contains('active')).toBe(true);
    });

    test('It should render active focus', () => {
      render(<ActiveSwitch />);
      expect(screen.getByTestId('FOCUS').classList.contains('focus-active')).toBe(true);
    });
  });

  test('It should use passed function', () => {
    render(<Switch checked={false} onChange={mockCallBack} />);

    const controller = screen.getByTestId('CONTROLLER');

    fireEvent.click(controller);
    expect(mockCallBack).toHaveBeenCalledTimes(1);
  });

  test('It should render Switch with label', () => {
    const testLabel = 'Hello world!';
    render(<Switch checked={false} onChange={mockCallBack} label={testLabel} />);
    expect(screen.getByTestId('LABEL')).toHaveTextContent(testLabel);
  });

  test('It should render disabled Switch', () => {
    render(<Switch disabled checked={false} onChange={mockCallBack} />);
    expect(screen.getByTestId('SWITCH_WRAPPER').classList.contains('disabled')).toBe(true);
  });

  describe('While Switch has icons', () => {
    const ActiveIcon = (): JSX.Element => (
      <div data-testid="ACTIVE_ICON">
        <Icon containerSize={16} htmlColor="var(--text-grey-100)" name="IconMetallalomScrapFilled16" />
      </div>
    );

    const InactiveIcon = (): JSX.Element => (
      <div data-testid="INACTIVE_ICON">
        <Icon containerSize={16} htmlColor="var(--primary-blue-600)" name="IconMetallalomScrap16" />
      </div>
    );

    const SwitchIcons: FC<{ checked?: boolean }> = ({ checked = false }): JSX.Element => (
      <Switch checked={checked} activeIcon={<ActiveIcon />} inactiveIcon={<InactiveIcon />} onChange={mockCallBack} />
    );

    test('It should render inactive icon', () => {
      render(<SwitchIcons />);
      expect(screen.getByTestId('INACTIVE_ICON')).toBeInTheDocument();
    });

    test('It should render active icon', () => {
      render(<SwitchIcons checked />);
      expect(screen.getByTestId('ACTIVE_ICON')).toBeInTheDocument();
    });
  });
});
