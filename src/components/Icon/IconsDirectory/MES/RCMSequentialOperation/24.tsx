import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRCMSequentialOperation24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M17.333 2 22 6.616l-4.667 4.616V7.77H2V5.462h15.333V2ZM9.827 12.768l4.666 4.616L9.827 22v-3.462H2V16.23h7.827v-3.462Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRCMSequentialOperation24;
