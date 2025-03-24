import React, { FC } from 'react';

import { colorsMapping, sizesMapping } from '@components/declaration';
import { Badge, Button, IconNotificationsBellOutlined24 } from '@components/index';
import clsx from 'clsx';

import { INotification } from './types';

import styles from '../../Header.module.scss';

const BtnNotification: FC<INotification> = ({ notification, notificationAmount = 0 }) => {
  return (
    <div className={clsx(styles['button-padding-unset'], styles['btn-icon-size'])}>
      <Button
        data-testid="HEADER_NOTIFICATION"
        onClick={notification}
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

export default BtnNotification;
