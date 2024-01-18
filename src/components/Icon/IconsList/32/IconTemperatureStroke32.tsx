import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconTemperatureStroke32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M15.9541 20.2251C14.746 20.2251 13.7666 21.2045 13.7666 22.4126C13.7666 23.6207 14.746 24.6001 15.9541 24.6001C17.1622 24.6001 18.1416 23.6207 18.1416 22.4126C18.1416 21.2045 17.1622 20.2251 15.9541 20.2251ZM15.9541 20.2251L15.9542 11.4751M12.4542 17.9282V7.1001C12.4542 6.17184 12.823 5.2816 13.4794 4.62522C14.1357 3.96885 15.026 3.6001 15.9542 3.6001C16.8825 3.6001 17.7727 3.96885 18.4291 4.62522C19.0855 5.2816 19.4542 6.17184 19.4542 7.1001V17.9282C20.3877 18.657 21.0704 19.659 21.4071 20.7945C21.7437 21.9299 21.7176 23.1421 21.3322 24.262C20.9468 25.3818 20.2215 26.3534 19.2574 27.0413C18.2933 27.7291 17.1385 28.0988 15.9542 28.0988C14.7699 28.0988 13.6152 27.7291 12.6511 27.0413C11.687 26.3534 10.9616 25.3818 10.5763 24.262C10.1909 23.1421 10.1647 21.9299 10.5014 20.7945C10.838 19.659 11.5207 18.657 12.4542 17.9282Z"
        stroke={htmlColor || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconTemperatureStroke32;
