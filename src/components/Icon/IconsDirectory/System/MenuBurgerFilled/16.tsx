import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMenuBurgerFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M15.5 3.5H.5v2.333h15V3.5Zm0 3.333H.5v2.334h15V6.833Zm0 3.334H.5V12.5h15v-2.333Z"
      />
    </svg>
  );
};

export default IconMenuBurgerFilled16;
