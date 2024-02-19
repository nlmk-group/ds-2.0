import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHourglassEmptyOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M7 3v5.4h.009L7 8.409 10.6 12 7 15.6l.009.009H7V21h10.8v-5.391h-.009l.009-.009-3.6-3.6 3.6-3.591-.009-.009h.009V3H7Zm9 13.05v3.15H8.8v-3.15l3.6-3.6 3.6 3.6Zm-3.6-4.5-3.6-3.6V4.8H16v3.15l-3.6 3.6Z"
      />
    </svg>
  );
};

export default IconHourglassEmptyOutlined24;
