import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRegulations24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="m6.078 5.986.926-.174V18a3 3 0 0 0 1.777 2.74l-1.175.22a1 1 0 0 1-1.167-.8L4.049 7.383a1 1 0 0 1 .8-1.167l1.229-.23Zm12.106 15.03L18.18 21h.823a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3h-9a3 3 0 0 0-2.716 1.725L5.71 4.02l-1.229.23a3 3 0 0 0-2.397 3.5l2.389 12.778a3 3 0 0 0 3.5 2.398l10.21-1.91ZM10.004 4a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9Zm1 3h7v2h-7V7Zm0 4h5v2h-5v-2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRegulations24;
