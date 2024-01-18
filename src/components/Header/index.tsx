import React, { FC } from 'react';

import { DateTime } from '@components/.';
import { clsx } from 'clsx';

import { IHeader } from './types';

import styles from './Header.module.scss';

import BtnBack from './BtnBack';
import BtnFavorite from './BtnFavorite';
import BtnNotification from './BtnNotification';
import { typeMapping } from './enums';

const Header: FC<IHeader> = ({
  title,
  bg = false,
  type = typeMapping.default,
  back = null,
  date = false,
  favorite = null,
  notification = null,
  notificationAmount = 0,
  breadcrumbs = null
}): JSX.Element => {
  return (
    <div
      data-testid="HEADER_WRAPPER"
      className={clsx(
        styles[type === typeMapping.default ? 'wrapper-default' : 'wrapper-compact'],
        bg && styles['alternative-background']
      )}
    >
      {breadcrumbs !== null && <div className={styles['breadcrumbs-wrapper']}>{breadcrumbs}</div>}

      <div className={styles['wrapper']}>
        <div style={{ flex: '1' }}>
          <div className={styles['title-btn-wrapper']}>
            {back !== null && <BtnBack back={back} />}
            <div data-testid="HEADER_TITLE" className={styles.title} title={title}>
              {title}
            </div>
          </div>
        </div>

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
