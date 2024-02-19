import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconNotificationsBellOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M15.5 30a2.882 2.882 0 0 0 2.875-2.872h-5.75A2.882 2.882 0 0 0 15.5 30Zm8.625-8.615v-7.18c0-4.408-2.343-8.098-6.469-9.075v-.976A2.152 2.152 0 0 0 15.5 2a2.152 2.152 0 0 0-2.156 2.154v.976c-4.111.977-6.469 4.653-6.469 9.075v7.18L4 24.256v1.436h23v-1.436l-2.875-2.871ZM21.25 22.82H9.75v-8.615c0-3.56 2.17-6.461 5.75-6.461s5.75 2.9 5.75 6.461v8.615Z"
      />
    </svg>
  );
};

export default IconNotificationsBellOutlined32;
