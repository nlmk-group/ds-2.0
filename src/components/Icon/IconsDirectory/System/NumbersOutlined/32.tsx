import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconNumbersOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M4.71 21.5v-8.25H2V10.5h5.42v11H4.71Zm6.322 0v-4.583c0-.52.173-.955.52-1.307a1.735 1.735 0 0 1 1.287-.527h3.613V13.25h-5.42V10.5h6.323c.512 0 .94.176 1.287.527.346.352.52.787.52 1.306v2.75c0 .52-.174.955-.52 1.307a1.735 1.735 0 0 1-1.287.527h-3.613v1.833h5.42v2.75h-8.13Zm10.839 0v-2.75h5.42v-1.833h-3.614v-1.834h3.613V13.25h-5.419V10.5h6.323c.511 0 .94.176 1.287.527.346.352.519.787.519 1.306v7.334c0 .52-.173.954-.52 1.306a1.734 1.734 0 0 1-1.286.527H21.87Z"
      />
    </svg>
  );
};

export default IconNumbersOutlined32;
