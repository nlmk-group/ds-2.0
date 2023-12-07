import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconScales24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.0771 22H6.07715V20H18.0771V22Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.0771 20.3745V4H13.0771V20.3745H11.0771Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.0773 9H3.07732V7H21.0773V9Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M9.07715 14.5H3.07715L5.57735 17.0004L7.07735 16.5004L9.07715 14.5Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M21.0771 14.5H15.0771L17.5774 17.0004L19.0774 16.5004L21.0771 14.5Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.19918 7.52116L6.95497 7.52114L10.0771 13.245V13.5C10.0771 16.4438 8.22198 18.2333 6.07715 18.2333C3.93232 18.2333 2.07715 16.4438 2.07715 13.5V13.245L5.19918 7.52116ZM6.0771 10.0883L4.08287 13.7445C4.17093 15.5903 5.25719 16.2333 6.07715 16.2333C6.89711 16.2333 7.98336 15.5903 8.07143 13.7445L6.0771 10.0883Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.1992 7.52116L18.955 7.52114L22.0771 13.245V13.5C22.0771 16.4438 20.222 18.2333 18.0771 18.2333C15.9323 18.2333 14.0771 16.4438 14.0771 13.5V13.245L17.1992 7.52116ZM18.0771 10.0883L16.0829 13.7445C16.1709 15.5903 17.2572 16.2333 18.0771 16.2333C18.8971 16.2333 19.9834 15.5903 20.0714 13.7445L18.0771 10.0883Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M14.0771 4C14.0771 5.10457 13.1817 6 12.0771 6C10.9726 6 10.0771 5.10457 10.0771 4C10.0771 2.89543 10.9726 2 12.0771 2C13.1817 2 14.0771 2.89543 14.0771 4Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconScales24;
