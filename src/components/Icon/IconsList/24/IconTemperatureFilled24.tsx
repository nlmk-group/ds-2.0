import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconTemperatureFilled24: FC<IIconsProps> = ({
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
        d="M9.34058 13.446V5.32495C9.34058 4.62876 9.61714 3.96108 10.1094 3.4688C10.6017 2.97651 11.2694 2.69995 11.9656 2.69995C12.6618 2.69995 13.3294 2.97651 13.8217 3.4688C14.314 3.96108 14.5906 4.62876 14.5906 5.32495V13.446C15.2907 13.9926 15.8027 14.7442 16.0552 15.5957C16.3077 16.4473 16.2881 17.3565 15.999 18.1964C15.71 19.0363 15.166 19.765 14.4429 20.2808C13.7199 20.7967 12.8538 21.074 11.9656 21.074C11.0774 21.074 10.2113 20.7967 9.48821 20.2808C8.76514 19.765 8.22114 19.0363 7.93211 18.1964C7.64307 17.3565 7.62344 16.4473 7.87593 15.5957C8.12842 14.7442 8.64045 13.9926 9.34058 13.446Z"
        stroke={htmlColor || 'currentColor'}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9656 18.45C12.8717 18.45 13.6062 17.7154 13.6062 16.8093C13.6062 15.9032 12.8717 15.1687 11.9656 15.1687C11.0595 15.1687 10.325 15.9032 10.325 16.8093C10.325 17.7154 11.0595 18.45 11.9656 18.45Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M11.9656 15.1687C11.0595 15.1687 10.325 15.9032 10.325 16.8093C10.325 17.7154 11.0595 18.45 11.9656 18.45C12.8717 18.45 13.6062 17.7154 13.6062 16.8093C13.6062 15.9032 12.8717 15.1687 11.9656 15.1687ZM11.9656 15.1687V8.6062"
        stroke={htmlColor || 'currentColor'}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconTemperatureFilled24;
