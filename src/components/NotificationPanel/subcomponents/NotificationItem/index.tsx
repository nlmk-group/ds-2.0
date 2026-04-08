import React, { FC, KeyboardEvent, useCallback } from 'react';

import { EBadgeColors, EBadgeSizes } from '@components/Badge/enums';
import { Badge, Typography } from '@components/index';
import { ETypographyVariants } from '@components/Typography/enums';
import clsx from 'clsx';

import { INotificationItemProps } from './types';

import styles from './NotificationItem.module.scss';

const MAX_DISPLAY_COUNT = 99;

const formatCount = (count: number): string => {
  return count > MAX_DISPLAY_COUNT ? '99+' : count.toString();
};

/**
 * Компонент NotificationItem отображает элемент списка уведомлений с текстом категории и бейджем-счётчиком.
 * Может использоваться как часть NotificationPanel или самостоятельно в Dialog/Drawer.
 * @component
 * @param {Object} props - Свойства компонента NotificationItem.
 * @param {string} props.label - Текст категории уведомлений.
 * @param {number} [props.count=0] - Количество уведомлений.
 * @param {EBadgeColors} [props.badgeColor=EBadgeColors.error] - Цвет бейджа.
 * @param {boolean} [props.active=false] - Активный элемент (подсветка).
 * @param {string} [props.value] - Уникальное значение элемента.
 * @param {Function} [props.onClick] - Обработчик клика.
 * @param {string} [props.className] - Дополнительный CSS класс.
 * @returns {JSX.Element} Компонент NotificationItem.
 */
const NotificationItem: FC<INotificationItemProps> = ({
  label,
  count = 0,
  badgeColor = EBadgeColors.error,
  active = false,
  value,
  onClick,
  className,
  ...rest
}) => {
  const resolvedValue = value || label;

  const handleClick = useCallback(() => {
    onClick?.(resolvedValue);
  }, [onClick, resolvedValue]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClick?.(resolvedValue);
      }
    },
    [onClick, resolvedValue]
  );

  return (
    <div
      {...rest}
      className={clsx(styles.item, active && styles['item-active'], className)}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      data-ui-notification-item
    >
      <div className={styles.label}>
        <Typography variant={ETypographyVariants['Body1-Medium']}>{label}</Typography>
      </div>
      {count > 0 && (
        <Badge color={badgeColor} size={EBadgeSizes.m}>
          {formatCount(count)}
        </Badge>
      )}
    </div>
  );
};

export default NotificationItem;
