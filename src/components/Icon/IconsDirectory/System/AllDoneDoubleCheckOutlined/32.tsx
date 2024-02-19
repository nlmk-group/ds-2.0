import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAllDoneDoubleCheckOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M28.29 8 15.548 20.623l-5.034-4.975-1.698 1.682L15.548 24 30 9.682 28.29 8Zm-5.107 1.682L21.485 8l-7.635 7.564 1.698 1.683 7.635-7.565ZM8.732 24 2 17.33l1.71-1.682 6.72 6.67L8.732 24Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconAllDoneDoubleCheckOutlined32;
