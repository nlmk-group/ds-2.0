import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSpectatTelega32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M4 5a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v19a1 1 0 0 1-1 1h-.05a2.5 2.5 0 1 1-4.9 0H9.95a2.5 2.5 0 1 1-4.9 0H5a1 1 0 0 1-1-1V5Zm2.1 7.95V6.1h4.85v6.85H6.1Zm0 7.1v2.85h19.8v-2.85H6.1Zm0-2.1h4.85v-2.9H6.1v2.9Zm6.95 0h5.9v-2.9h-5.9v2.9Zm8 0h4.85v-2.9h-4.85v2.9Zm4.85-5V6.1h-4.85v6.85h4.85ZM18.95 6.1h-5.9v6.85h5.9V6.1Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconSpectatTelega32;
