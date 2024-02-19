import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDoneCheckFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m15.696 4.15-1.81-1.869-8.431 8.702-3.341-3.448-1.81 1.868 5.15 5.316 10.242-10.57Z"
      />
    </svg>
  );
};

export default IconDoneCheckFilled16;
