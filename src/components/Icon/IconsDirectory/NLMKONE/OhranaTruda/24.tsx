import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconOhranaTruda24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M5.883 14.138c-1.254-3.277-1.726-6.948-1.878-8.49C5.403 5.11 8.685 4 11.92 4s6.516 1.11 7.914 1.648c-.151 1.542-.624 5.213-1.877 8.49C16.65 17.551 14.722 20 11.919 20s-4.731-2.449-6.036-5.862ZM11.919 2C8.26 2 4.65 3.252 3.224 3.806a1.919 1.919 0 0 0-1.215 1.98c.15 1.56.64 5.495 2.005 9.067C5.344 18.328 7.724 22 11.92 22s6.576-3.672 7.905-7.148c1.365-3.571 1.854-7.506 2.005-9.066a1.919 1.919 0 0 0-1.215-1.98C19.19 3.252 15.58 2 11.92 2ZM7.212 12.205l3.706 3.706 7.208-7.205-1.414-1.415-5.794 5.792-2.292-2.292-1.414 1.414Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconOhranaTruda24;
