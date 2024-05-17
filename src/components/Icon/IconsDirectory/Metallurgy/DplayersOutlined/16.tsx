import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDplayersOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M9 4.531a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V4.25a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v.281ZM6 8.063a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V7.75a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.313Zm-.5 3.474a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-.287a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0-.5.5v.287Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M11 2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v1.5l-2 7H2a1 1 0 0 0 0 2h1l.749 1.871a1 1 0 0 0 .928.629h6.646a1 1 0 0 0 .928-.629L13 12.5h1a.998.998 0 0 0 1-1 1 1 0 0 0-1-1h-1l-2-7V2Zm-6.757 8.5 2.021-7V2.303h3.454V3.5l2.021 7v2L11 13.842H5L4.243 12.5v-2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconDplayersOutlined16;
