import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSpecodezhda24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M8.64 8.01C6.177 8.927 5 11.547 5 14.076v1.615a1 1 0 1 1-2 0v-1.615c0-3.378 1.742-6.877 5.184-8.024a.997.997 0 0 1 .364-.05 2 2 0 0 1 2-2.001h2.904a2 2 0 0 1 2 2c.12-.005.243.011.364.051C19.23 7.19 21 10.476 21 13.885V15.5a1 1 0 1 1-2 0v-1.615c0-2.501-1.152-4.96-3.64-5.875l-.236 5.037a1 1 0 0 1-1.998-.094L13.452 6h-2.904l.326 6.953a1 1 0 0 1-1.998.094L8.64 8.01ZM2 18a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2H2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconSpecodezhda24;
