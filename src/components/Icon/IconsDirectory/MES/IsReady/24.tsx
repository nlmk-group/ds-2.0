import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconIsReady24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="m5.985 10.64 1.46-1.458 3.855 3.855 9.57-9.57 1.458 1.458-11.03 11.03L5.985 10.64ZM15 4.688H3.188v14.625h17.625V10.5H22.5v9a1.5 1.5 0 0 1-1.5 1.5H3a1.5 1.5 0 0 1-1.5-1.5v-15A1.5 1.5 0 0 1 3 3h12v1.688Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconIsReady24;
