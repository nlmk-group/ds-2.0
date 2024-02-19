import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconArrowLeftFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m17.762 7.909-2.553-2.626L4.303 16.5l10.906 11.217 2.553-2.626-6.554-6.741H26.5v-3.7H11.208l6.554-6.741Z"
      />
    </svg>
  );
};

export default IconArrowLeftFilled32;
