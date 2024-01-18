import React, { FC } from 'react';

import { IIconsProps } from '@components/Icon/types';
import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

export const IconFullscreenExitCloseOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 4.88889H4.88889V1H6.44444V6.44444H1V4.88889ZM4.88889 11.1111H1V9.44444H6.55556V15H4.88889V11.1111ZM9.55556 15H11.1111V11.1111H15V9.44444H9.55556V15ZM11.1111 1V4.88889H15V6.55556H9.55556V1H11.1111Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFullscreenExitCloseOutlined16;
