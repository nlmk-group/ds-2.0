import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLotokFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M1 5.65h.992l1.5 6h9.016l1.5-6H15v-1.3H1v1.3Zm5.198 8.15a1.3 1.3 0 1 1-2.6 0 1.3 1.3 0 0 1 2.6 0Zm6.202 0a1.3 1.3 0 1 1-2.6 0 1.3 1.3 0 0 1 2.6 0Z"
      />
    </svg>
  );
};

export default IconLotokFilled16;
