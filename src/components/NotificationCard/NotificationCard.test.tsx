import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import NotificationCard from './index';

class ResizeObserverMock {
  observe = jest.fn();
  unobserve = jest.fn();
  disconnect = jest.fn();
}

(global as unknown as { ResizeObserver: typeof ResizeObserverMock }).ResizeObserver = ResizeObserverMock;

const setOverflow = (scrollHeight: number, clientHeight: number) => {
  Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
    configurable: true,
    get() {
      return scrollHeight;
    }
  });
  Object.defineProperty(HTMLElement.prototype, 'clientHeight', {
    configurable: true,
    get() {
      return clientHeight;
    }
  });
};

const cardProps = {
  title: 'Планирование графика отпусков',
  body: 'Сервис «График отпусков» Добрый день, Иванов И.И.',
  timestamp: 'сегодня, 14:13'
};

describe('src/components/NotificationCard', () => {
  beforeEach(() => {
    setOverflow(200, 66);
  });

  test('Проверка рендера карточки', () => {
    render(<NotificationCard {...cardProps} />);
    expect(screen.getByText(cardProps.title)).toBeInTheDocument();
    expect(screen.getByText(cardProps.body)).toBeInTheDocument();
    expect(screen.getByText(cardProps.timestamp)).toBeInTheDocument();
  });

  test('Проверка индикатора непрочитанного', () => {
    render(<NotificationCard {...cardProps} unread />);
    expect(screen.getByTestId('NOTIFICATION_CARD_UNREAD')).toBeInTheDocument();
  });

  test('Проверка отсутствия индикатора для прочитанного', () => {
    render(<NotificationCard {...cardProps} />);
    expect(screen.queryByTestId('NOTIFICATION_CARD_UNREAD')).not.toBeInTheDocument();
  });

  test('Проверка появления кнопки "Показать больше" при длинном тексте', () => {
    render(<NotificationCard {...cardProps} />);
    expect(screen.getByText('Показать больше')).toBeInTheDocument();
  });

  test('Проверка отсутствия кнопки при коротком тексте', () => {
    setOverflow(66, 66);
    render(<NotificationCard {...cardProps} />);
    expect(screen.queryByText('Показать больше')).not.toBeInTheDocument();
    expect(screen.queryByText('Свернуть')).not.toBeInTheDocument();
  });

  test('Проверка переключения expanded (uncontrolled)', () => {
    render(<NotificationCard {...cardProps} />);
    fireEvent.click(screen.getByText('Показать больше'));
    expect(screen.getByText('Свернуть')).toBeInTheDocument();
  });

  test('Проверка controlled режима', () => {
    const onExpandedChange = jest.fn();
    const { rerender } = render(
      <NotificationCard {...cardProps} expanded={false} onExpandedChange={onExpandedChange} />
    );
    fireEvent.click(screen.getByText('Показать больше'));
    expect(onExpandedChange).toHaveBeenCalledWith(true);

    rerender(<NotificationCard {...cardProps} expanded={true} onExpandedChange={onExpandedChange} />);
    expect(screen.getByText('Свернуть')).toBeInTheDocument();
  });

  test('Проверка defaultExpanded', () => {
    render(<NotificationCard {...cardProps} defaultExpanded />);
    expect(screen.getByText('Свернуть')).toBeInTheDocument();
  });

  test('Проверка кастомных лейблов', () => {
    render(<NotificationCard {...cardProps} showMoreLabel="More" hideLabel="Less" />);
    expect(screen.getByText('More')).toBeInTheDocument();
    fireEvent.click(screen.getByText('More'));
    expect(screen.getByText('Less')).toBeInTheDocument();
  });

  test('Проверка data-атрибута', () => {
    render(<NotificationCard {...cardProps} />);
    expect(screen.getByText(cardProps.title).closest('[data-ui-notification-card]')).toBeInTheDocument();
  });
});
