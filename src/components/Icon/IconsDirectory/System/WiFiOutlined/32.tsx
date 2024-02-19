import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconWiFiOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m2 11.854 2.545 2.572a16.083 16.083 0 0 1 22.91 0L30 11.854c-7.726-7.805-20.262-7.805-28 0Zm10.182 10.288L16 26l3.818-3.858a5.353 5.353 0 0 0-7.636 0ZM9.636 19.57l-2.545-2.572c4.925-4.964 12.905-4.964 17.818 0l-2.545 2.572a8.938 8.938 0 0 0-12.728 0Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconWiFiOutlined32;
