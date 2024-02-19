import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCircleOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        d="M2 16C2 8.272 8.272 2 16 2s14 6.272 14 14-6.272 14-14 14S2 23.728 2 16Zm2.8 0c0 6.174 5.026 11.2 11.2 11.2 6.174 0 11.2-5.026 11.2-11.2 0-6.174-5.026-11.2-11.2-11.2C9.826 4.8 4.8 9.826 4.8 16Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconCircleOutlined32;
