import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconACACriticalityAnalysis32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M28 4v24H4V4h24ZM10 6.25H6.25V13H10V6.25Zm15.75 13.5V6.25h-13.5V13H19v6.75h6.75ZM19 22h6.75v3.75H19V22Zm-2.25-2.25v-4.5h-4.5v4.5h4.5ZM10 15.25V22h6.75v3.75H6.25v-10.5H10Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconACACriticalityAnalysis32;
