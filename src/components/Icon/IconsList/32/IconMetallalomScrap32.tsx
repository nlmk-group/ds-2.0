import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconMetallalomScrap32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M15.1499 5.8499H12V4.1499H20V5.8499H16.8499V10.1543L22.352 10.1579L28.2026 15.9992L23.6012 20.6009L22.399 19.3989L25.7975 16.0002L21.6482 11.8575L10.3517 11.8501L6.19795 15.9999L9.59018 19.3922L8.3881 20.5943L3.79321 15.9994L9.64848 10.1497L15.1499 10.1532V5.8499Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.0006 27.8321L2.00059 27.8499L1.99951 26.1499L5.65021 26.1476L13.6479 18.1499H18.352L26.3366 26.1344L29.9995 26.1321L30.0006 27.8321ZM23.9339 26.1359L8.0559 26.146L14.352 19.8499H17.6479L23.9339 26.1359Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMetallalomScrap32;
