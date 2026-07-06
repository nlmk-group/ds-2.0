import React, { Children, FC, TransitionEvent, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

import { Button, IconChevronArrowDownOutlined24, IconChevronArrowUpOutlined24 } from '@components/index';
import clsx from 'clsx';

import { INotificationGroupProps } from './types';

import styles from './NotificationGroup.module.scss';

/**
 * Группа карточек уведомлений для истории в Drawer.
 * В свёрнутом виде показывает только верхнюю карточку и намекает на остальные визуальным эффектом «колоды» —
 * двумя срезами из-под неё. Круглая кнопка-тумблер снизу раскрывает всю стопку: карточки появляются каскадом
 * с плавной slide-down анимацией max-height через измеренный scrollHeight, а при сворачивании уходят обратно
 * такой же slide-up. Переключение overflow между hidden и visible синхронизировано с окончанием transition
 * через transitionend — тени карточек 2..N не обрезаются стенками обёртки в раскрытом состоянии.
 * @component
 */
const NotificationGroup: FC<INotificationGroupProps> = ({
  children,
  defaultOpen = false,
  open: openProp,
  onOpenChange,
  className,
  style
}) => {
  const isControlled = openProp !== undefined;
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const open = isControlled ? openProp : internalOpen;

  const items = Children.toArray(children);
  const count = items.length;

  const restInnerRef = useRef<HTMLDivElement | null>(null);
  const [restHeight, setRestHeight] = useState(0);

  useLayoutEffect(() => {
    const el = restInnerRef.current;
    if (!el) return;
    const measure = () => setRestHeight(el.scrollHeight);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [count]);

  // Пока идёт max-height анимация — overflow: hidden (нужен для правильного клиппинга).
  // Когда группа полностью раскрыта и transition закончился — overflow: visible,
  // чтобы тени карточек 2..N не обрезались стенками .rest-wrap.
  // На закрытие — сразу overflow: hidden, иначе тени «выскакивают» во время сжатия.
  const [isSettledOpen, setIsSettledOpen] = useState(open);

  useEffect(() => {
    if (!open) setIsSettledOpen(false);
  }, [open]);

  const handleRestTransitionEnd = useCallback(
    (e: TransitionEvent<HTMLDivElement>) => {
      if (e.propertyName === 'max-height' && open) {
        setIsSettledOpen(true);
      }
    },
    [open]
  );

  const toggle = useCallback(() => {
    const next = !open;
    if (!isControlled) {
      setInternalOpen(next);
    }
    onOpenChange?.(next);
  }, [open, isControlled, onOpenChange]);

  if (count === 0) {
    return null;
  }

  const peekCount = open ? 0 : Math.min(Math.max(count - 1, 0), 2);
  const restItems = items.slice(1);

  return (
    <div
      className={clsx(styles.group, open && styles['group-open'], className)}
      style={style}
      data-ui-notification-group
    >
      <div className={clsx(styles.stack, open ? styles['stack-open'] : styles['stack-close'])}>
        <div className={clsx(styles.front, !open && styles['front-close'])}>{items[0]}</div>
        {restItems.length > 0 && (
          <div
            className={clsx(
              styles['rest-wrap'],
              open && styles['rest-wrap-open'],
              isSettledOpen && styles['rest-wrap-settled']
            )}
            style={{ maxHeight: open ? restHeight : 0 }}
            onTransitionEnd={handleRestTransitionEnd}
            data-rest-visible={open}
          >
            <div ref={restInnerRef} className={styles['rest-inner']}>
              {restItems.map((item, i) => (
                <div key={`rest-${i}`} className={styles.rest}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}
        {peekCount >= 1 && (
          <div className={clsx(styles.peek, styles['peek-1'])} data-testid="NOTIFICATION_GROUP_PEEK_1" />
        )}
        {peekCount >= 2 && (
          <div className={clsx(styles.peek, styles['peek-2'])} data-testid="NOTIFICATION_GROUP_PEEK_2" />
        )}
      </div>
      {count > 1 && (
        <div className={clsx(styles['toggle-wrapper'], open && styles['toggle-wrapper-open'])}>
          <Button
            type="button"
            size="s"
            variant="primary"
            color="brand"
            onClick={toggle}
            data-testid="NOTIFICATION_GROUP_TOGGLE"
            iconButton={open ? <IconChevronArrowUpOutlined24 /> : <IconChevronArrowDownOutlined24 />}
          />
        </div>
      )}
    </div>
  );
};

export default NotificationGroup;
