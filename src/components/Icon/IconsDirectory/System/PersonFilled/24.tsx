import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPersonFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M7 7c0-2.763 2.238-5 5-5s5 2.237 5 5c0 2.762-2.238 5-5 5S7 9.762 7 7ZM2 18.25c0-3.325 6.662-5 10-5s10 1.675 10 5V22H2v-3.75Z"
      />
    </svg>
  );
};

export default IconPersonFilled24;
