import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDarkModeOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M6.282 3.76a4.84 4.84 0 0 0 5.958 5.958A4.582 4.582 0 0 1 8 12.573 4.578 4.578 0 0 1 3.427 8a4.582 4.582 0 0 1 2.855-4.24ZM8 2.12a5.88 5.88 0 1 0 5.814 4.992 3.53 3.53 0 1 1-4.926-4.926A6.613 6.613 0 0 0 8 2.12Z"
      />
    </svg>
  );
};

export default IconDarkModeOutlined16;
