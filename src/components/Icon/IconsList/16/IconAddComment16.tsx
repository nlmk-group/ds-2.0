import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconAddComment16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M7.50009 9.33296H8.49984V7.16684H10.666V6.16709H8.49984V4.00096H7.50009V6.16709H5.33396V7.16684H7.50009V9.33296ZM1.33496 14.665V2.33471C1.33496 2.07922 1.43494 1.84872 1.63489 1.64322C1.83484 1.43771 2.06811 1.33496 2.33471 1.33496H13.6652C13.9207 1.33496 14.1512 1.43771 14.3567 1.64322C14.5622 1.84872 14.665 2.07922 14.665 2.33471V10.9992C14.665 11.2547 14.5622 11.4852 14.3567 11.6907C14.1512 11.8962 13.9207 11.999 13.6652 11.999H4.00096L1.33496 14.665ZM2.33471 12.2489L3.5844 10.9992H13.6652V2.33471H2.33471V12.2489ZM2.33471 2.33471V12.2489V2.33471Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconAddComment16;
