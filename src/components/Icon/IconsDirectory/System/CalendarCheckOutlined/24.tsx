import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCalendarCheckOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M9.3 4.8V3H7.5v1.8H3.9a.9.9 0 0 0-.9.9v14.4a.9.9 0 0 0 .9.9h16.2a.9.9 0 0 0 .9-.9V5.7a.9.9 0 0 0-.9-.9h-3.6V3h-1.8v1.8H9.3Zm-4.5 6.3h14.4v8.1H4.8v-8.1Zm9.932 1.022-3.181 3.183-1.91-1.91-1.274 1.273 3.183 3.182 4.455-4.455-1.272-1.272ZM4.8 6.6h2.7v.9h1.8v-.9h5.4v.9h1.8v-.9h2.7v2.7H4.8V6.6Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCalendarCheckOutlined24;
