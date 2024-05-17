import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDplayersOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M13.5 7a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-.875a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V7ZM9 12a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v1Zm-.75 5.875a.5.5 0 0 0 .5.5h6.5a.5.5 0 0 0 .5-.5v-1.056a.5.5 0 0 0-.5-.5h-6.5a.5.5 0 0 0-.5.5v1.056Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M16.5 2.5a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v2.75l-3 10.5H3a1.5 1.5 0 0 0 0 3h1.5l1.249 3.121a1 1 0 0 0 .928.629h10.646a1 1 0 0 0 .928-.629L19.5 18.75H21a1.496 1.496 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5h-1.5l-3-10.5V2.5ZM6 15.75l3-10.5V3h6v2.25l3 10.5v3L17 21H7l-1-2.25v-3Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconDplayersOutlined24;
