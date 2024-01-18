import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconWhatShotFire24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.24 5.95077C14.24 3.73324 13.5 1 13.5 1C17.41 4.22832 20 9.1894 20 14.7487C20 19.3075 16.42 23 12 23C7.58 23 4 19.3075 4 14.7487C4 11.2625 5.21 8.05485 7.23 5.57947L7.2 5.95077C7.2 8.07548 8.76 9.79794 10.83 9.79794C12.89 9.79794 14.24 8.07548 14.24 5.95077ZM9.40002 16.368C9.40002 15.0788 10.21 14.1711 11.57 13.8823C12.94 13.5935 14.35 12.9231 15.14 11.8195C15.45 12.8509 15.6 13.9339 15.6 15.0375C15.6 17.1519 13.94 18.864 11.89 18.864C10.51 18.864 9.40002 17.7501 9.40002 16.368Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconWhatShotFire24;
