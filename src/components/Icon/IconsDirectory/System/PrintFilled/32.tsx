import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPrintFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M9.416 22.917h13.5v6.75h-13.5v-6.75Zm16.2 4.05v-6.75h-18.9v6.75h-2.7a1.35 1.35 0 0 1-1.35-1.35v-13.5a1.35 1.35 0 0 1 1.35-1.35h24.3a1.35 1.35 0 0 1 1.35 1.35v13.5a1.35 1.35 0 0 1-1.35 1.35h-2.7Zm-18.9-13.5v2.7h4.05v-2.7h-4.05Zm2.7-10.8h13.5a1.35 1.35 0 0 1 1.35 1.35v4.05h-16.2v-4.05a1.35 1.35 0 0 1 1.35-1.35Z"
      />
    </svg>
  );
};

export default IconPrintFilled32;
