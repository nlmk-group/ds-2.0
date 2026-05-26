import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import { EBadgeColors } from '../Badge/enums';
import NotificationItem from './index';

describe('src/components/NotificationItem', () => {
  test('Проверка рендера компонента в DOM дереве', () => {
    render(<NotificationItem label="Требуется сделать" count={5} />);
    expect(screen.getByText('Требуется сделать')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('Проверка форматирования счетчика > 99 как "99+"', () => {
    render(<NotificationItem label="Много" count={150} />);
    expect(screen.getByText('99+')).toBeInTheDocument();
  });

  test('Проверка скрытия бейджа при count = 0', () => {
    render(<NotificationItem label="Пустая категория" count={0} />);
    expect(screen.getByText('Пустая категория')).toBeInTheDocument();
    expect(screen.queryByTestId('BADGE_WRAPPER')).not.toBeInTheDocument();
  });

  test('Проверка обработчика клика', () => {
    const onClick = jest.fn();
    render(<NotificationItem label="Кликни" count={3} onClick={onClick} />);
    fireEvent.click(screen.getByText('Кликни'));
    expect(onClick).toHaveBeenCalledWith('Кликни');
  });

  test('Проверка клика с value', () => {
    const onClick = jest.fn();
    render(<NotificationItem label="Тест" count={1} value="test-value" onClick={onClick} />);
    fireEvent.click(screen.getByText('Тест'));
    expect(onClick).toHaveBeenCalledWith('test-value');
  });

  test('Проверка активного элемента', () => {
    render(<NotificationItem label="Активный" active />);
    const item = screen.getByText('Активный').closest('[data-ui-notification-item]');
    expect(item?.className).toContain('active');
  });

  test('Проверка доступности по клавиатуре (Enter)', () => {
    const onClick = jest.fn();
    render(<NotificationItem label="Тест" onClick={onClick} />);
    const item = screen.getByText('Тест').closest('[data-ui-notification-item]')!;
    fireEvent.keyDown(item, { key: 'Enter' });
    expect(onClick).toHaveBeenCalledWith('Тест');
  });

  test('Проверка доступности по клавиатуре (Space)', () => {
    const onClick = jest.fn();
    render(<NotificationItem label="Тест" onClick={onClick} />);
    const item = screen.getByText('Тест').closest('[data-ui-notification-item]')!;
    fireEvent.keyDown(item, { key: ' ', code: 'Space' });
    expect(onClick).toHaveBeenCalledWith('Тест');
  });

  test('Проверка кастомного цвета бейджа', () => {
    render(<NotificationItem label="Инфо" count={10} badgeColor={EBadgeColors.brand} />);
    expect(screen.getByTestId('BADGE_WRAPPER')).toBeInTheDocument();
  });

  test('Проверка data-атрибута', () => {
    render(<NotificationItem label="Тест" />);
    expect(screen.getByText('Тест').closest('[data-ui-notification-item]')).toBeInTheDocument();
  });
});
