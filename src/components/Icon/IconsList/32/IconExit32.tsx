import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconExit32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M20.8649 3C23.7009 3 26 5.35289 26 8.25532V23.7447C26 26.6471 23.7009 29 20.8649 29H12.2162C9.38016 29 7.08108 26.6471 7.08108 23.7447V21.409C7.08108 20.9507 7.44409 20.5792 7.89189 20.5792C8.33969 20.5792 8.7027 20.9507 8.7027 21.409V23.7447C8.7027 25.7306 10.2758 27.3404 12.2162 27.3404H20.8649C22.8053 27.3404 24.3784 25.7306 24.3784 23.7447V8.25532C24.3784 6.26944 22.8053 4.65957 20.8649 4.65957H12.2162C10.2758 4.65957 8.7027 6.26944 8.7027 8.25532V10.591C8.7027 11.0493 8.33969 11.4208 7.89189 11.4208C7.44409 11.4208 7.08108 11.0493 7.08108 10.591V8.25532C7.08108 5.35289 9.38016 3 12.2162 3H20.8649Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M14.9517 10.9877C14.6351 10.6637 14.1217 10.6637 13.805 10.9877C13.4884 11.3118 13.4884 11.8372 13.805 12.1612L16.7452 15.1702H6.81081C6.36301 15.1702 6 15.5417 6 16C6 16.4583 6.36301 16.8298 6.81081 16.8298H16.7452L13.805 19.8388C13.4884 20.1628 13.4884 20.6882 13.805 21.0123C14.1217 21.3363 14.6351 21.3363 14.9517 21.0123L19.276 16.5867C19.5927 16.2627 19.5927 15.7373 19.276 15.4133L14.9517 10.9877Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconExit32;