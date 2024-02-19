import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFormatLineSpacingOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M4.073 4.39H5.78L3.39 2 1 4.39h1.707v6.83H1l2.39 2.39 2.39-2.39H4.073V4.39Zm2.732-1.366V4.39H15V3.024H6.805Zm0 9.561H15V11.22H6.805v1.366Zm0-4.097H15V7.122H6.805v1.366Z"
      />
    </svg>
  );
};

export default IconFormatLineSpacingOutlined16;
