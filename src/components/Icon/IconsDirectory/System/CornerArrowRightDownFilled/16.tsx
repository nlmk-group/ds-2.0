import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCornerArrowRightDownFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M6.81 4.053C6.195 4 5.404 4 4.267 4H2a1 1 0 1 1 0-2h2.31c1.083 0 1.959 0 2.668.06.731.061 1.375.192 1.97.504a5.064 5.064 0 0 1 2.18 2.245c.297.603.422 1.255.481 2.003.058.727.058 1.627.058 2.746v.005H14a1 1 0 0 1 .718 1.696l-3.333 3.437a1 1 0 0 1-1.436 0L6.615 11.26a1 1 0 0 1 .718-1.697h2.334c0-1.15-.002-1.96-.052-2.592-.05-.629-.143-.995-.28-1.275a3.065 3.065 0 0 0-1.318-1.36c-.26-.137-.604-.232-1.207-.282Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCornerArrowRightDownFilled16;
