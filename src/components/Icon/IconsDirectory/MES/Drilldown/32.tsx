import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDrilldown32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M12 16c0-1.733-1.12-3.2-2.667-3.76V9.093C10.88 8.533 12 7.067 12 5.333a4 4 0 1 0-8 0c0 1.734 1.12 3.2 2.667 3.76v3.16C5.12 12.8 4 14.267 4 16s1.12 3.2 2.667 3.76v3.147C5.12 23.467 4 24.933 4 26.667a4 4 0 0 0 8 0c0-1.734-1.12-3.2-2.667-3.76V19.76C10.88 19.2 12 17.733 12 16ZM8 4a1.333 1.333 0 1 1 0 2.667A1.333 1.333 0 0 1 8 4Zm0 24a1.334 1.334 0 1 1 0-2.667A1.334 1.334 0 0 1 8 28ZM14.667 4H28v2.667H14.667V4ZM14.667 14.667H28v2.666H14.667v-2.666ZM14.667 25.333H28V28H14.667v-2.667Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconDrilldown32;
