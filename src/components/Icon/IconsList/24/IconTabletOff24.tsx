import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconTabletOff24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M5 3.81818V20.1818C5 21.1818 5.7875 22 6.75 22H17.25C18.2125 22 19 21.1818 19 20.1818V3.81818C19 2.81818 18.2125 2.00909 17.25 2.00909L6.75 2C5.7875 2 5 2.81818 5 3.81818ZM17.25 5.63636V18.3636H6.75V5.63636H17.25Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M17 8.0071L15.9929 7L12 10.9929L8.0071 7L7 8.0071L10.9929 12L7 15.9929L8.0071 17L12 13.0071L15.9929 17L17 15.9929L13.0071 12L17 8.0071Z"
        fill="#F38585"
      />
    </svg>
  );
};

export default IconTabletOff24;
