import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCloseFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M5.387 3.824a1.104 1.104 0 1 0-1.563 1.563L6.437 8l-2.613 2.614a1.104 1.104 0 1 0 1.563 1.562L8 9.563l2.614 2.613a1.104 1.104 0 1 0 1.562-1.563L9.563 8l2.613-2.613a1.108 1.108 0 0 0 0-1.557 1.105 1.105 0 0 0-1.563 0L8 6.438 5.387 3.824Z"
      />
    </svg>
  );
};

export default IconCloseFilled16;
