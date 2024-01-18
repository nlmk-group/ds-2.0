import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconTask24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M20.625 6.11775L10.7839 15.9675L7.12687 12.3105L8.343 11.0944L10.7839 13.5353L19.4089 4.91025L20.625 6.11775ZM18.7189 10.4648C18.831 10.9564 18.9 11.4739 18.9 12C18.9 15.8123 15.8123 18.9 12 18.9C8.18775 18.9 5.1 15.8123 5.1 12C5.1 8.18775 8.18775 5.1 12 5.1C13.3628 5.1 14.622 5.49675 15.6915 6.17813L16.9335 4.93613C15.5362 3.95288 13.8371 3.375 12 3.375C7.239 3.375 3.375 7.239 3.375 12C3.375 16.761 7.239 20.625 12 20.625C16.761 20.625 20.625 16.761 20.625 12C20.625 10.9736 20.4352 9.99037 20.1075 9.07612L18.7189 10.4648Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconTask24;
