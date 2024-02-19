import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconKovshFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M12.75 11.646a2.002 2.002 0 0 0-1.5 0v-8.56h1.5v1.25h8.249v1.5h-1.25V19.02a3.25 3.25 0 0 1-3.25 3.25H7.51a3.25 3.25 0 0 1-3.25-3.25V5.835H3.01v-1.5h4v1.5H5.76v7.79h4.244a2.003 2.003 0 0 0 .647 1.352 2 2 0 1 0 2.099-3.331Zm2.748 1.98h2.75v-7.79H12.75v4.245a3.502 3.502 0 0 1 2.748 3.544Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconKovshFilled24;
