import React, { FC } from 'react';

import { Avatar, Button, Icon, Typography } from '@components/index';
import { IUserControlProps } from '@components/Sidebar/types';

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
  const actionIconName = isLoggedIn ? 'IconExitOutlined24' : 'IconEnterOutlined24';
  const actionTitle = isLoggedIn ? 'Выйти' : 'Войти';
  const handleAction = isLoggedIn && onLogout ? onLogout : onLogin;

  return (
    <>
      {isLoggedIn && (
        <div className={styles.user} onClick={onOpenUser}>
          <div className={styles.avatar}>{children ?? <Avatar size="s" />}</div>
          {isExpanded && isVertical && (
            <Typography variant="Body1-Medium" className={styles['user-text']} title={fullName}>
              {fullName}
            </Typography>
          )}
        </div>
      )}
      {!isVertical && Boolean(handleAction) && (
        <div className={styles.auth}>
          <Button
            variant="primary"
            fill="clear"
            onClick={handleAction}
            iconButton={<Icon name={actionIconName} />}
            title={actionTitle}
          />
        </div>
      )}
    </>
  );
};

export default UserControl;
