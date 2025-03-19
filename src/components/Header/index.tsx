import React, { FC } from 'react';

import { DateTime, Typography } from '@components/index';
import { clsx } from 'clsx';

import { IHeader } from './types';

import styles from './Header.module.scss';

import { typeMapping } from './enums';
import BtnBack from './subcomponents/ButtonBack';
import BtnFavorite from './subcomponents/ButtonFavorite';
import BtnNotification from './subcomponents/ButtonNotification';

const Header: FC<IHeader> = ({
  title,
  bg = false,
  type = typeMapping.default,
  back = null,
  date = false,
  favorite = null,
  notification = null,
  notificationAmount = 0,
  breadcrumbs = null,
  className,
  children
}): JSX.Element => {
  return (
    <div
      data-testid="HEADER_WRAPPER"
      className={clsx(
        styles[type === typeMapping.default ? 'wrapper-default' : 'wrapper-compact'],
        bg && styles['alternative-background'],
        className
      )}
    >
      {breadcrumbs !== null && <div className={styles['breadcrumbs-wrapper']}>{breadcrumbs}</div>}

      <div className={styles['wrapper']}>
        <div style={{ flex: '1' }}>
          <div className={styles['title-btn-wrapper']}>
            {back !== null && <BtnBack back={back} />}
            <div data-testid="HEADER_TITLE" className={styles.title} title={title}>
              <Typography variant="Heading2">{title}</Typography>
            </div>
          </div>
        </div>

        {!!children && children}

        <div className={styles.right}>
          {Boolean(date) && <DateTime />}
          {favorite !== null && <BtnFavorite favorite={favorite} />}
          {notification !== null && (
            <BtnNotification notification={notification} notificationAmount={notificationAmount} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
