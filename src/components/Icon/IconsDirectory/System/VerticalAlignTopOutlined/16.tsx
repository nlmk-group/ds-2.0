import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconVerticalAlignTopOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 2.556V1h12v1.556H2Zm5.25 4.666H5l3-3.11 3 3.11H8.75V15h-1.5V7.222Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconVerticalAlignTopOutlined16;
