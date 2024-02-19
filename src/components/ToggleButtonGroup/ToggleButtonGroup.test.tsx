import React from 'react';

import { ToggleButtonGroup } from '@components/index';
import {
  render,
  screen,
  fireEvent
} from '@testing-library/react';
import styles from './ToggleButtonGroup.module.scss';
import { statusMapping, sizeMapping } from './enums';

describe('src/components/ToggleButtonGroup', () => {
  const mockCallBack = jest.fn();
  const btnTitle = 'Hello world';
  const TBGHelper = () => (
    <ToggleButtonGroup>
      <ToggleButtonGroup.Button onClick={mockCallBack}>
        <ToggleButtonGroup.Button.Label>
          {btnTitle}
        </ToggleButtonGroup.Button.Label>
      </ToggleButtonGroup.Button>
    </ToggleButtonGroup>
  );

  test('It should render a ToggleButtonGroup', () => {
    const { container } = render(<TBGHelper />);
    const btnGroup = container.getElementsByTagName('div')[0];
    expect(btnGroup).toBeInTheDocument();
  });

  test('It should render a ToggleButtonGroup with custom className', () => {
    const className = 'test-class-wrapper'
    render(
      <ToggleButtonGroup className={styles[className]}>
        <ToggleButtonGroup.Button onClick={mockCallBack}>
          <ToggleButtonGroup.Button.Label>
            {btnTitle}
          </ToggleButtonGroup.Button.Label>
        </ToggleButtonGroup.Button>
      </ToggleButtonGroup>
    )
    const wrapper = screen.getByTestId('TOGGLE_BUTTON_WRAPPER');
    expect(wrapper.classList.contains(className)).toBe(true);
  });

  test('It should render ToggleButtonGroup with ToggleButton', () => {
    render(<TBGHelper />)
    const btn = screen.getByTestId('TOGGLE_BUTTON');
    expect(btn).toHaveTextContent(btnTitle);
  });

  test('It should render ToggleButtonGroup with disabled ToggleButton', () => {
    render(
      <ToggleButtonGroup>
        <ToggleButtonGroup.Button onClick={mockCallBack} disabled>
          <ToggleButtonGroup.Button.Label>
            {btnTitle}
          </ToggleButtonGroup.Button.Label>
        </ToggleButtonGroup.Button>
      </ToggleButtonGroup>
    )
    const btn = screen.getByTestId('TOGGLE_BUTTON');
    expect(btn.classList.contains('btn-disabled')).toBe(true);
  });

  test('It should render ToggleButtonGroup with ToggleButton with custom className', () => {
    const className = 'test-class-btn'
    render(
      <ToggleButtonGroup>
        <ToggleButtonGroup.Button
          onClick={mockCallBack}
          className={styles[className]}
        >
          <ToggleButtonGroup.Button.Label>
            {btnTitle}
          </ToggleButtonGroup.Button.Label>
        </ToggleButtonGroup.Button>
      </ToggleButtonGroup>
    )
    const btn = screen.getByTestId('TOGGLE_BUTTON');
    expect(btn.classList.contains(className)).toBe(true);
  });

  test('It should call a function while click', () => {
    render(<TBGHelper />)
    const btn = screen.getByTestId('TOGGLE_BUTTON');
    fireEvent.click(btn);
    expect(mockCallBack).toHaveBeenCalledTimes(1);
  });

  test('It should render default active button when it was clicked', () => {
    render(<TBGHelper />)
    const btn = screen.getByTestId('TOGGLE_BUTTON');
    fireEvent.click(btn);
    expect(btn.classList.contains(`btn-active-${statusMapping.default}`)).toBe(true);
  });

  Object.values(sizeMapping).forEach((size: sizeMapping) => {
    describe(`While rendering with ${size} size`, () => {
      const TestToggleButtonGroup = ({ size }: { size: string }) => (
        <ToggleButtonGroup
          size={size as sizeMapping}
        >
          <ToggleButtonGroup.Button onClick={mockCallBack}>
            <ToggleButtonGroup.Button.Label>
              {btnTitle}
            </ToggleButtonGroup.Button.Label>
          </ToggleButtonGroup.Button>
        </ToggleButtonGroup>
      );

      test(`It should render wrapper with ${size} size`, () => {
        render(<TestToggleButtonGroup size={size} />);
        const toggleBtn = screen.getByTestId('TOGGLE_BUTTON');
        expect(toggleBtn.classList.contains(`btn-size-${size}`)).toBe(true);
      });
    });
  });

  test('It should render ToggleButton with tooltip', () => {
    const { container } = render(
      <ToggleButtonGroup>
        <ToggleButtonGroup.Button onClick={mockCallBack}>
          <ToggleButtonGroup.Button.Tooltip description={btnTitle}>
            <ToggleButtonGroup.Button.Label>
              {btnTitle}
            </ToggleButtonGroup.Button.Label>
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
          <ToggleButtonGroup.Button.Icon/>
          <ToggleButtonGroup.Button.Label>
            {btnTitle}
          </ToggleButtonGroup.Button.Label>
        </ToggleButtonGroup.Button>
      </ToggleButtonGroup>
    );
    expect(screen.getByTestId('ICON')).toBeInTheDocument();
  });

  test('It should render ToggleButton with custom icon', () => {
    render(
      <ToggleButtonGroup>
        <ToggleButtonGroup.Button onClick={mockCallBack}>
          <ToggleButtonGroup.Button.Icon
            name='IconStarOutlined24'
          />
          <ToggleButtonGroup.Button.Label>
            {btnTitle}
          </ToggleButtonGroup.Button.Label>
        </ToggleButtonGroup.Button>
      </ToggleButtonGroup>
    );
    expect(screen.getByTestId('ICON')).toBeInTheDocument();
  });

  test('It should render ToggleButton with badge', () => {
    const badgeAmount = '7'
    render(
      <ToggleButtonGroup>
        <ToggleButtonGroup.Button onClick={mockCallBack}>
          <ToggleButtonGroup.Button.Badge>
            {badgeAmount}
          </ToggleButtonGroup.Button.Badge>
          <ToggleButtonGroup.Button.Label>
            {btnTitle}
          </ToggleButtonGroup.Button.Label>
        </ToggleButtonGroup.Button>
      </ToggleButtonGroup>
    );
    expect(screen.getByTestId('BADGE')).toHaveTextContent(badgeAmount);
  });

  Object.values(statusMapping).forEach((status: statusMapping) => {
    describe(`While rendering with ${status} status`, () => {
      const TestToggleButtonGroup = ({ status }: { status: string }) => (
        <ToggleButtonGroup
          status={status as statusMapping}
        >
          <ToggleButtonGroup.Button onClick={mockCallBack}>
            <ToggleButtonGroup.Button.Icon/>
            <ToggleButtonGroup.Button.Label>
              {btnTitle}
            </ToggleButtonGroup.Button.Label>
            <ToggleButtonGroup.Button.Badge>
              7
            </ToggleButtonGroup.Button.Badge>
          </ToggleButtonGroup.Button>
        </ToggleButtonGroup>
      );

      test(`It should render button wrapper with ${status} class`, () => {
        render(<TestToggleButtonGroup status={status} />);
        const toggleBtn = screen.getByTestId('TOGGLE_BUTTON');
        expect(toggleBtn.classList.contains(`btn-${status}`)).toBe(true);
      });

      test(`It should render active button with ${status} class when it was clicked`, () => {
        render(<TestToggleButtonGroup status={status} />);
        const btn = screen.getByTestId('TOGGLE_BUTTON');
        fireEvent.click(btn);
        expect(btn.classList.contains(`btn-active-${status}`)).toBe(true);
      });

      test(`It should render button's badge with ${status} class`, () => {
        render(<TestToggleButtonGroup status={status} />);
        const toggleBtn = screen.getByTestId('BADGE');
        expect(toggleBtn.classList.contains(`badge-${status}`)).toBe(true);
      });
    });
  });
});
