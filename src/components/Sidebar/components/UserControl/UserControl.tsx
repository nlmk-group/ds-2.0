import React, { FC } from 'react';

import { Avatar, Button, Icon, Typography } from '@components/index';
import { IUserControlProps } from '@components/Sidebar/types';
import clsx from 'clsx';

import styles from './UserControl.module.scss';

const UserControl: FC<IUserControlProps> = ({
  isExpanded,
  isVertical,
  isLoggedIn,
  userName,
  userSurname,
  children,
  onOpenUser,
  onLogin,
  onLogout
}) => {
  const fullName = `${userName ?? ''} ${userSurname ?? ''}`;
  return isLoggedIn ? (
    <>
      <div className={styles.user} onClick={onOpenUser}>
        <div className={styles.avatar}>{children ?? <Avatar size="s" shape="circle" />}</div>
        {isExpanded && isVertical && (
          <Typography variant="Body1-Medium" className={styles['user-text']} title={fullName}>
            {fullName}
          </Typography>
        )}
      </div>
      {!isVertical && Boolean(onLogout) && (
        <div className={styles.logout}>
          <Button
            variant="primary"
            fill="outline"
            onClick={onLogout}
            iconButton={<Icon name={'IconExitOutlined24'} />}
            title="Выйти"
          />
        </div>
      )}
    </>
  ) : (
    <>
      {Boolean(onLogin) && (
        <div className={clsx(styles.login, { [styles['login-collapsed']]: !isExpanded })} onClick={onLogin}>
          {isExpanded && (
            <Typography variant="Body1-Bold" className={styles['login-text']} title="Войти">
              Войти
            </Typography>
          )}
          <Icon name="IconEnterOutlined24" htmlColor="var(--ac-icon-blue)" />
        </div>
      )}
    </>
  );
};

export default UserControl;
