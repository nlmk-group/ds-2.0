import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const ArrowLeftOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M7.828 10.972H20v2.056H7.828l5.364 5.518L11.778 20 4 12l7.778-8 1.414 1.454-5.364 5.518Z"
      />
    </svg>
  );
};

export default ArrowLeftOutlined24;
