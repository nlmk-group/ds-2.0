import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconMetalTrackingSystem24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.75 6.75C3.75 6.33579 4.08579 6 4.5 6H9C9.41421 6 9.75 6.33579 9.75 6.75C9.75 7.16421 9.41421 7.5 9 7.5H4.5C4.08579 7.5 3.75 7.16421 3.75 6.75Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.375 6L19.5 6C19.9142 6 20.25 6.33579 20.25 6.75C20.25 7.16421 19.9142 7.5 19.5 7.5L12.375 7.5V6Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.25 15.9391V6.75H6.75V15.9391C6.75 17.6157 7.82929 18.75 8.925 18.75H15.075C16.18 18.75 17.25 17.6817 17.25 15.9391V6.75H18.75V15.9391C18.75 18.2218 17.27 20.25 15.075 20.25H8.925C6.72071 20.25 5.25 18.133 5.25 15.9391Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0006 1.5C12.4149 1.5 12.7506 1.83579 12.7506 2.25V8.95217C14.0215 9.29888 15.0006 10.4943 15.0006 11.8512C15.0006 13.4321 13.7224 14.8512 12.0756 14.8512C10.9209 14.8512 9.875 14.1341 9.42062 13.1173L8.63689 12.4068L9.64436 11.2955L10.5544 12.1205C10.6448 12.2025 10.7138 12.3052 10.7555 12.4199C10.9505 12.9562 11.4992 13.3512 12.0756 13.3512C12.8289 13.3512 13.5006 12.6702 13.5006 11.8512C13.5006 11.0654 12.7864 10.3512 12.0006 10.3512C11.5864 10.3512 11.2506 10.0154 11.2506 9.60117V2.25C11.2506 1.83579 11.5864 1.5 12.0006 1.5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMetalTrackingSystem24;
