import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMapPinaltFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M14.667 15.87v6.63c0 .345.14.675.39.919s.59.38.943.38c.354 0 .693-.136.943-.38s.39-.575.39-.92v-6.63a6.686 6.686 0 0 0 4.037-2.516 6.381 6.381 0 0 0 1.263-4.506 6.445 6.445 0 0 0-2.162-4.169A6.764 6.764 0 0 0 16 3a6.764 6.764 0 0 0-4.47 1.678 6.445 6.445 0 0 0-2.163 4.169 6.382 6.382 0 0 0 1.263 4.506 6.686 6.686 0 0 0 4.037 2.516Zm6.946 3.275a1.396 1.396 0 0 0-1.024.188c-.15.096-.28.219-.38.363a1.313 1.313 0 0 0-.215.995 1.311 1.311 0 0 0 .57.851c.148.099.314.168.49.204 3.026.585 4.28 1.638 4.28 2.054 0 .754-3.267 2.6-9.334 2.6s-9.333-1.846-9.333-2.6c0-.416 1.253-1.47 4.28-2.106a1.38 1.38 0 0 0 .489-.204c.147-.098.274-.224.371-.37a1.311 1.311 0 0 0 .193-1 1.313 1.313 0 0 0-.588-.839 1.383 1.383 0 0 0-1.025-.188C6.333 20.003 4 21.707 4 23.8c0 3.419 6.04 5.2 12 5.2s12-1.781 12-5.2c0-2.093-2.333-3.797-6.387-4.655Z"
      />
    </svg>
  );
};

export default IconMapPinaltFilled32;
