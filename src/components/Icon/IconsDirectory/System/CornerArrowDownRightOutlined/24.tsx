import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCornerArrowDownRightOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M4 3a1 1 0 0 1 1 1v1.4c0 1.697 0 2.909.078 3.86.077.938.224 1.533.467 2.01a5 5 0 0 0 2.185 2.185c.477.243 1.072.39 2.01.467.951.077 2.163.078 3.86.078h3.986l-3.293-3.293a1 1 0 0 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L17.586 16h-4.03c-1.643 0-2.937 0-3.978-.085-1.063-.087-1.95-.267-2.756-.678a7 7 0 0 1-3.059-3.06c-.41-.805-.591-1.692-.678-2.755C3 8.381 3 7.087 3 5.444V4a1 1 0 0 1 1-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCornerArrowDownRightOutlined24;
