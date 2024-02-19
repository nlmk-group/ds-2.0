import React from 'react';

import { Icon, Snackbar } from '@components/index';
import { fireEvent, render, screen } from '@testing-library/react';

import { colorMapping } from './enums';

describe('src/components/Snackbar', () => {
  const testTitle = 'Hello world!';
  const SnackbarHelper = () => (
    <Snackbar>
      <span data-testid="SNACKBAR_TITLE">{testTitle}</span>
    </Snackbar>
  );

  test('It should render a Snackbar', () => {
    const { container } = render(<SnackbarHelper />);
    const snackbarComponent = container.getElementsByTagName('div')[0];
    expect(snackbarComponent).toBeInTheDocument();
  });

  test('It should render a Snackbar with correct title', () => {
    render(<SnackbarHelper />);
    expect(screen.getByTestId('SNACKBAR_TITLE')).toHaveTextContent(testTitle);
  });

  test('It should render a Snackbar with custom opacity', () => {
    const bgOpacityTest = 70;
    render(<Snackbar bgOpacity={bgOpacityTest}>Hello!</Snackbar>);
    expect(screen.getByTestId('SNACKBAR_WRAPPER')).toHaveStyle(`opacity: ${bgOpacityTest}%`);
  });

  Object.values(colorMapping).forEach((color: colorMapping) => {
    test(`It should render a Snackbar with ${color} background`, () => {
      render(<Snackbar color={color}>Hello!</Snackbar>);
      expect(screen.getByTestId('SNACKBAR_WRAPPER').classList.contains(`background-${color}`)).toBe(true);
    });
  });

  Object.values(colorMapping).forEach((color: colorMapping) => {
    test(`It should render a Snackbar with ${color} icon`, () => {
      render(
        <Snackbar withIcon color={color}>
          Hello!
        </Snackbar>
      );
      expect(screen.getByTestId(`SNACKBAR_ICON_${color}`)).toBeInTheDocument();
    });
  });

  test('It should render a Snackbar with custom icon', () => {
    render(
      <Snackbar
        withIcon
        customIcon={
          <div data-testid="SNACKBAR_CUSTOM_ICON">
            <Icon name="IconEducationOutlined24" containerSize={24} htmlColor={'var(--default-second)'} />
          </div>
        }
      >
        Hello!
      </Snackbar>
    );
    expect(screen.getByTestId('SNACKBAR_CUSTOM_ICON')).toBeInTheDocument();
  });

  describe('While rendering action button', () => {
    const actionCallBack = jest.fn();
    test('It should render a Snackbar action button', () => {
      render(<Snackbar actionButton={actionCallBack}>Hello</Snackbar>);
      expect(screen.getByTestId('SNACKBAR_ACTION')).toBeInTheDocument();
    });

    test('It should render a Snackbar action button with default label', () => {
      render(<Snackbar actionButton={actionCallBack}>Hello</Snackbar>);
      expect(screen.getByTestId('SNACKBAR_ACTION')).toHaveTextContent('Посмотреть');
    });

    test('It should render a Snackbar action button with custom label', () => {
      const label = 'Click me!';
      render(
        <Snackbar actionButton={actionCallBack} actionButtonText={label}>
          Hello
        </Snackbar>
      );
      expect(screen.getByTestId('SNACKBAR_ACTION')).toHaveTextContent(label);
    });

    test('It should use passed action function', () => {
      render(<Snackbar actionButton={actionCallBack}>Hello</Snackbar>);
      const btn = screen.getByTestId('SNACKBAR_ACTION');
      fireEvent.click(btn);
      expect(actionCallBack).toHaveBeenCalledTimes(1);
    });
  });
  describe('While rendering close button', () => {
    const closeCallBack = jest.fn();
    test('It should render a Snackbar action button', () => {
      render(<Snackbar close={closeCallBack}>Hello</Snackbar>);
      expect(screen.getByTestId('SNACKBAR_CLOSE')).toBeInTheDocument();
    });

    test('It should use passed close function', () => {
      render(<Snackbar close={closeCallBack}>Hello</Snackbar>);
      const btn = screen.getByTestId('SNACKBAR_CLOSE');
      fireEvent.click(btn);
      expect(closeCallBack).toHaveBeenCalledTimes(1);
    });
  });
});
