import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconEditPenFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 18.023h4.243L18.678 6.572c.39-.391.39-1.025 0-1.416l-2.829-2.834a.999.999 0 0 0-1.414 0L3 13.774v4.25Zm18 2.003H3v2.003h18v-2.003Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconEditPenFilled24;
