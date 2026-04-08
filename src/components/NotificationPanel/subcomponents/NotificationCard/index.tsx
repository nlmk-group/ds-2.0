import React, { FC } from 'react';

import { Button, Typography } from '@components/index';
import { ETypographyVariants } from '@components/Typography/enums';
import clsx from 'clsx';

import { INotificationCardProps } from './types';

import styles from './NotificationCard.module.scss';

/**
 * Компонент NotificationCard отображает карточку уведомления с заголовком, текстом, временной меткой и индикатором прочитанности.
 * Используется в расширенном режиме уведомлений (Drawer/Dialog).
 * @component
 * @param {Object} props - Свойства компонента NotificationCard.
 * @param {string} props.title - Заголовок уведомления.
 * @param {string} props.body - Текст уведомления.
 * @param {string} props.timestamp - Временная метка (например "сегодня, 14:13").
 * @param {boolean} [props.unread=false] - Флаг непрочитанного уведомления.
 * @param {Function} [props.onExpand] - Обработчик "Развернуть/Свернуть".
 * @param {boolean} [props.expanded=false] - Развёрнуто ли уведомление.
 * @param {ReactNode} [props.children] - Дополнительный контент под текстом.
 * @param {string} [props.className] - Дополнительный CSS класс.
 * @returns {JSX.Element} Компонент NotificationCard.
 */
const NotificationCard: FC<INotificationCardProps> = ({
  title,
  body,
  timestamp,
  unread = false,
  onExpand,
  expanded = false,
  children,
  className
}) => {
  return (
    <div className={clsx(styles.card, className)} data-ui-notification-card>
      <div className={styles.header}>
        {unread && <div className={styles['unread-dot']} data-testid="NOTIFICATION_CARD_UNREAD" />}
        <Typography variant={ETypographyVariants['Body2-Medium']} color="var(--steel-60)">
          {timestamp}
        </Typography>
      </div>
      <div className={styles.body}>
        <Typography variant={ETypographyVariants['Body1-Medium']}>
          {title}
        </Typography>
        <Typography
          variant={ETypographyVariants.Body1}
          className={clsx(styles.text, expanded && styles['text-expanded'])}
        >
          {body}
        </Typography>
        {children}
        {onExpand && (
          <div className={styles.footer}>
            <Button type="button" size="xs" variant="secondary" color="brand" onClick={onExpand}>
              {expanded ? 'Свернуть' : 'Развернуть'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationCard;
