import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCancelOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M16 2C8.258 2 2 8.258 2 16s6.258 14 14 14 14-6.258 14-14S23.742 2 16 2Zm3.626 8.4L16 14.026 12.374 10.4 10.4 12.374 14.026 16 10.4 19.626l1.974 1.974L16 17.974l3.626 3.626 1.974-1.974L17.974 16l3.626-3.626-1.974-1.974ZM4.8 16c0 6.174 5.026 11.2 11.2 11.2 6.174 0 11.2-5.026 11.2-11.2 0-6.174-5.026-11.2-11.2-11.2C9.826 4.8 4.8 9.826 4.8 16Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCancelOutlined32;
