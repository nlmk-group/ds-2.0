import React, { FC } from 'react';

import { IIconsProps } from '@components/Icon/types';
import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

export const IconCloseOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.08577 8.11429L4.00006 11.2L4.80006 12L7.88577 8.91429L8.00002 8.80004L8.11429 8.9143L11.2 12L12 11.2L8.91429 8.1143L8.80002 8.00004L8.91435 7.88571L9.17149 7.62857L12.0001 4.8L11.2001 4L8.11435 7.08571L8.00002 7.20004L7.88571 7.08573L7.62857 6.82859L4.8 4.00002L4 4.80002L7.08571 7.88573L7.20002 8.00004L7.08577 8.11429Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconCloseOutlined16;
