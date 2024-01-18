import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconFilterNotEqualSign24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.0002 20.0754L19.0756 2.99997L20.727 4.65133L17.1455 8.23281H22V10.5682H14.8101L10.6063 14.772H22V17.1074H8.27097L3.65156 21.7268L2.0002 20.0754ZM6.60323 14.772H3.31699V17.1074H4.26785L6.60323 14.772ZM3.31699 8.23281H13.1424L10.807 10.5682H3.31699V8.23281Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFilterNotEqualSign24;
