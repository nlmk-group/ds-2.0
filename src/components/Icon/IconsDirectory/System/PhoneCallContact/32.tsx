import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPhoneCallContact32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        stroke={htmlColor || 'currentColor'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
        d="M28 25.582v-3.613a2.406 2.406 0 0 0-.572-1.617c-1.08-1.271-4.78-2.084-6.248-1.772-1.143.244-1.944 1.392-2.726 2.173a19.289 19.289 0 0 1-7.24-7.227c.782-.78 1.932-1.579 2.176-2.72.313-1.462-.5-5.14-1.762-6.224A2.416 2.416 0 0 0 10.031 4h-3.62c-1.38.001-2.527 1.239-2.402 2.626C4 18.58 13.333 28 25.37 27.99c1.394.126 2.636-1.027 2.63-2.408Z"
      />
    </svg>
  );
};

export default IconPhoneCallContact32;
