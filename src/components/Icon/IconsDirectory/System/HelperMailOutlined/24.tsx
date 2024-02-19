import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHelperMailOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M18.715 6.7H5.285L12 11.923 18.715 6.7ZM3.7 7.622V17a.3.3 0 0 0 .3.3h16a.3.3 0 0 0 .3-.3V7.621l-7.779 6.05a.85.85 0 0 1-1.043 0L3.7 7.621ZM2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconHelperMailOutlined24;
