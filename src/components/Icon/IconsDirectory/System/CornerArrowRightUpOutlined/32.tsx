import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCornerArrowRightUpOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.632 4.287a1 1 0 0 1 1.403 0L28.7 10.85a1 1 0 0 1-1.402 1.425l-4.966-4.887v6.058c0 2.166 0 3.854-.112 5.209-.114 1.376-.35 2.497-.872 3.505a8.94 8.94 0 0 1-3.935 3.875c-1.02.512-2.152.742-3.546.855-1.374.11-3.088.11-5.29.11H4a1 1 0 1 1 0-2h4.533c2.257 0 3.89 0 5.175-.104 1.273-.102 2.116-.3 2.809-.648a6.939 6.939 0 0 0 3.056-3.008c.35-.676.551-1.5.655-2.75.104-1.263.105-2.868.105-5.09V7.388l-4.965 4.887a1 1 0 0 1-1.403-1.425l6.667-6.563Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconCornerArrowRightUpOutlined32;
