import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconZakazKopijKorporativnyhDokumentov24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M13.434 1.6a3 3 0 0 0-3.476 2.434l-1.736 9.848a3 3 0 0 0 2.433 3.476l5.91 1.042a3 3 0 0 0 3.475-2.434l1.736-9.848a3 3 0 0 0-2.433-3.475L13.433 1.6Zm-1.506 2.782a1 1 0 0 1 1.158-.812l5.91 1.042a1 1 0 0 1 .81 1.159l-1.736 9.848a1 1 0 0 1-1.159.811l-5.908-1.042a1 1 0 0 1-.812-1.158l1.737-9.848Zm5.512 4.04-4.32-.762.347-1.97 4.32.762-.347 1.97Zm-4.844 2.193 4.32.762.348-1.97-4.32-.762-.348 1.97Zm-7.8-4.344L8.15 5.68l-.37 2.096-2.637.465a1 1 0 0 0-.81 1.158l1.736 9.848a1 1 0 0 0 1.158.811l5.057-.891 3.267.576a2.743 2.743 0 0 1-1.822 1.2l-6.155 1.085A3 3 0 0 1 4.1 19.595l-1.738-9.85A3 3 0 0 1 4.796 6.27Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconZakazKopijKorporativnyhDokumentov24;
