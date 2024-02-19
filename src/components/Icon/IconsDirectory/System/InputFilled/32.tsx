import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInputFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M27.454 5H4.546A2.56 2.56 0 0 0 2 7.558v7.663h12.727v-3.838l5.091 5.117-5.09 5.117v-3.838H2v7.688A2.538 2.538 0 0 0 4.545 28h22.91c1.4 0 2.545-1.126 2.545-2.533V7.558A2.551 2.551 0 0 0 27.454 5Z"
      />
    </svg>
  );
};

export default IconInputFilled32;
