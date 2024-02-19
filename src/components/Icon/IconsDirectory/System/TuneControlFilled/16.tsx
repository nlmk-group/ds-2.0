import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTuneControlFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm0 12.667v-1.334h4v1.334H2Zm0-8V3.333h6.667v1.334H2Zm6.667 8V14H7.333v-4h1.334v1.333H14v1.334H8.667Zm-4-5.334V6H6v4H4.667V8.667H2V7.333h2.667Zm9.333 0v1.334H7.333V7.333H14ZM11.333 6H10V2h1.333v1.333H14v1.334h-2.667V6Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconTuneControlFilled16;
