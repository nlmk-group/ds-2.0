import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFormatListFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2Zm12 1.667H5.333V4H14V2.667ZM4 2.333H2v2h2v-2ZM4 7H2v2h2V7Zm0 4.667H2v2h2v-2Zm10-4.334H5.333v1.334H14V7.333ZM14 12H5.333v1.333H14V12Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconFormatListFilled16;
