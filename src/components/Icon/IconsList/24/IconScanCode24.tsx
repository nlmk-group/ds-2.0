import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconScanCode24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M4 6H6V18H4V6ZM7 6H8V18H7V6ZM9 6H12V18H9V6ZM13 6H14V18H13V6ZM16 6H18V18H16V6ZM19 6H20V18H19V6ZM2 4V8H0V4C0 3.46957 0.21071 2.96086 0.58579 2.58579C0.96086 2.21071 1.46957 2 2 2H6V4H2ZM22 2C22.5304 2 23.0391 2.21071 23.4142 2.58579C23.7893 2.96086 24 3.46957 24 4V8H22V4H18V2H22ZM2 16V20H6V22H2C1.46957 22 0.96086 21.7893 0.58579 21.4142C0.21071 21.0391 0 20.5304 0 20V16H2ZM22 20V16H24V20C24 20.5304 23.7893 21.0391 23.4142 21.4142C23.0391 21.7893 22.5304 22 22 22H18V20H22Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconScanCode24;
