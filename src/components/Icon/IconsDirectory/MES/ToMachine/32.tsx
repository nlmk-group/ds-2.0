import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconToMachine32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M26.667 28H20a2.667 2.667 0 0 1-2.667-2.667V20H20v5.333h6.667V6.667H20V12h-2.667V6.667A2.667 2.667 0 0 1 20 4h6.667a2.667 2.667 0 0 1 2.666 2.667v18.666A2.667 2.667 0 0 1 26.667 28Zm-16-10.667H1.333v-2.666h9.334v-3.998L16 16l-5.333 5.331v-3.998Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconToMachine32;
