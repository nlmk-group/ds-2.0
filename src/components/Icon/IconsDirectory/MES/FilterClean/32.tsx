import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFilterClean32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.97 4.253A1.2 1.2 0 0 0 21.258 4H5.152a1.2 1.2 0 0 0-.713.253 1.151 1.151 0 0 0-.196 1.61l5.51 7.052v5.89c-.046.334.07.69.334.955l4.613 4.613c.115.115.23.196.403.253a8.034 8.034 0 0 1-.748-3.37c0-2.105.828-4.13 2.3-5.637v-2.704l5.511-7.051a1.15 1.15 0 0 0-.195-1.61Zm-7.615 7.857v8.663l-2.3-2.301v-6.35L7.498 6.3H18.91l-4.556 5.81Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M26.778 17.222a1.1 1.1 0 0 1 0 1.556L24.056 21.5l2.722 2.722a1.1 1.1 0 1 1-1.556 1.556L22.5 23.056l-2.722 2.722a1.1 1.1 0 1 1-1.556-1.556l2.722-2.722-2.722-2.722a1.1 1.1 0 1 1 1.556-1.556l2.722 2.722 2.722-2.722a1.1 1.1 0 0 1 1.556 0Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFilterClean32;
