import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInputFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M13.727 2H2.273C1.573 2 1 2.6 1 3.335v3.998h6.364V5.33L9.909 8l-2.545 2.67V8.667H1v4.011C1 13.413 1.573 14 2.273 14h11.454c.7 0 1.273-.587 1.273-1.322V3.335C15 2.594 14.427 2 13.727 2Z"
      />
    </svg>
  );
};

export default IconInputFilled16;
