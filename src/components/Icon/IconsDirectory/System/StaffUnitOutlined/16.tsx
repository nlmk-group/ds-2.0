import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconStaffUnitOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M7.648 10.633A4.242 4.242 0 0 1 8.6 8.897a8.614 8.614 0 0 0-.6-.022c-2.336 0-7 1.172-7 3.5V15h8.011a4.259 4.259 0 0 1-1.239-1.75H2.75v-.866c.166-.6 2.626-1.649 4.898-1.751Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M4.5 4.5C4.5 2.566 6.066 1 8 1s3.5 1.566 3.5 3.5S9.934 8 8 8a3.499 3.499 0 0 1-3.5-3.5Zm5.25 0c0-.962-.787-1.75-1.75-1.75s-1.75.788-1.75 1.75c0 .963.787 1.75 1.75 1.75s1.75-.787 1.75-1.75Zm2.7 4.068a3.593 3.593 0 0 0-1.4.001 1.3 1.3 0 0 1-.668.93 1.43 1.43 0 0 1-1.182.085 3.228 3.228 0 0 0-.7 1.15c.325.247.514.62.514 1.016 0 .395-.189.768-.513 1.014.146.426.384.818.698 1.152a1.429 1.429 0 0 1 1.183.085c.36.197.607.54.668.93.462.092.938.092 1.4 0 .062-.39.308-.733.668-.93a1.43 1.43 0 0 1 1.182-.085c.314-.334.552-.726.7-1.15a1.274 1.274 0 0 1-.514-1.016c0-.395.189-.768.513-1.015a3.21 3.21 0 0 0-.699-1.152 1.43 1.43 0 0 1-1.182-.085 1.299 1.299 0 0 1-.668-.93Zm.326 3.182c0 .539-.46.975-1.026.975-.567 0-1.026-.436-1.026-.975 0-.538.46-.975 1.026-.975.567 0 1.026.437 1.026.975Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconStaffUnitOutlined16;
