import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconNumbersOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M3.935 16v-6H2V8h3.871v8H3.935Zm4.517 0v-3.333c0-.378.123-.695.37-.95.248-.256.554-.384.92-.384h2.58V10h-3.87V8h4.516c.365 0 .672.128.92.383.246.256.37.573.37.95v2c0 .378-.124.695-.37.95a1.228 1.228 0 0 1-.92.384h-2.58V14h3.87v2H8.452Zm7.742 0v-2h3.87v-1.333h-2.58v-1.334h2.58V10h-3.87V8h4.516c.365 0 .672.128.919.383.247.256.371.573.371.95v5.334c0 .377-.124.694-.371.95a1.228 1.228 0 0 1-.92.383h-4.515Z"
      />
    </svg>
  );
};

export default IconNumbersOutlined24;
