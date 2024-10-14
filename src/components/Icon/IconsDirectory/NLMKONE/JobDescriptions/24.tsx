import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconJobDescriptions24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="m6.207 9.637 5-5-1.414-1.414L5.5 7.516 3.278 5.292 1.863 6.706l2.93 2.931.707.708.707-.708ZM12 10h9V8h-9v2Zm-9 3v2h18v-2H3Zm0 7v-2h18v2H3Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconJobDescriptions24;
