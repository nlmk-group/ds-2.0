import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconMixer24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M19.1471 4.93L17.7371 6.34C19.1771 7.79 20.0771 9.79 20.0771 12C20.0771 16.42 16.4971 20 12.0771 20C7.65715 20 4.07715 16.42 4.07715 12C4.07715 7.92 7.12715 4.56 11.0771 4.07V6.09C8.23715 6.57 6.07715 9.03 6.07715 12C6.07715 15.31 8.76715 18 12.0771 18C15.3871 18 18.0771 15.31 18.0771 12C18.0771 10.34 17.4071 8.84 16.3171 7.76L14.9071 9.17C15.6271 9.9 16.0771 10.9 16.0771 12C16.0771 14.21 14.2871 16 12.0771 16C9.86715 16 8.07715 14.21 8.07715 12C8.07715 10.14 9.35715 8.59 11.0771 8.14V10.28C10.4771 10.63 10.0771 11.26 10.0771 12C10.0771 13.1 10.9771 14 12.0771 14C13.1771 14 14.0771 13.1 14.0771 12C14.0771 11.26 13.6771 10.62 13.0771 10.28V2H12.0771C6.55715 2 2.07715 6.48 2.07715 12C2.07715 17.52 6.55715 22 12.0771 22C17.5971 22 22.0771 17.52 22.0771 12C22.0771 9.24 20.9571 6.74 19.1471 4.93Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMixer24;
