import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBarChartOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M6.8 2h2.4v12H6.8V2ZM2 5.6h2.571V14H2V5.6Zm12 3.257h-2.4V14H14V8.857Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconBarChartOutlined16;
