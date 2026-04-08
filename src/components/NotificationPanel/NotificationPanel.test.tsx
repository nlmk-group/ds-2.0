import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import { EBadgeColors } from '../Badge/enums';
import NotificationPanel from './index';
import NotificationCard from './subcomponents/NotificationCard';
import NotificationItem from './subcomponents/NotificationItem';
import { INotificationItemData } from './types';

const defaultItems: INotificationItemData[] = [
  { label: 'Требуется сделать', count: 2, badgeColor: EBadgeColors.error, active: true },
  { label: 'Важно ознакомиться', count: 7, badgeColor: EBadgeColors.error },
  { label: 'Для информации', count: 150, badgeColor: EBadgeColors.brand }
];

describe('src/components/NotificationPanel', () => {
  test('Проверка рендера компонента в DOM дереве', () => {
    render(<NotificationPanel items={defaultItems} />);
    expect(screen.getByTestId('NOTIFICATION_PANEL')).toBeInTheDocument();
  });

  test('Проверка отображения заголовка по умолчанию', () => {
    render(<NotificationPanel items={defaultItems} />);
    expect(screen.getByText('Уведомления')).toBeInTheDocument();
  });

  test('Проверка кастомного заголовка', () => {
    render(<NotificationPanel items={defaultItems} title="Оповещения" />);
    expect(screen.getByText('Оповещения')).toBeInTheDocument();
  });

  test('Проверка рендера элементов списка', () => {
    render(<NotificationPanel items={defaultItems} />);
    expect(screen.getByText('Требуется сделать')).toBeInTheDocument();
    expect(screen.getByText('Важно ознакомиться')).toBeInTheDocument();
    expect(screen.getByText('Для информации')).toBeInTheDocument();
  });

  test('Проверка отображения счетчиков', () => {
    render(<NotificationPanel items={defaultItems} />);
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('7')).toBeInTheDocument();
  });

  test('Проверка форматирования счетчика > 99 как "99+"', () => {
    render(<NotificationPanel items={defaultItems} />);
    expect(screen.getByText('99+')).toBeInTheDocument();
  });

  test('Проверка скрытия бейджа при count = 0', () => {
    const items: INotificationItemData[] = [{ label: 'Пустая категория', count: 0 }];
    render(<NotificationPanel items={items} />);
    expect(screen.getByText('Пустая категория')).toBeInTheDocument();
    expect(screen.queryByTestId('BADGE_WRAPPER')).not.toBeInTheDocument();
  });

  test('Проверка обработчика клика по элементу', () => {
    const onItemClick = jest.fn();
    render(<NotificationPanel items={defaultItems} onItemClick={onItemClick} />);
    fireEvent.click(screen.getByText('Требуется сделать'));
    expect(onItemClick).toHaveBeenCalledWith('Требуется сделать', 0);
  });

  test('Проверка клика по элементу с value', () => {
    const onItemClick = jest.fn();
    const items: INotificationItemData[] = [{ label: 'Тест', count: 1, value: 'test-value' }];
    render(<NotificationPanel items={items} onItemClick={onItemClick} />);
    fireEvent.click(screen.getByText('Тест'));
    expect(onItemClick).toHaveBeenCalledWith('test-value', 0);
  });

  test('Проверка активного элемента', () => {
    render(<NotificationPanel items={defaultItems} />);
    const activeItem = screen.getByText('Требуется сделать').closest('[data-ui-notification-item]');
    expect(activeItem?.className).toContain('active');
  });

  test('Проверка применения кастомных стилей', () => {
    const customStyle = { width: '300px' };
    render(<NotificationPanel items={defaultItems} style={customStyle} />);
    expect(screen.getByTestId('NOTIFICATION_PANEL')).toHaveStyle(customStyle);
  });

  test('Проверка наличия data-атрибутов', () => {
    render(<NotificationPanel items={defaultItems} />);
    expect(screen.getByTestId('NOTIFICATION_PANEL')).toHaveAttribute('data-ui-notification-panel');
  });

  test('Проверка доступности по клавиатуре', () => {
    const onItemClick = jest.fn();
    render(<NotificationPanel items={defaultItems} onItemClick={onItemClick} />);
    const item = screen.getByText('Важно ознакомиться').closest('[data-ui-notification-item]')!;
    fireEvent.keyDown(item, { key: 'Enter' });
    expect(onItemClick).toHaveBeenCalledWith('Важно ознакомиться', 1);
  });
});

describe('src/components/NotificationPanel/NotificationItem (standalone)', () => {
  test('Проверка рендера как самостоятельного компонента', () => {
    render(<NotificationItem label="Тестовый элемент" count={5} />);
    expect(screen.getByText('Тестовый элемент')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('Проверка клика по самостоятельному элементу', () => {
    const onClick = jest.fn();
    render(<NotificationItem label="Кликни" count={3} value="click-value" onClick={onClick} />);
    fireEvent.click(screen.getByText('Кликни'));
    expect(onClick).toHaveBeenCalledWith('click-value');
  });

  test('Проверка дефолтного цвета бейджа (error)', () => {
    render(<NotificationItem label="Ошибка" count={1} />);
    expect(screen.getByTestId('BADGE_WRAPPER')).toBeInTheDocument();
  });

  test('Проверка кастомного цвета бейджа', () => {
    render(<NotificationItem label="Инфо" count={10} badgeColor={EBadgeColors.brand} />);
    expect(screen.getByTestId('BADGE_WRAPPER')).toBeInTheDocument();
  });

  test('Проверка data-атрибута notification-item', () => {
    render(<NotificationItem label="Тест" />);
    expect(screen.getByText('Тест').closest('[data-ui-notification-item]')).toBeInTheDocument();
  });
});

describe('src/components/NotificationPanel/NotificationCard', () => {
  const cardProps = {
    title: 'Планирование графика отпусков',
    body: 'Сервис «График отпусков» Добрый день, Иванов И.И.',
    timestamp: 'сегодня, 14:13'
  };

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

  test('Проверка кнопки "Развернуть"', () => {
    const onExpand = jest.fn();
    render(<NotificationCard {...cardProps} onExpand={onExpand} />);
    const button = screen.getByText('Развернуть');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(onExpand).toHaveBeenCalled();
  });

  test('Проверка текста "Свернуть" при expanded', () => {
    render(<NotificationCard {...cardProps} onExpand={jest.fn()} expanded />);
    expect(screen.getByText('Свернуть')).toBeInTheDocument();
  });

  test('Проверка data-атрибута notification-card', () => {
    render(<NotificationCard {...cardProps} />);
    expect(screen.getByText(cardProps.title).closest('[data-ui-notification-card]')).toBeInTheDocument();
  });
});
