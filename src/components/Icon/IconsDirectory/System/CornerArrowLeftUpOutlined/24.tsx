import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCornerArrowLeftUpOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 3a1 1 0 0 1 .707.293l5 5a1 1 0 0 1-1.414 1.414L9 6.414V10.4c0 1.697 0 2.909.078 3.86.077.938.224 1.533.467 2.01a5 5 0 0 0 2.185 2.185c.477.243 1.072.39 2.01.467.951.077 2.163.078 3.86.078H21a1 1 0 1 1 0 2h-3.444c-1.643 0-2.937 0-3.978-.085-1.063-.087-1.95-.267-2.756-.678a7 7 0 0 1-3.059-3.06c-.41-.805-.591-1.692-.678-2.755C7 13.381 7 12.087 7 10.444v-4.03L3.707 9.707a1 1 0 0 1-1.414-1.414l5-5A1 1 0 0 1 8 3Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconCornerArrowLeftUpOutlined24;
