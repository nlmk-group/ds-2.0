import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconNotificationsBellOffFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M7.333 15c.734 0 1.334-.6 1.334-1.333H6C6 14.4 6.593 15 7.333 15Zm4-7.333c0-2.047-1.093-3.76-3-4.214V2h-2v1.453c-.16.04-.313.1-.46.154l5.46 5.46v-1.4Zm-8.393-5.1-.94.94L3.873 5.38a4.925 4.925 0 0 0-.54 2.287V11L2 12.333V13h9.493l1.16 1.16.94-.94L2.94 2.567Z"
      />
    </svg>
  );
};

export default IconNotificationsBellOffFilled16;
