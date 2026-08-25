import React, { Children, FC } from 'react';

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
  const avatar = Children.count(children) > 0 ? children : <Avatar size="s" />;
  const icon = isLoggedIn ? 'IconExitOutlined24' : 'IconEnterOutlined24';
  const title = isLoggedIn ? 'Выйти' : 'Войти';
  const handler = isLoggedIn ? onLogout : onLogin;

  return (
    <div className={styles.control} data-vertical={isVertical} data-expanded={isExpanded} data-ui-sidebar-user-control>
      {isLoggedIn && (
        <button type="button" className={styles['user-button']} onClick={onOpenUser} title={fullName || undefined}>
          <div className={styles['avatar-wrapper']}>{avatar}</div>

          {isExpanded && isVertical && Boolean(fullName) && (
            <Typography variant="Body1-Medium" color="var(--unique-white)" className={styles.username} title={fullName}>
              {fullName}
            </Typography>
          )}
        </button>
      )}

      {!isVertical && handler && (
        <Button
          type="button"
          size="s"
          color="ghost"
          variant="secondary"
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
