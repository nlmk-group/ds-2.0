import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconKeyboardDoubleArrowRight24: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
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
        d="M12 6.49199L17.496 12L12 17.508L13.692 19.2L20.892 12L13.692 4.79999L12 6.49199Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M3.6001 6.49199L9.0961 12L3.6001 17.508L5.2921 19.2L12.4921 12L5.2921 4.79999L3.6001 6.49199Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconKeyboardDoubleArrowRight24;
