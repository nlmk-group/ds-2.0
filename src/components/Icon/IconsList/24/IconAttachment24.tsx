import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconAttachment24: FC<IIconsProps> = ({
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
        d="M16 6L16 17.5C16 19.71 14.21 21.5 12 21.5C9.79 21.5 8 19.71 8 17.5L8 5C8 3.62 9.12 2.5 10.5 2.5C11.88 2.5 13 3.62 13 5L13 15.5C13 16.05 12.55 16.5 12 16.5C11.45 16.5 11 16.05 11 15.5L11 6H9.5L9.5 15.5C9.5 16.88 10.62 18 12 18C13.38 18 14.5 16.88 14.5 15.5L14.5 5C14.5 2.79 12.71 1 10.5 1C8.29 1 6.5 2.79 6.5 5L6.5 17.5C6.5 20.54 8.96 23 12 23C15.04 23 17.5 20.54 17.5 17.5L17.5 6H16Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconAttachment24;
