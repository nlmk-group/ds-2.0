import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconGraphChartTimeline16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M15.667 5.333c0 .734-.6 1.334-1.334 1.334-.12 0-.233-.014-.34-.047L11.62 8.987a1.337 1.337 0 0 1-1.287 1.68 1.337 1.337 0 0 1-1.286-1.68l-1.7-1.7A1.178 1.178 0 0 1 7 7.333c-.12 0-.24-.013-.347-.046l-3.033 3.04c.033.106.047.22.047.34 0 .733-.6 1.333-1.334 1.333C1.6 12 1 11.4 1 10.667c0-.734.6-1.334 1.333-1.334.12 0 .234.014.34.047l3.04-3.033A1.337 1.337 0 0 1 7 4.667a1.337 1.337 0 0 1 1.287 1.68l1.7 1.7c.106-.034.226-.047.346-.047.12 0 .24.013.347.047l2.367-2.374a1.13 1.13 0 0 1-.047-.34C13 4.6 13.6 4 14.333 4c.734 0 1.334.6 1.334 1.333Z"
      />
    </svg>
  );
};

export default IconGraphChartTimeline16;
