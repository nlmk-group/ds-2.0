import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconRoundedArrowBackFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M5.10526 4.9V7.5L1 4.25L5.10526 1V3.6H8.52632C11.5493 3.6 14 5.92812 14 8.8C14 11.6719 11.5493 14 8.52632 14H2.36842V12.7H8.52632C10.7936 12.7 12.6316 10.9539 12.6316 8.8C12.6316 6.64609 10.7936 4.9 8.52632 4.9H5.10526Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRoundedArrowBackFilled16;
