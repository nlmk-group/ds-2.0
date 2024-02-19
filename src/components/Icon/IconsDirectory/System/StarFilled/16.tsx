import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconStarFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m8 11.948 4.326 2.552-1.148-4.81L15 6.454l-5.033-.418L8 1.5 6.033 6.036 1 6.454 4.822 9.69 3.674 14.5 8 11.948Z"
      />
    </svg>
  );
};

export default IconStarFilled16;
