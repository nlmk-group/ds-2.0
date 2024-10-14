import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAttach24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M3.787 19.188c-4.02-4.02 0-8.176 0-8.176l6.829-6.828a.964.964 0 1 1 1.362 1.363L5.15 12.375a3.854 3.854 0 1 0 5.45 5.45l8.858-8.857c.94-.94.77-2.295-.17-3.236-.942-.94-2.296-1.111-3.237-.17l-7.494 7.494a.964.964 0 0 0 1.362 1.363l4.78-4.78a.964.964 0 0 1 1.363 1.363l-4.78 4.78c-1.134 1.044-2.988 1.1-4.088 0-1.969-1.969 0-4.088 0-4.088l7.495-7.495s3.028-2.763 5.962.17c2.933 2.933.17 5.962.17 5.962l-8.858 8.857s-4.155 4.021-8.176 0Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconAttach24;
