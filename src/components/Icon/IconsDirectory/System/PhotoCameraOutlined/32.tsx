import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPhotoCameraOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M12.1 4h7.8l2.379 2.6H26.4c1.43 0 2.6 1.17 2.6 2.6v15.6c0 1.43-1.17 2.6-2.6 2.6H5.6c-1.43 0-2.6-1.17-2.6-2.6V9.2c0-1.43 1.17-2.6 2.6-2.6h4.121L12.1 4Zm9.035 5.2-2.379-2.6h-5.512l-2.379 2.6H5.6v15.6h20.8V9.2h-5.265ZM16 13.1c2.145 0 3.9 1.755 3.9 3.9s-1.755 3.9-3.9 3.9a3.911 3.911 0 0 1-3.9-3.9c0-2.145 1.755-3.9 3.9-3.9ZM9.5 17c0-3.588 2.912-6.5 6.5-6.5s6.5 2.912 6.5 6.5-2.912 6.5-6.5 6.5A6.502 6.502 0 0 1 9.5 17Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconPhotoCameraOutlined32;
