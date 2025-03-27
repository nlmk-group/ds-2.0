import React, { FC } from 'react';

import { colorsMapping, sizesMapping } from '@components/declaration';
import { Badge, Button, IconNotificationsBellOutlined24 } from '@components/index';

import { IButtonNotificationProps } from './types';

import styles from '../../Header.module.scss';

const ButtonNotification: FC<IButtonNotificationProps> = ({ onClick, notificationAmount = 0 }) => {
  return (
    <div className={styles['button-padding-unset']}>
      <Button
        type="button"
        data-testid="HEADER_NOTIFICATION"
        onClick={onClick}
        disabled={!onClick}
        iconButton={<IconNotificationsBellOutlined24 htmlColor={'var(--steel-80)'} />}
        color="ghost"
        variant="secondary"
        size="xs"
      />
      {notificationAmount > 0 && (
        <div data-testid="HEADER_NOTIFICATION_AMOUNT" className={styles['notification-amount']}>
          <Badge color={colorsMapping.error} size={sizesMapping.s}>
            {notificationAmount > 99 ? '..99' : notificationAmount.toString()}
          </Badge>
        </div>
      )}
    </div>
  );
};

export default ButtonNotification;
