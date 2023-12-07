import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconDocService24: FC<IIconsProps> = ({
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
        d="M6.02979 18.7019H18.2041C19.5225 18.7019 20.2842 17.9402 20.2842 16.4314V8.91089C20.2842 7.4021 19.5151 6.64771 17.9844 6.64771H11.0161C10.5181 6.64771 10.2251 6.52319 9.85889 6.21558L9.41211 5.84204C8.92871 5.43921 8.54785 5.30005 7.83008 5.30005H5.75146C4.46973 5.30005 3.72998 6.03247 3.72998 7.51196V16.4314C3.72998 17.9475 4.49902 18.7019 6.02979 18.7019ZM5.28418 7.86646C5.28418 7.14136 5.66504 6.77515 6.36816 6.77515H7.52246C8.01318 6.77515 8.30615 6.89233 8.67969 7.2146L9.12646 7.58081C9.60254 7.97632 9.99072 8.1228 10.7158 8.1228H17.6489C18.374 8.1228 18.7842 8.51099 18.7842 9.27271V9.71216V16.0051C18.7842 16.7595 18.374 17.1477 17.6489 17.1477H6.41943C5.68701 17.1477 5.28418 16.7595 5.28418 15.9978V9.71216V7.86646ZM16.5342 12.6477L6.78418 12.6477L6.78418 11.1477L16.5342 11.1477V12.6477ZM6.78418 15.6477L13.5342 15.6477V14.1477L6.78418 14.1477L6.78418 15.6477Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconDocService24;
