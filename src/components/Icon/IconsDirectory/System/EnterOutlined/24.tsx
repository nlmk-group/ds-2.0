import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconEnterOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={htmlColor || 'currentColor'}
        d="M10.002 3h8.002a2 2 0 0 1 2 2v14.02c0 1.1-.9 1.98-2 1.98h-8.002c-1.1 0-2-.88-2-1.98v-4.017h2v4.026h8.002V4.981h-8.002v4.016h-2V5c0-1.1.9-2.001 2-2.001Zm6.001 9.002-4 4.007v-3.006H4v-2h8.002V7.995l4.001 4.006Z"
      />
    </svg>
  );
};

export default IconEnterOutlined24;
