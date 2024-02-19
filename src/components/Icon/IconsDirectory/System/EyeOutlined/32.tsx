import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconEyeOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M16 4c6.977 0 12.782 5.173 14 12-1.216 6.827-7.023 12-14 12S3.218 22.827 2 16C3.216 9.173 9.023 4 16 4Zm0 21.333c2.64 0 5.2-.924 7.263-2.62A12.059 12.059 0 0 0 27.358 16a12.058 12.058 0 0 0-4.098-6.707A11.438 11.438 0 0 0 16 6.678c-2.638 0-5.197.922-7.26 2.615A12.058 12.058 0 0 0 4.642 16a12.059 12.059 0 0 0 4.095 6.714A11.439 11.439 0 0 0 16 25.334ZM16 22a5.737 5.737 0 0 1-4.117-1.757A6.093 6.093 0 0 1 10.177 16c0-1.591.613-3.117 1.706-4.243A5.737 5.737 0 0 1 16 10c1.544 0 3.026.632 4.117 1.757A6.093 6.093 0 0 1 21.823 16a6.093 6.093 0 0 1-1.706 4.243A5.737 5.737 0 0 1 16 22Zm0-2.667c.858 0 1.68-.35 2.288-.976A3.385 3.385 0 0 0 19.235 16c0-.884-.34-1.732-.947-2.357A3.187 3.187 0 0 0 16 12.667c-.858 0-1.68.35-2.287.976A3.385 3.385 0 0 0 12.764 16c0 .884.34 1.732.947 2.357a3.19 3.19 0 0 0 2.288.976Z"
      />
    </svg>
  );
};

export default IconEyeOutlined32;
