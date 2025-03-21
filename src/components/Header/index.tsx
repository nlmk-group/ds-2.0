import React, { FC } from 'react';

import { DateTime, Dropdown, Typography } from '@components/index';
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
  dropdownItems,
  dropdownTitle,
  className,
  children
}): JSX.Element => {
  const RightBlock = (
    <div className={styles.right}>
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
    <div
      data-testid="HEADER_WRAPPER"
      className={clsx(styles[type === typeMapping.default ? 'wrapper-default' : 'wrapper-compact'], className)}
    >
      {breadcrumbs !== null ? (
        <div className={styles['breadcrumbs-wrapper']}>
          <div>{breadcrumbs}</div>
          {RightBlock}
        </div>
      ) : null}

      <div className={styles['wrapper']}>
        <div style={{ flex: '1' }}>
          <div className={styles['title-btn-wrapper']}>
            {back !== null && <ButtonBack back={back} />}
            <div className={styles['title-container']}>
              <Typography data-testid="HEADER_TITLE" className={styles.title} variant="Heading2">
                {title}
              </Typography>
              {dropdownItems && (
                <Typography variant="Heading2">
                  <Dropdown buttonChildren={dropdownTitle}>{dropdownItems}</Dropdown>
                </Typography>
              )}
            </div>
          </div>
        </div>
        {children}
        {!breadcrumbs && RightBlock}
      </div>
    </div>
  );
};

export default Header;
