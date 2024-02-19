import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconNotificationsBellFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M8 15c.825 0 1.5-.646 1.5-1.436h-3C6.5 14.354 7.175 15 8 15Zm4.5-4.308v-3.59c0-2.204-1.223-4.049-3.375-4.537v-.488C9.125 1.48 8.623 1 8 1c-.622 0-1.125.481-1.125 1.077v.488C4.73 3.053 3.5 4.891 3.5 7.103v3.59L2 12.127v.718h12v-.718l-1.5-1.436Z"
      />
    </svg>
  );
};

export default IconNotificationsBellFilled16;
