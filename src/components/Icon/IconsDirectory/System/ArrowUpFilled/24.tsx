import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const ArrowUpFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M20.717 11.778 12 3.303l-8.717 8.475 2.171 2.111 5.017-4.878V20.5h3.057V9.011l5.018 4.878 2.171-2.111Z"
      />
    </svg>
  );
};

export default ArrowUpFilled24;
