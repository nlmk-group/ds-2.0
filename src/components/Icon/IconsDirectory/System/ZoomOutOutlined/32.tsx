import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconZoomOutOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m24.041 22.156 5.711 5.71-1.887 1.886-5.709-5.71a11.946 11.946 0 0 1-7.49 2.625c-6.623 0-12-5.376-12-12s5.377-12 12-12c6.625 0 12 5.376 12 12a11.946 11.946 0 0 1-2.625 7.49Zm-2.674-.99a9.302 9.302 0 0 0 2.633-6.5 9.33 9.33 0 0 0-9.333-9.333 9.33 9.33 0 0 0-9.334 9.334A9.33 9.33 0 0 0 14.667 24a9.302 9.302 0 0 0 6.5-2.633l.2-.2ZM9.333 13.334H20V16H9.333v-2.667Z"
      />
    </svg>
  );
};

export default IconZoomOutOutlined32;
