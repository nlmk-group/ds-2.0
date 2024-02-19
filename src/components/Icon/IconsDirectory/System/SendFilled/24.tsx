import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSendFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M2 12.939h6.166V11.06H2V2.47c0-.081.023-.161.068-.232a.493.493 0 0 1 .184-.172.55.55 0 0 1 .51-.007l18.972 9.53c.08.041.148.1.194.173a.439.439 0 0 1 0 .478.496.496 0 0 1-.194.172l-18.973 9.53a.553.553 0 0 1-.509-.006.493.493 0 0 1-.184-.172.438.438 0 0 1-.068-.232V12.94Z"
      />
    </svg>
  );
};

export default IconSendFilled24;
