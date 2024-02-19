import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconEducationOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M8 3 2 6.333l2.182 1.211v3.334L8 13l3.818-2.122V7.544l1.091-.605v3.839H14V6.333L8 3Zm3.72 3.333L8 8.4 4.28 6.333 8 4.267l3.72 2.066Zm-.993 3.884L8 11.733l-2.727-1.516V8.15L8 9.667l2.727-1.517v2.067Z"
      />
    </svg>
  );
};

export default IconEducationOutlined16;
