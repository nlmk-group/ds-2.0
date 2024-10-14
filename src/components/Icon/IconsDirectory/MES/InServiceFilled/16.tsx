import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInServiceFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M13.333 6.305v7.528a.833.833 0 0 1-.833.834h-.333a.833.833 0 0 1-.834-.834V6.305a2.667 2.667 0 0 1 0-4.944V4l1.001.5 1-.5V1.36a2.667 2.667 0 0 1 0 4.944ZM8.585 5.23a2.792 2.792 0 0 0-1.92.27A2.833 2.833 0 1 0 10 10.006v2.755c-.257.11-.523.197-.795.263L9 14.667H7l-.206-1.645a5.137 5.137 0 0 1-1.49-.614l-1.356 1.055-1.414-1.414 1.057-1.359a5.138 5.138 0 0 1-.615-1.484L1.333 9V7l1.643-.205a5.132 5.132 0 0 1 .616-1.484l-1.058-1.36 1.414-1.414 1.36 1.058c.46-.284.962-.492 1.487-.619L7 1.333h2l.03.244a4.003 4.003 0 0 0-.445 3.654Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconInServiceFilled16;
