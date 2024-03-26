import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconWeightTypeOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        stroke={htmlColor || 'currentColor'}
        strokeWidth="2"
        d="M9.5 4h13a1 1 0 0 1 1 1v2.364a1 1 0 0 1-1 1h-2.286a1 1 0 0 0-1 1v1.745a1 1 0 0 0 .436.825l3.915 2.677a1 1 0 0 1 .435.826V27a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V15.437a1 1 0 0 1 .436-.826l3.914-2.677a1 1 0 0 0 .436-.825V9.364a1 1 0 0 0-1-1H9.5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z"
      />
    </svg>
  );
};

export default IconWeightTypeOutlined32;
