import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMyCommand24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M16.604 11.67c-.47-.4-.98-.74-1.54-1A3.999 3.999 0 0 0 12.084 4c-2.21 0-4 1.79-4 4 0 1.02.38 1.96 1.02 2.67-.54.26-1.04.59-1.5.97a6.388 6.388 0 0 0-6.52.33l1.11 1.66c1.2-.8 2.7-.94 4.02-.44A6.99 6.99 0 0 0 5.084 17v1c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-1c0-1.39-.41-2.69-1.11-3.78 1.32-.54 2.84-.41 4.05.41l1.12-1.65c-1.96-1.33-4.48-1.42-6.54-.3v-.01ZM12.084 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Zm0 11h-5c0-2.76 2.24-5 5-5s5 2.24 5 5h-5Zm-7.5-7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm16.75-2a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMyCommand24;
