import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDirectionsTransitTrainTransportFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M17.2 20L19 21.5V22H5V21.5L6.8 20H5C3.9 20 3 19.119 3 17.348V7C3 5.343 4.1 4 6 4H18C19.9 4 21 5.343 21 7V17.348C21 19.119 20.1 20 19 20H17.2ZM5 7V11H19V7H5ZM12 17C13.1 17 14 16.1 14 15C14 13.9 13.1 13 12 13C10.9 13 10 13.9 10 15C10 16.1 10.9 17 12 17Z"
      />
    </svg>
  );
};

export default IconDirectionsTransitTrainTransportFilled24;
