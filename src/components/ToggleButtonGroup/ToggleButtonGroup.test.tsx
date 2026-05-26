import React from 'react';

import { IconStarOutlined24, ToggleButtonGroup } from '@components/index';
import { fireEvent, render, screen } from '@testing-library/react';

import styles from './ToggleButtonGroup.module.scss';

import { EToggleButtonGroupSizeMapping } from './enums';

describe('src/components/ToggleButtonGroup', () => {
  const mockCallBack = jest.fn();
  const buttonTitle = 'Hello world';
  const TBGHelper = () => (
    <ToggleButtonGroup>
      <ToggleButtonGroup.Button onClick={mockCallBack}>
        <ToggleButtonGroup.Button.Label>{buttonTitle}</ToggleButtonGroup.Button.Label>
      </ToggleButtonGroup.Button>
    </ToggleButtonGroup>
  );

  test('It should render a ToggleButtonGroup', () => {
    const { container } = render(<TBGHelper />);
    const buttonGroup = container.getElementsByTagName('div')[0];
    expect(buttonGroup).toBeInTheDocument();
  });

  test('It should render a ToggleButtonGroup with custom className', () => {
    const className = 'test-class-wrapper';
    render(
      <ToggleButtonGroup className={styles[className]}>
        <ToggleButtonGroup.Button onClick={mockCallBack}>
          <ToggleButtonGroup.Button.Label>{buttonTitle}</ToggleButtonGroup.Button.Label>
        </ToggleButtonGroup.Button>
      </ToggleButtonGroup>
    );
    const wrapper = screen.getByTestId('TOGGLE_BUTTON_WRAPPER');
    expect(wrapper.classList.contains(className)).toBe(true);
  });

  test('It should render ToggleButtonGroup with ToggleButton', () => {
    render(<TBGHelper />);
    const button = screen.getByTestId('TOGGLE_BUTTON');
    expect(button).toHaveTextContent(buttonTitle);
  });

  test('It should render ToggleButtonGroup with disabled ToggleButton', () => {
    render(
      <ToggleButtonGroup>
        <ToggleButtonGroup.Button onClick={mockCallBack} disabled>
          <ToggleButtonGroup.Button.Label>{buttonTitle}</ToggleButtonGroup.Button.Label>
        </ToggleButtonGroup.Button>
      </ToggleButtonGroup>
    );
    const button = screen.getByTestId('TOGGLE_BUTTON');
    expect(button.classList.contains('button-disabled')).toBe(true);
  });

  test('It should render ToggleButtonGroup with ToggleButton with custom className', () => {
    const className = 'test-class-button';
    render(
      <ToggleButtonGroup>
        <ToggleButtonGroup.Button onClick={mockCallBack} className={styles[className]}>
          <ToggleButtonGroup.Button.Label>{buttonTitle}</ToggleButtonGroup.Button.Label>
        </ToggleButtonGroup.Button>
      </ToggleButtonGroup>
    );
    const button = screen.getByTestId('TOGGLE_BUTTON');
    expect(button.classList.contains(className)).toBe(true);
  });

  test('It should call a function while click', () => {
    render(<TBGHelper />);
    const button = screen.getByTestId('TOGGLE_BUTTON');
    fireEvent.click(button);
    expect(mockCallBack).toHaveBeenCalledTimes(1);
  });

  test('It should render default active button when it was clicked', () => {
    render(<TBGHelper />);
    const button = screen.getByTestId('TOGGLE_BUTTON');
    fireEvent.click(button);
    expect(button.classList.contains(`button-active-default`)).toBe(true);
  });

  Object.values(EToggleButtonGroupSizeMapping).forEach((size: EToggleButtonGroupSizeMapping) => {
    describe(`While rendering with ${size} size`, () => {
      const TestToggleButtonGroup = ({ size }: { size: string }) => (
        <ToggleButtonGroup size={size as EToggleButtonGroupSizeMapping}>
          <ToggleButtonGroup.Button onClick={mockCallBack}>
            <ToggleButtonGroup.Button.Label>{buttonTitle}</ToggleButtonGroup.Button.Label>
          </ToggleButtonGroup.Button>
        </ToggleButtonGroup>
      );

      test(`It should render wrapper with ${size} size`, () => {
        render(<TestToggleButtonGroup size={size} />);
        const togglebutton = screen.getByTestId('TOGGLE_BUTTON');
        expect(togglebutton.classList.contains(`button-size-${size}`)).toBe(true);
      });
    });
  });

  test('It should render ToggleButton with tooltip', () => {
    const { container } = render(
      <ToggleButtonGroup>
        <ToggleButtonGroup.Button onClick={mockCallBack}>
          <ToggleButtonGroup.Button.Tooltip render={buttonTitle}>
            <ToggleButtonGroup.Button.Label>{buttonTitle}</ToggleButtonGroup.Button.Label>
          </ToggleButtonGroup.Button.Tooltip>
        </ToggleButtonGroup.Button>
      </ToggleButtonGroup>
    );
    const tooltip = container.getElementsByTagName('div')[2];
    expect(tooltip.classList.contains('tooltip')).toBe(true);
  });

  test('It should render ToggleButton with icon', () => {
    render(
      <ToggleButtonGroup>
        <ToggleButtonGroup.Button onClick={mockCallBack}>
          <ToggleButtonGroup.Button.Icon />
          <ToggleButtonGroup.Button.Label>{buttonTitle}</ToggleButtonGroup.Button.Label>
        </ToggleButtonGroup.Button>
      </ToggleButtonGroup>
    );
    expect(screen.getByTestId('ICON')).toBeInTheDocument();
  });

  test('It should render ToggleButton with custom icon', () => {
    render(
      <ToggleButtonGroup>
        <ToggleButtonGroup.Button onClick={mockCallBack}>
          <ToggleButtonGroup.Button.Icon>
            <IconStarOutlined24 />
          </ToggleButtonGroup.Button.Icon>
          <ToggleButtonGroup.Button.Label>{buttonTitle}</ToggleButtonGroup.Button.Label>
        </ToggleButtonGroup.Button>
      </ToggleButtonGroup>
    );
    expect(screen.getByTestId('ICON')).toBeInTheDocument();
  });

  test('It should render ToggleButton with badge', () => {
    const badgeAmount = '7';
    render(
      <ToggleButtonGroup>
        <ToggleButtonGroup.Button onClick={mockCallBack}>
          <ToggleButtonGroup.Button.Badge>{badgeAmount}</ToggleButtonGroup.Button.Badge>
          <ToggleButtonGroup.Button.Label>{buttonTitle}</ToggleButtonGroup.Button.Label>
        </ToggleButtonGroup.Button>
      </ToggleButtonGroup>
    );
    expect(screen.getByTestId('BADGE_WRAPPER')).toHaveTextContent(badgeAmount);
  });
});
