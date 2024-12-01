import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconJoin32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M12 6.667a9.333 9.333 0 0 0 0 18.666c1.387 0 2.747-.32 4-.906a9.433 9.433 0 0 0 4 .906 9.334 9.334 0 0 0 0-18.666c-1.386 0-2.746.32-4 .906a9.433 9.433 0 0 0-4-.906Zm0 2.666c.454 0 .894.04 1.334.134A9.356 9.356 0 0 0 10.667 16a9.3 9.3 0 0 0 2.667 6.52c-.44.093-.88.147-1.334.147a6.667 6.667 0 0 1 0-13.334Zm8 0a6.667 6.667 0 1 1 0 13.334c-.453 0-.893-.04-1.333-.134A9.356 9.356 0 0 0 21.334 16a9.3 9.3 0 0 0-2.667-6.52c.44-.093.88-.147 1.333-.147Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconJoin32;
