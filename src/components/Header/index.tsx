import React, { FC } from 'react';

import { DateTime, Typography } from '@components/index';
import { clsx } from 'clsx';

import { IHeaderProps } from './types';

import styles from './Header.module.scss';

import { typeMapping } from './enums';
import { ButtonBack, ButtonFavorite, ButtonNotification, ButtonPrint, ButtonVideo } from './subcomponents';

const Header: FC<IHeaderProps> = ({
  title,
  type = typeMapping.default,
  back = null,
  date = false,
  favorite = null,
  notification = null,
  video = null,
  print = null,
  notificationAmount = 0,
  breadcrumbs = null,
  className,
  children
}): JSX.Element => {
  return (
    <div
      data-testid="HEADER_WRAPPER"
      className={clsx(styles[type === typeMapping.default ? 'wrapper-default' : 'wrapper-compact'], className)}
    >
      {breadcrumbs !== null && <div className={styles['breadcrumbs-wrapper']}>{breadcrumbs}</div>}

      <div className={styles['wrapper']}>
        <div style={{ flex: '1' }}>
          <div className={styles['title-btn-wrapper']}>
            {back !== null && <ButtonBack back={back} />}
            <div data-testid="HEADER_TITLE" className={styles.title} title={title}>
              <Typography variant="Heading2">{title}</Typography>
            </div>
          </div>
        </div>
        {children}
        <div className={styles.right}>
          {Boolean(date) && <DateTime />}
          {favorite !== null && <ButtonFavorite favorite={favorite} />}
          {print !== null && <ButtonPrint print={print} />}
          {video !== null && <ButtonVideo video={video} />}
          {notification !== null && (
            <ButtonNotification notification={notification} notificationAmount={notificationAmount} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
