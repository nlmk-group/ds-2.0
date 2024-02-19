import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFullScreenExitCloseOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        d="M3 8h5V3h2v7H3V8Zm5 8H3v-2.143h7.143V21H8v-5Zm6 5h2v-5h5v-2.143h-7V21Zm2-18v5h5v2.143h-7V3h2Z"
        fill={htmlColor || 'currentColor'}
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconFullScreenExitCloseOutlined24;
