import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTaskFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M16 28c6.627 0 12-5.373 12-12a11.95 11.95 0 0 0-1.822-6.36l-11.87 11.88-5.088-5.088 1.692-1.692 3.396 3.396L24.704 7.74A11.966 11.966 0 0 0 16 4C9.373 4 4 9.373 4 16s5.373 12 12 12Z"
      />
    </svg>
  );
};

export default IconTaskFilled32;
