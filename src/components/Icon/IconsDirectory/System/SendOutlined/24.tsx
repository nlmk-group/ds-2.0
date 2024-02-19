import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSendOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m2.761 2.058 18.973 9.53c.08.041.148.1.194.173a.439.439 0 0 1 0 .478.496.496 0 0 1-.194.172l-18.973 9.53a.553.553 0 0 1-.509-.006.493.493 0 0 1-.184-.172.438.438 0 0 1-.068-.232V2.469c0-.081.023-.161.068-.232a.493.493 0 0 1 .184-.172.55.55 0 0 1 .51-.007Zm1.294 10.88v6.211L18.288 12 4.055 4.85v6.211h5.139v1.878H4.055Z"
      />
    </svg>
  );
};

export default IconSendOutlined24;
