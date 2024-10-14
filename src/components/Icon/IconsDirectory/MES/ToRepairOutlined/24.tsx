import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconToRepairOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="m17.45 14.08 3.716-3.717a5.525 5.525 0 0 1-6.397 8.173l-3.801 3.801a1.256 1.256 0 0 1-1.776 0l-1.777-1.774a1.256 1.256 0 0 1 0-1.777l3.802-3.802a5.525 5.525 0 0 1 8.173-6.396l-3.716 3.715.355 1.42 1.421.356Zm-.311-5.018a4.27 4.27 0 0 0-4.44 6.216L8.837 19.14a.753.753 0 0 0 0 1.066l.71.71a.754.754 0 0 0 1.066 0l3.862-3.862a4.27 4.27 0 0 0 6.216-4.44L17.806 15.5l-2.938-.628-.615-2.924 2.886-2.886ZM4.75 9.5 6.25 8H2V5h4.25l-1.5-1.5L7.25 1l5.5 5.5-5.5 5.5-2.5-2.5Zm2.5-6.875-.875.875L9 6.125H3.125v.75H9L6.375 9.5l.875.875L11.125 6.5 7.25 2.625Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconToRepairOutlined24;
