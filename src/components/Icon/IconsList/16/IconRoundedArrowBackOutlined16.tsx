import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconRoundedArrowBackOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M3.61916 4.87719L5.35432 6.52972L4.38684 7.45113L1 4.22556L4.38684 1L5.35432 1.9214L3.61916 3.57393H8.52632C11.5493 3.57393 14 5.90789 14 8.78697C14 11.666 11.5493 14 8.52632 14H2.36842V12.6967H8.52632C10.7936 12.6967 12.6316 10.9463 12.6316 8.78697C12.6316 6.62766 10.7936 4.87719 8.52632 4.87719H3.61916Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRoundedArrowBackOutlined16;
