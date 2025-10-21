import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPinRightFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M2 7v10c0 .55.45 1 1 1s1-.45 1-1v-1h5c1.66 0 3 1.34 3 3h2v-5.97h7l1-1-1-1h-7V5h-2c0 1.66-1.34 3-3 3H4V7c0-.55-.45-1-1-1s-1 .45-1 1Z"
      />
    </svg>
  );
};

export default IconPinRightFilled24;
