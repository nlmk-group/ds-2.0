import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconKorporativnyjStil24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M4 3H3v18h2V5h16V3H4Zm9 14v-7h3V8H8v2h3v7h2Zm8-10h-2v2h2V7Zm0 4h-2v2h2v-2Zm-2 4h2v2h-2v-2Zm2 4h-2v2h2v-2Zm-6 2v-2h2v2h-2Zm-2-2h-2v2h2v-2Zm-6 0h2v2H7v-2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconKorporativnyjStil24;
