import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAnalyticsOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Zm9.526-10.8c-.59 4.736-4.63 8.4-9.526 8.4A9.6 9.6 0 0 1 6.4 16c0-4.896 3.664-8.935 8.4-9.526V17.2h10.726Zm0-2.4H17.2V6.474a9.605 9.605 0 0 1 8.326 8.326Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconAnalyticsOutlined32;
