import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const Icon2Settings32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M4 22.6667V25.3333H12V22.6667H4ZM4 6.66667V9.33333H17.3333V6.66667H4ZM17.3333 28V25.3333H28V22.6667H17.3333V20H14.6667V28H17.3333ZM9.33333 12V14.6667H4V17.3333H9.33333V20H12V12H9.33333ZM28 17.3333V14.6667H14.6667V17.3333H28ZM20 12H22.6667V9.33333H28V6.66667H22.6667V4H20V12Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default Icon2Settings32;
