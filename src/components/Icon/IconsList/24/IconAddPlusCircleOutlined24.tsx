import React, { FC } from 'react';

import { IIconsProps } from '@components/Icon/types';
import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

export const IconAddPlusCircleOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M18.241 19.812A9.956 9.956 0 0 1 12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10a9.956 9.956 0 0 1-2.188 6.241l-1.57 1.571ZM19.778 12a7.752 7.752 0 0 1-2.195 5.417l-.166.166A7.752 7.752 0 0 1 12 19.778 7.776 7.776 0 0 1 4.222 12 7.775 7.775 0 0 1 12 4.222 7.776 7.776 0 0 1 19.778 12Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M10.889 10.889V7.556h2.222v3.333h3.333v2.222h-3.333v3.333H10.89v-3.333H7.556V10.89h3.333Z"
      />
    </svg>
  );
};

export default IconAddPlusCircleOutlined24;
