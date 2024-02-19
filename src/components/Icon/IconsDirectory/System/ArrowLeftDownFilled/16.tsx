import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconArrowLeftDownFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M13.707 3.941 12.06 2.293 6.831 7.52V3.179H4.5V11.5h8.32V9.169H8.48l5.227-5.228Z"
      />
    </svg>
  );
};

export default IconArrowLeftDownFilled16;
