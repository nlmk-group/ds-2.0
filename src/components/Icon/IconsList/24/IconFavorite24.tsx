import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconFavorite24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.1075 9.84L19.5 10.305L15.4125 13.8525L16.635 19.125L12 16.3275L7.365 19.125L8.595 13.8525L4.5 10.305L9.8925 9.8475L12 4.875L14.1075 9.84ZM9.18 16.6275L12 14.925L14.8275 16.635L14.0775 13.425L16.5675 11.265L13.2825 10.98L12 7.95L10.725 10.9725L7.44 11.2575L9.93 13.4175L9.18 16.6275Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFavorite24;
