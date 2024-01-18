import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconFormatLineSpacingOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M4.07317 4.39024H5.78049L3.39024 2L1 4.39024H2.70732V11.2195H1L3.39024 13.6098L5.78049 11.2195H4.07317V4.39024ZM6.80488 3.02439V4.39024H15V3.02439H6.80488ZM6.80488 12.5854H15V11.2195H6.80488V12.5854ZM6.80488 8.4878H15V7.12195H6.80488V8.4878Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFormatLineSpacingOutlined16;
