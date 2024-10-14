import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconReportCheckedOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M13 15H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h2.044a1.248 1.248 0 0 1 1.081-.625h.625c0-.414.56-.75 1.25-.75s1.25.336 1.25.75h.625A1.249 1.249 0 0 1 10.956 2H13a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1Zm-.125-11.875H11.02a1.25 1.25 0 0 1-1.145.75h-3.75a1.25 1.25 0 0 1-1.145-.75H3.125v10.75h9.75V3.125Zm-5.093 6.44 3.005-3.005.973.972-3.978 3.978-2.917-2.917.973-.972 1.944 1.944Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconReportCheckedOutlined16;
