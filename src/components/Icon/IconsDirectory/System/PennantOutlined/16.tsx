import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPennantOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M8 12.454 12 15V1H4v14l4-2.546Zm-2.545-.058L8 10.776l2.546 1.62V2.4H5.455v9.996Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconPennantOutlined16;
