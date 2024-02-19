import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSearchOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="m29.752 27.865-5.71-5.709a11.946 11.946 0 0 0 2.625-7.49c0-6.623-5.376-12-12-12s-12 5.377-12 12c0 6.625 5.376 12 12 12a11.946 11.946 0 0 0 7.49-2.625l5.708 5.711 1.887-1.887ZM24 14.667a9.302 9.302 0 0 1-2.633 6.5l-.2.2a9.302 9.302 0 0 1-6.5 2.633 9.33 9.33 0 0 1-9.334-9.333 9.33 9.33 0 0 1 9.334-9.334A9.33 9.33 0 0 1 24 14.667Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconSearchOutlined32;
