import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconWorkingHours24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M10 1v2h4V1h2v2h2a4 4 0 0 1 4 4v11a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h2V1h2Zm4 4v2h2V5h2a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2v2h2V5h4Zm-3 7h7v-2h-7v2Zm-2 0H6v-2h3v2Zm-3 4h3v-2H6v2Zm12 0h-7v-2h7v2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconWorkingHours24;
