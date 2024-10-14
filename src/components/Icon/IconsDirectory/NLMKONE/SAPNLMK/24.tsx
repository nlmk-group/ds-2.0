import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSAPNLMK24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M3 7h18v12H3V7ZM1 5a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5Zm5.025 10.6L7.434 17l4.025-4-4.025-4L6 10.4 8.616 13l-2.59 2.6Zm5.937-.6v2H18v-2h-6.038Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconSAPNLMK24;
