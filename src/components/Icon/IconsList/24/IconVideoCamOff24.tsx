import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconVideoCamOff24: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.98993 8.56993L7.98993 6.56993L3.83993 2.42993L2.42993 3.83993L5.15993 6.56993H4.42993C3.87993 6.56993 3.42993 7.01993 3.42993 7.56993V17.5699C3.42993 18.1199 3.87993 18.5699 4.42993 18.5699H16.4299C16.6399 18.5699 16.8199 18.4899 16.9799 18.3899L20.1599 21.5699L21.5699 20.1599L12.7099 11.2999L9.98993 8.56993ZM5.42993 16.5699V8.56993H7.15993L15.1599 16.5699H5.42993ZM15.4299 11.1799V8.56993H12.8199L10.8199 6.56993H16.4299C16.9799 6.56993 17.4299 7.01993 17.4299 7.56993V11.0699L21.4299 7.06993V17.1799L15.4299 11.1799Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconVideoCamOff24;
