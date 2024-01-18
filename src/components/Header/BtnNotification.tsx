import React, { FC } from 'react';

import { colorsMapping, sizesMapping } from '@components/declaration';
import { Badge, Button, Icon } from '@components/index';

import { INotification } from './types';

import styles from './Header.module.scss';

const BtnNotification: FC<INotification> = ({ notification, notificationAmount = 0 }) => {
  return (
    <div className={styles['button-padding-unset']}>
      <Button
        data-testid="HEADER_NOTIFICATION"
        onClick={notification}
        iconButton={<Icon name="IconNotifications24" containerSize={24} htmlColor={'var(--primary-blue-600)'} />}
        variant="text"
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

export default BtnNotification;
