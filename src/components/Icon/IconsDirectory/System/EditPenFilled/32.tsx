import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconEditPenFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 24.991h6.364L25.517 7.814a1.504 1.504 0 0 0 0-2.124l-4.244-4.25a1.498 1.498 0 0 0-2.12 0L2 18.617v6.374Zm27 3.005H2V31h27v-3.004Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconEditPenFilled32;
