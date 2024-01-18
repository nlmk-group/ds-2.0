import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconMap24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M20.1458 3.375L19.9925 3.40375L14.875 5.3875L9.2277 3.375L3.72 5.19584C3.51875 5.26292 3.375 5.43542 3.375 5.65583V20.1458C3.375 20.4142 3.58583 20.625 3.85417 20.625L4.0075 20.5963L9.2277 18.6125L14.875 20.625L20.28 18.8042C20.4812 18.7371 20.625 18.5646 20.625 18.3442V3.85417C20.625 3.58583 20.4142 3.375 20.1458 3.375ZM10.0833 5.19584L14.1562 6.66705V18.6125L10.0833 17.2366V5.19584ZM4.91518 6.45535L8.61157 5.19584V17.2366L4.91518 18.6125V6.45535ZM19.0848 17.5447L15.6965 18.6125V6.7634L19.0848 5.53125V17.5447Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMap24;
