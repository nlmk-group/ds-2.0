import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAddPlusCircleFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={htmlColor || 'currentColor'}
        d="M13.469 12.369A6.97 6.97 0 0 0 15 8c0-3.864-3.136-7-7-7S1 4.136 1 8s3.136 7 7 7a6.97 6.97 0 0 0 4.369-1.531l1.1-1.1Zm-8.58-5.147h2.333V4.89h1.556v2.333h2.333v1.556H8.778v2.333H7.222V8.778H4.89V7.222Z"
      />
    </svg>
  );
};

export default IconAddPlusCircleFilled16;
