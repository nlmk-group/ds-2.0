import React, { FC } from 'react';

import { IIconsProps } from '@components/Icon/types';
import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

export const IconAddPlusCircleOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M24.738 26.937A13.938 13.938 0 0 1 16 30C8.272 30 2 23.728 2 16S8.272 2 16 2s14 6.272 14 14a13.938 13.938 0 0 1-3.063 8.738l-2.2 2.2ZM26.887 16a10.854 10.854 0 0 1-3.071 7.583l-.234.234A10.854 10.854 0 0 1 16 26.889C9.983 26.889 5.111 22.015 5.111 16A10.885 10.885 0 0 1 16 5.111c6.015 0 10.889 4.872 10.889 10.889Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M14.444 14.444V9.778h3.111v4.666h4.667v3.111h-4.667v4.667h-3.11v-4.667H9.777v-3.11h4.666Z"
      />
    </svg>
  );
};

export default IconAddPlusCircleOutlined32;
