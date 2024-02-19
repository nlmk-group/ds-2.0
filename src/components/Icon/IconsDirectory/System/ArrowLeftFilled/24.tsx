import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconArrowLeftFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m13.89 5.454-2.112-2.171L3.303 12l8.475 8.717 2.111-2.171-4.877-5.018H20.5v-3.057H9.012l4.877-5.017Z"
      />
    </svg>
  );
};

export default IconArrowLeftFilled24;
