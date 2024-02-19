import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconVerticalAlignTopFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M14.5.5h-13v2.556h13V.5Zm-2.323 7.222L8 3.391 3.823 7.722H6.75V15.5h2.5V7.722h2.927Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconVerticalAlignTopFilled16;
