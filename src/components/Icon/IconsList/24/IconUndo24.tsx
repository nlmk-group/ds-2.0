import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconUndo24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
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
        d="M12.2649 8.5C9.61489 8.5 7.21489 9.49 5.36489 11.1L1.76489 7.5V16.5H10.7649L7.14489 12.88C8.53489 11.72 10.3049 11 12.2649 11C15.8049 11 18.8149 13.31 19.8649 16.5L22.2349 15.72C20.8449 11.53 16.9149 8.5 12.2649 8.5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconUndo24;
