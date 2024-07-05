import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconModelling16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M11.584.4a.6.6 0 0 0-.322.094L7.627 2.807a.6.6 0 0 0-.278.507v2.644a.6.6 0 0 0 .96.48l6.61-4.958a.6.6 0 0 0-.36-1.08h-2.975ZM8.55 3.643 11.76 1.6h1L8.55 4.758V3.643Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M5.068 5.554a.6.6 0 0 0-.542-.137L1.86 6.06a.6.6 0 1 0 .282 1.166l2.36-.569L7.6 9.446a.6.6 0 0 0 .802 0L11.5 6.657l2.36.57a.6.6 0 1 0 .28-1.167l-2.666-.643a.6.6 0 0 0-.542.137L8 8.193 5.068 5.554Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M4.526 8.417a.6.6 0 0 1 .542.137L8 11.193l2.932-2.639a.6.6 0 0 1 .542-.137l2.667.643a.6.6 0 0 1-.282 1.166l-2.36-.569-3.098 2.789a.6.6 0 0 1-.802 0L4.5 9.657l-2.36.57a.6.6 0 0 1-.28-1.167l2.666-.643Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M5.068 11.554a.6.6 0 0 0-.542-.137l-2.667.643a.6.6 0 1 0 .282 1.166l2.36-.569 3.098 2.789a.6.6 0 0 0 .802 0l3.099-2.789 2.36.57a.6.6 0 0 0 .28-1.167l-2.666-.643a.6.6 0 0 0-.542.137L8 14.193l-2.932-2.639Z"
      />
    </svg>
  );
};

export default IconModelling16;
