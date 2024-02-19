import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSuccessOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-7 5.6A5.6 5.6 0 1 0 8 2.4a5.6 5.6 0 0 0 0 11.2Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="m11.709 5.819-4.976 5.05L4.291 8.39l.997-.983 1.445 1.466 3.979-4.038.997.983Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconSuccessOutlined16;
