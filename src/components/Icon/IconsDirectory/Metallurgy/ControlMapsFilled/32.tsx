import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconControlMapsFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M6.267 23.48c.981 0 1.857-.454 2.45-1.151l14.06 4.244c.515 1.128 1.642 1.927 2.966 1.927 1.81 0 3.257-1.514 3.257-3.323a3.366 3.366 0 0 0-1.42-2.747l-.377-9.29a3.367 3.367 0 0 0 1.463-2.786c0-1.803-1.43-3.323-3.247-3.323-.92 0-1.736.386-2.32.99l-7.162-2.024c-.351-1.404-1.618-2.497-3.15-2.497-1.825 0-3.268 1.527-3.268 3.333 0 .691.21 1.34.569 1.877L5.98 16.836C4.3 16.985 3 18.43 3 20.146c0 1.806 1.443 3.333 3.267 3.333Zm6.977-13.347a3.204 3.204 0 0 0 1.682-.803l7.393 2.096a3.337 3.337 0 0 0 1.454 1.81l.32 9.063a3.373 3.373 0 0 0-.918.819l-13.884-4.2a3.408 3.408 0 0 0-.212-.444l4.165-8.341Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconControlMapsFilled32;
