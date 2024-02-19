import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const ArrowRightFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m14.732 8-6.08-5.685L6.949 3.91l3.153 2.948H2.5v2.286h7.601L6.948 12.09l1.705 1.594L14.733 8Z"
      />
    </svg>
  );
};

export default ArrowRightFilled16;
