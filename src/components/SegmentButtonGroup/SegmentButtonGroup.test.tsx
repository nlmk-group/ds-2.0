import React from 'react';

import { SegmentButtonGroup } from '@components/index';
import { fireEvent, render, screen } from '@testing-library/react';

import styles from './segmentButtonGroup.module.scss';

import { buttonColor } from './enums';

describe('src/components/SegmentButtonGroup', () => {
  const mockCallBack = jest.fn();
  const btnTitle = 'Hello world';
  const TBGHelper = () => (
    <SegmentButtonGroup>
      <SegmentButtonGroup.Button onClick={mockCallBack}>{btnTitle}</SegmentButtonGroup.Button>
    </SegmentButtonGroup>
  );

  test('It should render a SegmentButtonGroup', () => {
    const { container } = render(<TBGHelper />);
    const btnGroup = container.getElementsByTagName('div')[0];
    expect(btnGroup).toBeInTheDocument();
  });

  test('It should render a SegmentButtonGroup with custom className', () => {
    const className = 'test-class-wrapper';
    render(
      <SegmentButtonGroup className={styles[className]}>
        <SegmentButtonGroup.Button onClick={mockCallBack}>{btnTitle}</SegmentButtonGroup.Button>
      </SegmentButtonGroup>
    );
    const wrapper = screen.getByTestId('SEGMENT_BUTTON_WRAPPER');
    expect(wrapper.classList.contains(className)).toBe(true);
  });

  test('It should render ToggleButtonGroup with ToggleButton', () => {
    render(<TBGHelper />);
    const btn = screen.getByTestId('SEGMENT_BUTTON');
    expect(btn).toHaveTextContent(btnTitle);
  });

  test('It should render ToggleButtonGroup with disabled SegmentButton', () => {
    render(
      <SegmentButtonGroup>
        <SegmentButtonGroup.Button onClick={mockCallBack} disabled>
          {btnTitle}
        </SegmentButtonGroup.Button>
      </SegmentButtonGroup>
    );
    const btn = screen.getByTestId('SEGMENT_BUTTON');
    expect(btn.hasAttribute('disabled')).toBe(true);
  });

  test('It should render ToggleButtonGroup with SegmentButton with custom className', () => {
    const className = 'test-class-btn';
    render(
      <SegmentButtonGroup>
        <SegmentButtonGroup.Button onClick={mockCallBack} className={styles[className]}>
          {btnTitle}
        </SegmentButtonGroup.Button>
      </SegmentButtonGroup>
    );
    const btn = screen.getByTestId('SEGMENT_BUTTON');
    expect(btn.classList.contains(className)).toBe(true);
  });

  test('It should call a function while click', () => {
    render(<TBGHelper />);
    const btn = screen.getByTestId('SEGMENT_BUTTON');
    fireEvent.click(btn);
    expect(mockCallBack).toHaveBeenCalledTimes(1);
  });

  Object.values(buttonColor).forEach((color: buttonColor) => {
    describe(`While rendering with ${color} color`, () => {
      const TestToggleButtonGroup = ({ color }: { color: buttonColor }) => (
        <SegmentButtonGroup color={color as buttonColor}>
          <SegmentButtonGroup.Button onClick={mockCallBack}>{btnTitle}</SegmentButtonGroup.Button>
        </SegmentButtonGroup>
      );

      test(`It should render wrapper with ${color} color`, () => {
        render(<TestToggleButtonGroup color={color} />);
        const toggleBtn = screen.getByTestId('SEGMENT_BUTTON');
        expect(toggleBtn.classList.contains(`_${color}`)).toBe(true);
      });
    });
  });
});
