import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFunctionOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M13.333 24v-2.667H15.4l3.5-4-3.5-4h-2.2L11.067 24.8c-.178 1-.59 1.783-1.234 2.35-.644.567-1.466.85-2.466.85-1 0-1.811-.267-2.434-.8C4.311 26.667 4 25.956 4 25.067c0-.711.189-1.284.567-1.717A1.82 1.82 0 0 1 6 22.7c.556 0 1.028.189 1.417.567.389.377.583.833.583 1.366 0 .111-.006.211-.017.3a4.2 4.2 0 0 1-.05.3.47.47 0 0 0 .284-.183c.077-.1.139-.239.183-.417l2.067-11.3h-3.8v-2.666h4.3l.7-3.8a3.313 3.313 0 0 1 1.25-2.067c.677-.533 1.483-.8 2.416-.8.978 0 1.778.289 2.4.867.623.577.934 1.3.934 2.166 0 .667-.19 1.217-.567 1.65a1.82 1.82 0 0 1-1.433.65 1.958 1.958 0 0 1-1.417-.566 1.874 1.874 0 0 1-.583-1.4c0-.111.005-.211.016-.3.011-.09.028-.19.05-.3a.598.598 0 0 0-.3.2 1.137 1.137 0 0 0-.166.4l-.567 3.3H20v2.666h-1.067l1.734 1.967 1.733-1.967h-1.067v-2.666H28v2.666h-2.067l-3.5 4 3.5 4H28V24h-6.667v-2.667H22.4l-1.733-2-1.734 2H20V24h-6.667Z"
      />
    </svg>
  );
};

export default IconFunctionOutlined32;
