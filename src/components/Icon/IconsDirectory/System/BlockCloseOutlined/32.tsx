import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBlockCloseOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2ZM4.8 16C4.8 9.84 9.84 4.8 16 4.8c2.52 0 4.9.84 6.86 2.38L7.18 22.86A11.033 11.033 0 0 1 4.8 16Zm4.34 8.82c1.96 1.54 4.34 2.38 6.86 2.38 6.16 0 11.2-5.04 11.2-11.2 0-2.52-.84-4.9-2.38-6.86L9.14 24.82Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconBlockCloseOutlined32;
