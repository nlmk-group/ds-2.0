import React, { FC } from 'react';

import { IIconsProps } from '@components/Icon/types';
import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

export const IconFullscreenOpenOutlined24: FC<IIconsProps> = ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 9.42857H3V3H9.42857V5H5V9.42857ZM3 14.5714H5V19H9.42857V21H3V14.5714ZM19 19H14.5714V21H21V14.5714H19V19ZM14.5714 5V3H21V9.42857H19V5H14.5714Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFullscreenOpenOutlined24;
