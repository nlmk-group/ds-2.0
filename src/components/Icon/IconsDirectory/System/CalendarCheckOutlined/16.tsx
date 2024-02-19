import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCalendarCheckOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M6.2 3.2V2H5v1.2H2.6a.6.6 0 0 0-.6.6v9.6a.6.6 0 0 0 .6.6h10.8a.6.6 0 0 0 .6-.6V3.8a.6.6 0 0 0-.6-.6H11V2H9.8v1.2H6.2Zm-3 4.2h9.6v5.4H3.2V7.4Zm6.622.682L7.7 10.203 6.428 8.93l-.85.848L7.7 11.9l2.97-2.97-.848-.848ZM3.2 4.4H5V5h1.2v-.6h3.6V5H11v-.6h1.8v1.8H3.2V4.4Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCalendarCheckOutlined16;
