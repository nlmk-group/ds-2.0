import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconEditPenOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m26.617 1.483 3.9 3.9c.65.65.65 1.7 0 2.35l-3.05 3.05-6.25-6.25 3.05-3.05A1.64 1.64 0 0 1 25.433 1c.434 0 .85.15 1.184.483ZM1 24.75V31h6.25l18.433-18.433-6.25-6.25L1 24.75Zm4.867 2.917H4.333v-1.534l15.1-15.1 1.534 1.534-15.1 15.1Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconEditPenOutlined32;
