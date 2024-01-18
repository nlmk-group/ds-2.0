import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconTemperatureFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M12.4541 17.9282V7.1001C12.4541 6.17184 12.8229 5.2816 13.4792 4.62522C14.1356 3.96885 15.0258 3.6001 15.9541 3.6001C16.8824 3.6001 17.7726 3.96885 18.429 4.62522C19.0854 5.2816 19.4541 6.17184 19.4541 7.1001V17.9282C20.3876 18.657 21.0703 19.659 21.407 20.7945C21.7436 21.9299 21.7174 23.1421 21.3321 24.262C20.9467 25.3818 20.2214 26.3534 19.2573 27.0413C18.2932 27.7291 17.1384 28.0988 15.9541 28.0988C14.7698 28.0988 13.615 27.7291 12.6509 27.0413C11.6869 26.3534 10.9615 25.3818 10.5761 24.262C10.1908 23.1421 10.1646 21.9299 10.5012 20.7945C10.8379 19.659 11.5206 18.657 12.4541 17.9282Z"
        stroke={htmlColor || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.9541 24.6001C17.1622 24.6001 18.1416 23.6207 18.1416 22.4126C18.1416 21.2045 17.1622 20.2251 15.9541 20.2251C14.746 20.2251 13.7666 21.2045 13.7666 22.4126C13.7666 23.6207 14.746 24.6001 15.9541 24.6001Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M15.9541 20.2251C14.746 20.2251 13.7666 21.2045 13.7666 22.4126C13.7666 23.6207 14.746 24.6001 15.9541 24.6001C17.1622 24.6001 18.1416 23.6207 18.1416 22.4126C18.1416 21.2045 17.1622 20.2251 15.9541 20.2251ZM15.9541 20.2251V11.4751"
        stroke={htmlColor || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconTemperatureFilled32;
