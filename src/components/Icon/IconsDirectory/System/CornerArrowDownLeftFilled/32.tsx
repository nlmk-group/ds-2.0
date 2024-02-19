import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCornerArrowDownLeftFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M27 5a1 1 0 1 0-2 0v1.838c0 2.221 0 3.827-.104 5.09-.102 1.252-.3 2.078-.645 2.756a6.876 6.876 0 0 1-3.005 3.004c-.678.346-1.504.543-2.755.646-1.263.103-2.87.104-5.091.104h-.838v-5.563a1 1 0 0 0-1.707-.707L4.293 18.73a1 1 0 0 0 0 1.415l6.562 6.562A1 1 0 0 0 12.562 26v-5.563h.883c2.167 0 3.855 0 5.209-.11 1.375-.113 2.493-.344 3.5-.857a8.876 8.876 0 0 0 3.879-3.878c.513-1.007.744-2.126.856-3.5C27 10.736 27 9.05 27 6.881V5Z"
      />
    </svg>
  );
};

export default IconCornerArrowDownLeftFilled32;
