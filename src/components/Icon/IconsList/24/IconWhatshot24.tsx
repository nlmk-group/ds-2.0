import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconWhatshot24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 1.33502C13.5 1.33502 14.24 3.98502 14.24 6.13502C14.24 8.19502 12.89 9.86502 10.83 9.86502C8.76 9.86502 7.2 8.19502 7.2 6.13502L7.23 5.77502C5.21 8.17502 4 11.285 4 14.665C4 19.085 7.58 22.665 12 22.665C16.42 22.665 20 19.085 20 14.665C20 9.27502 17.41 4.46502 13.5 1.33502ZM11.57 13.825C10.21 14.105 9.4 14.985 9.4 16.235C9.4 17.575 10.51 18.655 11.89 18.655C13.94 18.655 15.6 16.995 15.6 14.945C15.6 13.875 15.45 12.825 15.14 11.825C14.35 12.895 12.94 13.545 11.57 13.825ZM6 14.665C6 17.975 8.69 20.665 12 20.665C15.31 20.665 18 17.975 18 14.665C18 12.105 17.34 9.63502 16.11 7.43502C15.58 10.035 13.49 11.865 10.83 11.865C9.27 11.865 7.87 11.245 6.86 10.235C6.3 11.625 6 13.135 6 14.665Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconWhatshot24;
