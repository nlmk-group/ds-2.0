import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDirectories32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path fill={htmlColor || 'currentColor'} d="M23 11.05H9v-2.1h14v2.1Zm-2 4H11v-2.1h10v2.1Z" />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M4 4v24h24V4H4Zm21.89 2.11H6.11v11.84h6.94v3h5.9v-3h6.94V6.11Zm0 13.94h-4.84v3h-10.1v-3H6.11v5.84h19.78v-5.84Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconDirectories32;
