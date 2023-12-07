import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconMoreVert24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
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
        d="M12 7.99988C13.1 7.99988 14 7.09988 14 5.99988C14 4.89988 13.1 3.99988 12 3.99988C10.9 3.99988 10 4.89988 10 5.99988C10 7.09988 10.9 7.99988 12 7.99988ZM12 9.99988C10.9 9.99988 10 10.8999 10 11.9999C10 13.0999 10.9 13.9999 12 13.9999C13.1 13.9999 14 13.0999 14 11.9999C14 10.8999 13.1 9.99988 12 9.99988ZM10 18C10 16.9 10.9 16 12 16C13.1 16 14 16.9 14 18C14 19.1 13.1 20 12 20C10.9 20 10 19.1 10 18Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMoreVert24;
