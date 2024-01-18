import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconWhatShotFireOutline24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 1C13.5 1 14.24 3.73324 14.24 5.95077C14.24 8.07548 12.89 9.79794 10.83 9.79794C8.76 9.79794 7.2 8.07548 7.2 5.95077L7.23 5.57947C5.21 8.05485 4 11.2625 4 14.7487C4 19.3075 7.58 23 12 23C16.42 23 20 19.3075 20 14.7487C20 9.1894 17.41 4.22832 13.5 1ZM11.57 13.8823C10.21 14.1711 9.40002 15.0788 9.40002 16.368C9.40002 17.7501 10.51 18.864 11.89 18.864C13.94 18.864 15.6 17.1519 15.6 15.0375C15.6 13.9339 15.45 12.8509 15.14 11.8195C14.35 12.9231 12.94 13.5935 11.57 13.8823ZM6 14.7487C6 18.1627 8.69 20.9372 12 20.9372C15.31 20.9372 18 18.1627 18 14.7487C18 12.1083 17.34 9.56069 16.11 7.29158C15.58 9.97325 13.49 11.8607 10.83 11.8607C9.27 11.8607 7.87 11.2213 6.86 10.1795C6.3 11.6132 6 13.1706 6 14.7487Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconWhatShotFireOutline24;
