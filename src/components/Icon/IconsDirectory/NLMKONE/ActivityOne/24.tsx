import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconActivityOne24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M4.084 1v4.635c1.87-2.563 5.044-3.8 8.1-3.8 4.058 0 8.326 2.182 9.47 6.758l-1.94.485c-.857-3.424-4.09-5.243-7.53-5.243-2.692 0-5.256 1.113-6.655 3.236h4.626v2h-5.5l-.001.007-.027-.007H2.084V1h2Zm15.57 21.078v-4.635c-1.87 2.563-5.044 3.8-8.1 3.8-4.058 0-8.326-2.182-9.47-6.758L4.024 14c.856 3.424 4.089 5.242 7.53 5.242 2.692 0 5.256-1.112 6.655-3.235h-4.626v-2h5.5l.001-.007.027.007h2.543v8.071h-2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconActivityOne24;
