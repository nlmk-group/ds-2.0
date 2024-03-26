import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMesBunkerOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        stroke={htmlColor || 'currentColor'}
        strokeWidth="1.2"
        d="M2.5 3.5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v5.157a1 1 0 0 1-.21.614l-2.99 3.843a1 1 0 0 1-.79.386H6.49a1 1 0 0 1-.79-.386L2.71 9.27a1 1 0 0 1-.21-.614V3.5ZM3 7h10"
      />
    </svg>
  );
};

export default IconMesBunkerOutlined16;
