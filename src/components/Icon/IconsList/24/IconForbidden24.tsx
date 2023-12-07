import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconForbidden24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
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
        d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM4 12C4 7.6 7.6 4 12 4C13.8 4 15.5 4.6 16.9 5.7L5.7 16.9C4.6 15.5 4 13.8 4 12ZM7.09994 18.3003C8.49994 19.4003 10.1999 20.0003 11.9999 20.0003C16.3999 20.0003 19.9999 16.4003 19.9999 12.0003C19.9999 10.2003 19.3999 8.50026 18.2999 7.10026L7.09994 18.3003Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconForbidden24;
