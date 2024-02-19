import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconKovshInProgress16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M7.65 2.23 6.46 1.04l-.92.92.54.54-3.125 3.126a2.65 2.65 0 0 0 0 3.748l1.671 1.671a2.65 2.65 0 0 0 3.748 0l3.125-3.125c.225.248.351.572.351.908v4.522H2v1.3h12v-1.3h-.85V8.828a2.65 2.65 0 0 0-.776-1.873L10.46 5.04l-.92.92L10.58 7l-3.125 3.126a1.35 1.35 0 0 1-1.91 0l-1.67-1.671a1.35 1.35 0 0 1 0-1.91L6.35 4.07V7a.65.65 0 1 0 1.3 0V2.232Z"
      />
    </svg>
  );
};

export default IconKovshInProgress16;
