import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMapFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m19.02 6.45-5.701-2.03v21.2l5.7 2.03V6.45Zm1.993 21.209 6.507-2.192a.672.672 0 0 0 .48-.64V4.667A.66.66 0 0 0 27.333 4l-.213.04-6.107 2.367V27.66ZM4.48 6.533l6.846-2.263v21.24L4.88 27.96l-.213.04A.66.66 0 0 1 4 27.333V7.173c0-.306.2-.546.48-.64Z"
      />
    </svg>
  );
};

export default IconMapFilled32;
