import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCompetenceDevelopment24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M19.917 3.036a1 1 0 0 1 1.203.612l1.881 5-1.871.704-1.087-2.888c-3.94 7.259-9.747 13.555-17.802 14.529L2 19.007c7.077-.856 12.438-6.434 16.25-13.434l-3.216.89-.534-1.927 5.416-1.5Zm-6.493 5.98L13.143 8H8.004v2h4.652c.26-.319.516-.647.768-.984ZM7 5h5.313l-.553-2H7a3 3 0 0 0-3 3v10.294c.683-.208 1.35-.47 2-.783V6a1 1 0 0 1 1-1Zm9 15h-4.736a21.44 21.44 0 0 1-3.876 2H16a3 3 0 0 0 3-3v-6.602a36.29 36.29 0 0 1-2 2.527V19a1 1 0 0 1-1 1Zm-6.232-7a22.85 22.85 0 0 0 2.031-2H8.004v2h1.764Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconCompetenceDevelopment24;
