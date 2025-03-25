import React, { FC } from 'react';

import { DateTime, Typography } from '@components/index';
import { clsx } from 'clsx';

import { IHeaderProps } from './types';

import styles from './Header.module.scss';

import { ButtonBack, ButtonFavorite, ButtonNotification, ButtonPrint, ButtonVideo } from './subcomponents';

const Header: FC<IHeaderProps> = ({
  title,
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
  const RightBlock = (
    <div data-ui-header-right-block className={clsx(styles.right, !breadcrumbs && styles['right-with-margin'])}>
      {Boolean(date) && <DateTime />}
      {favorite !== null && <ButtonFavorite favorite={favorite} />}
      {print !== null && <ButtonPrint print={print} />}
      {video !== null && <ButtonVideo video={video} />}
      {notification !== null && (
        <ButtonNotification notification={notification} notificationAmount={notificationAmount} />
      )}
    </div>
  );

  return (
    <div data-ui-header data-testid="HEADER_WRAPPER" className={clsx(styles['wrapper-default'], className)}>
      {breadcrumbs !== null ? (
        <div className={styles['breadcrumbs-wrapper']}>
          <div>{breadcrumbs}</div>
          {RightBlock}
        </div>
      ) : null}
      <div className={styles['wrapper']}>
        <div style={{ flex: '1' }}>
          <div className={clsx(breadcrumbs ? styles['title-btn-wrapper-with-crumbs'] : styles['title-btn-wrapper'])}>
            {back !== null && <ButtonBack back={back} />}
            <div className={styles['title-container']}>
              <Typography data-testid="HEADER_TITLE" className={styles.title} variant="Heading2">
                {title}
              </Typography>
              {children}
            </div>
            {!breadcrumbs && RightBlock}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
