import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconWeightTypeFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        stroke={htmlColor || 'currentColor'}
        strokeWidth="1.7"
        d="M7.5 3h9a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1h-1a1 1 0 0 0-1 1v.882a1 1 0 0 0 .553.894l2.894 1.448a1 1 0 0 1 .553.894V20a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-8.382a1 1 0 0 1 .553-.894l2.894-1.448a1 1 0 0 0 .553-.894V7.5a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
      />
    </svg>
  );
};

export default IconWeightTypeFilled24;
