import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconArrowLeftFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M10.052 3.909 8.347 2.315 2.267 8l6.08 5.684 1.705-1.593-3.154-2.948H14.5V6.857H6.898l3.154-2.948Z"
      />
    </svg>
  );
};

export default IconArrowLeftFilled16;
