import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconAnalyticalUI32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M13.8014 23.4171C15.9299 23.4171 17.8927 22.7354 19.4987 21.5992L25.5401 27.5834C25.8205 27.8611 26.1901 28 26.5852 28C27.4137 28 28 27.3688 28 26.5608C28 26.182 27.8725 25.8285 27.5921 25.5508L21.589 19.5918C22.8508 17.9506 23.6028 15.9179 23.6028 13.7086C23.6028 8.36823 19.1928 4 13.8014 4C8.40998 4 4 8.36823 4 13.7086C4 19.0489 8.40998 23.4171 13.8014 23.4171ZM13.8014 21.3214C9.59533 21.3214 6.11577 17.8748 6.11577 13.7086C6.11577 9.54235 9.59533 6.09574 13.8014 6.09574C18.0074 6.09574 21.487 9.54235 21.487 13.7086C21.487 17.8748 18.0074 21.3214 13.8014 21.3214Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconAnalyticalUI32;
