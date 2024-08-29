import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPersonFilled110: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="110"
      height="110"
      viewBox="0 0 110 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        fill={htmlColor || 'currentColor'}
        d="M55 6.875c-13.294 0-24.063 10.768-24.063 24.063C30.938 44.231 41.706 55 55 55c13.294 0 24.063-10.768 24.063-24.063C79.063 17.643 68.293 6.875 55 6.875Zm0 54.14c-16.062 0-48.125 8.062-48.125 24.063v18.047h96.25V85.078c0-16.001-32.063-24.062-48.125-24.062Z"
      />
    </svg>
  );
};

export default IconPersonFilled110;
