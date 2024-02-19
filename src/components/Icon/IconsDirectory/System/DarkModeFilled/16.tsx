import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDarkModeFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M8 2.12a5.88 5.88 0 1 0 5.814 4.991 3.53 3.53 0 1 1-4.926-4.926A6.613 6.613 0 0 0 8 2.12Z"
      />
    </svg>
  );
};

export default IconDarkModeFilled16;
