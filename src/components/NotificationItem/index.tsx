import React, { FC, KeyboardEvent, useCallback } from 'react';

import { EBadgeColors, EBadgeSizes } from '@components/Badge/enums';
import { Badge, Typography } from '@components/index';
import { ETypographyVariants } from '@components/Typography/enums';
import clsx from 'clsx';

import { INotificationItemProps } from './types';

import styles from './NotificationItem.module.scss';

const MAX_DISPLAY_COUNT = 99;

const formatCount = (count: number): string => (count > MAX_DISPLAY_COUNT ? `${MAX_DISPLAY_COUNT}+` : String(count));

/**
 * Строка категории уведомлений — текст слева, счётчик-бейдж справа. Кликабельна, доступна
 * с клавиатуры (Enter/Space). Чаще всего используется как кирпичик для собственной выпадающей
 * панели, которая появляется при наведении на колокольчик в Header. Подойдёт и как самостоятельный
 * элемент в любых списках — внутри Drawer, Dialog или собственного layout.
 * @component
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
      if (e.key === 'Enter' || e.code === 'Space') {
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
