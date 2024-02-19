import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconListAltFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        fill={htmlColor || 'currentColor'}
        d="M3.4 2h25.2c.622 0 1.4.622 1.4 1.4v25.2c0 .622-.778 1.4-1.4 1.4H3.4c-.778 0-1.4-.778-1.4-1.4V3.4C2 2.622 2.622 2 3.4 2Zm4.822 6.222h3.111v3.111h-3.11v-3.11Zm6.222 0h9.334v3.111h-9.334v-3.11Zm0 6.222h9.334v3.112h-9.334v-3.112Zm9.334 6.223h-9.334v3.11h9.334v-3.11Zm-12.445-6.223h-3.11v3.112h3.11v-3.112Zm-3.11 6.223h3.11v3.11h-3.11v-3.11Z"
      />
    </svg>
  );
};

export default IconListAltFilled32;
