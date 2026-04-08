import React, { FC } from 'react';

import { Typography } from '@components/index';
import { ETypographyVariants } from '@components/Typography/enums';
import clsx from 'clsx';

import { INotificationPanelProps } from './types';

import styles from './NotificationPanel.module.scss';

import { NotificationItem } from './subcomponents';

/**
 * Компонент NotificationPanel используется для отображения панели уведомлений с категориями и счетчиками.
 * Может использоваться как выпадающая панель из кнопки уведомлений в Header или как содержимое Drawer/Dialog.
 * @component
 * @param {Object} props - Свойства компонента NotificationPanel.
 * @param {INotificationItem[]} props.items - Список категорий уведомлений.
 * @param {Function} [props.onItemClick] - Обработчик клика по элементу.
 * @param {string} [props.title='Уведомления'] - Заголовок панели.
 * @param {string} [props.className] - Дополнительный CSS класс.
 * @param {CSSProperties} [props.style] - Inline стили.
 * @returns {JSX.Element} Компонент NotificationPanel.
 */
const NotificationPanel: FC<INotificationPanelProps> = ({
  items,
  onItemClick,
  title = 'Уведомления',
  className,
  style
}) => {
  return (
    <div className={clsx(styles.panel, className)} style={style} data-testid="NOTIFICATION_PANEL" data-ui-notification-panel>
      <div className={styles.header}>
        <Typography variant={ETypographyVariants.Heading4}>{title}</Typography>
      </div>
      <div className={styles.list} data-testid="NOTIFICATION_PANEL_LIST">
        {items.map((item, index) => (
          <NotificationItem
            key={item.value || item.label}
            label={item.label}
            count={item.count}
            badgeColor={item.badgeColor}
            active={item.active}
            value={item.value}
            onClick={onItemClick ? (value) => onItemClick(value, index) : undefined}
            data-testid={`NOTIFICATION_PANEL_ITEM_${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationPanel;
