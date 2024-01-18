import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconHelperMailOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.7152 6.7H5.28405L11.9996 11.9232L18.7152 6.7ZM3.7 7.62163V17C3.7 17.1657 3.83431 17.3 4 17.3H20C20.1657 17.3 20.3 17.1657 20.3 17V7.62106L12.5215 13.671C12.2145 13.9097 11.7847 13.9097 11.4778 13.671L3.7 7.62163ZM2 7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17V7Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconHelperMailOutlined24;
