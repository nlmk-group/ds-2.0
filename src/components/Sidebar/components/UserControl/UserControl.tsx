import React, { FC } from 'react';

import { Avatar, Button, Icon, Typography } from '@components/index';

import styles from './UserControl.module.scss';

import { IUserControlProps } from '../../types';

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
  const fullName = [userName, userSurname].filter(Boolean).join(' ');
  const icon = isLoggedIn ? 'IconExitOutlined24' : 'IconEnterOutlined24';
  const title = isLoggedIn ? 'Выйти' : 'Войти';
  const handler = isLoggedIn ? onLogout : onLogin;

  return (
    <div className={styles.control} data-vertical={isVertical} data-expanded={isExpanded}>
      {isLoggedIn && (
        <button type="button" className={styles['user-button']} onClick={onOpenUser} title={fullName}>
          <div className={styles['avatar-wrapper']}>{children ?? <Avatar size="s" />}</div>

          {isExpanded && isVertical && (
            <Typography variant="Body1-Medium" className={styles['user-name']} title={fullName}>
              {fullName}
            </Typography>
          )}
        </button>
      )}

      {!isVertical && handler && (
        <Button
          size="s"
          variant="primary"
          fill="clear"
          onClick={handler}
          className={styles['action-button']}
          iconButton={<Icon name={icon} htmlColor="var(--unique-white)" />}
          title={title}
        />
      )}
    </div>
  );
};

UserControl.displayName = 'UserControl';

export default UserControl;
