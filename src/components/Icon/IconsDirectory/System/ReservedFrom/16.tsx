import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconReservedFrom16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M5.285 1.99 3.68 3.595h4.61v1.4H3.68L5.285 6.6l-.99.99L1 4.295 4.295 1l.99.99ZM9.4 5.1a4.3 4.3 0 1 1-4.3 4.3H3.8a5.6 5.6 0 1 0 5.6-5.6v1.3Zm-.65 4.3V5.9h1.3v2.85h2.15v1.3H8.75V9.4Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconReservedFrom16;
