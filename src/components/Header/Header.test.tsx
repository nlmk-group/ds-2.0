import React, { FC } from 'react';

import { Header } from '@components/index';
import { fireEvent, render, screen } from '@testing-library/react';

import { typeMapping } from './enums';

describe('src/components/Header', () => {
  const testTitle = 'Hello world!';

  test('It should render a Header', () => {
    const { container } = render(<Header title={testTitle} />);
    const headerComponent = container.getElementsByTagName('div')[0];
    expect(headerComponent).toBeInTheDocument();
  });

  test('It should render a Header with correct title', () => {
    render(<Header title={testTitle} />);
    const headerComponent = screen.getByTestId('HEADER_TITLE');
    expect(headerComponent).toHaveTextContent(testTitle);
  });

  test('It should render a Header with compact type', () => {
    render(<Header title={testTitle} type={typeMapping.compact} />);
    const headerComponent = screen.getByTestId('HEADER_WRAPPER');
    expect(headerComponent.classList.contains('wrapper-compact')).toBe(true);
  });

  describe('While rendering back button', () => {
    const mockCallBack = jest.fn();
    const HeaderHelper = () => <Header title={testTitle} back={mockCallBack} />;

    test('It should render a Header with back button', () => {
      render(<HeaderHelper />);
      const headerBackBtn = screen.getByTestId('HEADER_BACK');
      expect(headerBackBtn).toBeInTheDocument();
    });

    test('It should call function of back button', () => {
      render(<HeaderHelper />);
      const headerBackBtn = screen.getByTestId('HEADER_BACK');
      fireEvent.click(headerBackBtn);
      expect(mockCallBack).toHaveBeenCalledTimes(1);
    });
  });

  test('It should render a Header with DateTime', () => {
    render(<Header title={testTitle} date />);
    expect(screen.getByTestId('DATETIME_WRAPPER')).toBeInTheDocument();
  });

  describe('While rendering favorite button', () => {
    const favoriteMockCallBack = jest.fn();
    const HeaderHelper = () => <Header title={testTitle} favorite={favoriteMockCallBack} />;

    test('It should render a Header with favorite button', () => {
      render(<HeaderHelper />);
      const headerFavoriteBtn = screen.getByTestId('HEADER_FAVORITE');
      expect(headerFavoriteBtn).toBeInTheDocument();
    });

    test('It should call function of favorite button', () => {
      render(<HeaderHelper />);
      const headerFavoriteBtn = screen.getByTestId('HEADER_FAVORITE');
      fireEvent.click(headerFavoriteBtn);
      expect(favoriteMockCallBack).toHaveBeenCalledTimes(1);
    });
  });

  describe('While rendering notification button', () => {
    const notificationMockCallBack = jest.fn();
    const amountNumber = 5;
    const HeaderHelper: FC<{ amount?: number }> = ({ amount }) => (
      <Header title={testTitle} notification={notificationMockCallBack} notificationAmount={amount || amountNumber} />
    );

    test('It should render a Header with notification button', () => {
      render(<HeaderHelper />);
      const headerNotificationBtn = screen.getByTestId('HEADER_NOTIFICATION');
      expect(headerNotificationBtn).toBeInTheDocument();
    });

    test('It should call function of notification button', () => {
      render(<HeaderHelper />);
      const headerNotificationBtn = screen.getByTestId('HEADER_NOTIFICATION');
      fireEvent.click(headerNotificationBtn);
      expect(notificationMockCallBack).toHaveBeenCalledTimes(1);
    });

    test('It should render a Header with number of notifications', () => {
      render(<HeaderHelper />);
      const headerNotificationAmount = screen.getByTestId('HEADER_NOTIFICATION_AMOUNT');
      expect(headerNotificationAmount).toHaveTextContent(`${amountNumber}`);
    });

    test('It should render a Header with maximum number of notifications', () => {
      render(<HeaderHelper amount={101} />);
      const headerNotificationAmount = screen.getByTestId('HEADER_NOTIFICATION_AMOUNT');
      expect(headerNotificationAmount).toHaveTextContent('..99');
    });
  });
});
