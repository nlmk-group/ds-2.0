import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconEyeglassesFill16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M4.5 5.877a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5Zm2.297.478a2.625 2.625 0 0 0-4.886.834h-.474a.437.437 0 1 0 0 .875h.474a2.625 2.625 0 0 0 5.214-.437.875.875 0 0 1 1.75 0 2.625 2.625 0 0 0 5.214.437h.473a.438.438 0 0 0 0-.875h-.473a2.625 2.625 0 0 0-4.886-.834 1.747 1.747 0 0 0-2.406 0Zm6.453 1.272a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Z"
      />
    </svg>
  );
};

export default IconEyeglassesFill16;
