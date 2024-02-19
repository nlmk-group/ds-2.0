import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSearchOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="m14.876 13.933-2.855-2.855a6.002 6.002 0 0 0-4.687-9.745c-3.313 0-6 2.688-6 6a6.002 6.002 0 0 0 9.744 4.688l2.855 2.855.943-.943ZM12 7.333a4.652 4.652 0 0 1-1.317 3.25l-.1.1a4.665 4.665 0 0 1-7.917-3.35 4.665 4.665 0 0 1 4.667-4.666A4.665 4.665 0 0 1 12 7.333Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconSearchOutlined16;
