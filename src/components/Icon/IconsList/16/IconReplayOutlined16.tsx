import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconReplayOutlined16: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M4.1 4.5L7.6 8V5.2C9.917 5.2 11.8 7.083 11.8 9.4C11.8 11.717 9.917 13.6 7.6 13.6C5.283 13.6 3.4 11.717 3.4 9.4H2C2 12.494 4.506 15 7.6 15C10.694 15 13.2 12.494 13.2 9.4C13.2 6.306 10.694 3.8 7.6 3.8V1L4.1 4.5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconReplayOutlined16;
