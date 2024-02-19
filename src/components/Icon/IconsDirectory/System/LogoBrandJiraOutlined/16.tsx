import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLogoBrandJiraOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        d="M14.415 1H7.674a3.043 3.043 0 0 0 3.043 3.043h1.242v1.2A3.043 3.043 0 0 0 15 8.282V1.586A.585.585 0 0 0 14.415 1ZM4.338 4.36h6.741c.323 0 .585.261.585.584v6.699a3.043 3.043 0 0 1-3.043-3.04V7.4H7.379a3.043 3.043 0 0 1-3.041-3.04ZM1 7.715h6.742c.323 0 .585.262.585.585V15a3.043 3.043 0 0 1-3.038-3.041v-1.2H4.043A3.043 3.043 0 0 1 1 7.717Z"
        fill={htmlColor || 'currentColor'}
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconLogoBrandJiraOutlined16;
