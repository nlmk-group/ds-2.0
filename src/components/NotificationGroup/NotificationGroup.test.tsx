import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import NotificationCard from '../NotificationCard';
import NotificationGroup from './index';

class ResizeObserverMock {
  observe = jest.fn();
  unobserve = jest.fn();
  disconnect = jest.fn();
}

(global as unknown as { ResizeObserver: typeof ResizeObserverMock }).ResizeObserver = ResizeObserverMock;

const makeCard = (i: number) => (
  <NotificationCard key={i} title={`Title ${i}`} body={`Body ${i}`} timestamp={`сегодня, 0${i}:00`} />
);

describe('src/components/NotificationGroup', () => {
  test('Рендер ничего не даёт при пустых children', () => {
    const { container } = render(<NotificationGroup>{null}</NotificationGroup>);
    expect(container.firstChild).toBeNull();
  });

  test('1 ребёнок, close — 0 peek-слоёв, тумблер не показывается', () => {
    render(<NotificationGroup>{makeCard(1)}</NotificationGroup>);
    expect(screen.getByText('Title 1')).toBeInTheDocument();
    expect(screen.queryByTestId('NOTIFICATION_GROUP_PEEK_1')).not.toBeInTheDocument();
    expect(screen.queryByTestId('NOTIFICATION_GROUP_PEEK_2')).not.toBeInTheDocument();
    expect(screen.queryByTestId('NOTIFICATION_GROUP_TOGGLE')).not.toBeInTheDocument();
  });

  const getRestWrap = (container: HTMLElement) => container.querySelector('[data-rest-visible]');

  test('2 ребёнка, close — 1 peek-слой, rest-wrap скрыт', () => {
    const { container } = render(
      <NotificationGroup>
        {makeCard(1)}
        {makeCard(2)}
      </NotificationGroup>
    );
    expect(screen.getByText('Title 1')).toBeInTheDocument();
    expect(getRestWrap(container)?.getAttribute('data-rest-visible')).toBe('false');
    expect(screen.getByTestId('NOTIFICATION_GROUP_PEEK_1')).toBeInTheDocument();
    expect(screen.queryByTestId('NOTIFICATION_GROUP_PEEK_2')).not.toBeInTheDocument();
  });

  test('3+ детей, close — 2 peek-слоя, rest-wrap скрыт', () => {
    const { container } = render(
      <NotificationGroup>
        {makeCard(1)}
        {makeCard(2)}
        {makeCard(3)}
        {makeCard(4)}
      </NotificationGroup>
    );
    expect(screen.getByText('Title 1')).toBeInTheDocument();
    expect(getRestWrap(container)?.getAttribute('data-rest-visible')).toBe('false');
    expect(screen.getByTestId('NOTIFICATION_GROUP_PEEK_1')).toBeInTheDocument();
    expect(screen.getByTestId('NOTIFICATION_GROUP_PEEK_2')).toBeInTheDocument();
  });

  test('open — rest-wrap раскрыт, peek-слоёв нет', () => {
    const { container } = render(
      <NotificationGroup defaultOpen>
        {makeCard(1)}
        {makeCard(2)}
        {makeCard(3)}
      </NotificationGroup>
    );
    expect(screen.getByText('Title 1')).toBeInTheDocument();
    expect(screen.getByText('Title 2')).toBeInTheDocument();
    expect(screen.getByText('Title 3')).toBeInTheDocument();
    expect(getRestWrap(container)?.getAttribute('data-rest-visible')).toBe('true');
    expect(screen.queryByTestId('NOTIFICATION_GROUP_PEEK_1')).not.toBeInTheDocument();
  });

  test('Клик по тумблеру переключает open (uncontrolled)', () => {
    const { container } = render(
      <NotificationGroup>
        {makeCard(1)}
        {makeCard(2)}
      </NotificationGroup>
    );
    expect(getRestWrap(container)?.getAttribute('data-rest-visible')).toBe('false');
    fireEvent.click(screen.getByTestId('NOTIFICATION_GROUP_TOGGLE'));
    expect(getRestWrap(container)?.getAttribute('data-rest-visible')).toBe('true');
    expect(screen.getByText('Title 2')).toBeInTheDocument();
  });

  test('Controlled режим', () => {
    const onOpenChange = jest.fn();
    const { rerender } = render(
      <NotificationGroup open={false} onOpenChange={onOpenChange}>
        {makeCard(1)}
        {makeCard(2)}
      </NotificationGroup>
    );
    fireEvent.click(screen.getByTestId('NOTIFICATION_GROUP_TOGGLE'));
    expect(onOpenChange).toHaveBeenCalledWith(true);

    rerender(
      <NotificationGroup open={true} onOpenChange={onOpenChange}>
        {makeCard(1)}
        {makeCard(2)}
      </NotificationGroup>
    );
    expect(screen.getByText('Title 2')).toBeInTheDocument();
  });

  test('React.Children.toArray корректно обрабатывает false/null среди детей', () => {
    const showSecond = false;
    render(
      <NotificationGroup>
        {makeCard(1)}
        {showSecond && makeCard(2)}
        {null}
        {makeCard(3)}
      </NotificationGroup>
    );
    // Фактически 2 валидных ребёнка (Title 1 и Title 3) → 1 peek-слой в close
    expect(screen.getByTestId('NOTIFICATION_GROUP_PEEK_1')).toBeInTheDocument();
    expect(screen.queryByTestId('NOTIFICATION_GROUP_PEEK_2')).not.toBeInTheDocument();
  });

  test('data-атрибут группы', () => {
    render(<NotificationGroup>{makeCard(1)}</NotificationGroup>);
    expect(screen.getByText('Title 1').closest('[data-ui-notification-group]')).toBeInTheDocument();
  });
});
