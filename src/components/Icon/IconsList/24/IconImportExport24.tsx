import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconImportExport24: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 7.49L9 3.5L13 7.49H10V14.5H8V7.49H5ZM16.0002 10.5V17.51H19.0002L15.0002 21.5L11.0002 17.51H14.0002V10.5H16.0002Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconImportExport24;
